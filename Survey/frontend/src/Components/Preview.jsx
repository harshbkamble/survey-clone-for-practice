
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Preview = () => {
  const [elements, setElements] = useState([]);

  // Load survey from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("elements");
    if (saved) {
      setElements(JSON.parse(saved));
      console.log("Loaded elements:", JSON);
      console.log("Loaded parsed elements:", JSON.parse(saved));
    }
  }, []);

  const renderElement = (el, index) => {
    switch (el.type) {
      case "radio":
        return (
          <div>
            <p className="font-semibold mb-2 ">Question: {el.question}</p>
            <div className="flex flex-col gap-2">
              {el.options.map((opt, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="radio" name={`radio-${index}`} /> {opt}
                </label>
              ))}
            </div>
          </div>
        );
      case "checkbox":
        return (
          <div>
            <p className="font-semibold mb-2">Question: {el.question}</p>
            {el.options.map((opt, i) => (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" /> {opt}
              </label>
            ))}
          </div>
        );
      case "dropdown":
        return (
          <div>
            <p className="font-semibold mb-2">Question: {el.question}</p>
            <select className="border p-2 rounded w-full">
              <option>Select</option>
              {el.options.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
          </div>
        );
      case "multidropdown":
        return (
          <div>
            <p className="font-semibold mb-2">Question: {el.question}</p>
            <select multiple className="border p-2 rounded w-full">
              {el.options.map((opt, i) => (
                <option key={i}>{opt}</option>
              ))}
            </select>
          </div>
        );
      case "rating":
        return (
          <div>
            <p className="font-semibold mb-2">Question: {el.question}</p>
            <div className="flex gap-2">
              {el.options.map((num) => (
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
            <p className="font-semibold mb-2">Question: {el.question}</p>
            <input
              type="text"
              placeholder="Enter text"
              className="border p-2 rounded w-full"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-white-200 min-h-screen ml-90 mt-15">
      <h1 className="text-xl font-bold mb-4">Survey Preview</h1>
      {elements.length === 0 ? (
        <p className="text-gray-500">No questions added yet.</p>
      ) : (
        elements.map((el, idx) => (
          <Card key={idx}>
            {renderElement(el, idx)}
          </Card>
        ))
      )}
    </div>
  );
};

export default Preview;















