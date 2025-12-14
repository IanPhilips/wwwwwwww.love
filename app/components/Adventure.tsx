'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { START_NODE_ID, STORY_NODES } from '../story-data';
import { GameState } from '../types';
import FlyingCherubs from './FlyingCherubs';

const LOCAL_STORAGE_KEY = 'adventure-game-state';

const CABIN_IMAGES = [
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-136-719f9f63.jpg', alt: 'Outside of the cabin' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-127-f1e29477.jpg', alt: 'Living room' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-131-a0e391b4.jpg', alt: 'Dining area and living room' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-128-9f9690cb.jpg', alt: 'Kitchen' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-133-56156f19.jpg', alt: 'Kitchen and kitchen bar area' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-126-7943f7d7.jpg', alt: 'Queen bedroom' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-132-d74d43c7.jpg', alt: 'Bedroom with two twin beds' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-129-5eb8fc9f.jpg', alt: 'Queen bedroom' },
  { src: 'https://aws-cdn.inntopia.com/inntopia-supplier/7817019/7817019-134-91e928d7.jpg', alt: 'Bedroom with two twin beds' },
];

export default function Adventure() {
  const [gameState, setGameState] = useState<GameState>({
    currentNodeId: START_NODE_ID,
    history: [],
    hasCompleted: false
  });
  
  const [isClient, setIsClient] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [introHiding, setIntroHiding] = useState(false);
  const storyContainerRef = useRef<HTMLDivElement>(null);

  // Load saved state from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        // Validate that the saved node still exists in the story
        if (STORY_NODES[parsed.currentNodeId]) {
          setGameState(parsed);
        } else {
          // Node doesn't exist (story changed), reset to start
          localStorage.removeItem(LOCAL_STORAGE_KEY);
        }
      } catch (e) {
        console.error('Failed to load saved game state', e);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameState));
    }
  }, [gameState, isClient]);

  const currentNode = STORY_NODES[gameState.currentNodeId];

  const handleChoice = (nextNodeId: string) => {
    const nextNode = STORY_NODES[nextNodeId];
    
    setGameState(prev => ({
      currentNodeId: nextNodeId,
      history: [...prev.history, prev.currentNodeId],
      hasCompleted: nextNode.isEnd ? true : prev.hasCompleted
    }));

    // Scroll story container to top
    storyContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (gameState.history.length > 0) {
      const newHistory = [...gameState.history];
      const previousNodeId = newHistory.pop()!;
      
      setGameState(prev => ({
        ...prev,
        currentNodeId: previousNodeId,
        history: newHistory
      }));
    }
  };

  const handleRestart = () => {
    setGameState({
      currentNodeId: START_NODE_ID,
      history: [],
      hasCompleted: gameState.hasCompleted // Keep completion status
    });
    // Reset intro state to show curtains again
    setShowIntro(true);
    setCurtainsOpen(false);
    setIntroHiding(false);
  };

  const handleSkipToEnd = () => {
    // Find the last ending in the history or default to the first ending
    const endingNodes = Object.values(STORY_NODES).filter(node => node.isEnd);
    if (endingNodes.length > 0) {
      setGameState(prev => ({
        currentNodeId: endingNodes[0].id,
        history: [],
        hasCompleted: true
      }));
    }
  };

  const handleStartStory = () => {
    setCurtainsOpen(true);
    // After curtains finish opening, fade out the overlay
    setTimeout(() => {
      setIntroHiding(true);
      // After fade out completes, remove the intro
      setTimeout(() => {
        setShowIntro(false);
      }, 1000);
    }, 2500);
  };

  if (!currentNode) {
    return (
      <div className="min-h-screen cloud-background flex items-center justify-center p-4">
        <div className="cloud-layer cloud-layer-1"></div>
        <div className="cloud-layer cloud-layer-2"></div>
        <div className="cloud-layer cloud-layer-3"></div>
        <div className="cloud-layer cloud-layer-4"></div>
        <div className="cloud-layer cloud-layer-5"></div>
        <FlyingCherubs />
        <div className="text-black text-xl relative z-10 bg-white rounded-2xl shadow-2xl p-8 border-2 border-black">Error: Story node not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen cloud-background flex items-center justify-center p-4">
      {/* Layered painted clouds */}
      <div className="cloud-layer cloud-layer-1"></div>
      <div className="cloud-layer cloud-layer-2"></div>
      <div className="cloud-layer cloud-layer-3"></div>
      <div className="cloud-layer cloud-layer-4"></div>
      <div className="cloud-layer cloud-layer-5"></div>
      
      {/* Flying cherubs */}
      <FlyingCherubs />
      {!showIntro && (
        <button
          onClick={handleRestart}
          className="text-sm z-20 absolute top-4 left-4"
        >
          ↻ Restart
        </button>
      )}
      <div className="max-w-4xl w-full relative z-10 ">
     
        {/* Header with controls */}
        <div className="mb-6 flex justify-between items-center relative z-10">
      
          
          {!showIntro && gameState.hasCompleted && !currentNode.isEnd && (
            <button
              onClick={handleSkipToEnd}
              className="cloud-button !min-w-[200px] text-sm mx-auto"
            >
              Skip to Ending
            </button>
          )}
        </div>

        {/* Main story card */}
        <div ref={storyContainerRef} className={`bg-white  ${showIntro ? 'p-0' : 'sm:p-2'} rounded-2xl shadow-2xl overflow-hidden sm:max-h-[100vh] ${showIntro ? '' : 'overflow-y-auto'} ${currentNode.isEnd ? '' : 'max-h-[50vh]'}`}>
          {/* Curtain Intro */}
          {showIntro ? (
            <div className={`curtain-intro-container w-full !min-h-[70vh] ${introHiding ? 'hiding' : ''}`}>
              {/* Left Curtain */}
              <Image
                src="/left-curtain.png"
                alt=""
                width={400}
                height={600}
                className={`h-[80%] sm:!h-[110%] -top-6   curtain-left ${curtainsOpen ? 'open' : ''}`}
                priority
              />
              
              {/* Right Curtain */}
              <Image
                src="/right-curtain.png"
                alt=""
                width={400}
                height={600}
                className={`h-[80%] sm:!h-[110%] -top-6  curtain-right ${curtainsOpen ? 'open' : ''}`}
                priority
              />
              
              {/* Content behind curtains */}
              <div className="w-full h-full flex flex-col mb-40 sm:mb-0 items-center justify-center text-center z-0">
                <h1 className="wedding-text text-2xl sm:text-3xl">a love story</h1>
                <p className="wedding-text text-lg sm:text-xl">by nicholas lee</p>
              </div>
            </div>
          ) : (
            <>
              {/* Story text */}
              <div className={`${currentNode.isEnd ? 'p-0' : 'p-4'}`}>
                {!currentNode.isEnd && (
                  <p className="wedding-text text-lg leading-relaxed whitespace-pre-line">
                    {currentNode.text}
                  </p>
                )}
              </div>

          {/* End of story - Wedding Info */}
          {currentNode.isEnd && (
            <div className="text-left ">
              {/* Main Title */}
             
              
              {/* Date & Location */}
              <div className="text-center">
              <Image 
                src="/header.jpg" 
                width={1250}
                height={850}
                alt="Header" 
                className="w-full mb-2"
              />
                
                {/* Scroll indicator */}
                <div className="flex flex-col items-center mb-4 ">
                  <span className="text-2xl text-black">↓</span>
                </div>

                <a 
                  href="https://wvstateparks.com/parks/blackwater-falls-state-park/lodging/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cloud-button my-2 !h-[100px] sm:!w-[400px]"
                >
                  Blackwater Falls State Park
                </a>
                <p className="wedding-text font-bold mb-2">August 20-23, 2026</p>
                <p className="wedding-text">
                  1584 Blackwater Lodge Rd<br />
                  Davis, West Virginia 26260
                </p>
              </div>

              <Image 
                src="/Blackwater_Falls.jpeg" 
                width={500}
                height={400}
                alt="Blackwater Falls" 
                className="w-full max-w-2xl vignette-fade mx-auto my-6 object-fill"
              />

<div className="p-6">
              {/* Schedule */}
              <h2 className="text-3xl font-sans font-bold italic wedding-heading mb-4">The Plan</h2>
              
              <div className="space-y-4 wedding-text">
                <div>
                  <p className="font-semibold wedding-heading">Thursday <span className="font-normal">4:00 P.M.</span></p>
                  <p className="italic">Cabin Check-In</p>
                </div>
                
                <div>
                  <p className="font-semibold wedding-heading">Friday Daytime</p>
                  <p className="italic">Hiking, Swimming</p>
                  <p className="font-semibold wedding-heading mt-2">Friday Evening ~ <span className="font-normal">6:00 P.M.</span></p>
                  <p className="italic">*Dinner & Group Talent Show*</p>
                  <p>
                    All talents, all levels! We will provide a variety of musical instruments.</p>
                  <p>Conference Center at Blackwater Falls Lodge</p>
                </div>
                
                <div>
                  <p className="font-semibold wedding-heading">Saturday Daytime</p>
                  <p className="italic">Brunch, Hiking, Swimming</p>
                  <p className="font-semibold wedding-heading mt-2">Saturday Evening ~ <span className="font-normal">5:00 P.M.</span></p>
                  <p className="italic">*Group Photo, Dinner, Roast & Toast, Dancing*</p>
                  <p>
                    Open floor for roasts & toasts!</p>
                  <p>Conference Center at Blackwater Falls Lodge</p>
                </div>
                
                <div>
                  <p className="font-semibold wedding-heading">Sunday <span className="font-normal">10:00 A.M.</span></p>
                  <p className="italic">Cabin Check-Out</p>
                </div>
              </div>


              {/* Lodging */}
              
              <div className="relative w-full max-w-xl mt-6 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image 
                  width={500}
                  height={400}
                  src="/cabin.png" 
                  alt="Haunted cabin at Blackwater Falls" 
                  className="w-full"
                />
                {/* White fade overlays on all edges */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: `
                    radial-gradient(ellipse 80% 70% at center, transparent 40%, rgba(255,255,255,0.8) 70%, white 85%),
                    linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%),
                    linear-gradient(to bottom, white 0%, transparent 15%, transparent 85%, white 100%)
                  `
                }} />
              </div>
              <h2 className="text-3xl font-sans font-bold italic wedding-heading mb-4">Lodging</h2>
              
              <div className="wedding-text text-left space-y-3">
                <p>
                  We have reserved enough rooms for everyone to stay in totally not haunted <button onClick={() => setShowCarousel(!showCarousel)} className="underline  hover:decoration-solid cursor-pointer font-semibold">Vacation Cabins</button> at Blackwater Falls. They&apos;re located close to each other so maximum ease of hanging is facilitated! Each couple will have their own room and some friends will share rooms (max 2 per room with separate beds). We have also reserved a few smaller, separate cabins for folks with babies.
                </p>

                {/* Cabin Image Carousel - shown when user taps "Vacation Cabins" */}
                {showCarousel && (
                  <div className="relative w-full max-w-xl mx-auto my-4 overflow-hidden rounded-lg">
                    <div className="relative aspect-[4/3]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={CABIN_IMAGES[carouselIndex].src}
                        alt={CABIN_IMAGES[carouselIndex].alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 text-sm">
                        {CABIN_IMAGES[carouselIndex].alt}
                      </div>
                    </div>
                    {/* Navigation buttons */}
                    <button
                      onClick={() => setCarouselIndex((prev) => (prev - 1 + CABIN_IMAGES.length) % CABIN_IMAGES.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setCarouselIndex((prev) => (prev + 1) % CABIN_IMAGES.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                    {/* Dots indicator */}
                    <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-1.5">
                      {CABIN_IMAGES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCarouselIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${idx === carouselIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <p>
                  -The cost <strong>per <span className="line-through">sacrifice</span> adult is $195</strong>, which covers the <strong>entire weekend:</strong> (Thursday, 4pm-Sunday, 10am).
                </p>
                <p>
                  -Cost <strong>per kid</strong> (including babies) is <strong>$100</strong>.
                </p>
                <p>
                  -If you choose to stay in these pre-reserved cabins, Venmo <strong>@mikalasterling</strong> (last four digits of phone number #7265). We will coordinate room arrangements.
                </p>
                <p>
                  You are also welcome to handle your own lodging!
                </p>
                  
              <div className="flex justify-start gap-3 mt-4">
                <a 
                  href="https://wvstateparks.com/park/blackwater-falls-state-park/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cloud-button text-sm"
                >
                  Blackwater Falls Lodge
                </a>
                <a 
                  href="https://daviswv.us/discover-davis/places-to-stay/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cloud-button text-sm"
                >
                  Davis, WV
                </a>
              </div>

              </div>

              <hr className="squiggly-divider my-6" />

              {/* Flying Institutions */}
              <h2 className="text-3xl font-sans font-bold wedding-heading italic mb-4">Flying Institutions</h2>
              <div className="wedding-text space-y-1">
                <p>Washington Dulles International Airport (IAD):  ~2 hr 30 min drive</p>
                <p>Ronald Reagan Washington National Airport (DCA): ~2 hr 45 min drive</p>
                <p>Pittsburgh International Airport (PIT): ~3 hr drive</p>
              </div>
            
              <hr className="squiggly-divider my-6" />

              {/* Final Bacon Bits */}
              <h2 className="text-3xl font-sans font-bold wedding-heading italic mb-4">Final Bacon Bits o&apos; Information</h2>
              <div className="wedding-text text-left space-y-2">
                <p>-We are planning on providing snacks and dinner on Friday and brunch, snacks, and dinner on Saturday.</p>
                <p>-Options for food otherwise include dining at the Smokehouse at Blackwater Falls Lodge, restaurants in nearby Davis, WV, or purchasing your own groceries (all cabins have kitchens).</p>
                <p>-Closer to the event, we will provide room assignments and a finalized schedule.</p>
              </div>

              <hr className="squiggly-divider my-6" />

              {/* Tribute */}
              <h2 className="text-3xl font-sans font-bold wedding-heading mb-4 italic">Tribute</h2>
              <div className="wedding-text space-y-3">
                <p>
                  There is absolutely <strong>no pressure</strong> to send us 🎁 🤪 GIFTS 🤪 🎁!!! We know it&apos;s a big trip out to West Wirginny.
                </p>
                <p>
                  If you are otherwise inclined, you&apos;re welcome to contribute to our honeymoon fund:
                  <strong> @mikalasterling</strong> (Venmo)
                </p>
              </div>

              <hr className="squiggly-divider my-6" />

            </div>
            </div>
          )}
            </>
          )}
          </div>
 {/* Start button for intro */}
          {showIntro && (
            <div className="gap-2 items-center justify-center flex-col sm:flex-row sm:flex-wrap mt-6 w-full flex">
              <button
                onClick={handleStartStory}
                className="cloud-button !w-[400px]"
                disabled={curtainsOpen}
              >
                <span className="font-medium">Start</span>
              </button>
            </div>
          )}
          
          {/* Choices */}
          {!showIntro && currentNode.choices && currentNode.choices.length > 0 && (
            <div className="gap-2 items-center justify-center flex-col sm:flex-row sm:flex-wrap mt-6 w-full flex">
              {currentNode.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice.nextNodeId)}
                  className="cloud-button !w-[400px]"
                >
                  <span className="font-medium">{choice.text}</span>
                </button>
              ))}
            </div>
          )}
       
      </div>
    </div>
  );
}

