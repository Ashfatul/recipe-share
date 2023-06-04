import React, { useEffect, useState } from "react";

const RandomProduct = () => {
   const [allRecipe, setAllRecipe] = useState();
   const [latest, setLatest] = useState();

   useEffect(() => {
      fetch("https://recipe-share-server.vercel.app//recipes/")
         .then((res) => res.json())
         .then((res) => setAllRecipe(res))
         .catch((e) => console.log(e));
   }, []);

   const getRecipe = allRecipe?.length;

   useEffect(() => {
      fetch(
         `https://recipe-share-server.vercel.app//recipes/latest/${getRecipe}`
      )
         .then((res) => res.json())
         .then((res) => setLatest(res))
         .catch((e) => console.log(e));
   }, [getRecipe]);

   return (
      <div className="container py-5">
         <h2 className="text-center">Latest Recipe</h2>
         <div className="row">
            <div className="col-md-6">
               <h1>{latest?.recipe_name}</h1>
               <p>Rating : {latest?.rating}/5</p>
               <b>ingredients Required: </b>
               <ul>
                  {latest?.ingredients?.map((ind) => (
                     <li key={ind}>{ind}</li>
                  ))}
               </ul>
               <b>Cooking Methode: </b>
               <p>{latest?.cookingMethod}</p>
            </div>
            <div className="col-md-6">
               <img
                  src="/img/cat-and-food-cartoon-png.png"
                  className="w-100"
                  alt="placeholder"
               />
            </div>
         </div>
      </div>
   );
};

export default RandomProduct;
