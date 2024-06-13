import { useRef, useEffect } from "react";
import gsap from 'gsap';

type ProfileImageProps = {
    src: string;
    alt: string;
    className?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className }) => {
    const profileRef = useRef<HTMLImageElement | null>(null);

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
                    duration: 0.3
                });
            }
        };

        if (profileElement) {
            profileElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (profileElement) {
                profileElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return <img src={src} alt={alt} className={`noselect ${className}`} ref={profileRef} />;
};

export default ProfileImage;
