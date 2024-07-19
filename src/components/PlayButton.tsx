import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
// import { BsFillPlayFill } from "react-icons/bs";
// import { FaPlayCircle } from "react-icons/fa";
// import { GrPowerReset } from "react-icons/gr";
import { RxReset } from "react-icons/rx";

export function PlayButton({
    handlerRunVisualizer,
    isDisabled,
    isGraphVisualized,

}: {
    isDisabled: boolean;
    isGraphVisualized: boolean;
    handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
        disabled={isDisabled}
        onClick={handlerRunVisualizer}
        className=" disable:pointer-event-none  rounded-full disabled:opacity-50 flex items-center justify-center transition duration-200 shadow-lg hover:shadow-green-500/50 bg-[#3ba755] "
        >
            {isGraphVisualized ?<RxReset className="text-[#433b4b] w-9 h-9"/>:<BsFillPlayFill className=" text-[#433b4b] w-9 h-9"/>}
            {/* {isGraphVisualized ? (
                  <RxReset className="text-gray-400 h-8 w-8" />
                ) : (
                  <FaPlayCircle className="text-[#3ba755] h-8 w-8" />
                )} */}
        </button>
    )
}