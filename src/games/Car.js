import React from "react";

export default function Car() {
  return (
    <div>
      <iframe
        style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}
        title="cube"
        // src="http://localhost:8000/car"
        src="https://yaariscore.azurewebsites.net/car"
      />
    </div>
  );
}
