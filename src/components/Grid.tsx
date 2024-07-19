import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid({ isVisualizationRunningRef }: { isVisualizationRunningRef: MutableRefObject<boolean>; }) {
    const { grid, setGrid } = usePathfinding();
    const [isMouseDown, setISMouseDown] = useState(false);
    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setISMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };
    const handleMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setISMouseDown(false);
    }
    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        if (isMouseDown) {
            const newgrid = createNewGrid(grid, row, col);
            setGrid(newgrid);
        }
    }
    return (
        <div
            className={twMerge(
                " flex flex-col items-center justify-center border-sky-300 mt-5 ",

            )}
        >
            {grid.map((r, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {r.map((tile, tileIndex) => {
                        const { row, col, isStart, isEnd, isPath, isTraversed, isWall } = tile;
                        return (
                            <Tile
                                key={tileIndex}
                                row={tile.row}
                                col={tile.col}
                                isEnd={isEnd}
                                isStart={isStart}
                                isPath={isPath}
                                isTraversed={isTraversed}
                                isWall={isWall}
                                handleMouseDown={() => handleMouseDown(row, col)}
                                handleMouseUp={() => handleMouseUp(row, col)}
                                handleMouseEnter={() => handleMouseEnter(row, col)}
                            />
                        )
                    })}
                </div>
            ))}

        </div>
    )
}