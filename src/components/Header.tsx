import { Link } from 'react-router-dom'
import logo from '/Logo.png'

export const Header = ()=>{
    return(
        <header className='flex flex-wrap sm:flex-row flex-col sm:items-center  items-center sm:h-[95px] justify-between p-3 sm:px-10 gap-5'> 
            <nav className='flex items-center gap-2 cursor-pointer'>
                <img src={logo} alt="app logo"  className='w-[65px]'/>
                <span className='font-montserrat text-xl'>
                    Girls Manegiment
                </span>
            </nav>
            <nav className='flex grow gap-3 font-roboto items-center justify-center sm:justify-end sm:gap-9'>
                <Link to="/" className='hover:border-2 hover:bg-violet-400 hover:text-white p-2 rounded cursor-pointer text-center sm:w-[90px]'>Home</Link>
                <Link to="/spent" className='hover:border-2 hover:bg-violet-400 hover:text-white p-2 rounded cursor-pointer text-center sm:w-[90px]'>spent</Link>
                <Link to="/me" className='hover:border-2 hover:bg-violet-400 hover:text-white p-2 rounded cursor-pointer text-center sm:w-[90px]'>About me</Link>
            </nav>
        </header>
    )
}