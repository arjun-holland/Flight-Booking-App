import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from '../utils/api';

export const GeneralContext = createContext();

const GeneralContextProvider = ({children}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');

  const [ticketBookingDate, setTicketBookingDate] = useState();

  const inputs = {username, email, usertype, password};


  const navigate = useNavigate();

 const login = async () => {
  try {
    const loginInputs = { email, password };
    const res = await API.post('/login', loginInputs);

    localStorage.setItem('userId', res.data._id);
    localStorage.setItem('userType', res.data.usertype);
    localStorage.setItem('username', res.data.username);
    localStorage.setItem('email', res.data.email);

    if (res.data.usertype === 'customer') {
      navigate('/');
    } else if (res.data.usertype === 'admin') {
      navigate('/admin');
    } else if (res.data.usertype === 'flight-operator') {
      navigate('/flight-admin');
    }

  } catch (err) {
    alert("Login failed!");
    console.log(err);
  }
};

  const register = async () => {
  try {
    const res = await API.post('/register', inputs);

    localStorage.setItem('userId', res.data._id);
    localStorage.setItem('userType', res.data.usertype);
    localStorage.setItem('username', res.data.username);
    localStorage.setItem('email', res.data.email);

    if (res.data.usertype === 'customer') {
      navigate('/');
    } else if (res.data.usertype === 'admin') {
      navigate('/admin');
    } else if (res.data.usertype === 'flight-operator') {
      navigate('/flight-admin');
    }

  } catch (err) {
    alert("Registration failed!");
    console.log(err);
  }
};




  const logout = async () =>{
    
    localStorage.clear();
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localStorage.removeItem(key);
      }
    }
    
    navigate('/');
  }



  return (
    <GeneralContext.Provider value={{login, register, logout, username, setUsername, email, setEmail, password, setPassword, usertype, setUsertype, ticketBookingDate, setTicketBookingDate}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider
