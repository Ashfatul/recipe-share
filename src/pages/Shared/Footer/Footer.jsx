import { Button, Form, InputGroup } from "react-bootstrap";

const Footer = () => {
   return (
      <div className="bg-dark text-white">
         <div className="container py-5">
            <div className="row">
               <div className="col-md-4">
                  <h2>RecipeShare</h2>
                  <p className="mt-3">
                     RecipeShare is a unique recipe sharing website that offers
                     a platform for passionate chefs and cooking enthusiasts to
                     discover delicious recipes from around the world.
                  </p>
               </div>
               <div className="col-md-4">
                  <h4 className="mb-3">Contact Information</h4>
                  <div>
                     <h6>Address</h6>

                     <p className="mt-2">
                        123 Main Street Suite 456 City, State ZIP
                     </p>

                     <h6>Phone</h6>
                     <p className="mt-2">(555) 555-5555</p>

                     <h6>Email</h6>
                     <p>info@example.com</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <h4 className="mb-3">Get Updates</h4>

                  <InputGroup className="mb-3">
                     <Form.Control placeholder="your-email@example.com" />
                     <Button variant="outline-secondary" id="button-addon2">
                        Subscribe
                     </Button>
                  </InputGroup>
               </div>
            </div>

            <hr />

            <p className="text-center">
               Copyright &copy; RecipeShare | ALL right Reserved | 2023
            </p>
         </div>
      </div>
   );
};

export default Footer;
