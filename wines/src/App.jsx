import { Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AddWine from './pages/AddWine'
import WineDetails from './pages/WineDetails'
import NotFound from './pages/NotFound'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const BasketContext = createContext();
export const WishlistContext = createContext();

function App() {
  const [basket,setBasket] = useState([]);
  const [wishlist,setWishlist] =useState([]);

  useEffect(()=>{
    const storedBasket = JSON.parse(localStorage.getItem("basket"))||[];
    setBasket(storedBasket)
  },[]);

  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
  },[basket]);

  useEffect(() => {
    const storedWish = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWish)
  }, []);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [wishlist]);

  function toggleWishlist(item) {
    if (wishlist.some((wish) => wish.id === item._id)) {
      setWishlist(wishlist.filter((wish) => wish.id !== item._id));
    } else {
      setWishlist([...wishlist, { id: item._id, ...item }]);
    }
  }

  function addToBasket(item) {
    const existingBasket = basket.find((basketItem)=>basketItem.id==item._id);
    if (existingBasket){
        setBasket(basket.map((basketItem)=>basketItem.id==item._id?{...basketItem}:basketItem))
    } else {
      setBasket([...basket,{...item}])
    }
  }
  function removeFromBasket (id){
      setBasket(basket.filter((item)=>item._id!==id))
  }
  const wishData = {
    toggleWishlist,wishlist
  }
  const data = {
    addToBasket,removeFromBasket,basket
  }
  return (
    <>
    <WishlistContext.Provider value={wishData}>
    <BasketContext.Provider value={data}>
     <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='add-wine' element={<AddWine/>}/>
        <Route path='details/:id' element={<WineDetails/>}/>
        <Route path='basket' element={<Basket/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
      </Route>
      <Route path='/*' element={<NotFound/>}/>
     </Routes>
     </BasketContext.Provider>
     </WishlistContext.Provider>
    </>
  )
}

export default App
