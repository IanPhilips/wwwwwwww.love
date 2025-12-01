'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { START_NODE_ID, STORY_NODES } from '../story-data';
import { GameState } from '../types';
import FlyingCherubs from './FlyingCherubs';

const LOCAL_STORAGE_KEY = 'adventure-game-state';

export default function Adventure() {
  const [gameState, setGameState] = useState<GameState>({
    currentNodeId: START_NODE_ID,
    history: [],
    hasCompleted: false
  });
  
  const [isClient, setIsClient] = useState(false);

  // Load saved state from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setGameState(parsed);
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
      
      <div className="max-w-4xl w-full relative z-10 ">
        {/* Header with controls */}
        <div className="mb-6 flex justify-between items-center relative z-10">
          <button
            onClick={handleRestart}
            className="cloud-button text-sm"
          >
            ↻ Restart Story
          </button>
          
          {gameState.hasCompleted && !currentNode.isEnd && (
            <button
              onClick={handleSkipToEnd}
              className="cloud-button text-sm"
            >
              ⚡ Skip to Ending
            </button>
          )}
        </div>

        {/* Main story card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 scrollbar-hide overflow-y-auto">
          {/* Story text */}
          <div className="mb-8">
          {!currentNode.isEnd && (  <p className="wedding-text text-lg leading-relaxed whitespace-pre-line">
              {currentNode.text}
            </p>)}
          </div>

          {/* Choices */}
          {currentNode.choices && currentNode.choices.length > 0 && (
            <div className="space-y-3">
              {currentNode.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice.nextNodeId)}
                  className="cloud-button w-full"
                >
                  <span className="font-medium">→ {choice.text}</span>
                </button>
              ))}
            </div>
          )}

          {/* End of story - Wedding Info */}
          {currentNode.isEnd && (
            <div className="mt-8 text-left max-h-[55vh]">
              {/* Main Title */}
             
              
              {/* Date & Location */}
              <div className="my-6 text-center">
                <p className="text-2xl wild-wiggle mb-1">August 20-23, 2026</p>
                <a 
                  href="https://wvstateparks.com/parks/blackwater-falls-state-park/lodging/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cloud-button my-2"
                >
                  Blackwater Falls State Park
                </a>
                <p className="wedding-text">
                  1584 Blackwater Lodge Rd<br />
                  Davis, WV 26260
                </p>
              </div>

              <Image 
                src="/Blackwater_Falls.jpg" 
                width={500}
                height={400}
                alt="Blackwater Falls" 
                className="w-full max-w-4xl mx-auto my-6 vignette-fade"
              />

              <hr className="squiggly-divider my-6" />

              {/* Schedule */}
              <h2 className="text-3xl font-sans font-bold wedding-heading mb-4">Things that might happen...</h2>
              
              <div className="space-y-4 wedding-text">
                <div>
                  <p className="font-semibold wedding-heading">Thursday <span className="font-normal">4:00 P.M.</span></p>
                  <p className="italic">Cabin Check-In</p>
                </div>
                
                <div>
                  <p className="font-semibold wedding-heading">Friday Daytime</p>
                  <p className="italic">Brunch, Hiking, Swimming</p>
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

              <hr className="squiggly-divider my-6" />

              {/* Lodging */}
              <h2 className="text-3xl font-sans font-bold wedding-heading mb-4">Lodging</h2>
              
              <Image 
                width={500}
                height={400}
                src="/cabin.jpg" 
                alt="Haunted cabin at Blackwater Falls" 
                className="w-full max-w-xl rounded-lg shadow-lg mb-4"
              />
              <div className="wedding-text text-left space-y-3">
                <p>
                  We have reserved enough rooms for everyone to stay in totally not haunted &quot;Deluxe Cabins&quot; at Blackwater Falls. They&apos;re located close to each other so maximum ease of hanging is facilitated! Each couple will have their own room and some friends will share rooms (max 2 per room with separate beds). We have also reserved a few smaller, separate cabins for folks with babies.
                </p>
                <p>
                  -The cost <strong>per <span className="line-through">sacrifice</span> adult is $195</strong>, which covers the <strong>entire weekend:</strong> (Thursday, 4pm-Sunday, 10am).
                </p>
                <p>
                  -Cost <strong>per kid</strong> (including babies) is <strong>$100</strong>.
                </p>
                <p>
                  -If you choose to stay in these pre-reserved cabins, Venmo @mikalasterling (last four digits of phone number #7265). We will coordinate room arrangements.
                </p>
                <p>
                  You are also welcome to handle your own lodging!
                </p>
              </div>

              <hr className="squiggly-divider my-6" />

              {/* Flying Institutions */}
              <h2 className="text-3xl font-sans font-bold wedding-heading mb-4">Flying Institutions</h2>
              <div className="wedding-text space-y-1">
                <p>Washington Dulles International Airport (IAD) — closest; ~2 hr 30 min drive</p>
                <p>Ronald Reagan Washington National Airport (DCA) — ~2 hr 45 min drive</p>
                <p>Pittsburgh International Airport (PIT) — ~3 hr drive</p>
              </div>
              
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
                  className="cloud-button"
                >
                  Davis, WV
                </a>
              </div>

              <hr className="squiggly-divider my-6" />

              {/* Final Bacon Bits */}
              <h2 className="text-3xl font-sans font-bold wedding-heading mb-4">Final Bacon Bits o&apos; Information</h2>
              <div className="wedding-text text-left space-y-2">
                <p>-We are planning on providing brunch, snacks, and dinner for Friday and Saturday.</p>
                <p>-Options for food otherwise include dining at the Smokehouse at Blackwater Falls Lodge, restaurants in nearby Davis, WV, or purchasing your own groceries (all cabins have kitchens).</p>
                <p>-Closer to the event, we will provide room assignments and a finalized schedule.</p>
              </div>

              <hr className="squiggly-divider my-6" />

              {/* Tribute */}
              <h2 className="text-3xl font-sans font-bold wedding-heading mb-4">Tribute</h2>
              <div className="wedding-text space-y-3">
                <p>``
                  There is absolutely no pressure to send us 🎁 🤪 GIFTS 🤪 🎁!!! We know it&apos;s a big trip out to West Wirginny.
                </p>
                <p>
                  If you are otherwise inclined, you&apos;re welcome to contribute to our honeymoon fund:<br />
                  <strong>@mikalasterling</strong> (Venmo)
                </p>
              </div>

              <hr className="squiggly-divider my-6" />

              <p className="wedding-heading font-semibold text-xl">
                ✓ You&apos;ve completed the story — see you in West Wirginia!
              </p>
            </div>
          )}

          {/* Back button */}
          {gameState.history.length > 0 && (
            <div className="mt-6 pt-6 ">
              <button
                onClick={handleBack}
                className="cloud-button"
              >
                ← Go Back
              </button>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-4 text-center text-black text-sm font-medium">
          {gameState.history.length > 0 && (
            <span>Choices made: {gameState.history.length}</span>
          )}
        </div>
      </div>
    </div>
  );
}

