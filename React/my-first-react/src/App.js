
import './App.css';

import {Form,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container>
      <h1>
        Hello !
      </h1>
      <Form>
        <Form.Group controlId="formE-mail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
        </Form.Group>

         <Form.Group  controlId="formPlaintextPassword">
          <Form.Label column sm="2">Password</Form.Label>
          <Col sm="20">
            <Form.Control type="password" placeholder="Password" />
          </Col>
         </Form.Group>
          
        <Button variant="primary ">Login</Button>

        
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
       
      </Form>
    </Container>
    );
  }


export default App;
