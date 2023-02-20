import React from 'react'

export default function Maze() {
  const [data, loading] = React.useFetch(
    "https://yaariscore.azurewebsites.net/aviator"
  ); 
  console.log(data)
  return (
    <div>
    <iframe
      style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}
      title="cube"
      // src="http://localhost:8000/maze"
      src="https://yaariscore.azurewebsites.net/maze"
    />
  </div>
  )
}
