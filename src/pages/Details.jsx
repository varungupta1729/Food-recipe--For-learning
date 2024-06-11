import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/useContext';

const Details = () => {
  const {id} = useParams();
  const{details , setDetails ,favoritesList , handleAddToFavorite } = useContext(GlobalContext);

  useEffect(()=>{
    async function getRecipe(){
      const response = await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json();
      if(data?.data){
        setDetails(data?.data);
      }
    }

    

    getRecipe();
  } , []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={details?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {details?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {details?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(details?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === details?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {details?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details
