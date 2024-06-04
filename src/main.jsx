import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router';
import FirebaseProvider from './Provider/FirebaseProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <QueryClientProvider client={queryClient}>
        <div className='font-montserrat'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
      <ToastContainer></ToastContainer>
    </FirebaseProvider>
  </React.StrictMode>,
)
