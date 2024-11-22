import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import IniciarS from '../components/IniciarS';
import Store from '../components/Store/Store';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import PaginaInicio from '../components/PaginaInicio';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducts from '../pages/AllProducts';
import CategoryList from '../components/CategoryList';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';



const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <PaginaInicio />
            },
            {
                path: '/store',
                element: <Store/>,// 404 page
              
            },
            {
                path: '/log',
                element: <IniciarS/>
                
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword/>
            },
            {
                path:'/sign-up',
                element: <SignUp/>
            },
            {
                path: 'product-category',
                element: <CategoryProduct/>,
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'search',
                element: <SearchProduct/>
            },
            {
                path: '/admin-panel',
                element: <AdminPanel/>,
                children : [
                    {
                        path : 'all-users',
                        element : <AllUsers/>
                    },
                    {
                        path : 'all-products',
                        element : <AllProducts/>
                    }
                ]
            
            },
           
        ],
    },
   
])
  
export default router;