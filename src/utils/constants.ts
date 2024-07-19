import { AlgorithmSelectType, MazeSelectType, SpeedSelectType } from "./types";
const viewportWidth = document.documentElement.clientWidth;
const viewportHeight = document.documentElement.clientHeight;
var h = Math.floor(viewportHeight / 22);

if (h % 2 == 0) {
  h--;
}
var w = Math.floor(viewportWidth / 22);

if (w % 2 == 0) {
  w--;
}
export const MAX_ROWS = h - 6;
export const MAX_COLS = w;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

// export const TILE_STYLE = "hover:bg-[#cc7f66] bg-[#3b2d52] w-[22px] h-[22px] border-[#160f1d] border-t-2 border-r-2 ";
// export const TILE_STYLE = "hover:bg-[#cc7f66] w-[22px] h-[22px] border-[#160f1d] border-t-2 border-r-2 ";
// // export const Tile_Style = "hover:bg-[#cc7f66] w-[22px] h-[22px] border-[#160f1d] border-t-2 border-r-2"
// export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-[#48368f] "
// export const START_TILE_STYLE = TILE_STYLE + " bg-[#7084e9] "
// export const END_TILE_STYLE = TILE_STYLE + " bg-[#d39246] "
// export const WALL_TILE_STYLE = TILE_STYLE + " bg-[#8e3c41] "
// export const PATH_TILE_STYLE = TILE_STYLE + " bg-[#5c71da] "

export const TILE_STYLE =
  "w-[22px] h-[22px] hover:bg-[#cc7f66] border-t-2 border-r-2 border-[#160f1d] bg-[#3b2d52]";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-[#48368f]";
export const START_TILE_STYLE = TILE_STYLE + " bg-[#7084e9]";
export const END_TILE_STYLE = TILE_STYLE + " bg-[#d39246]";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-[#8e3c41]";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-[#5c71da]";

export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "BINARY_TREE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" }
]
export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "DIJKSTRA" },
  { name: "A-Star", value: "A_STAR" },
  { name: "Breadth First Search", value: "BFS" },
  { name: "Depth First Search", value: "DFS" },
]
export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];
export const SLEEP_TIME = Math.floor(MAX_COLS + MAX_ROWS) / 6;
export const EXTENDED_SLEEP_TIME = Math.floor((MAX_ROWS + MAX_COLS) / 3);