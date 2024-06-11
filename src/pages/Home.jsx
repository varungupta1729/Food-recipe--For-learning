import React, { useContext } from 'react'
import { GlobalContext } from '../Context/useContext'
import RecipeItem from '../components/RecipeItem';
import Spinner from '../components/Spinner';

const Home = () => {
    const { recipeList, loading } = useContext(GlobalContext);

    if (loading) return <div><Spinner/></div>;
  
    return (
      <div className="relative py-8 container mx-auto flex flex-wrap justify-center gap-10 w-full">
      
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item) => <RecipeItem item={item} />)
        ) : (
          <div >
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing to show. Please search something
            </p>
           
          </div>
        )}
        
      </div>
    )
}

export default Home
