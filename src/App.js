import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import React, { useEffect, useState } from "react";
import Asd from "./pages/Asd";


function App() {
  const [user, setuser] = useState(null)
  useEffect(() => {
    let us = JSON.parse(localStorage.getItem('user'))
    if(us){
      setuser(us)
    }
  }, [])
  
  return (
    <div className="App">
    <h1></h1>
     <BrowserRouter >
        <Routes >
          <Route path="/" element={<Home user={user} setuser={setuser}/>} />
          <Route path="/:id" element={<Asd />} />
          <Route path="login" element={<Login setuser={setuser}/>} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;



// import React, { useEffect, useState } from 'react'

// export default function App() {
//   const [Category, setCategory] = useState("science")
//   const [limit, setlimit] = useState(10)
// useEffect(() => {
//   fetch('https://the-trivia-api.com/api/questions?limit='+limit+'&categories='+Category, {
//   headers: {
//     'Content-Type': 'application/json'
//   },
// }).then(res=>res.json()).
// then(data=> console.log(data))


// }, [Category , limit])

//   return (
//   <>
    

//     <button onClick={(e)=>setCategory("science")} >science</button>
//     <button onClick={(e)=>setCategory("History")} >History</button>
//   </>  
//   )
// }
