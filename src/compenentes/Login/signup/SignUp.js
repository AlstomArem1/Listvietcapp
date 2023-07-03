import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import "./SignUp.css";
import key from "./khoalanthu2baomat.webp";
function SignUp() {
  return (
    <div className='Box_SignUp'>
      <div className='SignUp-Top'>
        <img src={key}/>
      </div>
      <div className='SignUp-Bottom'>
        <div className='SignUp-start'>
          <h1 style={{fontSize:"35px",fontWeight:"600"}}>SignUp</h1>
          <div className='SignUp-Name'>
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Last name' />
          </div>
          <form className='SignUp-forms'>
            <input type='text' placeholder='Email address' />
            <input type='password' placeholder='A new Password' />
            <input type='password' placeholder='Confirm password' />
          </form>
          <label className='radio-sign'>
            <input type='radio' /><span style={{marginLeft:"10px"}}>I agree to all Tern, Privacy Policy and Fees</span>
          </label>
          <button className='btn-SignUP'>Register</button>
          <div className='icon-signup'>
            <span><FaFacebookF/></span>
            <span><AiOutlineTwitter/></span>
            <span><BsGoogle/></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;