
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as   Router, Routes , Route } from 'react-router-dom'
import Shop from './pages/shop/shop.jsx';
import Cart from './pages/cart/cart.jsx';
import Navbar from './components/nav.jsx';
import {Shopcontextprovider} from './context/shopcontext.jsx'
function App() {
  return (
    <div style={{height:'5000px'}}>
      <Shopcontextprovider>
      <Router>
         <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </Shopcontextprovider>
    </div>
  )
}

export default App
