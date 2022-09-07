import {React, useRef, useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { db } from "../firebase-config";
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
export function SetGoal() {

    const goalRef = useRef()
    const [loading] = useState(false)
    const {currentUser} = useAuth()

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        addDoc(collection(db, currentUser.email), {

            Target: Number(goalRef.current.value)
      
      
        })
        .then(() => {
    
        console.log('Message submitted 👍')
        navigate("/AfterSubmit")
        
            
        })
        .catch((error) => {
        alert('Unable to Submit. Error Message: ' + error.message)
    
        }); 



    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="Goal" >
                        <Form.Label>Enter Target Number of Hours</Form.Label>
                        <Form.Control type="number" ref={goalRef} required />
                    </Form.Group>
            
                    <Button disabled={loading} className="w-100" type="submit">
                        Submit 
                    </Button>      
                </Form>
            </Card.Body>
        </Card>
    )
}
