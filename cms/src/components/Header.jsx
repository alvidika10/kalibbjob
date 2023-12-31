import {Link, useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'

export default function Header() {

    const navigate = useNavigate()

    const handleLogOut = async (e) => {
        try {
            e.preventDefault()
            localStorage.removeItem('access_token')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Log Out Success',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')   
        } catch (error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
            })
            console.log(error)
        }
    }

    return (
        <>
        
        <section>
        <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900">
            <div
            className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
            >
            <a  className="flex items-center">
                <span
                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >CMS JOB</span
                >
            </a>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                >
                <path
                    stroke="currentColor"
        
                    d="M1 1h15M1 7h15M1 13h15"
                />
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                >
                <li>
                    <a
                  
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                    >   <Link to={'/'}> Dashboard </Link></a
                    >
                </li>
                <li>
                    <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    ><Link to={'/company-list'}> Categories </Link></a
                    >
                </li>
                <li>
                    <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    ><Link to={'/register'}> Register Admin </Link></a
                    >
                </li>
                <li>
                    <a
                    onClick={handleLogOut}
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    > Sign Out </a
                    >
                </li>
              
                </ul>
            </div>
            </div>
        </nav>
        </section>
  
        </>
    )
}