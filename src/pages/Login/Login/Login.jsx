import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
   getAuth,
   signInWithEmailAndPassword,
   signInWithPopup,
   GoogleAuthProvider,
   GithubAuthProvider,
} from "firebase/auth";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Login = () => {
   const auth = getAuth();
   const provider = new GoogleAuthProvider();
   const provider2 = new GithubAuthProvider();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const location = useLocation();
   console.log("login page location", location);
   const from = location.state?.from?.pathname || "/";
   const navigate = useNavigate();
   const redirectToHome = () => {
      navigate(from, { replace: true });
   };

   const handleEmailInput = (e) => {
      setEmail(e.target.value);
   };

   const handlePasswordInput = (e) => {
      setPassword(e.target.value);
   };

   const handleLogin = (event) => {
      toastr.info("clicked");
      event.preventDefault();
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
         .then(() => {
            toastr.success("Login successfully");
         })
         .catch((error) => {
            toastr.error(error.message);
         });
   };
   const loginWithGoogle = (event) => {
      event.preventDefault();
      signInWithPopup(auth, provider)
         .then((result) => {
            toastr.success("Login successfully");
            console.log(result);
            redirectToHome();
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const loginWithGithub = (event) => {
      event.preventDefault();
      signInWithPopup(auth, provider2)
         .then((result) => {
            console.log(result);
            toastr.success("Login successfully");
            redirectToHome();
         })
         .catch((error) => {
            console.log(error);
            toastr.error(error);
         });
   };

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-6 d-none d-md-flex d-flex justify-content-center align-items-center">
               <img src="/img/login.png" alt="" className="w-50" />
            </div>
            <div className="col-md-6">
               <Container className="form mx-auto my-5 p-3 rounded bg-dark text-light">
                  <h3 className="text-center mb-4">Welcome Back!</h3>
                  <Form onSubmit={handleLogin}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                           type="text"
                           name="email"
                           value={email}
                           onChange={handleEmailInput}
                           placeholder="Enter email"
                           required
                        />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                           type="password"
                           name="password"
                           value={password}
                           onChange={handlePasswordInput}
                           placeholder="Password"
                           required
                        />
                     </Form.Group>

                     <Button
                        variant="primary"
                        className="w-100 text-uppercase"
                        type="submit"
                     >
                        Login
                     </Button>

                     <hr />

                     <div className="firebase-login">
                        <Button
                           variant="outline-primary"
                           onClick={loginWithGoogle}
                           className="w-100 mb-3 text-uppercase"
                        >
                           Login With Google
                        </Button>
                        <Button
                           variant="outline-primary"
                           onClick={loginWithGithub}
                           className="w-100 text-uppercase"
                        >
                           Login With GitHub
                        </Button>
                     </div>
                     <br />
                     <Form.Text className="text-secondary">
                        Don't Have an Account?{" "}
                        <Link to="/register">Register</Link>
                     </Form.Text>
                     <Form.Text className="text-success"></Form.Text>
                     <Form.Text className="text-danger"></Form.Text>
                  </Form>
               </Container>
            </div>
         </div>
      </div>
   );
};

export default Login;
