import { useState } from "react";
import {Link} from "react-router-dom";


const LoginPage = () => {

  const user = {};

  const [data, setdata] = useState({
    email:"",
    password:""
  });

  if(user.token) window.location.replace('/');

  const handleSubmit = async () => {

  }

  const googleLogin = async () =>{

  }

  const handleChange = (e) => {
    const name = e.target.name ;
    const value = e.target.value ;
    // console.log(name);
    setdata({
      ...data, [name]:value
    });
  }

  // const [useState, setuseState] = useState(second)

  return <div className="flex justify-center items-center bg-loginBG21 dark:bg-loginBG2 min-h-screen w-full bg-cover bg-center bg-no-repeat " >
    <form onSubmit={handleSubmit} className="border-solid border-2 py-4 rounded-lg text-black dark:text-white hover:shadow-black hover:dark:shadow-white hover:shadow-3xl backdrop-contrast-75 dark:backdrop-brightness-150 border-black dark:border-white min-w-[350px]  dark:backdrop-blur-md">
      <h1 className=" text-4xl md:text-5xl  text-center">Login Page</h1>
      <div className="flex flex-col mx-5  mt-10 md:mx-20 gap-y-10">
        <input type="email" name="email" required className=" bg-transparent focus: outline-none h-12 border-b-2 border-black dark:border-b-2" placeholder="Enter Your Email" onChange={handleChange}  value={data?.email} />
        <input type="password" name="password" required className=" bg-transparent h-12 focus: outline-none border-b-2 border-black dark:border-b-2" placeholder="Enter your Password" onChange={handleChange} value={data?.password} />
        <div className="flex md:justify-between flex-col items-center md:flex-row md:gap-10 gap-3">
          <span className=" text-sm md:text-2xl "><input type="checkbox" name="remCheck" id="remCheck" className=" md:scale-150 md:mr-3 md:translate-y-[-2px] cursor-pointer" /> Remember Me</span>
          <h1 className=" text-sm md:text-2xl">Forgot Password?</h1>
        </div>

        <button type="submit" className="bg-slate-900 dark:bg-white rounded text-white dark:text-black w-[50%] h-14 text-3xl font-extrabold self-center">Log In</button>
        <div className="flex justify-center items-center gap-2">
          <div className="h-1 border-b-2 border-black dark:border-b-2 w-[40px] md:w-[30%] "></div>
          <span className="text-slate-400 text-xs">Or Sign In with Google</span>
          <div className="h-1 w-[40px] md:w-[30%]  border-b-2 border-black dark:border-b-2border-b-2"></div>
        </div>
        <button type="button" onClick={googleLogin} className="bg-transparent border-2 w-full border-black dark:border-white rounded-full h-14   self-center"><span className="md:text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-700 to-blue-500">Sign In with Google</span></button>
        <h1 className="text-center">Don't have an account?<Link to="/SignUp"> Register Here</Link></h1>
      </div>
    </form>
  </div>;

};

export default LoginPage;
