import React from "react";
import { useForm } from "react-hook-form";
import face from '../Assets/facebook.png'
import goog from '../Assets/google.png'
import gmail from '../Assets/gmail.png'
import Navbar from "./Navbar";
import './Signin.css';

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));

  return (
    <>
    <Navbar/>
      <div className="hi">
        <h2>Sign In</h2>
        <form
          id="form"
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" {...register("email")} placeholder="Mail-id" />
          <input type="password" {...register("password")} placeholder="password" />
          {/* <h4><strong>What should we call you?</strong></h4> */}
          {/* {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
          <button className="btn">Sign In</button>
        <div style={{display:"flex",flexDirection:'row',justifyContent:"center"}}>
        <h5 style={{
              display: "flex",
              marginBlockStart: "3px",
              marginBlockEnd: "3px",
              marginRight:"5px"
            }}>SignIn with</h5>
        <div>
        <img src={face} style={{width:"25px",height:'25px'}} alt="face" type='button' onClick={()=>alert("hello")} />
        <img src={goog} style={{width:"25px",height:'25px'}} alt="goog" type='button' onClick={()=>alert("hello")} />
        <img src={gmail} style={{width:"25px",height:'25px'}}alt="gmail" type='button' onClick={()=>alert("hello")} />
        </div>
        </div>
        <h5 style={{
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}>Don't have an account? <a href="/">SignUp</a></h5>
        </form>
        </div>
      {/* <div className="col-2">
                <img src={bgImg} alt="" />
            </div> */}
    </>
  );
}