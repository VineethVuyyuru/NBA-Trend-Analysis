import React from 'react'

function Header(){
    let Links =[
        {name:"HOME",link:"/"},
        {name:"Query 1",link:"/query1"},
        {name:"Query 2",link:"/query2"}
      ];

    return(
        <>
            <div className='shadow-md w-full fixed top-0 left-0'>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                        </li>))
                    }
                </ul>
            </div>
        </>
    )
}

export default Header