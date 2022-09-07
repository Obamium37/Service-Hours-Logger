import { useAuth } from '../contexts/AuthContext'
import { db } from "../firebase-config";
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import {React, useRef, useState} from 'react'
import {Card, Button, Form} from "react-bootstrap"


export function EnterHours() {


  const [loading] = useState(false)
  
  const navigate = useNavigate()
  const nameRef = useRef();
  const hoursRef = useRef();
  const conRef = useRef();
  const desRef = useRef();
  const dateRef = useRef();
  const locRef = useRef();
  const { currentUser } = useAuth(); 

  async function handleSubmit(e){
    e.preventDefault()

    try{

    
      addDoc(collection(db, currentUser.email), {

        Name: nameRef.current.value,
        Hours: hoursRef.current.value,
        Contact: conRef.current.value,
        Description: desRef.current.value,
        Date: dateRef.current.value,
        Locations: locRef.current.value
  
  
      })
      .then(() => {
  
        console.log('Message submitted 👍')
        navigate("/AfterSubmit")
        
  
      })
      .catch((error) => {
        alert('Unable to Submit. Error Message: ' + error.message)
  
      });




      navigate("/AfterSubmit")
  
  
      


      
    } catch(error){
      console.log(error)
    } 
  }


    





  return (
    <>

      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group id="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>

            <Form.Group id="Hours" >
              <Form.Label>Number of Hours</Form.Label>
              <Form.Control type="number" ref={hoursRef} required />
            </Form.Group>

            <Form.Group id="Contact">
              <Form.Label>Contact info</Form.Label>
              <Form.Control type="text" ref={conRef} />
            </Form.Group>

            <Form.Group id="Date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" ref={dateRef} required />
            </Form.Group>

            <Form.Group id="Des">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" ref={desRef} required />
            </Form.Group>
            <Form.Group id="Loc">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" ref={locRef} required />
            </Form.Group>
            <br></br>

            <Button disabled={loading} className="w-100" type="submit">
              Submit Hours
            </Button>


  

          </Form>
        </Card.Body>
      </Card>
    
    
    </>
    
  )
}

