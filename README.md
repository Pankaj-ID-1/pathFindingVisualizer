<h1 align="center">
  <br>
  <a style ="color:black; text-decoration:none;" href="https://pankaj-id-1.github.io/pathFindingVisualizer/">Path Finder</a>
</h1>
<h4 align="center">A web app to help visualizing typical graph searching algorithms</h4>
<p align="center">This is a visualization tool designed to demonstrate the inner workings of various pathfinding algorithms as they navigate from point A to point B. It also offers an engaging look at different maze/pattern generation algorithms and how they craft intricate mazes/patterns. Explore and enjoy the tool!
</p>
<h1 align="center">
  <a style ="color:black; text-decoration:none;" href="https://pankaj-id-1.github.io/pathFindingVisualizer/">video</a>
</h1>

<h2 align="center">Development Stack</h2>
<h1 align="center">
<img width="20%" height="20%" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js logo">
<img width="20%" height="20%" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript logo">
<img width="20%" height="20%" alt="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042" width="350" height="70" style="visibility:visible;max-width:100">
</h1>

<h2>Brief About Algorithm</h2>

### Breadth First Search
* Breadth First Search explores equally in all directions.
* This is an incredibly useful algorithm, not only for regular traversal, but also for procedural map generation, flow field pathfinding, distance maps, and other types of map analysis.
* This may be the algorithm of choice to identify nearby places of interest in GPS.
* BFS guarantees the shortest path.
Below is the result for Breadth first search:

<video src="videos/BFS.mp4"></video>

### Depth First Search
- Traverses by exploring as far as possible down each path before backtracking.
- As useful as the BFS: DFS can be used to generate a topological ordering, to generate mazes, to traverse trees, to build decision trees, to discover a solution path with hierarchical choices…
- DFS does not guarantee the shortest path.
Below is how the DFS works
![dfs](https://user-images.githubusercontent.com/39909903/91169511-5723df00-e68c-11ea-87ed-896412c347b2.PNG)
### Dijkstra
- Dijkstra's Algorithm lets us prioritize which paths to explore. Instead of exploring all possible paths equally, it favors lower cost paths.
- We can assign lower cost to encourage moving on roads while assigning high cost on highway to avoid them.
- It is the algorithm of choice for finding the shortest path paths with multiple destinations.
Below is the demo
![dikstra](https://user-images.githubusercontent.com/39909903/91166789-c0552380-e687-11ea-9e87-e023e381eb06.PNG)

### A* (A-Star)
- A* is a modification of Dijkstra's Algorithm that is optimized for a single destination.
- Dijkstra's Algorithm can find paths to all locations; A* finds paths to one location. It prioritizes paths that seem to be leading closer to a goal.
- In a game, we could set costs to be attracted or discouraged in going near some objects : how useful it is for an AI.
- It is more or less the golden ticket or industry standard algorithm for all applications finding directions between two locations.
