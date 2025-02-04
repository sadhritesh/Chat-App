import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SocketContextProvider } from "./context/SocketContext.jsx";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <SocketContextProvider>
          <App/>
        </SocketContextProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>,
)
