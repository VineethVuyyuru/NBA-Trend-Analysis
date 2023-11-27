import React from 'react'

function Header(){
    let Links =[
        {name:"HOME",link:"/"},
        {name:"Query 1",link:"/query1"},
        {name:"Query 2",link:"/query2"}
      ];

    return(
        <>
            <div className='absolute top-0 left-0 bg-blue-500 w-100 h-15'>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full my-3 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                        <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                            <a href={link.link} className='text-white hover:text-blue-400 duration-500 no-underline  active:text-black'>{link.name}</a>
                        </li>))
                    }
                </ul>
            </div>
        </>
    )
}

export default Header