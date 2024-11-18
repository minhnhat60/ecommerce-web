import HomePage from "../pages/HomePage/HomePage";
import OrtherPage from "../pages/OrtherPage/OrtherPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFound from "../pages/NotFound/NotFound";
import LayoutDefault from "../Layouts/LayoutDefault";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/orther",
                element: <OrtherPage />
            },
            {
                path: "/products",
                element: <ProductsPage />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]