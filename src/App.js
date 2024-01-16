import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Shop from './components/Shop'
import Cart from './components/Cart'
import NotFound from "./components/NotFound"
import User from "./components/User"
import { AuthProvider } from './components/auth'
import Login from './components/Login'
import RequireAuth from "./components/RequireAuth"
import { ShopContextProvider } from './components/ShopContext'

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <AuthProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </AuthProvider>
            </ShopContextProvider>
        </div>
    )
}

export default App
