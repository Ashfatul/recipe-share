import { useEffect, useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Button, Card } from "react-bootstrap";

const SingleRecipe = ({ recipe }) => {
   const [isFav, setIsFav] = useState(false);

   const addToFav = () => {
      const fav = localStorage.getItem("Favourite_recipes");
      if (fav === null) {
         localStorage.setItem("Favourite_recipes", JSON.stringify([recipe]));
         setIsFav(true);
      } else {
         let data = JSON.parse(fav);
         data.push(recipe);
         localStorage.setItem("Favourite_recipes", JSON.stringify(data));
         setIsFav(true);
      }
      toastr.info("Favourate added");
   };

   useEffect(() => {
      const fav = localStorage.getItem("Favourite_recipes");
      if (fav !== null) {
         const data = JSON.parse(fav);
         setIsFav(data.find((f) => f.id === recipe?.id));
      }
   }, [recipe.id, setIsFav]);

   return (
      <div className="col-md-6 mb-5 d-flex">
         <Card border="secondary bg-light">
            <Card.Body>
               <Card.Title>{recipe.recipe_name}</Card.Title>
               <Card.Text>Rating: {recipe.rating}/5</Card.Text>

               <b>Ingredients required:</b>

               <ul>
                  {recipe?.ingredients.map((ing) => (
                     <li key={ing}>{ing}</li>
                  ))}
               </ul>

               <b>Cooking Method:</b>
               <Card.Text>{recipe?.cookingMethod}</Card.Text>
            </Card.Body>

            <Button onClick={addToFav} disabled={isFav}>
               {isFav ? "Favourite Recipe" : "Add to Favourite"}
            </Button>
         </Card>
      </div>
   );
};

export default SingleRecipe;
