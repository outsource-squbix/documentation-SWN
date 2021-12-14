import React from 'react';
import img from "../pages/Assets/img 1.jpeg"
import img1 from "../pages/Assets/img 2.jpeg"
import img3 from "../pages/Assets/img3.jpeg"
import img4 from "../pages/Assets/img4.jpeg"
import img5 from "../pages/Assets/img5.jpeg"
import img6 from "../pages/Assets/img6.jpeg"
import img7 from "../pages/Assets/img7.jpeg"
import img8 from "../pages/Assets/img8.jpeg"
import img9 from "../pages/Assets/img9.jpeg"
import img10 from "../pages/Assets/img10.jpeg"
import img11 from "../pages/Assets/img11.jpeg"
import img12 from "../pages/Assets/img12.jpeg"
import Layout from '@theme/Layout';

function Hello() {
    
  return (
 <>
      <div class="container">
      <div class="row">
    <div class="col-6">
        <h1>Account Register & DID Creation</h1>
        <p>Always make sure that you are using the latest version of the App to avoid any issue.</p>
        <h2>Step 1 :(Sign Up)</h2>
        <p>Open SSID app and click on <b>Sign Up</b></p>
    </div>
    <br />
    <div class="col-6">
    <img src={img} class="float-right" alt="img"/>
    </div>
  </div>
  </div> 
   <div class="container">
 <div class="row">
    <div class="col-6">
        <h2>Step 2:</h2>
        <p>Fill in the form with all valid personal details and click on <b>Sign up my Account</b></p>
        <p>or</p>
        <p>You ac also choose <b>Sign up with Phone Number</b></p>
    </div>
    <br />
    <div class="col-6,ml-10px">
    <img src={img1} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div>
  <div class="container">
      <div class="row">
    <div class="col-6">
        <h2>Step 3:</h2>
        <p>verify your Email/Mobile Number by entering the recived OTP and click on <b>Submit</b>.</p>
    </div>
    <br />
    <div class="col-6">
    <img src={img3} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  <div class="container">
      <div class="row">
    <div class="col-6">
        <h2>Step 4 :(Sign In)</h2>
        <p>Now enter login credentials and click on <b>Sign in My Account.</b> <b>Sign Up</b></p>
    </div>
    <br />
    <div class="col-6">
    <img src={img4} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  <div class="container">
      <div class="row">
    <div class="col-6">
        
        <h2>Step 5 :(KYC)</h2>
        <p>To Submit your <b>KYC</b>click on <b>My Profile</b></p>
    </div>
    <br />
    <div class="col-6">
    <img src={img5} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  <div class="container">
      <div class="row">
    <div class="col-6">
        <h2>Step 6:</h2>
        <p>Click on <b>Submit KYC,</b>fill the form and upload all required documents, the submit your KYC requrest.</p>
        <p>You will get a pop up notification that your KYC submitted Successfully.</p>
        <p>You can wait for KYC acceptance by clicking on <b>OK</b> </p>
    </div>
    <br />
    <div class="col-6">
    <img src={img6} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  <div class="container">
      <div class="row">
    <div class="col-6">
        <h2>Step 7 :(DID Creation/ VC Registration)</h2>
        <p>For DID registation,click on <b>Wallet</b> option from the bottom menu.</p>
        <p>Click on <b>New User</b>to create your new DID.</p>
    </div>
    <br />
    <div class="col-6">
    <img src={img7} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  
  <div class="container">
      <div class="row">
    <div class="col-6">
        <h2>Step 8:(Password And Biometrics Setup)</h2>
        <p>Set up <b>Authentication System </b>for extra security by clicking <br />
        on Biometrics or Password.</p>
        <div class="admonition admonition-note alert alert--secondary">
            <div class="admonition-content">
                <p>This password is only to unlock your wallet inside the app <br />
                (This in not related to Login Password)</p>
            </div>
        </div>
        <div class="admonition admonition-note alert alert--secondary">
            <div class="admonition-content">
                <p>Biometrics is optional,those who wants to use Faced Id or <br />
                Fingerprint then opt for that option.it will also ask for a <br />
                password ,if Biometric unlock fails then you can use the password.</p>
            </div>
        </div>
    <br />
    <div class="col-6">
    <img src={img8} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  </div>
  <div class="container">
 <div class="row">
    <div class="col-6">
        <h2>Step 9:</h2>
        <p>Now save your 24 Mnemonics (seed words)somewhere safeby <br />copying them</p>
        <div class="admonition admonition-note alert alert--secondary" class="border 2px solid bg-black">
            <div class="admonition-content">
                <p>This is the most important step.Your 24 memonics are <br />
                used to restore your DID if you log out or Uninstall the app.</p>
            </div>
        </div>
    </div>
    <br />
    <div class="col-6,ml-10px">
    <img src={img9} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div>
  <div class="container">
 <div class="row">
    <div class="col-6">
        <h2>Step 10:</h2>
        <p>Enter a DID as per your choice and then click on <b>Submit</b></p>
    </div>
    <br />
    <div class="col-6,ml-10px">
    <img src={img10} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div>
  <div class="container">
 <div class="row">
    <div class="col-6">
        <h2>Step 11:</h2>
        <p>Verify your details in this screen and click on <b>confirm</b> to proceed futher.</p>
    </div>
    <br />
    <div class="col-6,ml-10px">
    <img src={img11} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div>
  <div class="container">
 <div class="row">
    <div class="col-6">
        <h2>Step 12:</h2>
        <p>After following on screen information you will able to generate your <br />
        VC succwssfully.Then can see your generated Wallet in <b>Wallet</b> tab.</p>
    </div>
    <br />
    <div class="col-6,ml-10px">
    <img src={img12} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div>
  </>
  );
}

export default Hello;
