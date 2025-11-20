import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaHandshake } from 'react-icons/fa'

const navItemBase =
  'flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow transition-all duration-200 text-[14px] sm:text-[16px]'

const iconCircle = 'w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center'

const Navbar = () => {
  return (
    <header className="w-full border-b border-pure-greys-25 bg-pure-greys-5">
      <div className="mx-auto flex w-11/12 max-w-maxContent items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="leading-[0.8]">
            <span className="block text-[20px] font-extrabold text-blue-300">T</span>
            <span className="block -mt-2 text-[20px] font-extrabold text-blue-300">T</span>
          </div>
          <span className="text-[18px] sm:text-[20px] font-semibold text-neonorange-800">Taste and Trial</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden gap-3 md:flex items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navItemBase} ${isActive ? 'text-neonorange-800 font-semibold' : 'text-black'}`
            }
          >
            <span className={`${iconCircle} bg-blue-25`}>
              <AiFillHome className="text-blue-400" />
            </span>
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navItemBase} relative ${isActive ? 'text-neonorange-800 font-semibold' : 'text-black'}`
            }
          >
            <span className={`${iconCircle} bg-blue-25`}>
              <CgProfile className="text-blue-400" />
            </span>
            About
          </NavLink>

          <NavLink
            to="/partner"
            className={({ isActive }) =>
              `${navItemBase} ${isActive ? 'text-neonorange-800 font-semibold' : 'text-black'}`
            }
          >
            <span className={`${iconCircle} bg-blue-25`}>
              <FaHandshake className="text-blue-400" />
            </span>
            Partner with us
          </NavLink>
        </nav>

        {/* Login Button */}
        <div className="flex items-center gap-9">
          <Link
            to="/login"
            className="rounded-full bg-neonorange-800 px-5 py-2 text-white font-semibold shadow hover:opacity-90"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar