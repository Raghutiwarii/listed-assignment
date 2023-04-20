import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="login-container">
      <div className="left-section">
        <div className="board">
        Board.
        </div>
      </div>
      <div className="right-section">
        <div className="sign-text">
            Sign in
        </div>
        <div className="account-text">
            Sign in with account
        </div>
        <div className="sign">
            <div className="google-sign">
                <img className="google-image" src="https://th.bing.com/th/id/OIP.urSbI2XFT9yzdo32KykFyAHaHa?pid=ImgDet&rs=1" />
                <div className="only-google-sign"> Sign in with Google</div>
            </div>
            <div className="apple-sign">
              <img className="apple-image" src="https://th.bing.com/th/id/OIP.ZoHzA1X2808rrPMPBtQNUQHaIi?pid=ImgDet&rs=1 " alt="google logo" />
                <div className="only-google-sign">Sign in with apple</div>
            </div>
        </div>
        <div className="form">
            <div className="label-email">
            <label >Email address</label>
            </div>
            <input className="input-username" required/>

            <label className="label-pass">Password</label>
            <input className="input-password" required/>
            <div className="forgot-password">Forgot Password?</div>
            <button type="button" class="btn"><span className="btn-text">Sign In</span></button>
        </div>
        <div className="not-account">
            Don't have an account? <span className="register">Register here</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;