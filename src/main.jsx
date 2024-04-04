import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

   <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)