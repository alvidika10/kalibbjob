import { createBrowserRouter, redirect} from "react-router-dom";
import TableJob from '../views/TableJob'
import Login from '../views/Login'
import Register from '../views/Register'
import CompanyList from '../views/CompanyList'
import Edit from '../views/Edit'
import Add from '../views/Add'
import AddCompany from "../views/AddCompany";
import EditCompany from "../views/EditCompany";
import Layout from "../components/Layout";
import NotFound from "../views/NotFound";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <TableJob />,
                loader: () => {
                    if (!localStorage.getItem('access_token')) {
                        throw redirect('/login')
                    }
                    return null
                }
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/company-list',
                element: <CompanyList />,
            },
            {
                path: '/edit/:id',
                element: <Edit />,
            },
            {
                path: '/add',
                element: <Add />,
            },
            {
                path: '/add-company',
                element: <AddCompany />,
            },
            {
                path: '/edit-company/:id',
                element: <EditCompany />,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        loader: () => {
            if (localStorage.getItem('access_token')) {
                throw redirect('/')
            }
            return null
        }
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router