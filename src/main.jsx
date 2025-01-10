import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './index.css'
import router from './routes/router';
import AuthProvider from './context-providers/Auth/AuthProvider';
import ThemeProvider from './context-providers/Theme/ThemeProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
