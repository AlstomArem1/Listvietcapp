import './SignIn.css';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import song from "./cartoon1.jpg"
import { Link } from 'react-router-dom';
function SignIn() {
  return (
    <div className='SignIn'>
      <div className='Signin-left'>
        <img src={song}/>
      </div>
      <div className='Signin-right'>
        <div className='Signin-container'>
          <h1 style={{ fontSize: "30px", fontWeight: "600", color:"#fff" }}>SignIn</h1>
          <p style={{ color: "#999" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form className='Sign-form'>
            <input type='text' placeholder='Email/SDT' />
            <input type='password' placeholder='PassWord' />
          </form>
          <label className='radio-form'>
            <input type='checkbox' /><span style={{marginLeft:"10px"}}>Remember me</span>
          </label>
          <button className='button-sign'>LogIn</button>
          <Link to="/signup" className='button-signup'>SignUp</Link>
          <div className='or-sign'>
            <span>-</span><p>or</p><span>-</span>
          </div>
          <button className='Signin-Facebook'><span><FaFacebookF/></span>Login with Facebook</button>
          <button className='Signin-Twitter'><span><AiOutlineTwitter/></span>Login with Twitter</button>
          <button className='Signin-Google'><span><BsGoogle/></span>Login with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;