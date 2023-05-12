import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './comp/navbar'
import Home from './comp/home'
import CartPage from './comp/cartPage'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cartpage' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
