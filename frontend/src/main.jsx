import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Rutas from './routes/rutas.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './store/store'


createRoot(document.getElementById('root')).render(
 
    //<StrictMode>
    //<ToastContainer />
    <Provider store={store}>
         <RouterProvider router={Rutas} />
    </Provider>
  //</StrictMode>,
  
 

)

