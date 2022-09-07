import {React, useState, useEffect} from 'react'
import * as XLSX from 'xlsx'
import { Button,Card } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { db } from '../firebase-config';
import {collection, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore"; 


export function GetHours() {
  
  
  const { currentUser } = useAuth();
  const [Data, setData] = useState([]);
  const dataCollectionRef = collection(db, currentUser.email);
 

  const updateName = async (id) => {
    const userDoc = doc(db, currentUser.email, id);
    const input = prompt('Enter Edit to Name')

    const newFields = { Name: input};
    
    await updateDoc(userDoc, newFields);
  };


  const updateHours = async (id) => {
    const userDoc = doc(db, currentUser.email, id);
    const input = prompt('Enter Edit to Hours')

    const newFields = { Hours: Number(input)};
    
    await updateDoc(userDoc, newFields);
  };

  const updateDes = async (id) => {
    const userDoc = doc(db, currentUser.email, id);
    const input = prompt('Enter Edit to Description')

    const newFields = { Description: input};
    
    await updateDoc(userDoc, newFields);
  };

  const updateDate = async (id) => {
    const userDoc = doc(db, currentUser.email, id);
    const input = prompt('Enter Edit to Date')

    const newFields = { Date: input};
    
    await updateDoc(userDoc, newFields);
  };

  const updateCon = async (id) => {
    const userDoc = doc(db, currentUser.email, id);
    const input = prompt('Enter Edit to Contact Info')

    const newFields = { Contact: input};
    
    await updateDoc(userDoc, newFields);
  };

  const updateLoc = async (id) => {
    const userDoc = doc(db, currentUser.email, id);
    const input = prompt('Enter Edit to Location Info')

    const newFields = { Locations: input};
    
    await updateDoc(userDoc, newFields);
  };

  const deleteSer = async (id) => {
    const userDoc = doc(db, currentUser.email, id);
    await deleteDoc(userDoc);
  }






  useEffect(() => {

    const getData = async () => {
      const data = await getDocs(dataCollectionRef);
      setData(data.docs.map((doc) => ({...doc.data(), id: doc.id })))

    }

    getData();
  }, [dataCollectionRef])

  



  async function download(){
    const getData = async () => {
      const data = await getDocs(dataCollectionRef);
      setData(data.docs.map((doc) => ({...doc.data()})))
      const newData=Data.map(row=>{
        delete row.tableData 
        delete row.id
        return row
      })
      const workSheet=XLSX.utils.json_to_sheet(newData)
      const workBook=XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workBook,workSheet,"Service Data")
      //Buffer
      let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
      //Binary string
      XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
      //Download
      XLSX.writeFile(workBook,"export.xlsx")

    }

    getData();

  }
  return (

    <>
      <div className="App">
        <h1 align="center">Service Info</h1>

        <br></br>

        <Button onClick={download}  className="w-100">Export Data to Excel Spreadsheet</Button>

        {Data.map((Data) => {
          
          return (

            <>
              <Card>
                <Card.Body>
                  <p> Name: {Data.Name} </p>
                  <Button onClick={() => {updateName(Data.id)}}>Edit</Button>
                  <p> Hours: {Data.Hours} </p>
                  <Button onClick={() => {updateHours(Data.id)}}>Edit</Button>
                  <p> Contact: {Data.Contact} </p>
                  <Button onClick={() => {updateCon(Data.id)}}>Edit</Button>
                  <p> Description: {Data.Description} </p>
                  <Button onClick={() => {updateDes(Data.id)}}>Edit</Button>
                  <p> Date: {Data.Date} </p>
                  <Button onClick={() => {updateDate(Data.id)}}>Edit</Button>
                  <p> Location: {Data.Locations} </p>
                  <Button onClick={() => {updateLoc(Data.id)}}>Edit</Button>
                  <br></br>
                  <Button onClick={() => {deleteSer(Data.id)}}>Delete Entry</Button>
                  
                </Card.Body>
              </Card>
            </>

            
          )
        })}

      </div>
    
      
      
    
    </>

  )
}
