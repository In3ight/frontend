import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "./Page/LoginPage";

function App() {
  const [hello, setHello] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8080/api/hello")
  //       .then((response) => setHello(response.data))
  //       .catch((error) => console.log(error));
  //   }, []);

  return (
    <div>
      {/* 백엔oginPag드에서 가져온 데이터입니다: {hello} */}
      <LoginPage />
    </div>
  );
}

export default App;
