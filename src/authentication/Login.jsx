import React from 'react'
import {Box,Button,TextField,Typography,styled} from '@mui/material';
import { useState,useContext } from 'react';
import { DataContext } from '../context/Dataprovider';
const logo = 'https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png';
const Wraper = styled(Box)({
    display:'flex',
    border:'1px solid black',
    width:'400px',
    height:'500px',
    margin:'100px auto',
    background:'#fff',
})
const userSignUp = {
    username:'',
    email:'',
    password:'',
    phone:''
}
const initialValue ={
    username:'',
    password:''
}
const Login = () => {
    const [view,setView] = useState(true);
    const [signUp,setSignUp] = useState(userSignUp);
    const [login,setLogin] = useState(initialValue);
    const {setAccount} = useContext(DataContext);
    const [error,setError] = useState(false)
    const oninputChange = (e)=>{
        setLogin({...login, [e.target.name]:e.target.value});
        console.log(login);
    }
    const Changer = ()=>{
        setView(false);
    }
    const handleChange = (e)=>{
        setSignUp({...signUp, [e.target.name]:e.target.value});
        // console.log(signUp);
    }
    const submitUser = ()=>{
        localStorage.setItem("user",JSON.stringify(signUp.username));
        localStorage.setItem("pass",JSON.stringify(signUp.password));
        setAccount(signUp.username);
        console.log(signUp.username);
    }
    const loginUser = ()=>{
        const username = JSON.parse(localStorage.getItem("user"));
        const password = JSON.parse(localStorage.getItem("pass"));
        if(login.username === username && login.password===password){
            setAccount(username);
        }else{
            setError(true);
        }
    }
  return (
    <Wraper>
        {
            view ? (
                <Box style={{display:'flex',flexDirection:'column',margin:'10px auto',gap:10}}>
                    <img style={{width:150, marginLeft:30,color:'red'}} src={logo} alt="logo" />
                    <TextField variant='outlined' onChange={(e)=>oninputChange(e)} name='username' label='userName'/>
                    <TextField variant='outlined' onChange={(e)=>oninputChange(e)} name='password' label= 'password'/>
                    <Button varient='contained' onClick={()=>loginUser()} style={{background:'#31e8df',color:'white',borderRadius:5,textTransform:'none'}}>Login</Button>
                    <Typography sx={{textAlign:'center'}}>OR</Typography>
                    {
                        error ? (
                            <Typography style={{color:'red',textAlign:'center'}}>Invalid Credential</Typography>
                        ):null
                    }
                    <Typography style={{fontSize:14, color:'black'}}>Don't have an account?
                     <Box component='span' style={{fontWeight:'bold',cursor:'pointer',color:'green'}}
                     onClick={()=>Changer()}
                     >Sign up</Box>
                     </Typography>
                    
                </Box>
            ):(
                <Box style={{display:'flex',flexDirection:'column',margin:'10px auto',gap:10}}>
                    <img style={{width:150, marginLeft:30,color:'red'}} src={logo} alt="logo" />
                    <TextField variant='outlined' onChange={(e)=>handleChange(e)} label='userName' name='username'/>
                    <TextField variant='outlined' onChange={(e)=>handleChange(e)} label= 'email' name='email'/>
                    <TextField variant='outlined' onChange={(e)=>handleChange(e)} label= 'password'name='password'/>
                    <TextField variant='outlined' onChange={(e)=>handleChange(e)} label= 'phone' name='phone'/>
                    <Button varient='contained' onClick={()=>submitUser()}  style={{background:'#31e8df',color:'white',borderRadius:5,textTransform:'none'}}>Continue</Button>
                    
                </Box>
            )
        }
        
       
    </Wraper>
  )
}

export  {Login}
