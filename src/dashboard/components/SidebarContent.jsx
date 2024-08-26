import React from 'react'
import Header from '../components/Header'
import { NavLink, Route } from 'react-router-dom'
import { HomeIcon,
  Cog6ToothIcon,
  ArrowUpLeftIcon,Battery0Icon, BeakerIcon,

} from "@heroicons/react/20/solid"
function SidebarContent() {

  const routes = [
    {
      path: '/app/dashboard', // the url
      icon: <HomeIcon />, // the component being exported from icons/index.js
      name: 'Dashboard', // name that appear in Sidebar
    },
    {
      path: '/app/forms',
      icon:<Cog6ToothIcon />,
      name: 'Forms',
    },
    {
      path: '/app/cards',
      icon: <ArrowUpLeftIcon />,
      name: 'Cards',
    },
    {
      path: '/app/charts',
      icon: <BeakerIcon />,
      name: 'Charts',
    },
    {
      path: '/app/buttons',
      icon: <Battery0Icon />,
      name: 'Buttons',
    },
    {
      path: '/app/modals',
      icon: 'ModalsIcon',
      name: 'Modals',
    },
    {
      path: '/app/tables',
      icon: 'TablesIcon',
      name: 'Tables',
    },
    {
      icon: 'PagesIcon',
      name: 'Pages',
      routes: [
        // submenu
        {
          path: '/login',
          name: 'Login',
        },
        {
          path: '/create-account',
          name: 'Create account',
        },
        {
          path: '/forgot-password',
          name: 'Forgot password',
        },
        {
          path: '/app/404',
          name: '404',
        },
        {
          path: '/app/blank',
          name: 'Blank',
        },
      ],
    },
  ]

  return (
    <div>
      <Header />
      <div className="py-4 text-custom-sec dark:text-gray-400">
      <a className="ml-6 text-lg text-custom-pri font-bold text-poppins dark:text-gray-200" href="#">
        WCU
      </a>

      <ul className='mt-6'>
    {routes.map((route) => {
     <li className='relative px-6 py-3' key={route.name}>
      <NavLink 
                      exact
                      to={route.path}
                      className="inline-flex items-center text-custom-pri w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      activeClassName="text-custom-sec dark:text-gray-100">
                         <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  >

                  </span>
                  <span className="ml-4">{route.name}</span>
                </Route>
                <span className="w-5 h-5" aria-hidden="true" > {route.icon} </span>
                
      </NavLink>
     </li>
    })}
      </ul>
      </div>
    </div>
  )
}

export default SidebarContent
