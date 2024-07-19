import { initFunctionCost, initHeuristicCost } from "../../../utils/heuristics";
import { GridType, TileType } from "../../../utils/types";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { getUnTraversedNeighbors } from "../../../utils/unTraversed";

export const aStar = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles = [];
    const heuristicCost = initHeuristicCost(grid, endTile);
    const functionCost = initFunctionCost();

    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    functionCost[base.row][base.col] = base.distance + heuristicCost[base.row][base.col];
    base.isTraversed = true;
    const unTraversed = [base];
    while (unTraversed.length > 0) {
        unTraversed.sort((a, b) => {
            if (functionCost[a.row][a.col] === functionCost[b.row][b.col]) {
                return b.distance - a.distance;
            }
            return functionCost[a.row][a.col] - functionCost[b.row][b.col];
        })
        const currentTile = unTraversed.shift();
        if (currentTile) {
            if (currentTile.isWall) continue;
            if (currentTile.distance === Infinity) break;
            currentTile.isTraversed = true;
            traversedTiles.push(currentTile);
            if (isEqual(currentTile, endTile)) break;

            const neighbors = getUnTraversedNeighbors(grid, currentTile);
            for (let i = 0; i < neighbors.length; i++) {
                const distanceToNeighbor = currentTile.distance + 1;
                if (distanceToNeighbor < neighbors[i].distance) {
                    dropFromQueue(neighbors[i], unTraversed);
                    neighbors[i].distance = distanceToNeighbor;
                    functionCost[neighbors[i].row][neighbors[i].col] = distanceToNeighbor + heuristicCost[neighbors[i].row][neighbors[i].col]
                    neighbors[i].parent = currentTile;
                    unTraversed.push(neighbors[i]); 
                }
            }
        }
    }
    const path = []
    let current = grid[endTile.row][endTile.col];
    while (current != null) {
        current.isPath = true;
        path.unshift(current);
        current = current.parent!;
    }
    return { traversedTiles, path }
}