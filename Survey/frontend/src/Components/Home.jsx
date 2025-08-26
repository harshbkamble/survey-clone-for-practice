
import React, { useState } from 'react'
import { useDrop } from 'react-dnd'

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

const renderElement = (type, index) => {
  switch (type) {
    case "radio":
      return (
        <div key={index} className="mb-4">
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
        <div key={index} className="mb-4">
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
        <div key={index} className="mb-4">
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
        <div key={index} className="mb-4">
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
        <div key={index} className="mb-4">
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
        <div key={index} className="mb-4">
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
      className={`min-h-full p-4 border-2 rounded-lg transition bg-green-50 min-h-screen p-4 rounded-lg
      ${isOver ? "border-blue-500 bg-blue-50" : "border-dashed border-blue-400"}`}
    >
      <h1 className="text-xl font-bold mb-4">Drop survey elements here</h1>
      {elements.map((el, idx) => renderElement(el, idx))}
    </div>
  )
}

export default Home

