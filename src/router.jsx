import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Details from "./Details/Details";

import Display from "./Display/Display"
import JokeCard from "./Display/JokeCard";
const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/detailsFetch",
        element:<Details/>
    },
    {
        path:"/display/:type/:no",
        element:<Display/>
    },
    {
        path:"/display/:id",
        element:<JokeCard/>
    }

])

export default router;