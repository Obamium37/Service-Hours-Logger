import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate} from "react-router-dom"


export function Dashboard() {
    
    const [error,setError] = useState("")
    const { logout } = useAuth("")
    const navigate = useNavigate()



    async function handleLogout(){
        setError('')

        try{

            await logout()
            navigate('/login')

        } catch(error) {
            console.log(error)
            setError('Failed to logout')
        }
    }





    return (
    
    <>
    
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Home</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Link to="/EnterHours" className="btn btn-primary w-100 mt-3">
                Enter Hours 
            </Link>           
        </Card.Body>
        <Card.Body>
            <Link to="/GetHours" className="btn btn-primary w-100 mt-3">
                Calculate Hours
            </Link>   
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">                      
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    
    </>
  )
}
