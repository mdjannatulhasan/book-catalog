import { IBookWithId } from '@/types/homeType';
import React, { useState, useRef, useEffect } from 'react';

interface MultiSelectProps {
    options: IBookWithId[];
    selectedOptions: string[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    options,
    selectedOptions,
    setSelectedOptions,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const optionsRef = useRef<HTMLDivElement | null>(null);

    const toggleOption = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item !== option)
            );
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            optionsRef.current &&
            !optionsRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={optionsRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer border  border-slate-200 px-4 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            >
                Select books
            </div>
            {isOpen && (
                <div className="absolute mt-2 py-2 bg-white border  border-slate-200 rounded-md shadow-lg w-full max-h-64 overflow-y-auto">
                    {options.map((option) => (
                        <label
                            key={option._id}
                            className="flex items-center space-x-2 px-4 py-2 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option._id)}
                                onChange={() => toggleOption(option._id)}
                                className="form-checkbox h-5 w-5 text-blue-500"
                            />
                            <span>{option.title}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
