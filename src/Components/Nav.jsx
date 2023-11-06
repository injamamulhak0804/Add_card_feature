import React from 'react'
import { SlBasket } from 'react-icons/sl'; 
import { Link } from 'react-router-dom'

const Nav = ({ count, setShow, show, warning }) => {
    return (
        <nav className='list-none text-xl 
        flex justify-between h-20 px-10 items-center'>
            <Link>
                <li>SHOPIFY</li>
            </Link>
            <li className='text-3xl realative cursor-pointer' onClick={() => setShow(!show)}>
                <span className='text-sm bg-red-500 px-1 rounded-full text-white select-none relative left-6 top-4'>
                    {count}
                </span>
                <SlBasket className="text-3xl " />
                <span className={warning ? "text-sm select-none fixed top-[6rem] right-25 bg-red-500 p-3 rounded font-light text-white" : "hidden select-none"} >
                    <p>Already Added</p>
                </span>
            </li>
        </nav>
    )
}

export default Nav