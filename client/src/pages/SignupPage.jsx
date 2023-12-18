import { useState } from "react";
import { Link } from "react-router-dom";
import { BiImage } from "react-icons/bi"
const SignupPage = () => {

  const [file, setfile] = useState("")

  return <div className="flex justify-center items-center bg-loginBG21 dark:bg-loginBG2 min-h-screen w-full bg-cover bg-center bg-no-repeat " >
    <div className="border-solid border-2 py-4 rounded-lg text-black dark:text-white hover:shadow-black hover:dark:shadow-white hover:shadow-3xl backdrop-contrast-75 dark:backdrop-brightness-150 border-black dark:border-white min-w-[350px]  dark:backdrop-blur-md">
      <h1 className=" text-4xl md:text-5xl  text-center">SignUp Page</h1>
      <div className="flex flex-col mx-5  mt-10 md:mx-14 gap-y-10">
        <div className="flex flex-col md:flex-row gap-2">
          <input type="text" className=" bg-transparent focus: outline-none h-12 border-b-2  border-black dark:border-b-2" placeholder="First Name" />
          <input type="text" className=" bg-transparent focus: outline-none h-12 border-b-2 border-black dark:border-b-2" placeholder="Last Name" />
        </div>
        <input type="email" className=" bg-transparent focus: outline-none h-12 border-b-2 border-black dark:border-b-2" placeholder="Enter Your Email" />
        <input type="password" className=" bg-transparent h-12 focus: outline-none border-b-2 border-black dark:border-b-2" placeholder="Enter your Password" />
        <label htmlFor="imgUpload" className=" text-sm cursor-pointer md:text-2xl text-center text-blue"><input type="file" id="imgUpload" onChange={e => setfile(e.target.files[0])} className="" max-size="1024" hidden accept="jpg, png, jpeg" />
          <BiImage className="inline-block mr-2" />
          Picture</label>

        <button type="button" className="bg-slate-900 dark:bg-white rounded text-white dark:text-black w-[50%] h-14 text-3xl font-extrabold self-center">Sign Up</button>
        <div className="flex justify-center items-center gap-2">
          <div className="h-1 border-b-2 border-black dark:border-b-2 w-[40px] md:w-[25%] "></div>
          <span className="text-slate-400 text-xs ">Or Sign In with Google</span>
          <div className="h-1 w-[40px] md:w-[25%]  border-b-2 border-black dark:border-b-2"></div>
        </div>
        <button type="button" className="bg-transparent border-2 w-full border-black dark:border-white rounded-full h-14   self-center"><span className="md:text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-700 to-blue-500">Sign In with Google</span></button>
        <h1 className="text-center">Already have an account?<Link to="/login"> Login Here</Link></h1>
      </div>
    </div>
  </div>;
};

export default SignupPage;
