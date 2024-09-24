import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import IniciarS from '../components/IniciarS';
import Store from '../components/Store/Store';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>
    },
    {
        path: '/log',
        element: <IniciarS/>
        
    },
    {
        path: '/store',
        element: <Store/>// 404 page
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword/>
    },
    {
        path:"/sign-up",
        element: <SignUp/>
    }
])
  
export default router;