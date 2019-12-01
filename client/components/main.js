import React from 'react'
import planetBackground from './threejs/planetBackground'

import {signInWithGoogle} from '../../firebase/firebase.utils';

const Main = () => {
  return (
    <div>
      {planetBackground()}
      <div id="login-wrapper">
        <img id="login-logo" src="/GALACTICODE-logo_blue.png" />
        <div>
          <p id="intro">
            Nova the alien is lost in space and needs your help! Explore new
            planets to unlock JavaScript challenges, earning fuel to travel to
            new planets and help Nova get home.
          </p>
          <div id="login-buttons">
            <button className="btn btn-login" onClick={signInWithGoogle}>
               {/* <img src="btn_google_signin_light_normal_web.png" /> */}
               Login with Google
            </button>
            <a href="/auth/github">
              <button className="btn btn-login">Login with Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
