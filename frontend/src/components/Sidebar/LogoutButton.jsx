import React from 'react';
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='text-white text-4xl m-3'>
      <CiLogout onClick={logout} /> 
    </div>
  )
}

export default LogoutButton
