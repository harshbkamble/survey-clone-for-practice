

import React, { useState } from 'react'
import { JsonEditor } from 'json-edit-react'

const Json = ({ elements, setElements }) => {
  const [jsonData, setJsonData] = useState({
    name: "Harsh",
    age: 23,  
    skills: ["React", "WordPress", "JavaScript"]


  })

  return (
    <div>
      <JsonEditor
        data={jsonData}
        setData={setJsonData} // optional, but allows editing
      />
    </div>
  )
}

export default Json



