import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import NavBar from '../components/navBar';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainLayout