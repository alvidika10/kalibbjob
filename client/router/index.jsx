import {createBrowserRouter, redirect} from "react-router-dom";
import LandingPage from "../views/LandingPage";
import Card from "../views/Card";
import CardDetail from "../views/CardDetail";
import Layout from "../src/components/Layout";
import NotFound from "../views/NotFound";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [{
            path: '/card',
            element: <Card />
        },
        {
            path: '/card-detail/:id',
            element: <CardDetail />
        },
    ]},
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router