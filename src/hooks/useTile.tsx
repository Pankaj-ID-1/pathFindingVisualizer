import { useContext } from "react"
import { TileContext } from "../context/TileContext"

export const useTile = () => {
    const context = useContext(TileContext)
    if(!context){
        throw new Error("usePathfinding must be used within a PathfindingProvider")
    }
    return context
}