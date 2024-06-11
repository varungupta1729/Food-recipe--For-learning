import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState("");
  
  const[details , setDetails] =useState(null);
  const [favoritesList, setFavoritesList] = useState([]);


  function handleAddToFavorite(currentItem){

    let cpyFavList = [...favoritesList];
    const index   = cpyFavList.findIndex(item=>item.id===currentItem.id);
    if(index === -1){
        cpyFavList.push(currentItem);
    }
    else{
        cpyFavList.splice(index);
    }


    setFavoritesList(cpyFavList);
    console.log(favoritesList);

  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
        setLoading(true);
      const url = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchData}`
      );
      const data = await url.json();
    //   console.log(data);
      
      if(data?.data.recipes){
        setLoading(false);
        setRecipeList(data?.data.recipes);
        console.log(data?.data.recipes);
        setSearchData("");
        
      }
    } catch (error) {
      console.log(error);
    }
 
  }

  return (
    <GlobalContext.Provider value={{ searchData, setSearchData, handleSubmit , recipeList , details , setDetails , handleAddToFavorite , favoritesList}}>
      {children}
    </GlobalContext.Provider>
  );
}
