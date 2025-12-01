# Choose Your Own Adventure

An interactive choose-your-own-adventure story built with Next.js, TypeScript, and React.

## Features

- **Interactive Story**: Navigate through a branching narrative with multiple choices
- **Multiple Endings**: Discover 4 different story endings based on your decisions
- **Back Navigation**: Go back to previous choices at any time
- **Progress Saving**: Your progress is automatically saved to localStorage
- **Skip to End**: Once you've completed the story, you can skip directly to an ending on future visits
- **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations

## Getting Started

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to start your adventure.

### Building for Production

```bash
npm run build
npm start
```

## How It Works

### Story Structure

The story is defined in `app/story-data.ts` as a collection of nodes. Each node contains:
- `id`: Unique identifier for the node
- `text`: The story text to display
- `choices`: Array of choices that lead to other nodes
- `isEnd`: Boolean indicating if this is an ending node

### Game State

The game tracks:
- Current story node
- History of visited nodes (for back navigation)
- Whether the player has completed the story

### LocalStorage

When a player reaches an ending for the first time, the completion status is saved to localStorage. On subsequent visits, they'll see a "Skip to Ending" button to jump directly to an ending.

## Customizing the Story

To create your own adventure:

1. Edit `app/story-data.ts` to add your own story nodes
2. Each node should have a unique `id`
3. Connect nodes using the `nextNodeId` in choices
4. Mark ending nodes with `isEnd: true`
5. Update `START_NODE_ID` if you want to change the starting node

Example node:
```typescript
my_node: {
  id: 'my_node',
  text: "Your story text here...",
  choices: [
    { text: "Choice 1", nextNodeId: "node_id_1" },
    { text: "Choice 2", nextNodeId: "node_id_2" }
  ]
}
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **LocalStorage**: Client-side persistence

## License

MIT
