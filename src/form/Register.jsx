import React from 'react'
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';


function Register() {
  return (
    <div>
      <Navbar />
      <div className='py-12 text-center justify-center '>
        <h2 className='text-custom-ter text-4xl '>Register</h2>

        <form action="" className='justify-center ml-14 left-3 border-4 w-64'>
      
       <div className="field">
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        Name
      </label>
      <div className='relative'>
        <input
          type='text'
          placeholder='David John'
          className='w-36 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
        />
        <span className='absolute top-1/2 left-4 -translate-y-1/2'>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.72 12.886a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.167v1.666a.833.833 0 1 1-1.667 0v-1.666a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v1.666a.833.833 0 1 1-1.667 0v-1.666a4.17 4.17 0 0 1 1.22-2.947ZM10 3.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.166 2.5a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Z"
              opacity={0.8}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#9CA3AF"
            />
          </svg>
        </span>
      </div>
      </div>

      <div className="field">
      <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        Email
      </label>
      <div className='relative'>
        <input
          type='email'
          placeholder='info@yourmai.com'
          className='w-36 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
        />
        <span className='absolute top-1/2 left-4 -translate-y-1/2'>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity={0.8} fillRule="evenodd" clipRule="evenodd" fill="#9CA3AF">
              <path d="M3.334 4.167A.838.838 0 0 0 2.501 5v10c0 .456.377.833.833.833h13.333a.838.838 0 0 0 .834-.833V5a.838.838 0 0 0-.834-.833H3.334ZM.834 5c0-1.377 1.123-2.5 2.5-2.5h13.333c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.334a2.505 2.505 0 0 1-2.5-2.5V5Z" />
              <path d="M.985 4.522a.833.833 0 0 1 1.16-.205l7.856 5.499 7.855-5.5a.833.833 0 1 1 .956 1.366l-8.333 5.833a.833.833 0 0 1-.956 0L1.19 5.682a.833.833 0 0 1-.205-1.16Z" />
            </g>
          </svg>
        </span>
      </div>
      </div>

    

      <div  className=' '>     
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        Name
      </label>
      <div className='relative'>
        <input
          type='text'
          placeholder='David John'
          className='w-36 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
        />
        <span className='absolute top-1/2 left-4 -translate-y-1/2'>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.72 12.886a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.167v1.666a.833.833 0 1 1-1.667 0v-1.666a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v1.666a.833.833 0 1 1-1.667 0v-1.666a4.17 4.17 0 0 1 1.22-2.947ZM10 3.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.166 2.5a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Z"
              opacity={0.8}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#9CA3AF"
            />
          </svg>
        </span>
      </div>

      <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        Email
      </label>
      <div className='relative'>
        <input
          type='email'
          placeholder='info@yourmai.com'
          className='w-36 bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
        />
        <span className='absolute top-1/2 left-4 -translate-y-1/2'>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity={0.8} fillRule="evenodd" clipRule="evenodd" fill="#9CA3AF">
              <path d="M3.334 4.167A.838.838 0 0 0 2.501 5v10c0 .456.377.833.833.833h13.333a.838.838 0 0 0 .834-.833V5a.838.838 0 0 0-.834-.833H3.334ZM.834 5c0-1.377 1.123-2.5 2.5-2.5h13.333c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.334a2.505 2.505 0 0 1-2.5-2.5V5Z" />
              <path d="M.985 4.522a.833.833 0 0 1 1.16-.205l7.856 5.499 7.855-5.5a.833.833 0 1 1 .956 1.366l-8.333 5.833a.833.833 0 0 1-.956 0L1.19 5.682a.833.833 0 0 1-.205-1.16Z" />
            </g>
          </svg>
        </span>
      </div>
</div>

<div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-custom-sec px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Register
            </a>
            </div>
        </form>

<div className='text-center '>
  <p className='text-2xl text-custom-ter'>Already Have an Account? </p>
 <Link    to="/login"  className='text-custom-sec text-4xl'>  
 Login
  </Link>
</div>
         </div>

         </div>
  
  )
}

export default Register
