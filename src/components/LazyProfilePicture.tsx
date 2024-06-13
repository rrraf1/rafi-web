import React, { Suspense, useRef, useEffect, useState } from "react";
import gsap from "gsap";

const LazyImage = React.lazy(() => import("./ProfilePicture"));

type ProfileImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className }) => {
  const profileRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const profileElement = profileRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (profileElement) {
        const rect = profileElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const tiltX = (y / rect.height - 0.5) * 20;
        const tiltY = (x / rect.width - 0.5) * 20;

        gsap.to(profileElement, {
          rotationX: tiltX,
          rotationY: tiltY,
          transformPerspective: 500,
          ease: "power2.out",
          duration: 0.3,
        });
      }
    };

    if (profileElement) {
      profileElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (profileElement) {
        profileElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    });

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={profileRef} className={`noselect ${className}`}>
      <Suspense
        fallback={<div className="profile-image-loading">Loading...</div>}
      >
        {isInView && <LazyImage src={src} alt={alt} />}
      </Suspense>
    </div>
  );
};

export default ProfileImage;
