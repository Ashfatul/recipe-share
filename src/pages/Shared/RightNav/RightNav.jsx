import { Button, ListGroup } from "react-bootstrap";
import {
   FaGoogle,
   FaGithub,
   FaTwitter,
   FaFacebook,
   FaPinterest,
} from "react-icons/fa";

const RightNav = () => {
   return (
      <div>
         <h3 className="mt-4 mb-4">Please Login</h3>
         <Button className="mb-3" variant="outline-success">
            {" "}
            <FaGoogle /> Login with Google
         </Button>
         <Button variant="outline-success">
            {" "}
            <FaGithub /> Login with Github
         </Button>
         <div>
            <ListGroup className="mt-4">
               <ListGroup.Item className="bg-success text-white">
                  {" "}
                  <FaTwitter></FaTwitter> SHARE ON TWITTER
               </ListGroup.Item>
               <ListGroup.Item className="bg-success text-white">
                  {" "}
                  <FaFacebook></FaFacebook> SHARE ON FACEBOOK
               </ListGroup.Item>
               <ListGroup.Item className="bg-success text-white">
                  {" "}
                  <FaPinterest></FaPinterest> PIN ON PINTEREST
               </ListGroup.Item>
            </ListGroup>
         </div>
      </div>
   );
};

export default RightNav;
