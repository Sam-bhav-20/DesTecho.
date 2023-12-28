import React ,{useState,useEffect} from 'react'
import styled from "styled-components";
import backgroundVideo from '../assets/login.mp4'
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Link, useNavigate } from 'react-router-dom' ;
import { loginRoute } from '../utils/APIRoutes';
import axios from "axios";
const Login = () => {
    const navigate = useNavigate()
    const[values,setValues]=useState({
        username:"",
        password:"",
    });
    useEffect(()=>{
        if(localStorage.getItem('DesTecho-user')){
            navigate('/')
        }
    },[navigate])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(handleValidation()){
            const {password,username}=values;
            try {
                const { data } = await axios.post(loginRoute, {
                  username,
                  password,
                });
                console.log('Axios Response:', data);
                if(data.status===false)
            {
                toast.error(data.msg,{
                    position:"top-right",
                    autoClose:2000,
                    pauseOnHover:true,
                    draggable:true,
                    theme:"dark",
                })
            }
            if(data.status===true)
            {
                localStorage.setItem('DesTecho-user',JSON.stringify(data.user));
                navigate("/");
            }
            } catch (error) {
                console.error('Axios Error:', error);
                // Handle error, display a message, etc.
            }
            
            
        };
    }
    const handleValidation=()=>{
        const {password,username}=values;
        if(password===""){
            toast.error("Username and Password is required",{
                position:"top-right",
                autoClose:2000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
            });
            return false;
        }
        else if(username===""){
            toast.error("Username and Password is required",{
                position:"top-right",
                autoClose:2000,
                pauseOnHover:true,
                draggable:true,
                theme:"dark",
            });
            return false;
        }
        return true;
    };
    const handleChange=(event)=>{
        setValues({...values,[event.target.name]:event.target.value});
    }
  return (
    <>
    <Wrapper>
      <VideoContainer>
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </VideoContainer>
      <FormContainer>
        <form action="" onSubmit={(event)=>handleSubmit(event)}>
            <div className="login_main">
                <h1>DesTecho</h1>
            </div>
            <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e)=>handleChange(e)}
                min="6"
            />
            
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e)=>handleChange(e)}
            />
            
            <button className='login_btn' type="submit">Login</button>
            <span>Don't have an account? <Link to="/register">Register</Link></span>
        </form>
    </FormContainer>
    <ToastContainer/>
    </Wrapper>

    </>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FormContainer = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
    align-items: center;
    // background-color: #101021;
    .login_main{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;
        
        h1{
            color:#4b0f70;
            margin-left:0;
            font-family: 'Pacifico', sans-serif;
        }
    }
    
    form{
        display:flex;
        flex-direction:column;
        gap: 1.5rem;
        // background-color:#131312;
        border-radius : 2rem;
        // border:0.1rem solid white;
        padding: 3rem 5rem;
        input{
            background-color:transparent;
            padding : 0.8rem;
            border: 0.1rem solid #4b0f70;
            border-radius: 0.4rem;
            color: black;
            width: 100%;
            font-size : 1rem;
            &:focus{
                border : 0.1rem solid white;
                outline: none;
                background-color:#e2dee3;
            }
        }
        .login_btn{
            background-color:#8a3dba;
            color:white;
            padding: 1rem 2rem;
            border: none;
            font-weight:bold;
            cursor: pointer;
            border-radius: 4rem;
            font-size: 1rem;
            transition: 0.5s ease-in-out;
            &:hover{
                background-color:#51246e;

            }
        }
        span{
            color:white;
            a{
                color:#51246e;
                text-decoration:none;
                font-weight:bold;
            }
        }
    }
`

export default Login

