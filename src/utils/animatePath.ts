import { EXTENDED_SLEEP_TIME, PATH_TILE_STYLE, SLEEP_TIME, SPEEDS, TRAVERSED_TILE_STYLE } from "./constants";
import { isEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

export const animatePath = (
    traversedTile: TileType[],
    path: TileType[],
    endTile: TileType,
    startTile: TileType,
    speed: SpeedType
) => {
    for (let i = 0; i < traversedTile.length; i++) {
        setTimeout(() => {
            const tile = traversedTile[i];
            if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`
            }
        }, SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value)
    }
    setTimeout(() => {
        for (let i = 0; i < path.length; i++) {
            setTimeout(() => {
                const tile = path[i];
                if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
                    document.getElementById(`${tile.row}-${tile.col}`)!.className = `${PATH_TILE_STYLE} animate-path`
                }
            }, EXTENDED_SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value)
        }
    }, SLEEP_TIME * traversedTile.length * SPEEDS.find((s) => s.value === speed)!.value)
}