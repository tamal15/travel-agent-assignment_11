import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';

const Myorders = () => {
    const {user}=useAuth()
    const [orders,setOrders]=useState([])
const email=user.email
    useEffect(()=>{
        fetch(`https://frightful-caverns-07727.herokuapp.com/myOrder/${email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    const handleDelete=id=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
         const url=`https://frightful-caverns-07727.herokuapp.com/myOrder/${email}`;
         fetch(url,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount >0){
                 alert('delete');
                 const remaining=orders.filter(orders=>orders.email !==email)
                 setOrders(remaining)
             }
         })
        }
     }

    const designShow = {
        width: '18rem'
    }
    return (
        <div className="container">
                <div className="row">
                    {
                        orders.map((offers)=>(
                            <div className="col-lg-4 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card" style={designShow}>
                                <img className="image-design" src={offers.img} class="card-img-top" alt="..." />
                                <div class="card-body body-designs">
                                    <h3>{offers.name}</h3>
                                    <p class="card-text">{offers.description}.</p>
                                    <button onClick={()=>handleDelete(offers.email)}>delete</button>
{/*                                   
                                    <Link to={`/serviceDetails/${offers._id}`}> <button>Buy Now</button></Link>
                                    <button onClick={()=>{handlecartAdd(index)}}>update</button> */}
                                 
                                </div>
                    
                    
                            </div>
                        </div>
                        ))
                    }
                     


                     
                </div>
                <Footer></Footer>

            </div>
    );
};

export default Myorders;