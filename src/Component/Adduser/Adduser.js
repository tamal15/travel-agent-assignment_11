import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Adduser.css'

const Adduser = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      console.log(data);
      axios.post('https://frightful-caverns-07727.herokuapp.com/people',data)
      .then(res=>{
          console.log(res)
           if(res.data.insertedId){
              alert('added successfully');
              reset()
          }
      })
    }
    return (
        <div className="submits">
             <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description"/>
      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="img url"/>
      <input type="submit" />
    </form>
            
        </div>
    );
};

export default Adduser;