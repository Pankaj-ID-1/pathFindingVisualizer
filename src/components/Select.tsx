import { ChangeEvent } from "react";

export function Select({
    value,
    onChange,
    options,
    label,
    isDisabled,
}: {
    value: string | number;
    label: string;
    onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string | number; name: string }[];
    isDisabled?: boolean;
}) {
    return (
        <div className="flex flex-col items-start gap-1">
            <label className="text-xs text-gray-300 ml-1" htmlFor={label}>
                {label}
            </label>
            <select
                disabled={isDisabled}
                className=" disabled:pointer-events-none block appearance-none bg-[#240643] hover:shadow-lg  rounded-lg leading-tight  active:border-gray-300 text-gray-300  cursor-pointer transition ease-in-out duration-200 hover:shadow-indigo-500/50 p-2 min-w-[200px] sm:min-w-full"
                id={label}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
