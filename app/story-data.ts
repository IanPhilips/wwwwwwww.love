import { StoryNode } from './types';

export const STORY_NODES: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: "You wake up in a mysterious forest. The morning mist surrounds you, and you can hear strange sounds in the distance. A narrow path leads north, while dense bushes lie to the east.",
    choices: [
      { text: "Follow the path north", nextNodeId: "path_north" },
      { text: "Push through the bushes to the east", nextNodeId: "bushes_east" },
      { text: "Stay and examine your surroundings", nextNodeId: "examine_surroundings" }
    ]
  },
  
  path_north: {
    id: 'path_north',
    text: "You walk along the path and come across an old wooden bridge over a rushing river. The bridge looks unstable, but you can see a village on the other side. There's also a narrow path that follows the river downstream.",
    choices: [
      { text: "Cross the bridge carefully", nextNodeId: "cross_bridge" },
      { text: "Follow the river downstream", nextNodeId: "river_downstream" }
    ]
  },
  
  bushes_east: {
    id: 'bushes_east',
    text: "You push through the dense bushes and discover a hidden cave entrance. Strange glowing markings cover the stone walls around it. You also notice smoke rising from somewhere deeper in the forest.",
    choices: [
      { text: "Enter the cave", nextNodeId: "enter_cave" },
      { text: "Head toward the smoke", nextNodeId: "follow_smoke" }
    ]
  },
  
  examine_surroundings: {
    id: 'examine_surroundings',
    text: "You take a moment to look around carefully. In your pocket, you find a small compass and a note that reads: 'Trust the river.' You feel more prepared now.",
    choices: [
      { text: "Follow the path north with renewed confidence", nextNodeId: "path_north" },
      { text: "Explore the eastern bushes", nextNodeId: "bushes_east" }
    ]
  },
  
  cross_bridge: {
    id: 'cross_bridge',
    text: "You carefully step onto the bridge. Halfway across, a plank breaks beneath your feet! You grab onto the rope railing just in time and pull yourself to the other side, heart pounding.",
    choices: [
      { text: "Enter the village", nextNodeId: "village" }
    ]
  },
  
  river_downstream: {
    id: 'river_downstream',
    text: "Following the river, you discover a small boat tied to a dock. The river seems calm here, and you can see it leads toward what looks like a coastal town in the distance.",
    choices: [
      { text: "Take the boat to the coastal town", nextNodeId: "coastal_ending" },
      { text: "Walk back and cross the bridge instead", nextNodeId: "cross_bridge" }
    ]
  },
  
  enter_cave: {
    id: 'enter_cave',
    text: "Inside the cave, the glowing markings illuminate your way. You discover an ancient chamber with a crystal pedestal in the center. As you approach, the crystal begins to glow brighter, filling you with warmth and energy.",
    choices: [
      { text: "Touch the crystal", nextNodeId: "crystal_ending" }
    ]
  },
  
  follow_smoke: {
    id: 'follow_smoke',
    text: "You arrive at a small clearing where a friendly hermit tends a fire. 'Lost, are you?' he asks with a knowing smile. 'The forest has a way of calling to those who seek answers. Here, take this map—it will guide you home.'",
    choices: [
      { text: "Thank the hermit and use the map", nextNodeId: "hermit_ending" }
    ]
  },
  
  village: {
    id: 'village',
    text: "You enter the village and are greeted warmly by the locals. They've been expecting you—apparently, there's an old prophecy about a stranger from the forest. They offer you food, shelter, and a place in their community.",
    choices: [
      { text: "Accept their offer and start a new life", nextNodeId: "village_ending" }
    ]
  },
  
  village_ending: {
    id: 'village_ending',
    text: "You settle into village life and quickly become a valued member of the community. The mystery of how you arrived in the forest remains unsolved, but you've found something perhaps more valuable: a home and a family. Your adventure has led you exactly where you needed to be.\n\n🏡 THE END - The Village Life",
    isEnd: true
  },
  
  coastal_ending: {
    id: 'coastal_ending',
    text: "The boat carries you smoothly downriver to a bustling coastal town. As you step onto the dock, you realize this place feels familiar—perhaps you've been here before? You find work on a merchant ship, and your new adventure on the high seas begins.\n\n⚓ THE END - The Seafarer's Path",
    isEnd: true
  },
  
  crystal_ending: {
    id: 'crystal_ending',
    text: "As your hand touches the crystal, visions flood your mind. You see that the forest is a magical place, and you've been chosen as its new guardian. The crystal grants you the ability to understand and protect all life within these woods. You've found your true calling.\n\n✨ THE END - Guardian of the Forest",
    isEnd: true
  },
  
  hermit_ending: {
    id: 'hermit_ending',
    text: "Following the hermit's map, you navigate through the forest and find yourself at the edge of a road you recognize. As you look back at the forest, you realize the journey taught you valuable lessons about trust, courage, and self-reliance. You head home, forever changed by your adventure.\n\n🗺️ THE END - The Journey Home",
    isEnd: true
  }
};

export const START_NODE_ID = 'start';

