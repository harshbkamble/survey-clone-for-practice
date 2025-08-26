import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Card from "./Card";

const Home = () => {
  const [elements, setElements] = useState([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FORM_ELEMENT",
    drop: (item) => addElement(item.type),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  const addElement = (type) => {
    setElements((prev) => [...prev, type])
  }

  const deleteElement = (index) => {
    setElements((prev) => prev.filter((_, idx) => idx !== index))
  }

  const renderElement = (type, index) => {
    switch (type) {
      case "radio":
        return (
          <div>
            <p className="font-semibold mb-2">Question: Choose one option</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name={`radio-${index}`} /> Option 1
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name={`radio-${index}`} /> Option 2
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name={`radio-${index}`} /> Option 3
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name={`radio-${index}`} /> Option 4
              </label>
            </div>
          </div>
        )
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
        )
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
        )
      case "checkbox":
        return (
          <div>
            <p className="font-semibold mb-2">Question: Select all that apply</p>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Option A
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Option B
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Option C
            </label>
          </div>
        )
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
        )
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
        )
      default:
        return null
    }
  }

  return (
    <div
      ref={drop}
      className={`min-h-full p-4 border-2 rounded-lg transition bg-green-50 min-h-screen
      ${isOver ? "border-blue-500 bg-blue-50" : "border-dashed border-blue-400"}`}
    >
      <h1 className="text-xl font-bold mb-4">Drop survey elements here</h1>
      {elements.map((el, idx) => (
        <Card key={idx}>
          <div className="flex justify-between items-start">
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
  )
}

export default Home