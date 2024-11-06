import React, { useState, useEffect } from 'react';

const DiwaliTask = () => {
    const [pattern, setPattern] = useState('blinking');
    const [bgColor, setBgColor] = useState('blue');
    const values = ["blinking", "fade", "static"];

    const handlePattern = (e) => {
        const value = e.target.value;
        setPattern(value);
    };

    const handleInput = (e) => {
        const value = e.target.value;
        setBgColor(value);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border border-gray-200 rounded-md p-4">
                <h1 className="text-[28px] font-medium text-orange-500">Diwali Light Management</h1>
                <div className="main flex flex-row gap-3 items-center mt-4">
                    <div
                        className={`w-[50px] h-[45px] border border-red-600 bg-${bgColor}-500 ${pattern}`}
                        style={{ backgroundColor: bgColor }}
                    ></div>
                    <h1 className="text-[24px] font-normal">Pattern:</h1>
                    <select onChange={handlePattern} value={pattern}>
                        {values.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    <p className="text-gray-500 text-2xl font-medium">Interval:</p>
                    <input
                        type="text"
                        className="border rounded-lg focus:outline-none px-2 py-1"
                        placeholder="Enter color"
                        onChange={handleInput}
                    />
                </div>
            </div>
        </div>
    );
};

export default DiwaliTask;
