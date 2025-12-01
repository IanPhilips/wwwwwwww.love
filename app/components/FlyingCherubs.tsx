'use client';

import { useEffect, useState } from 'react';

interface Cherub {
  id: number;
  image: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  size: number;
  rotation: number;
  delay: number;
  createdAt: number; // timestamp when cherub was created
}

const CHERUB_IMAGES = ['/c1.png', '/c2.png', '/c3.png', '/c4.png', '/c5.png', '/c6.png', '/c7.png'];

export default function FlyingCherubs() {
  const [cherubs, setCherubs] = useState<Cherub[]>([]);

  const createRandomCherub = (): Cherub => {
    const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    let startX: number, startY: number, endX: number, endY: number;

    // Determine start position based on side (VERY far off screen for giant cherubs)
    switch (side) {
      case 0: // top
        startX = Math.random() * 100;
        startY = -100;
        break;
      case 1: // right
        startX = 200;
        startY = Math.random() * 100;
        break;
      case 2: // bottom
        startX = Math.random() * 100;
        startY = 200;
        break;
      case 3: // left
      default:
        startX = -100;
        startY = Math.random() * 100;
        break;
    }

    // Determine end position (opposite or adjacent side, also VERY far off screen)
    const endSide = (side + 2 + Math.floor(Math.random() * 2)) % 4;
    switch (endSide) {
      case 0: // top
        endX = Math.random() * 100;
        endY = -100;
        break;
      case 1: // right
        endX = 200;
        endY = Math.random() * 100;
        break;
      case 2: // bottom
        endX = Math.random() * 100;
        endY = 200;
        break;
      case 3: // left
      default:
        endX = -100;
        endY = Math.random() * 100;
        break;
    }

    return {
      id: 0, // Will be overwritten when used
      image: Math.floor(Math.random() * CHERUB_IMAGES.length) + 1,
      startX,
      startY,
      endX,
      endY,
      duration: Math.random() * 10 + 12, // 12-22 seconds for smoother motion
      size: Math.random() * 1000 + 100, // 100-1100px
      rotation: Math.random() * 30 - 15, // -15 to 15 degrees
      delay: 0,
      createdAt: Date.now()
    };
  };

  useEffect(() => {
    // Create initial cherubs with staggered delays
    const now = Date.now();
    const initialCherubs: Cherub[] = [];
    for (let i = 0; i < 3; i++) {
      const cherub = createRandomCherub();
      cherub.id = i;
      cherub.delay = i * 3; // Stagger initial cherubs by 3 seconds each
      cherub.createdAt = now;
      initialCherubs.push(cherub);
    }
    setCherubs(initialCherubs);

    // Add new cherubs periodically
    const interval = setInterval(() => {
      setCherubs(prev => {
        const now = Date.now();
        
        // Remove cherubs that have completed their animation
        // Animation completes when: time since creation > delay + duration
        const active = prev.filter(c => {
          const timeSinceCreation = now - c.createdAt;
          const animationEndTime = (c.delay + c.duration) * 1000;
          return timeSinceCreation < animationEndTime;
        });
        
        // Add new cherub if we have less than 5
        if (active.length < 5) {
          const newCherub = createRandomCherub();
          newCherub.id = Date.now(); // Use timestamp as unique ID
          newCherub.createdAt = now;
          return [...active, newCherub];
        }
        return active;
      });
    }, 4000); // Add a new cherub every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 6 }}>
      {cherubs.map(cherub => (
        <div
          key={cherub.id}
          className="flying-cherub"
          style={{
            position: 'absolute',
            left: `${cherub.startX}vw`,
            top: `${cherub.startY}vh`,
            width: `${cherub.size}px`,
            height: `${cherub.size}px`,
            willChange: 'left, top',
            animationName: `fly-${cherub.id}`,
            animationDuration: `${cherub.duration}s`,
            animationTimingFunction: 'linear',
            animationDelay: `${cherub.delay}s`,
            animationFillMode: 'forwards',
            transform: `rotate(${cherub.rotation}deg)`,
          }}
        >
          <img
            src={CHERUB_IMAGES[cherub.image - 1]}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
          />
          <style jsx>{`
            @keyframes fly-${cherub.id} {
              0% {
                left: ${cherub.startX}vw;
                top: ${cherub.startY}vh;
              }
              100% {
                left: ${cherub.endX}vw;
                top: ${cherub.endY}vh;
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}

