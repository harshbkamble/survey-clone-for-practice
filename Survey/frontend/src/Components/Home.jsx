
import React, { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import Sidebr from './Sidebr'
import Card from "./Card";

const Home = () => {
  const [elements, setElements] = useState(() => {
    const saved = localStorage.getItem("elements");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("elements", JSON.stringify(elements));
  }, [elements]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FORM_ELEMENT",
    drop: (item) => addElement(item.type),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addElement = (type) => {
    setElements((prev) => [...prev, type]);
  };

  const deleteElement = (index) => {
    setElements((prev) => prev.filter((_, idx) => idx !== index));
  };

  const renderElement = (type, index) => {
    switch (type) {
      case "radio":
        return (
          <div >
            <p className="font-semibold mb-2 ">Question: Choose one option</p>
            <div className="flex flex-col gap-2">
              {["Option 1", "Option 2", "Option 3", "Option 4"].map((opt, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="radio" name={`radio-${index}`} /> {opt}
                </label>
              ))}
            </div>
          </div>
        );
      case "rating":
        return (
          <div>
            <p className="font-semibold mb-2">Question: Rate from 1 to 5</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <span key={num} className="px-2 py-1 border rounded">
                  {num}
                </span>
              ))}
            </div>
          </div>
        );
      case "input":
        return (
          <div>
            <p className="font-semibold mb-2">Question: Enter your response</p>
            <input
              type="text"
              placeholder="Enter text"
              className="border p-2 rounded w-full"
            />
          </div>
        );
      case "checkbox":
        return (
          <div>
            <p className="font-semibold mb-2">Question: Select all that apply</p>
            {["Option A", "Option B", "Option C"].map((opt, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" /> {opt}
              </label>
            ))}
          </div>
        );
      case "dropdown":
        return (
          <div>
            <p className="font-semibold mb-2">Question: Select one option</p>
            <select className="border p-2 rounded w-full">
              <option>Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        );
      case "multidropdown":
        return (
          <div>
            <p className="font-semibold mb-2">Question: Select multiple options</p>
            <select multiple className="border p-2 rounded w-full">
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen ">
     
      <div
        ref={drop}
        className={`flex-1 p-4 border-2 rounded-lg transition bg-green-50 
        ${isOver ? "border-blue-500 bg-blue-50" : "border-dashed border-blue-400"}`}
      >
        <h1 className="text-xl font-bold mb-4">Drop survey elements here</h1>
        <button
          className="bg-blue-500 px-4 py-2 rounded text-white"
          onClick={() => addElement("input")}
        >
          Add Question
        </button>

        {elements.map((el, idx) => (
          <Card key={idx}>
            <div className="flex justify-between items-start ">
              <div className="flex-1">{renderElement(el, idx)}</div>
              <button
                className="ml-4 text-red-500 hover:text-red-700 font-bold"
                onClick={() => deleteElement(idx)}
                title="Delete"
              >
                &times;
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Vertical Line Divider */}
      <div className="w-px bg-gray-400 mx-4"></div>

      {/* Right side - for extra functions */}
     <div className="w-1/4 p-4 bg-gray-100 rounded-lg bg-green-50 border-2 border-dashed border-blue-400 ">
  <h2 className="text-lg font-semibold mb-2">Delete Panel</h2>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

  {/* <p className="text-sm text-blue-600">You can add your extra functions here.</p> */}
  <Sidebr />
</div>

    </div>
  );
};

export default Home;
