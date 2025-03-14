import React, {useState} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {logo} from '../../assets/index'
import { allItems } from '../../constants';

const Header = ()=> {
    const [showAll, setShowAll] = useState(false)
  return (
    <div> 
     <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* =========Image start here============== */} 
        <div className='headerHover'>
           <img className="w-24 mt-2" src={logo} alt="logo"  />
         </div>
      {/* Image end here */}
      {/* Deliver start here */}
      <div className='headerHover'>
        <LocationOnIcon/>
        <p className='text-sm text-lightText font-light flex flex-col'>
           Deliver to{""}
          <span className='text-sm font-semibold -mt-1 text-whiteText'>
            Ethiopia
          </span>
        </p>
      </div>
      {/* Deliver end here */}
      {/* Search start here */}
      <div className='h-10 rounded-md flex flex-grow relative'>
        <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
          All <span></span> 
            <ArrowDropDownIcon/>
          </span>
        {showAll &&(
            <div>
              <ul className='absolute w-56 h-80 top-10 left-0  overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                {
                  allItems.map((item) => (
                    <li key={item._id} className='text-sm w-56 tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>
                        {item.title}
                    </li>
                  ))
                }
              </ul>
            </div>
          )}
        <input 
         className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" 
        type="text"
        />
        <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
          <SearchIcon />
        </span>
      </div>
      {/* Search end here */}
      {/* Signin start here */}

      {/* Signin end here */}
      {/* Orders start here */}

      {/* Orders end start here */}
      </div>
    </div>
  )
}

export default Header