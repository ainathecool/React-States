import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home({user , setuser}) {
 const [Lgout, setLgout] = useState(false)
  const logout = ()=>{
    setuser(null)
    setLgout(true)
    localStorage.clear()
  }
    const hist = useNavigate()
    useEffect(() => {
        // let user = localStorage.getItem("user")
        console.log(user)
        if(!user){
            hist("/login")
        }else{
           
        }
    }, [Lgout])
  return (
    <div>
      <button onClick={()=>logout()} >Logout</button>
    </div>
  )
}
