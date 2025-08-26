import React from 'react'

const Json = () => {
  return (
    <div className='ml-80'>
      <h1 className="text-xl font-bold">Form JSON</h1>
      <pre className=" p-4 rounded">
        {JSON.stringify({
          title: "Sample Survey",
          questions: [
            {
              id: 1,
              type: "input",
              question: "What is your name?",
            },
            {
              id: 2,
              type: "radio",
              question: "What is your gender?",
              options: ["Male", "Female", "Other"],
            },
          ],
        }, null, 2)}
      </pre>
    </div>
  )
}

export default Json
