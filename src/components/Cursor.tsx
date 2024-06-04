import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

/**
 * Komponen Cursor.tsx
 *
 * Komponen ini menampilkan animasi cursor tambahan yang mengikuti cursor asli.
 * Cursor tambahan tersebut berbentuk lingkaran dengan outer border saja yang berwarna hitam.
 * Cursor tersebut dapat membesar ketika hover pada komponen lain yang bisa dihover.
 */

// Styled Components untuk styling cursor tambahan
const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
`;

const CursorCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
`;
const Cursor: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorSize, setCursorSize] = useState(20);
    const navItemsRef = useRef<HTMLLIElement[]>([]);

    // Fungsi untuk mengupdate posisi cursor tambahan
    const handleMouseMove = (event: MouseEvent) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    // Fungsi untuk mengubah ukuran cursor tambahan saat hover
    const handleMouseEnter = () => {
        setCursorSize(50);
    };

    const handleMouseLeave = () => {
        setCursorSize(20);
    };

    // Menggunakan useEffect untuk menambahkan event listener pada document
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Menggunakan useEffect untuk menambahkan event listener pada elemen .nav__item
    useEffect(() => {
        const navItems = Array.from(document.querySelectorAll('.nav__item')) as HTMLLIElement[];
        navItemsRef.current = navItems;

        const handleMouseEnterItem: EventListener = () => {
            handleMouseEnter();
        };

        const handleMouseLeaveItem: EventListener = () => {
            handleMouseLeave();
        };

        navItems.forEach((item) => {
            item.addEventListener('mouseenter', handleMouseEnterItem);
            item.addEventListener('mouseleave', handleMouseLeaveItem);
        });

        return () => {
            navItems.forEach((item) => {
                item.removeEventListener('mouseenter', handleMouseEnterItem);
                item.removeEventListener('mouseleave', handleMouseLeaveItem);
            });
        };
    }, []);

    return (
        <CursorContainer>
            <CursorCircle
                style={{
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    width: cursorSize,
                    height: cursorSize,
                }}
            />
        </CursorContainer>
    );
};

export default Cursor;