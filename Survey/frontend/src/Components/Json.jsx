
import React, { useState, useEffect } from 'react'
import { JsonEditor } from 'json-edit-react'

const Json = () => {
  // Load elements from localStorage initially
  const [jsonData, setJsonData] = useState(() => {
    try {
      const savedElements = localStorage.getItem("elements");
      return {
        title: "Form",
        headerview: "advanced",
        elements: savedElements ? JSON.parse(savedElements) : []
      };
    } catch (error) {
      console.error("Failed to parse saved elements:", error);
      return {
        title: "Form",
        headerview: "advanced",
        elements: []
      };
    }
  });

  // Sync jsonData with localStorage whenever it changes
  useEffect(() => {
    try {
      if (jsonData && Array.isArray(jsonData.elements)) {
        localStorage.setItem("elements", JSON.stringify(jsonData.elements));
      } else {
        localStorage.setItem("elements", JSON.stringify([]));
      }
    } catch (error) {
      console.error("Failed to save elements:", error);
    }
  }, [jsonData]);

  // update local state if you want JsonEditor to be editable
  const handleJsonChange = (updatedJson) => {
    try {
      // If user deletes everything, reset to safe default instead of crashing
      if (!updatedJson || typeof updatedJson !== "object") {
        setJsonData({
          title: "Form",
          headerview: "advanced",
          elements: []
        });
      } else {
        setJsonData(updatedJson);
      }
    } catch (error) {
      console.error("Error updating JSON:", error);
      setJsonData({
        title: "Form",
        headerview: "advanced",
        elements: []
      });
    }
  };

  return (
    <div className='ml-100'>
      <h2 className="font-bold mb-2 mt-20 ">Form JSON Preview</h2>
      <JsonEditor
        data={jsonData}
        setData={handleJsonChange} 
      />
    </div>
  )
}

export default Json;
