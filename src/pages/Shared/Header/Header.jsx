import { useContext } from "react";
import {
   Container,
   Nav,
   Navbar,
   OverlayTrigger,
   Tooltip,
} from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { NavLink, Link } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Header = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleLogout = (event) => {
      event.preventDefault();
      logOut();
      toastr.success("Logout successfullly");
   };

   const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
         {user.displayName}
      </Tooltip>
   );

   return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
               <Link to="/" className="nav-link">
                  <Navbar.Brand>
                     <span className="text-primary">Recipe</span>Share
                  </Navbar.Brand>
               </Link>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           isActive ? "nav-link active" : "nav-link"
                        }
                     >
                        Home
                     </NavLink>
                     <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                           isActive ? "nav-link active" : "nav-link"
                        }
                     >
                        Blog
                     </NavLink>
                  </Nav>
                  <Nav>
                     {user ? (
                        <div>
                           <OverlayTrigger
                              placement="bottom"
                              delay={{ show: 250, hide: 400 }}
                              overlay={renderTooltip}
                           >
                              <img
                                 src={user.photoURL}
                                 style={{
                                    height: "30px",
                                    width: "30px",
                                    marginRight: "10px",
                                 }}
                              />
                           </OverlayTrigger>

                           <NavLink
                              className="btn btn-primary"
                              onClick={handleLogout}
                           >
                              Logout
                           </NavLink>
                        </div>
                     ) : (
                        <NavLink to="/login" className="btn btn-primary">
                           Login
                        </NavLink>
                     )}
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;
