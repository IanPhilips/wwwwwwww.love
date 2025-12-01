export interface StoryNode {
  id: string;
  text: string;
  choices?: Choice[];
  isEnd?: boolean;
}

export interface Choice {
  text: string;
  nextNodeId: string;
}

export interface GameState {
  currentNodeId: string;
  history: string[];
  hasCompleted: boolean;
}

