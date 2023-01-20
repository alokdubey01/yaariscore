import React from 'react'

export default function Twenty48() {
  return (
    <div>
              <iframe
        style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}
        title="cube"
        // src="http://localhost:8000/2048"
        src="http://ec2-44-203-146-100.compute-1.amazonaws.com:8000/2048"
      />
    </div>
  )
}
