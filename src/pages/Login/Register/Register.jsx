import React, { useContext, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link,useNavigate ,useLocation } from 'react-router-dom';
import { AuthContext, } from '../../../providers/AuthProvider';
import { useState } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { getAuth } from 'firebase/auth';



const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState(false)

    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameValid, setNameValid] = useState(false);
    const [photoValid, setPhotoValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);    

    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const redirectToHome =()=>{
    navigate(from, { replace: true })
    }

    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const handlePhotoUrlInput = (e) => {
        setPhoto(e.target.value)
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePassInput = (e) => {
        setPassword(e.target.value)
    }

    const validator = (e) => {
        e.preventDefault();
        setError(true);

        const urlRegex = /^(https?:\/\/)?([\w\d\-]+\.){1,}[a-z]{2,}(:[\d]{1,5})?(\/[^\s]*)?$/i;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^.{6,}$/;

        const validName = name.length > 0;
        const validPhoto = urlRegex.test(photo);
        const validEmail = emailRegex.test(email);
        const validPass = passwordRegex.test(password);


        setNameValid(validName);
        setPhotoValid(validPhoto);
        setEmailValid(validEmail);
        setPasswordValid(validPass);

        handleRegister(validName && validPhoto && validEmail && validPass)
    }


    const handleRegister = (valid) => {
        if(valid){
            

            createUser(email, password)
                .then(result => {
                    toastr.success("Account Created Sucesssfully");
                    // const createdUser = result.user; 
                    redirectToHome();
                })
                .catch(error => {
                    console.log(error);
                    toastr.error(error.message)
                })
                
            } else{
                toastr.error("Unable To Register")
            }

 
     
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }
 
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 d-none d-md-flex d-flex justify-content-center align-items-center">
                    <img src="/img/register.png" alt="" className='w-50'/>
                </div>
                <div className="col-md-6">
                <Container className='form mx-auto my-5 p-3 rounded bg-dark text-light'>
                    <h3 className='text-center mb-4'>Please Register</h3>
                    <Form onSubmit={validator}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' value={name} onChange={handleNameInput} placeholder="Your Name" required />
                            {error && !nameValid && <small className='text-danger'>Invalid Name Input</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' value={photo} onChange={handlePhotoUrlInput}  placeholder="Photo URL" required />
                            {error && !photoValid && <small className='text-danger'>Invalid Photo URL</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" name='email' value={email}  onChange={handleEmailInput}  placeholder="Enter email" required />
                            {error && !emailValid && <small className='text-danger'>Invalid Email Input</small>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' value={password} onChange={handlePassInput}  placeholder="Password" required />
                            {error && !passwordValid && <small className='text-danger'>Invalid Password ... minimum length 6 character</small>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleAccepted}
                                type="checkbox"
                                name="accept"
                                label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                        </Form.Group>
                        <Button variant="primary" className='w-100' disabled={!accepted} type="submit">
                            Register
                        </Button>
                        <br />
                        <br />
                        <Form.Text className="text-secondary">
                            Already Have an Account? <Link to="/login">Login</Link>
                        </Form.Text>
                        <Form.Text className="text-success">

                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Container>
                </div>
            </div>
        </div>
    );
};

export default Register;