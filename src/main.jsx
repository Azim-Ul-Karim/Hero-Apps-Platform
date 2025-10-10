import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'

import ReactGA from "react-ga4";
ReactGA.initialize("G-LVM2KBCDT1");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)