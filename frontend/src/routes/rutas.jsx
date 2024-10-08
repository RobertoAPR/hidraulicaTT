import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import IniciarS from '../components/IniciarS';
import Store from '../components/Store/Store';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import PaginaInicio from '../components/PaginaInicio';



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
                children : []
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
                path:"/sign-up",
                element: <SignUp/>
            }
        ],
    },
   
])
  
export default router;