import React from "react";
import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";

const App = () => {
  const [file, setFile] = useState(null);
  const upload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", file);
    Axios.post("http://localhost:4000/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("Success ", res);
    });
  };
  return (
    <div>
      <input
        type="file"
        name="image"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={(e) => upload(e)}>Submit</button>
    </div>
  );
};

export default App;
