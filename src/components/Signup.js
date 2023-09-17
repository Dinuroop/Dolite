import React from "react";
import { useForm } from "react-hook-form";
import face from '../Assets/facebook.png'
import goog from '../Assets/google.png'
import gmail from '../Assets/gmail.png'
import Navbar from "./Navbar";
import axios from "axios";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:5000/details",data);
    // fetch("http://localhost:5000/",{
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    console.log(res);
  }

  // console.log(watch('username'));

  return (
    <>
    <Navbar/>
    {/* <div className="card" style={{display:"block",border:"1px"}}> */}
      <div className="col-1" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"90vh",padding:"20px",textAlign:"center",border:"1px solid black",width:"400px", borderRadius:"10px", marginLeft:"auto",marginRight:"auto"}}>
        <h2>Sign Up</h2>
        <span>Register And Enjoy The Service</span>

        <form
          id="form"
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="text" {...register("username")} placeholder="username" />
          <input type="text" {...register("email")} placeholder="Mail-id" />
          <input type="password" {...register("password")} placeholder="password" />
          <input
            type="password"
            {...register("confirmpwd")}
            placeholder="confirm password"
          />
          {/* <h4><strong>What should we call you?</strong></h4> */}
          {/* {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"} */}
          <h4
            style={{
              justifyContent: "flex-start",
              display: "flex",
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}
          >
            {" "}
            What's your gender?
          </h4>
          <div style={{ display: "flex", flexDirection: "row", gap: "26px" }}>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                {...register("gender")}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="male"
              />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                {...register("gender")}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                {...register("prefer")}
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="prefer not to say"
              />
              <label class="form-check-label" for="inlineRadio2">
                Prefer Not to say
              </label>
            </div>
          </div>
          <h4
            style={{
              justifyContent: "flex-start",
              display: "flex",
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}
          >
         <strong>What's your date of birth?</strong>
          </h4>
          <input type="date" id="date" {...register("date")}/>
          <button className="btn">Sign Up</button>
        <div style={{display:"flex",flexDirection:'row',justifyContent:"center"}}>
        <h5 style={{
              display: "flex",
              marginBlockStart: "3px",
              marginBlockEnd: "3px",
              marginRight:"5px"
            }}>Signup with</h5>
        <div>
        <img src={face} style={{width:"25px",height:'25px'}} alt="face" type='button' onClick={()=>alert("hello")} />
        <img src={goog} style={{width:"25px",height:'25px'}} alt="goog" type='button' onClick={()=>alert("hello")} />
        <img src={gmail} style={{width:"25px",height:'25px'}}alt="gmail" type='button' onClick={()=>alert("hello")} />
        </div>
        </div>
        <h5 style={{
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}>Already have an account? <a href="/SignIn">Login</a></h5>
        </form>
      {/* </div> */}

      {/* <div className="col-2">
                <img src={bgImg} alt="" />
            </div> */}
    </div>
    </>
  );
}
