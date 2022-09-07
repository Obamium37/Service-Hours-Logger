import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import { Signup } from './Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import {PrivateRoute} from './PrivateRoute'
import { Dashboard} from './Dashboard'
import {EnterHours} from "./EnterHours"
import { GetHours } from "./GetHours"
import { AfterSubmit } from './AfterSubmit';




function App() {

  return(
  
    <Container 

      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    
    >
      <div className="w-100" style={{maxWidth: '400px' }} >
        <Router>
          <AuthProvider>
            <Routes>
              <Route 
                path="/" 
                element={
                  <PrivateRoute children={<Dashboard/>}></PrivateRoute>
                }/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/EnterHours" element={<EnterHours/>}/>
              <Route path="/GetHours" element={<GetHours/>}/>
              <Route path="/AfterSubmit" element={<AfterSubmit/>}/>
              
              
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>

  )
}

export default App;

