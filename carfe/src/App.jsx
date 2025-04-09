import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';

import WishlistPage from './pages/WishListPage';
import './style.css'
function App() {
  return (<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/wishlist" element={<WishlistPage />} />
  </Routes>
</Router>)
}
export default App;
