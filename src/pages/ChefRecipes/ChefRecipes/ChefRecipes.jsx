import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
import { Spinner } from "react-bootstrap";

const ChefRecipes = () => {
   const { id } = useParams();
   const [info, setInfo] = useState();
   const [recipes, setRecipes] = useState();
   const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState(false);
   const [isRecipeLoading, setIsRecipeLoading] = useState(true);
   const [isRecipeError, setIsRecipeError] = useState(false);

   useEffect(() => {
      fetch(`https://recipe-share-server.vercel.app/chefs/${id}`)
         .then((res) => res.json())
         .then((res) => {
            setInfo(res);
            setIsLoading(false);
         })
         .catch((e) => {
            setIsError(true);
            setIsLoading(false);
            setInfo([]);
            console.log(e);
         });
   }, [id]);

   useEffect(() => {
      fetch(`https://recipe-share-server.vercel.app/recipes/${id}`)
         .then((res) => res.json())
         .then((res) => {
            setRecipes(res);
            setIsRecipeLoading(false);
         })
         .catch((e) => {
            setIsRecipeError(true);
            setIsRecipeLoading(false);
            setRecipes([]);
            console.log(e);
         });
   }, [id]);

   return (
      <>
         {isLoading && (
            <span className="d-flex align-items-center justify-content-center">
               <Spinner animation="border" variant="danger" /> ,{" "}
               <span className="ms-2">Loading ...</span>
            </span>
         )}
         {isError ? (
            <p className="text-center pt-5">
               Something went wrong ... make sure server is running
            </p>
         ) : (
            <div className="chef-bannar bg-info">
               <div className="container row m-auto justify-content-center align-items-center p-5">
                  <div className="col-md-4 col-12 text-center">
                     <div
                        className="chef-image-in-detail"
                        style={{ backgroundImage: `url(${info?.image})` }}
                     ></div>
                  </div>

                  <div className="col-md-8 col-12 mt-5 mt-md-0">
                     <h2 className="name mb-3 text-uppercase">{info?.name}</h2>
                     <p className="bio">{info?.bio}</p>
                     <p>
                        <span>{info?.experience} Years of Experience</span>
                     </p>
                     <p>
                        <span>{info?.recipes} Recipes</span>
                     </p>
                     <p>
                        <span>{info?.likes} Likes</span>
                     </p>
                  </div>
               </div>
            </div>
         )}
         {isRecipeLoading && (
            <span className="d-flex align-items-center justify-content-center">
               <Spinner animation="border" variant="danger" /> ,{" "}
               <span className="ms-2">Loading ...</span>
            </span>
         )}
         {isRecipeError ? (
            <p className="text-center pt-5">
               Something went wrong (Recipes) ... make sure server is running
            </p>
         ) : (
            <div className="container py-5">
               <h3 className="text-center text-decoration-underline mb-5">
                  Recipes of {info?.name}
               </h3>

               <div className="row justify-content-center">
                  {recipes?.map((r) => (
                     <SingleRecipe key={r.id} recipe={r} />
                  ))}
               </div>
            </div>
         )}
      </>
   );
};

export default ChefRecipes;
