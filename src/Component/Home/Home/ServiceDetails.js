import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ServiceDetails = () => {
    const [user,setUser]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        const url=`https://frightful-caverns-07727.herokuapp.com/people/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    const designShow = {
        width: '18rem'
    }



    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      console.log(data);
      axios.post(`https://frightful-caverns-07727.herokuapp.com/people/${id}`,data)
      .then(res=>{
          console.log(res)
           if(res.data.insertedId){
              alert('added successfully');
              reset()
          }
      })
    }

 return(
     <div className="container">
      
         <div className="row">
         <div className="col-lg-4 mb-5 mt-5 col-sm-12 image-card ">
        <div className="card" style={designShow}>
            <img className="image-design" src={user.img} class="card-img-top" alt="..." />
            <div class="card-body body-designs">
                <h3>{user.name}</h3>
                <p class="card-text">{user.description}.</p>
               
                {/* <Link> <button>update</button></Link> */}
             
            </div>

           


        </div>
       
    </div>

    <div className="col-lg-8">
    <div className="submits">
             <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description"/>
      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="img url"/>
      <input type="submit" />
    </form>
            
        </div>

        </div>
         </div>

     </div>
   
    );
};

export default ServiceDetails;