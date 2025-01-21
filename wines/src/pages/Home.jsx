import React from 'react'
import Hero from '../components/Hero'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/api';
import WineCard from '../components/WineCard';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { BasketContext, WishlistContext } from '../App';

const Home = () => {
    const [wines,setWines] = useState([]);
    const [copyWines,setCopyWines] = useState([]);
    const {addToBasket} =useContext(BasketContext);
    const { toggleWishlist } = useContext(WishlistContext);

    useEffect(()=>{
        async function fetchData(){
            const resp = await axios.get(BASE_URL);
            console.log((resp.data.data));
            setWines(resp.data.data)
            setCopyWines(resp.data.data)
        }
        fetchData()
    },[]);
    function handleDelete(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(BASE_URL+`/${id}`)
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Wine has been deleted.",
                icon: "success"
              });
              window.location.reload();
            } else if (
              
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your wine is safe :)",
                icon: "error"
              });
            }
          });
    }
  return (
    <>
        <Hero/>
        <h3 style={{textAlign:"center",marginTop:"40px"}}>OUR PRODUCTS</h3>
        <p style={{textAlign:"center",marginTop:"14px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus suscipit nobis nulla obcaecati! Assumenda vero dicta reprehenderit corporis quasi at!</p>
        <div className='container mt-5'>
            <div className='row'>
                {
                    copyWines && copyWines.map((wine)=>{
                        return(
                            <WineCard key={wine._id} addWish={() => toggleWishlist(wine)} addToCard={()=>addToBasket(wine)} deleteCard={()=>handleDelete(wine._id)} wineId={wine._id} imageUrl={wine.imageUrl} oldPrice={wine.oldPrice} newPrice={wine.newPrice} name={wine.name}/>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Home