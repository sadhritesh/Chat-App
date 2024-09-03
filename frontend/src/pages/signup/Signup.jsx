import React, { useState } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import GenderCheckbox from './genderCheckBox.jsx';
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {

 
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "", 
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className='bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-[25rem]'>
      <div className='m-5'>
        <h3 className='text-white font-bold text-3xl'>
          Signup <span className='text-blue-600 font-extrabold'>ChatApp</span> 
        </h3>

        <form className='flex max-w-md flex-col' onSubmit={handleSubmit}>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label 
                htmlFor="fullname" 
                value='Full Name' 
                className='text-white'
              />
            </div>
            <TextInput 
              id="fullname" 
              type="text" 
              value={inputs.fullName} 
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              placeholder="John Doe" 
              required 
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label 
                htmlFor="username" 
                value='Username' 
                className='text-white'
              />
            </div>
            <TextInput 
              id="username" 
              type="text"  
              placeholder="JohnDoe" 
              value={inputs.username} 
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              required 
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label 
                htmlFor="password" 
                value='Password' 
                className='text-white'
              />
            </div>
            <TextInput 
              id="password" 
              type="password"  
              placeholder="123****" 
              value={inputs.password} 
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              required 
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label 
                htmlFor="password2" 
                value='Confirm Password' 
                className='text-white'
              />
            </div>
            <TextInput 
              id="password2" 
              type="password"  
              placeholder="123****" 
              value={inputs.confirmPassword} 
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              required 
            />
          </div>
          <div className="max-w-md">
            <div className="block">
              <Label htmlFor="gender" value='Gender' className='text-white'/>
            </div>
            <GenderCheckbox 
              onCheckboxChange={handleCheckboxChange} 
              selectedGender={inputs.gender} 
            />
          </div>
          
          <div className="max-w-md mt-5">
            <Button type="submit" className='w-full'>Submit</Button>
          </div>
          <Link to={'/login'} className="text-cyan-600 hover:underline dark:text-cyan-500">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
