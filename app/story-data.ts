import { StoryNode } from './types';

export const STORY_NODES: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: "Oh what joyous tidings and merriment to be! The union of Ian and Mikala is nigh upon us and these two beings, so perfect in their design that doctors wept upon their delivery, have chosen you to behold them on their most special of marriage days! What fortune! What providence!\n\nAnd so you sit on your hotel bed, running through the coming revelry exactly how you imagine it will all play out. You have planned so diligently for tomorrow: your outfit, your change of shoes, an emergency speech (should the opportunity present itself). But what's this? In all of your excitement you seem to have forgotten where the wedding of the ages will be held?",
    choices: [
      { text: "Throw a pillow in frustration", nextNodeId: "throw_pillow" },
      { text: "Take a deep breath", nextNodeId: "deep_breath" },
      { text: "Panic", nextNodeId: "panic" }
    ]
  },

  // === THROW PILLOW PATH ===
  throw_pillow: {
    id: 'throw_pillow',
    text: "You grab one of the many pillows that adorn the bed and chuck it across the room. It is the pinnacle of humanity's search for absolute comfort and so lands with an unsatisfactory flump. You steel yourself. What would Mikala, embodiment of serenity do? And there it is! It's so painfully obvious! You must play out the occasion itself, step by meticulous step; like reentering a room after you've forgotten why you'd gone in there to begin with. Only then will the mystery reveal itself!\n\nYou take a deep breath and pretend like you've just awoken on the day of the wedding...",
    choices: [
      { text: "Brush your teeth", nextNodeId: "brush_teeth" },
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  // === DEEP BREATH PATH ===
  deep_breath: {
    id: 'deep_breath',
    text: "You fill your lungs with air and remind yourself that there is no use in panicking. What would Mikala, embodiment of serenity do? And then it comes to you! Yes of course, it's so painfully obvious! You must play out the occasion itself, step by meticulous step; like reentering a room after you've forgotten why you'd gone in to begin with. Only then will the mystery reveal itself!\n\nYou exhale and pretend like you've just awoken on the day of the wedding...",
    choices: [
      { text: "Brush your teeth", nextNodeId: "brush_teeth" },
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  // === PANIC PATH ===
  panic: {
    id: 'panic',
    text: "Your fists clench, sweat beads on your forehead, your stomach lurches. You splay out on the bed and furiously roll from side to side, tangling yourself in the sheets and letting out involuntary screams. Objectively, your performance is quite comical, but you are not in the business of being objective at the moment.\n\nThere is a knock at the door...",
    choices: [
      { text: "Collect yourself and answer the door", nextNodeId: "answer_door" },
      { text: "Remain completely still and hope they go away", nextNodeId: "stay_still" },
      { text: "Escape out the window", nextNodeId: "escape_window" }
    ]
  },

  // === ESCAPE WINDOW PATH ===
  escape_window: {
    id: 'escape_window',
    text: "You rush to the window, still tangled in sheets, throwing it open with all the gusto of an Ebenezer Scrooge in that one scene where he wakes up on Christmas morning and demands of a small child to tell him the date and to buy him a boy-sized turkey. But below you, there is no small child to yell at, only a parking lot.\n\nSince going to the climbing gym with Ian that one time, you are most certain in your ability to scale down the brick wall. As you lower yourself out of the window, it dawns on you that you were not actually very good at climbing, only that Ian kept on telling you that you were because it is in his nature to be nothing but encouraging. Ian's kindness is your undoing. Your hand slips from the window frame and you fall, chin banging against the sill on your way down. The window rattles and slams shut, pinching a corner of the sheet that is still wrapped around your body.\n\nDuring your descent, you are spun violently as the sheet unravels yourself from it, slowing your harrowing fall, and dumping you into a honeysuckle bush. If your hope was to escape human interaction by defenestrating yourself, you have failed most spectacularly. A woman stands outside a parked minivan, staring at you in disbelief.",
    choices: [
      { text: "Distract the woman and escape", nextNodeId: "distract_woman" },
      { text: "Act like you fell out of the window on purpose", nextNodeId: "act_on_purpose" }
    ]
  },

  // === ACT ON PURPOSE PATH ===
  act_on_purpose: {
    id: 'act_on_purpose',
    text: "\"It worked! I can't believe I've finally done it!\" You exclaim with the bravura of a thespian. Perhaps it is the sureness of your delivery, perhaps it is your winning smile, perhaps (and just perhaps!) it is no more explainable than love itself. With slow and unsure movements, the woman begins to clap. You take a deep bow.",
    choices: [
      { text: "Head down the street", nextNodeId: "head_down_street" },
      { text: "Reenter the hotel", nextNodeId: "reenter_hotel_from_fall" }
    ]
  },

  reenter_hotel_from_fall: {
    id: 'reenter_hotel_from_fall',
    text: "You walk back towards the hotel entrance, stopping after a few dozen paces to turn and bow once more to the still clapping woman. If there is any redemption for you, it will surely be found in a hotel lobby. \n\nAs you enter, you hear what Dale Carnegie said (in his 1936 bestseller, How to Win Friends and Influence People) is the sweetest and most important sound in any language: the sound of your own name. You look up and are brought to tears by the immaculacy of the scene before you. Two perfect beings seemingly float towards you, their features obscured by the golden radiance that emanates from their bodies. But you do not need your earthly senses to recognize them, for there are only two creatures that exist in this world that could make you feel such elation. Ian, Mikala!\n\nYou try and speak, to put into words the emotions that surge within, but there are none that would do them justice. They each lay a hand upon your shoulder and in voices like angel's voices, say how good it is to see you and what happened to your chin and why does it look like you fell out of a window?",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  head_down_street: {
    id: 'head_down_street',
    text: "You walk towards the parking lot exit, stopping after a few dozen paces to turn and bow once more to the still clapping woman. Once out on the street, you realize that you haven't a clue of where to go next. If you turn around now, you would have to walk by the woman again and she has become to you as the Rubicon was to Julius Caesar. There is no going back. You amble forward with no destination in mind.\n\nAs you wonder if maybe Caesar should have turned back, and that maybe he wouldn't have gotten stabbed twenty-three times if he had, a street magician accosts you on the sidewalk. He is wearing the requisite eyeliner that marks those of his ilk. His shirt reads: Wizard Pride Month. There is a house finch perched on his shoulder. It is not particularly interesting to look at. \n\n\"You there! You are searching for something, yes... I can sense it!\" He shouts, despite being less than a few feet from yourself. \"If you truly wish to find what you are looking for, then heed the words of I, The Great Lumbago!\"",
    choices: [
      { text: "Entertain The Great Lumbago", nextNodeId: "entertain_lumbago" },
      { text: "Be very specific about what it is you are looking for", nextNodeId: "specific_lumbago" }
    ]
  },

  entertain_lumbago: {
    id: 'entertain_lumbago',
    text: "You stop and turn towards The Great Lumbago, a sign of consent to street performers around the world. He smiles and wriggles his fingers in a most mysterious manner.\n\n\"Ahh, yes! You have made a fine choice, a fine choice indeed! Now, gaze into my orb! Do not be shy!\" He cries as he produces a milky white crystal ball from a tattered messenger bag. Being the good citizen that you are, you do as you are told. As you do, The Great Lumbago closes his eyes and shudders, causing the house finch to fly away.\n\n\"Um...\" You begin, but are quickly and severely shushed by the magician. You wonder whether the house finch was his pet or just some random bird. And then you wonder if all birds are random, and if there has ever been a bird on purpose and what that could even mean for the world.\n\n\"Yess, you are looking for someone, no, two someone's. NO! You are looking... You are seeking... AHA!\" His eyes fly open. He smiles the smile of someone who has never been wrong in their entire life. You nod at him, encouragingly. \"You seek a destination, yes! A meeting place wherein the souls of two beings are bound together, forever... You are looking for an animal shelter!\"\n\n\"No, sorry.\" You shake your head, disappointed and a little embarrassed for him. \"I'm actually looking for a wedding venue.\"\n\n\"Oh,\" His smile vanishes. \"Well, why didn't you just lead with that? They're probably getting married at Blackwater Falls State Park. Everybody gets married there. There's even a conference room where you could do dancing and a talent show.\"\n\nAnd it hits you, like a ton of bricks, like a freight train, like twenty-three senator's daggers. Blackwater Falls State Park! Of course! You hug The Great Lumbago and kiss him on both cheeks before sprinting back to the hotel.\n\nIn the distance you hear, \"Wait! You forgot to pay me! I need ten dollars to catch the bus to my court hearing in Morgantown! Even wizards are not above the laaw!\" But you are not listening. Tears spring from your eyes, laughter pours from your smiling face.",
    choices: [
      { text: "Continue", nextNodeId: "lumbago_ending" }
    ]
  },

  lumbago_ending: {
    id: 'lumbago_ending',
    text: "Most excellent and well done! You have figured out where the wedding is to be held! Obviously there are more details that you should know and so the question blooms in your mind, \"What are the other details of the wedding and perhaps is there some sort of internet-based website that I might access that would have all of this information in a digital format?\"\n\nThe answer?",
    isEnd: true
  },

  specific_lumbago: {
    id: 'specific_lumbago',
    text: "You stop and turn towards The Great Lumbago, a sign of consent to street performers around the world. He smiles and wiggles his fingers in a most mysterious manner.\n\n\"Ahh, yes, you have made a fine choice, a fine choice indeed!\" He begins, but you are in no mood for antics. You cut him off before he can continue his monologue.\n\n\"Well, actually, I was just wondering...\" But ho! He frags you right back, stifling you with a finger to your lips. It smells like cigarettes.\n\n\"SILENCE! You mustn't reveal anything! Now, gaze into my orb! Do not be shy!\" He cries as he produces from a worn messenger bag, a milky white crystal ball. You do as you are told, and as you do, The Great Lumbago shudders, causing the house finch to fly away.\n\n\"Um...\" You begin, but are quickly and severely shushed by the magician. You wonder whether the house finch was his pet or just a random bird and then you wonder if all birds are random and if there has ever been a bird on purpose and what that could even mean.\n\n\"Yess, you are looking for someone, no, two someone's. NO! You are looking... You are seeking... AHA!\" His eyes fly open. He smiles the smile of someone who has never been wrong in their entire life. \"You seek a destination, yes! A meeting place wherein the souls of two beings will be bound together, forever... You are looking for an animal shelter!\"\n\n\"No. I'm looking for the wedding venue where my friends are getting married.\"\n\n\"Oh,\" His smile vanishes. \"Well, why didn't you just lead with that? They're probably getting married at Blackwater Falls State Park. Everybody gets married there. There's even a conference room where you could do dancing and a talent show.\"\n\nAnd it hits you, like a ton of bricks, like a freight train, like twenty-three daggers and one of them held by your best friend, Brutus. Blackwater Falls State Park! Of course! You hug The Great Lumbago and kiss him on both cheeks before sprinting back to the hotel.\n\nIn the distance you hear, \"Wait! You forgot to pay me! I need ten dollars to catch the bus to my court hearing in Morgantown! Even wizards are not above the laaw!\" But you are not listening. Tears spring from your eyes, laughter pours from your smiling face.",
    choices: [
      { text: "The End", nextNodeId: "specific_lumbago_ending" }
    ]
  },

  specific_lumbago_ending: {
    id: 'specific_lumbago_ending',
    text: "Most excellent and well done! You have figured out where the wedding is to be held! Obviously there are more details that you should know and so the question blooms in your mind, \"What are the other details of the wedding and perhaps is there some sort of internet-based website that I might access that would have all of this information in a digital format?\"\n\nThe answer?",
    isEnd: true
  },

  // === DISTRACT WOMAN PATH ===
  distract_woman: {
    id: 'distract_woman',
    text: "As the woman is still processing what to make of your performance, you point past her and yell, \"A METEOR!\"\n\nThe woman turns and as she does so, you enact part two of your plan. You run, but unbeknownst to you, the last of the sheet is still wrapped around your foot and you fall to the ground; finally freed from your linen prison but not any farther from the woman you were trying to flee from. She turns back to you and by the look she is giving you now, you can tell that her brain is working feverishly to deduce anything about the situation she has unwillingly become a part of.",
    choices: [
      { text: "Lie to the woman", nextNodeId: "lie_to_woman" },
      { text: "Come clean to the woman", nextNodeId: "come_clean_woman" }
    ]
  },

  come_clean_woman: {
    id: 'come_clean_woman',
    text: "You contemplate coming clean to the woman, but you cannot bring yourself to do so. You are in too deep.\n\n\"Oh!\" You exclaim. \"I could have sworn there was a meteor. Must have been a trick of the eye. Anyways, I must be going now, I hope you have a lovely day.\"\n\n\"Are you okay?\" She asks, hesitantly.\n\n\"Are you okay?\" You respond, not thinking about what you're saying. \"You look unwell. I know a good doctor, here, I'll give you his business card.\" You reach into your wallet and hand the woman a five-dollar-off coupon to the Zoppé Italian Family Circus. She stares at you incredulously.\n\n\"I hope you feel better!\" You say as you turn and walk towards the parking lot exit.",
    choices: [
      { text: "Walk in a big circle and reenter the hotel", nextNodeId: "big_circle_hotel" },
      { text: "Walk down the street", nextNodeId: "walk_down_street" }
    ]
  },

  lie_to_woman: {
    id: 'lie_to_woman',
    text: "\"Oh!\" You exclaim. \"I could have sworn there was a meteor. Must have been a trick of the eye. Anyways, I must be going now, I hope you have a lovely day.\"\n\n\"Are you okay?\" She asks, hesitantly.\n\n\"Are you okay?\" You respond, not thinking about what you're saying. \"You look unwell. I know a good doctor, here, I'll give you his business card.\" You reach into your wallet and hand the woman a five-dollar-off coupon to the Zoppé Italian Family Circus. She stares at you incredulously.\n\n\"I hope you feel better!\" You say as you turn and walk towards the parking lot exit.",
    choices: [
      { text: "Walk in a big circle and reenter the hotel", nextNodeId: "big_circle_hotel" },
      { text: "Walk down the street", nextNodeId: "walk_down_street" }
    ]
  },

  walk_down_street: {
    id: 'walk_down_street',
    text: "Out on the street, you choose a direction and start booking it. You cannot believe the turn of events that has led you to be so thoroughly embarrassed in front of a complete stranger. The trot turns into a jog and the jog into a run, and all of a sudden, you have traveled well over a half dozen miles. It occurs to you that if you are in a constant state of motion, then there is no way that you could partake in an interaction lasting longer than a second; and if that is the case, then you will never be embarrassed ever again! Hooray!\n\nJust as you embrace your new life as a runner, you hear the distant sound of pounding feet on pavement. You turn your head and see a high school cross country team coming up behind you a little ways. RATS! You abandon your short-lived running career and come to a halt. The cross country team eyes you as they pass by, their teenage faces filled with judgement.\n\nAs the sun begins to set, you come upon a sign that reads: Blackwater Falls State Park. A ranger sits at an entrance station looking sharp in her uniform. She beams at you and says, \"Oh, You must be here for the wedding! The bride and groom are in the conference room, just down the road.\"\n\nYou break into tears of joy, it cannot be helped. After such a long and awkward day, you've somehow made it to the wedding venue! The ranger's smile does not fade, but her eyes boggle just a little, unsure of your sudden outburst of emotion. She reaches out hesitantly and pats you on the head. You thank her profusely and make your way to the conference room.\n\nAs you fling open the door, you inhale deeply to shout in excitement. The cry turns into something more akin to the final puff of air leaking out of a flat tire as you realize that the bride and groom before you are not Mikala and Ian. Their faces are not the faces of perfect angels, their auras are not the auras of young demigods. You slowly shut the door.",
    choices: [
      { text: "Go into the forest and fall asleep", nextNodeId: "forest_sleep" },
      { text: "Walk back to the hotel", nextNodeId: "walk_back_hotel" }
    ]
  },

  forest_sleep: {
    id: 'forest_sleep',
    text: "Sullenly, you make your way into the edge of the forest. Defeat has claimed you and there is nothing left to do but cover yourself in a blanket of leaves and fall asleep.\n\nYou awaken the following morning to the sun high overhead. Off in the distance, a string quartet is playing Franz Schubert's Ave Maria, the notes hanging in the air like morning mist. But it is not morning, you've slept quite the spell! Standing, you brush your leaf blanket off and follow the beautiful melody that seems to be coming from behind a hill in the distance.\n\nAs you crest the knoll, a dream-like scene plays out below you. A wedding of the utmost magnificence is underway, (and look!) the bride and groom stand at the altar looking much better than the hideous couple you witnessed yesterday. Better, indeed! In fact, one might say... perfect? A wave of comprehension hits you and you fall to your knees. You have made it, you are here! Mikala and Ian are the ones below you, resplendent in their wedding finery. Their angelic faces are the personification of happiness. They lean in for their wedding kiss and you respectfully shield your eyes with both hands, a smile spreading across your face.",
    choices: [
      { text: "The End", nextNodeId: "forest_ending" }
    ]
  },

  forest_ending: {
    id: 'forest_ending',
    text: "Most excellent and well done! You have figured out where the wedding is to be held! Obviously there are more details that you should know and so the question blooms in your mind, \"What are the other details of the wedding and perhaps is there some sort of internet-based website that I might access that would have all of this information in a digital format?\"\n\nThe answer?",
    isEnd: true
  },

  walk_back_hotel: {
    id: 'walk_back_hotel',
    text: "The trek is long and arduous. You feel as if ten years have passed and perhaps they have. When you finally reach the doors of the hotel, you use the last of your life force to push open the door. Unfortunately for you, the door is a pull-only situation, but the kindly father of a family of eight opens the door from the inside to let you in. His children are quietly chanting \"Shoney's! Shoney's!\" \n\nYou slowly crawl your way inside, recognizing the mother as the woman you met in the parking lot earlier that day. Her eyes go wide. Your crawl speeds up.\n\nThen you hear it. The sound that Dale Carnegie said (in his 1936 bestseller, How to Win Friends and Influence People) is the sweetest and most important sound in any language: the sound of your own name. You look up and are brought to tears by the immaculacy of the scene before you. Two perfect beings seemingly float towards you, their features obscured by a golden radiance that emanates from their bodies. But you do not need your earthly senses to recognize them, for there are only two creatures that exist in this world that could make you feel such elation. Ian, Mikala!\n\nYou try and speak, to put into words the emotions that surge within, but there are none that would do them justice. They each lay a hand upon your shoulder and in voices like angel's voices, say how good it is to see you and what happened to your chin and why does it look like you fell out of a window?",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  big_circle_hotel: {
    id: 'big_circle_hotel',
    text: "You briskly walk away from the woman who is now so thoroughly confused it seems she has become immobile. You make a big circle around the hotel, giving you ample time to reflect on the fact that you have just fallen out of a window, possibly made someone feel bad about the way that they look, and definitely lost your five-dollar-off coupon to the Zoppé Italian Family Circus.\n\nIf there is any redemption for you, it will surely be found in a hotel lobby. As you enter, you hear what Dale Carnegie said (in his 1936 bestseller, How to Win Friends and Influence People) is the sweetest and most important sound in any language: the sound of your own name. You look up and are brought to tears by the immaculacy of the scene before you. Two perfect beings seemingly float towards you, their features obscured by the golden radiance that emanates from their bodies. But you do not need your earthly senses to recognize them, for there are only two creatures that exist in this world that could make you feel such elation. Ian, Mikala!\n\nYou try and speak, to put into words the emotions that surge within, but there are none that would do them justice. They each lay a hand upon your shoulder and in voices like angel's voices, say how good it is to see you and what happened to your chin and why does it look like you fell out of a window?",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  // === ANSWER DOOR PATH ===
  answer_door: {
    id: 'answer_door',
    text: "You take some deep breaths and try to untangle yourself from the sheets. You are unsuccessful in that particular endeavor. The knocking becomes more insistent. You hear a voice from the other side say, \"Hello? Is everything alright?\"\n\nStill wrapped in sheets, you manage to stumble to the door and open it. A man in a trench coat and fedora stands before you, a look of horror on his face.\n\n\"A ghost! A real life ghost!\" He screams as he turns and makes to sprint down the hotel hallway.",
    choices: [
      { text: "Tell the adult man that you're not a real life ghost", nextNodeId: "not_a_ghost" },
      { text: "Go along with it", nextNodeId: "go_along_ghost" }
    ]
  },

  not_a_ghost: {
    id: 'not_a_ghost',
    text: "\"Wait!\" You say. \"I'm not a real life ghost!\"\n\nHe hesitates for a second before bolting down the hallway screaming, \"That's exactly what a real life ghost would say!\" He turns the corner and disappears.\n\nYou shut the door, unsure of how to feel after having been mistaken for a ghost. Instead of dwelling on it, you attempt, once more, to untangle yourself from the sheets. This time you are successful, but before you can celebrate, you realize you still don't remember where Mikala and Ian's wedding is to be held. You take a moment to steady yourself... What would Mikala, embodiment of serenity do? And there it is! It's so painfully obvious! You must play out the occasion itself, step by meticulous step; like reentering a room after you've forgotten why you'd gone in to begin with. Only then will the mystery reveal itself!\n\nYou take a deep breath and pretend like you've just awoken on the day of the wedding...",
    choices: [
      { text: "Brush your teeth", nextNodeId: "brush_teeth" },
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  go_along_ghost: {
    id: 'go_along_ghost',
    text: "\"Yes,\" You tell the man in the trench coat and fedora, \"You've read me like a book. I am a real life ghost!\"\n\nAt this, he turns back towards you, a look of confusion written across his face. \"You're no ghost. A real ghost would never say that,\" he observes, \"and I know things about what ghosts say. The name's Daniel, Daniel Ghost Detective. I'm staying in the room across the hall. I heard a scream and thought to myself, 'Well, Daniel, here we go again. Here I am, on vacation, a thousand miles away from Oklahoma City, the City of Ghosts and Ghost Crime, just trying to have a nice vacation and...\"\n\nThe man named Daniel, Ghost Detective appears to be a long-winded speaker...",
    choices: [
      { text: "Shut the door politely", nextNodeId: "shut_door_politely" },
      { text: "Continue listening", nextNodeId: "continue_listening" }
    ]
  },

  continue_listening: {
    id: 'continue_listening',
    text: "When Daniel, Ghost Detective finally stops speaking, a silence hangs in the air. It seems that he has completed his story and though you would like to say something in response, you find you cannot, due to the simple fact that you weren't listening.",
    choices: [
      { text: "Ask Daniel, Ghost Detective to go away (politley)", nextNodeId: "ask_daniel_leave" },
      { text: "Tell Daniel, Ghost Detective that you have a mystery that needs to be solved", nextNodeId: "daniel_mystery" }
    ]
  },

  ask_daniel_leave: {
    id: 'ask_daniel_leave',
    text: "\"Can you please go away?\" You say, trying your best to be as gentle as possible.\n\n\"Go away? Are you talking to me?\" He swivels his head, first left, then right. \"Are you talking to a ghost? You must be talking to a ghost, 'cause I just laid out my whole life story to you and when somebody opens up to a complete stranger like that, you don't just tell them to go away!\"\n\n\"Oh... well... thank you, please.\"\n\nYou smile and shut the door (politely of course) and get back to the matter at hand. You mustn't be distracted. You need to remember where the wedding is to be held! And then it hits you, like a bolt from the blue: you must play out the day itself, step by meticulous step; like reentering a room after you've forgotten why you'd gone in to begin with. Only then will the mystery reveal itself!\n\nYou take a deep breath and pretend like you've just awoken on the day of the wedding...",
    choices: [
      { text: "Brush your teeth", nextNodeId: "brush_teeth" },
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  daniel_mystery: {
    id: 'daniel_mystery',
    text: "\"That is some very interesting things that you've just said, but Daniel, I have a mystery that needs solving and you may be the only one that can help.\"\n\nYou get Daniel, Ghost Detective up to speed on your situation. He nods vigorously and produces a pen and notepad from inside his trench coat to take notes. When you are finished, he leans against the door frame and puts his thumb and index finger over his eyes, shutting them and scrunching his face.\n\n\"Alright, I'll help.\" He says, removing his hand and opening his eyes. \"But we're gonna do this my way, okay? We're gonna interview every ding dang ghost in this town till we get some intel on your friends' wedding. I don't care how many ghosts we gotta shake down, we are gonna get you to that wedding! Now, FOLLOW ME!\"\n\nYou have never seen Daniel, Ghost Detective this animated—but to be fair, before this moment, you had never seen Daniel, Ghost Detective. He runs to the stairwell and takes them down, two at a time.",
    choices: [
      { text: "Run with Daniel, Ghost Detective", nextNodeId: "run_with_daniel" },
      { text: "Follow Daniel, Ghost Detective at a reasonable pace", nextNodeId: "follow_daniel_slow" },
      { text: "Go back to your room", nextNodeId: "go_back_room_daniel" }
    ]
  },

  run_with_daniel: {
    id: 'run_with_daniel',
    text: "His excitement is infectious. You bound after your new friend, taking the steps in perfect unison. The child-like splendor of running down stairs causes you to temporarily forget about your predicament. You imagine that you and Daniel are Hollywood stars in some 1950s musical melodrama. Admittedly, Daniel, Ghost Detective resembles Gene Kelly in Singin' in the Rain, what with the coat and fedora and all.\n\nYou burst through the stairwell door and into the lobby at the same time. Then, with the flair of two synchronized swimmers who are bad at their craft but somehow still in concert, you both trip over the same Persian rug, tumble, pop back up, and finish by throwing your arms skyward in a gymnast's salute. The room bursts into applause. The lobby-goers crowd around you to pat your backs and shake your hands. To your surprise you hear two familiar voices calling out, cutting through the cheers of your newest fans. Oh goodness! Oh dear! You know these voices, these beautiful voices that cut through the din, clear and melodious as a meadowlark's song.\n\nTwo perfect beings seemingly float towards you through the crowd. Their features are obscured by a golden radiance that emanates from their bodies, but you do not need your earthly senses to recognize them, for there are only two creatures that exist in this world that could make you feel such elation. Ian, Mikala!\n\nYou try and speak, to put into words the emotions that surge within, but there are none that would do them justice. The pair each lay a hand upon your shoulder and in voices like angel's voices, say how good it is to see you and what a splendid performance, and who is this perfect gentleman standing at your side?",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  follow_daniel_slow: {
    id: 'follow_daniel_slow',
    text: "You are unsure why Daniel, Ghost Detective is all of a sudden in a terrible rush. You take the stairs at a much more reasonable pace, leaving the jumping of stairs to Ghost Detectives and all children who celebrate Christmas.\n\nBy the time you enter the lobby, you see Daniel is already across the room, waving at you before pushing the door open and sprinting out into the fall afternoon. You bring your hand to your forehead, second-guessing whether it was a good idea to ask help from this loose cannon of a Ghost Detective. Then you hear it, the sound that Dale Carnegie said (in his 1936 bestseller, How to Win Friends and Influence People) is the sweetest and most important sound in any language: the sound of your own name. You look up and are brought to tears by the immaculacy of the scene before you. Two perfect beings seemingly float towards you, their features obscured by the golden radiance that emanates from their bodies. But you do not need your earthly senses to recognize them, for there are only two creatures that exist in this world that could make you feel such elation. Ian, Mikala!\n\nYou try and speak, to put into words the emotions that surge within, but there are none that would do them justice. They each lay a hand upon your shoulder and in voices like angel's voices, say how good it is to see you and how have you been and who was that strange man in the trench coat and fedora who waved at you before running off?",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  go_back_room_daniel: {
    id: 'go_back_room_daniel',
    text: "You head back to your room and shut the door behind you. What a strange man, you think as you get back to the task at hand. You need to remember where the wedding is to be held! But how? Clearly the answers do not lie with Daniel. And then it hits you, like a bolt from the blue: you must play out the day itself, step by meticulous step; like reentering a room after you've forgotten why you'd gone in to begin with. Only then will the mystery reveal itself!\n\nYou take a deep breath and pretend like you've just awoken on the day of the wedding...",
    choices: [
      { text: "Brush your teeth", nextNodeId: "brush_teeth" },
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  shut_door_politely: {
    id: 'shut_door_politely',
    text: "In the most polite way possible, you slowly shut the door in Daniel, Ghost Detective's face. There are moments in life where a chance encounter forever alters the path you have set upon; this, you decide, is not one of those moments. You take your time removing the sheets still wrapped around your body and sit back on the bed, trying to imagine what ghost crime could possibly be.\n\nNo! You're getting distracted! You need to remember where the wedding is to be held! And then it hits you, like a bolt from the blue: you must play out the day itself, step by meticulous step; like reentering a room after you've forgotten why you'd gone in to begin with. Only then will the mystery reveal itself!\n\nYou take a deep breath and pretend like you've just awoken on the day of the wedding...",
    choices: [
      { text: "Brush your teeth", nextNodeId: "brush_teeth" },
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  // === STAY STILL PATH ===
  stay_still: {
    id: 'stay_still',
    text: "You freeze, mid-flail. The knocking persists for awhile but much to your relief, the knocker eventually gives up. Laying in the embarrassment of sheets, you reconsider your choice to panic. Slowly, you slip out from your entanglement and sit back on the edge of the bed, taking a series of deep breaths. You try and embody Mikala, perhaps the most serene human being that you know, and ask yourself what she would do. And there it is! It's so painfully obvious! You must play out the day of the wedding, step by meticulous step, and much like reentering a room after you've forgotten why you'd gone in to begin with, the mystery of the wedding's location will reveal itself!\n\nYou take one last deep breath and pretend like you've just awoken on the day of the wedding...",
    choices: [
      { text: "Brush your teeth", nextNodeId: "brush_teeth" },
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  // === MORNING ROUTINE ===
  brush_teeth: {
    id: 'brush_teeth',
    text: "You make your way to the bathroom and use the electric toothbrush that Ian recommended to you. After a few minutes it buzzes to let you know that a dentist recommends to switch to a different quadrant of mouth. When you are finished, you place the toothbrush back on its charger and take a moment to marvel at the advancements in oral hygiene.",
    choices: [
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" },
      { text: "Do your pre-wedding ritual", nextNodeId: "pre_wedding_ritual" }
    ]
  },

  pre_wedding_ritual: {
    id: 'pre_wedding_ritual',
    text: "You are about to conduct your pre-wedding ritual (one that your family has passed from generation to generation), but then it occurs to you that you don't actually have a pre-wedding ritual and that if you did, that would be pretty wild. You chuckle to yourself for entertaining such fancies.",
    choices: [
      { text: "Put on your wedding attire", nextNodeId: "wedding_attire" }
    ]
  },

  wedding_attire: {
    id: 'wedding_attire',
    text: "Being that you are attending the social event of the century, you have spared no expense on your wedding regalia. You adorn your body with the finest threads and jewelry that money can buy and give yourself a once-over in the full length mirror that doubles as the sliding closet door. Finally, you stuff a wad of tissues in your pocket in preparation for the inevitable tears that will come when beholding Ian and Mikala at the altar. Preparations complete, you step out into the hallway.",
    choices: [
      { text: "Head to the lobby", nextNodeId: "head_to_lobby" },
      { text: "Head to the roof", nextNodeId: "head_to_roof" },
      { text: "Go back to your room", nextNodeId: "go_back_room" }
    ]
  },

  go_back_room: {
    id: 'go_back_room',
    text: "Fear grips you as your expensively adorned feet touch the carpeted hallway. What if this is it? What if there is no higher calling than to witness the marriage of Mikala and Ian? Will you be cursed to live out the rest of your days like an athlete in the twilight years of their career who has taken up playing golf professionally because they can't compete in their original sport any longer and honestly, they're not even that great at golfing either? No and never! You pull out your phone and book the next flight home.",
    choices: [
      { text: "Pack your bags and skip town", nextNodeId: "pack_bags" },
      { text: "Get a grip", nextNodeId: "get_a_grip" }
    ]
  },

  pack_bags: {
    id: 'pack_bags',
    text: "Nope, you refuse to exist in a reality where the climax of your life... no, the climax of humanity as a whole, has come and gone like a dream in the night. You pack your bags and fly back home, but even there you are reminded of Ian and Mikala. There is the chair where Mikala sat and drank tea and told you about her fondness of minis. There is the cook book that Ian bought you wherein is described one thousand ways you can eat a pig.\n\nYou sell all of your belongings and move to Tibet where you begin a new life, rejecting everything and trying to find inner peace. You live to be 112, and though true serenity alludes you, you cultivate a semblance of it through meditation, yoga and reading lots of Calvin and Hobbes. On your deathbed, in a Buddhist monastery in Drepung, the memory returns – the wedding you could not bring yourself to witness.\n\nThere is a knock at your door and in enters a child of perfection, looking to you, a little like Ian and a little like Mikala. The child smiles at you and takes your hand. You cannot help but smile back at this literal angel.",
    choices: [
      { text: "Start over", nextNodeId: "start" }
    ]
  },

  get_a_grip: {
    id: 'get_a_grip',
    text: "You slap yourself, drawing on the courage of Ian, who (to your knowledge) was never once afraid of anything. You pull your hovering thumb away from hitting the 'confirm' button on your phone and step back towards the door.",
    choices: [
      { text: "Head to the lobby", nextNodeId: "head_to_lobby" },
      { text: "Head to the roof", nextNodeId: "head_to_roof" }
    ]
  },

  // === ROOF PATH ===
  head_to_roof: {
    id: 'head_to_roof',
    text: "You take the stairs, two at a time, bursting out onto the hotel roof. The whole of town is laid out before you. The tops of trees make a palette of oranges, reds and yellows that decorate the landscape. It reminds you of a sketch that Mikala made for you, once upon a time. It is a dear thing that you keep in your underwear drawer next to your social security card, passport and Mickey Mouse keychain your parents bought for you at Tokyo Disneyland.\n\nAll of a sudden you hear an \"ahem\" coming from behind you. You turn around to see a woman in a pair of coveralls with the name of a well known internet provider stitched across the breast. She is holding a tool bag and clipboard.\n\n\"Uhh, are you supposed to be up here?\" She asks.",
    choices: [
      { text: "Head back down to the lobby", nextNodeId: "head_back_down_lobby" },
      { text: "Say yes", nextNodeId: "say_yes_roof" }
    ]
  },

  head_back_down_lobby: {
    id: 'head_back_down_lobby',
    text: "\"Probably not.\" You say, as you head back inside. She eyes you suspiciously, but does not press the matter, focusing her attention on more internet-based problems. \n\nOnce on your floor, you walk to the elevator, passing a vending machine filled with snacks and sodas that proudly boast their lack of nutritional value. When the elevator arrives, you step inside, scanning the panel for the lobby button. A family of seven stampedes towards you from the end of the hall. The father, one hand pulling a screaming four-year-old, the other raised in a piteous plea to hold the elevator door, hollers at you from that impossible distance.",
    choices: [
      { text: "Hold the door for the family stampede", nextNodeId: "hold_door" },
      { text: "Frantically press the 'close door' button", nextNodeId: "close_door" }
    ]
  },

  say_yes_roof: {
    id: 'say_yes_roof',
    text: "\"Yes.\"\n\n\"Oh, okay... Well I have to work on this antenna, sooo, if you'll excuse me.\" She pushes past you and heads towards a satellite dish on the corner of the rooftop. You congratulate yourself on your conversational prowess before it dawns on you that you have no idea why you came out here to begin with.",
    choices: [
      { text: "Head back inside and down to the lobby", nextNodeId: "head_inside_lobby" },
      { text: "Ask the internet lady for help", nextNodeId: "ask_internet_lady" }
    ]
  },

  head_inside_lobby: {
    id: 'head_inside_lobby',
    text: "You head back inside and down a flight before deciding to take the elevator the rest of the way. As you walk towards the elevator, you pass a vending machine filled with snacks and sodas that proudly boast their lack of nutritional value. When the elevator arrives, you step inside, scanning the panel for the lobby button. A family of seven stampedes towards you from the end of the hall. The father, one hand pulling a screaming four-year-old, the other raised in a piteous plea to hold the elevator door, hollers at you from that impossible distance.",
    choices: [
      { text: "Hold the door for the family stampede", nextNodeId: "hold_door" },
      { text: "Frantically press the 'close door' button", nextNodeId: "close_door" }
    ]
  },

  ask_internet_lady: {
    id: 'ask_internet_lady',
    text: "Riding the high of your conversational dominance, you approach the internet lady and explain to her your plight.\n\n\"Perhaps there is some way you could hack into the central wedding database and get me the details I require?\" You suggest.\n\n\"No. That's illegal.\"\n\nTouché, touché, good lady! You know when to admit defeat and so gracefully make your way back indoors. \n\n\"Wait a minute, wait one minute.\" The internet lady calls out with a sigh. \"Listen, I've had a rough morning, so you'll have to forgive me for being short with you. You seem like a decent enough human being, I'll hack into the weather database or whatever it is you said, but you'll have to do me a favor in return. Okay?\"\n\n\"Central wedding database.\"\n\n\"Sure, that. Do we have a deal?\"",
    choices: [
      { text: "Make a deal with the internet lady", nextNodeId: "make_deal_beth" },
      { text: "Decline the deal and head back inside", nextNodeId: "decline_deal" }
    ]
  },

  decline_deal: {
    id: 'decline_deal',
    text: "\"We have a deal.\" You say, proffering your hand.\n\nThe internet lady goes in for the handshake, but before she can make contact, you pull your hand away.\n\n\"NOT!\" You scream, turning around and sprinting back inside the hotel. You take the stairs two at a time and before you know it, you have ran all the way down to the lobby. You laugh and pat yourself on the back, praising yourself for holding true to one of your core values: never trusting internet ladies.\n\nBut your laughter slows and transmutes into sobs as you realize that you aren't anywhere closer to figuring out where the wedding is. Then you hear it: your name called in the sing song voice of a some tuneful bird. You hear too, a melodious laugh that sounds like sunshine. Two figures approach you and you look up, only to be blinded by their radiance. You shield your eyes against the light, knowing without looking who it is that stands before you. It is Mikala and Ian!\n\nThey each extend a perfect hand towards you as you kneel in deference, tears of joy streaming down your face. You try and speak, to put into words the emotions that surge within, but there are none that would do them justice. You feel their touch upon your shoulder and in voices like angel's voices, say how good it is to see you and how have you been and why does it look like you've been crying?",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  make_deal_beth: {
    id: 'make_deal_beth',
    text: "\"We have a deal, internet lady.\" You say, proffering your hand.\n\n\"Don't call me that, my name is Beth.\"\n\nBeth takes your hand and gives it a solid shake. Her grip is balanced, not too strong and not too weak. She is clearly a practiced businesswoman.\n\n\"So, a little background.\" Beth begins, \"Except for the fact that I get to wear these coveralls, I actually hate my job. I'm really only passionate about two things, Law & Order: SVU and free to play mobile games. Right now I'm in the process of creating my own law-based free to play mobile game called Lawyer Arena.\"\n\nShe pulls out her cellphone and shows you an ad she's mocked up. It shows two well dressed lawyers pointing their fingers accusatorily at one another from across a battle-strewn coliseum. There are words in the ad, and though they make grammatical sense, you find it difficult to understand their meaning. They read as follows: LAWYER ARENA - Battle players from around the world in class action lawsuits with REAL consequences.\n\n\"All I need is your email for my mailing list. I have a big meeting tomorrow with some potential investors and I need to show them I have a following.\"",
    choices: [
      { text: "Give Beth your actual email address", nextNodeId: "give_real_email" },
      { text: "Give Beth a fake email address", nextNodeId: "give_fake_email" }
    ]
  },

  give_real_email: {
    id: 'give_real_email',
    text: "Anyone who loves laws and lawyers must be a person of great moral conduct, so you trust Beth with your actual email address. Her eyes light up like a Christmas tree.\n\nAs for her end of the bargain, she leads you down to the parking lot where she fetches a laptop from her work truck, booting it up and logging on. Her wallpaper is a picture of the cast of Law & Order: SVU. It looks pretty cool.\n\nMuch to Beth's surprise, she finds that there is an actual central wedding database hidden on the U.S. Census Bureau's webpage. She makes short work of the encrypted data and scribbles a URL on a scrap of paper.\n\n\"Burn this when you're through. I don't know who your friends are, but they've made it an absolute nightmare to track down any information about this wedding.\" Says Beth, handing your the scrap.\n\nYou look down at the URL, a single tear rolling down your cheek. You've done it! By golly, you've done it! The URL to Mikala and Ian's wedding website! All the juicy details of the wedding of the century in one convenient location! You rush back to your room and type the web address into your phone. A wall of text loads, it seems to be some sort of choose your own adventure...",
    choices: [
      { text: "There is only one thing TO do...", nextNodeId: "beth_ending" }
    ]
  },

  give_fake_email: {
    id: 'give_fake_email',
    text: "\"egglover92@aol.com,\" You tell Beth. She raises an eyebrow but writes it down all the same.\n\n\"Alright, now for my end of the deal.\"\n\nShe leads you down to the parking lot where she fetches a laptop from her work truck, booting it up and logging on. Her wallpaper is a picture of the cast of Law & Order: SVU. It looks pretty cool.\n\nMuch to Beth's surprise, she finds that there is an actual central wedding database hidden on the U.S. Census Bureau's webpage. She makes short work of the encrypted data and scribbles a URL on a scrap of paper.\n\n\"Burn this when you're through. I don't know who your friends are, but they've made it an absolute nightmare to track down any information about this wedding.\" Says Beth, handing your the scrap.\n\nYou look down at the URL, a single tear rolling down your cheek. You've done it! By golly, you've done it! The URL to Mikala and Ian's wedding website! All the juicy details of the wedding of the century in one convenient location! You rush back to your room and type the web address into your phone. A wall of text loads, it seems to be some sort of choose your own adventure...",
    choices: [
      { text: "There is only one thing TO do...", nextNodeId: "beth_ending" }
    ]
  },

  beth_ending: {
    id: 'beth_ending',
    text: "You found the wedding website!\n\n💻 THE END - The Hacker's Path",
    isEnd: true
  },

  // === LOBBY PATH ===
  head_to_lobby: {
    id: 'head_to_lobby',
    text: "You walk to the elevator and pass a vending machine filled with snacks and sodas that proudly boast their lack of nutritional value. When the elevator arrives, you step inside, scanning the panel for the lobby button. A family of seven stampedes towards you from the end of the hall. The father, one hand pulling a screaming four-year-old, the other raised in a piteous plea to hold the elevator door, hollers at you from that impossible distance.",
    choices: [
      { text: "Hold the door for the family stampede", nextNodeId: "hold_door" },
      { text: "Frantically press the 'close door' button", nextNodeId: "close_door" }
    ]
  },

  hold_door: {
    id: 'hold_door',
    text: "With the grace of a swan, you hold the door for the family stampede. They jostle and squeeze into the elevator,  irking out spurious 'thank you's' and 'pardon me's' and quite suddenly you find yourself pressed into the panel, accidentally depressing the buttons to all of the floors. Somebody farts.\n\n\"Ah geez, thank you so much,\" begins the father, \"You have no idea how grateful I am! It's the little league regional championship today and, boy, does it take a good while to wrangle all these kittens. The wife's downstairs pulling up the minivan. We got ourselves a Honda Odyssey!\"\n\nHe goes on about the merits of his 2011 Honda Odyssey as the elevator stops at every floor on the way down. You nod politely and feign interest, counting down the seconds until you reach the lobby. Time dilates as if you are orbiting a black hole, each moment an infinity. And you must have said the word out loud because the father responds with, \"Infiniti doesn't make a minivan, though they have a nice line of luxury SUVs like the QX60 which the Wall Street Journal called...\"\n\nYou zone out once more and finally, after multiple eternities you and the family stampede spill out into the lobby like a burst bag of cereal. As the family disperses, you are left, a crumpled mess on the lobby floor. Oh, but what is this? You hear your name called in the sing song voice of an angel. You hear a melodious laugh that sounds like sunshine. Two figures approach you and you look up, only to be blinded by their radiance. You shield your eyes against the light, knowing without looking who it is that stands before you. It is Mikala and Ian!\n\nThey each extend a perfect hand as you kneel in deference, tears of joy streaming down your face. ",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  close_door: {
    id: 'close_door',
    text: "Your eyes go wide as you take in the enormity of the family stampede. Your hand frantically jabs the 'close door' button. \"Wait! No! Pleaase!\" Shouts the father as the doors begin to shut. His children begin crying, the baby screeches. You make eye contact with him and mouth the words, I'm so sorry, as the doors seal themselves. And then the moment is over.\n\nDown in the lobby you rush toward the exit in an attempt to not run into the family stampede after the unforgivable act you committed against them. But before you can reach the doors, you hear it: your name called in the sing song voice of a some tuneful bird. You hear too, a melodious laugh that sounds like sunshine. Two figures approach you and you look up, only to be blinded by their radiance. You shield your eyes against the light, knowing without looking who it is that stands before you. It is Mikala and Ian!\n\nThey each extend a perfect hand towards you as you kneel in deference, tears of joy streaming down your face. You try and speak, to put into words the emotions that surge within, but there are none that would do them justice. You feel their touch upon your shoulder and in voices like angel's voices, say how good it is to see you and how have you been and why does that family of seven look like they wish you ill?",
    choices: [
      { text: "Ask them THE question", nextNodeId: "ask_the_question" }
    ]
  },

  // === THE QUESTION & ENDINGS ===
  ask_the_question: {
    id: 'ask_the_question',
    text: "\"What are the details to your wedding and perhaps is there some sort of internet-based website that I might access that would have all of this information in a digital format?\"\n\nTheir answer?",
    choices: [
      { text: "Continue...", nextNodeId: "final_ending" }
    ]
  },

  final_ending: {
    id: 'final_ending',
    text: "Well, that's it! You got to see Ian and Mikala get married, hooray! I guess there was no need for them to make a wedding website with all the details and times and events, etc. Hooray!\n\nJust kidding...",
    isEnd: true
  }
};

export const START_NODE_ID = 'start';
