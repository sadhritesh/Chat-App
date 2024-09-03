import React from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

  return (
    <div className='bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-[25rem]'>
      <div className='m-5'>
        <h3 className='text-white font-bold text-3xl'>
          Login <span className='text-blue-600 font-extrabold'>ChatApp</span> 
        </h3>

        <form className='flex max-w-md flex-col' onSubmit={handleSubmit}>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="username" value='Username' className='text-white'/>
            </div>
            <TextInput
               id="username" 
               type="text"  
               placeholder="JohnDoe" 
               value={username}
               onChange={(e)=>setUsername(e.target.value)}
               required 
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="password" value='Password' className='text-white'/>
            </div>
            <TextInput 
              id="password" 
              type="password"  
              placeholder="123****" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required />
          </div>
          <div className="max-w-md mt-5">
              <Button type="submit" className='w-full'>Submit</Button>
          </div>
          <Link to={'/signup'} className="text-cyan-600 hover:underline dark:text-cyan-500">
            Don't have an account?
          </Link>
        </form>


      </div>
    </div>
  );
}

export default Login;
