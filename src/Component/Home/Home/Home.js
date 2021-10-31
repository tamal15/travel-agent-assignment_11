import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import Footer from '../../Footer/Footer';
import Services from './Services';
// import offers from './offers';
import img1 from '../../../../src/image/offer.jpg'
import './Home.css'
import Banner from '../Banner/Banner';

const Home = () => {
    const {user}=useAuth()

    const [offer,setOffer]=useState([])

    useEffect(()=>{
        fetch('https://frightful-caverns-07727.herokuapp.com/people')
        .then(res=>res.json())
        .then(data=>setOffer(data))
    },[])

    const designShow = {
        width: '18rem'
    }

    const handlecartAdd=(index)=>{
        const data=offer[index]
        data.email=user.email
        console.log(data)

        fetch('https://frightful-caverns-07727.herokuapp.com/adorder',{
            method:"post",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(data)
        });

    }
    
    return (
        <div>
            <Banner></Banner>
  
            <div className="container">
                <div className="row">
                    {
                        offer.map((offers,index)=>(
                            <div className="col-lg-4 mb-5 mt-5 col-sm-12 image-card ">
           
                            <div className="card" style={designShow}>
                                <img className="image-design" src={offers.img} class="card-img-top" alt="..." />
                                <div class="card-body body-designs">
                                    <h3>{offers.name}</h3>
                                    <p class="card-text">{offers.description}.</p>
                                  
                                    <Link to={`/serviceDetails/${offers._id}`}> <button>Buy Now</button></Link>
                                    <button onClick={()=>{handlecartAdd(index)}}>My order</button>
                                 
                                </div>
                    
                    
                            </div>
                        </div>
                        ))
                    }
                     


                     {/* {
                         offer.map((offers,index)=>{

                          
                         })
                     } */}
                    
                </div>


                <div className="container designs mt-5 mb-5 bg-light p-5">
            <div className="row">
                <div className="col-lg-6">
                  <h5 className="">20 % discount</h5>
                  <h3>the short time offer discount
</h3>
                <p>Wild & wonderful Hanoi, world-heritage Halong Bay, alluring Hue & historic Ho Chi Minh; plus Phnom Penh & the .</p>
                <h6>08 days From $2500 per person</h6>
                   <button className="bg-dark banner text-white p-2 m-2">Read More</button>
                </div>
                <div className="col-lg-6 image-slide">
                      <img src={img1} alt="" />
                </div>

            </div>


            

        </div>

        

       

            </div>

            
           
            <Footer></Footer>
            
        </div>
    );
};

export default Home;