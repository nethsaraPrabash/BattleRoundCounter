import React from 'react'
import { useNavigate } from 'react-router-dom'


const home = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/dashboard`;
        navigate(path);
    }
  return (
<div className='h-screen flex justify-center items-center'>

<button className="inline-flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:border-transparent" onClick={routeChange}>

    <span>
        LET'S GO
    </span>
    <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>

</button>
  
</div>
  )
}

export default home
