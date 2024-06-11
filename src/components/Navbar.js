import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../Context/useContext'

const Navbar = () => {
  const{searchData , setSearchData , handleSubmit} = useContext(GlobalContext);
//   console.log(searchData);


  return (
    <div className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <div><h1 className='text-4xl'>LOGO</h1></div>
      <form onSubmit={(event)=>handleSubmit(event)}>
      <input
       className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
       placeholder='Search...'
       value={searchData}
       onChange={(data)=>setSearchData(data.target.value)} 
       />
       </form>
      <div className=' flex justify-normal gap-3 align-middle'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/favorites"}>Favorites</NavLink>
      </div>
    </div>
  )
}

export default Navbar
