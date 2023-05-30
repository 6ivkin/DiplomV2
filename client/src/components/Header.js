import React from 'react'
// images
// icons
import { FiMenu } from 'react-icons/fi'
import { SlBag } from 'react-icons/sl'
// link
import { Link } from 'react-router-dom'
// components
import Cart from '../components/Cart'
import CategoryNavMobile from '../components/CategoryNavMobile'
import SearchForm from '../components/SearchForm'

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
        <div>
          {/* menu */}
          <div>
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div>
            <CategoryNavMobile />
          </div>
          {/* Logo */}
          <Link to={'/'}>
            <h1 className='uppercase text-accent text-5xl'>Shop</h1>
          </Link>
          {/* searchform - show only on desktop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]'>
            <SearchForm />
          </div>
          {/* phone & cart */}
          <div>
            <div>Need help? 123 456 789</div>
            {/* cart icon */}
            <div className='relative cursor-pointer'>
              <SlBag className='text-2xl'/>
              {/* amount */}
              <div>2</div>
            </div>
            {/* cart */}
            <div className='bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300'>
              <Cart />
            </div>
          </div>
        </div>
        {/* searchform - show on mobile only */}
        <div className='lg:hidden'>
          <SearchForm />
        </div>
      </div>
    </header>
  )
};

export default Header;
