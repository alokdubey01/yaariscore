import React, {useFetch} from "react";

export default function Aviator() {
  const [data, loading] = useFetch(
    "https://yaariscore.azurewebsites.net/aviator"
  ); 
  return (
    <div>
      <iframe
        style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}
        title="cube"
        // src="http://localhost:8000/aviator"
        src="https://yaariscore.azurewebsites.net/aviator"
      />
    </div>
  );
}
