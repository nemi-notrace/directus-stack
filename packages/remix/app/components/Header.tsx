import { NavLink } from '@remix-run/react'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header>
      <DarkModeToggle />
      <NavLink
        to="/signin"
        className="inline-flex justify-center px-4 py-2 mt-4 mr-4 text-sm font-medium transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:border-gray-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 md:mt-0"
      >
        Login
      </NavLink>
    </header>
  )
}
