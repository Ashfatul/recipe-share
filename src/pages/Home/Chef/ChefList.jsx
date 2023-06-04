import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { Spinner } from "react-bootstrap";

const ChefList = () => {
   const [chefs, setChefs] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      fetch("https://recipe-share-server.vercel.app//chefs")
         .then((res) => res.json())
         .then((res) => {
            setChefs(res);
            setIsLoading(false);
         })
         .catch(() => {
            setIsError(true);
            setIsLoading(false);
            setChefs([]);
         });
   }, []);

   return (
      <div className="container py-5">
         <h1 className="text-center text-uppercase">List Of Chefs</h1>

         <div className="row">
            {isLoading && (
               <span className="d-flex align-items-center justify-content-center">
                  <Spinner animation="border" variant="danger" /> ,{" "}
                  <span className="ms-2">Loading ...</span>
               </span>
            )}
            {isError && (
               <p className="text-center">
                  Something went wrong ... make sure server is running
               </p>
            )}
            {(chefs?.length !== 0 || chefs?.length !== undefined) &&
               chefs?.map((chef) => (
                  <ChefCard chefData={chef} key={chef?.id} />
               ))}
         </div>
      </div>
   );
};

export default ChefList;
