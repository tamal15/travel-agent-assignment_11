import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [offer,setOffer]=useState([])

    useEffect(()=>{
        fetch('https://frightful-caverns-07727.herokuapp.com/people')
        .then(res=>res.json())
        .then(data=>setOffer(data))
    },[])

    const designShow = {
        width: '18rem'
    }
    return (
        <div>
   <h1>dgdhosdjso</h1>
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

            </div>
            
        </div>
    );
};

export default ManageOrder;