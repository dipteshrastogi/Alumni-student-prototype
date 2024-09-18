import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Register from './components/Register.jsx'
import AuthPage from './AuthPage.jsx'
import LoginPage from './components/LoginPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route path='' element={<AuthPage/>} />
     <Route path='register' element={<Register/>}  />
     <Route path='login' element={<LoginPage/>}  />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)