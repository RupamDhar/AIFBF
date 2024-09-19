import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ContactUs from './Components/ContactUs.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Home from './Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/aboutus',
    element: <AboutUs />
  },
  {
    path: '/contactus',
    element: <ContactUs />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
