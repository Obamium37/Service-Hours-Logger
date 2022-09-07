import React from 'react'
import { Link } from "react-router-dom";

export function AfterSubmit() {
  return (
    <>
        <h1>Submited Sucessfully!</h1>
        <br></br>
        <div className="w-100 text-center mt-2">
            <Link to="/">Go To Home</Link>
        </div>
        <br></br>
        <div className="w-100 text-center mt-2">
            <Link to="/EnterHours">Enter More Hours</Link>
        </div>

    
    </>


  )
}
