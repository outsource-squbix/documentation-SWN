import React from 'react'
import img1 from "./Assets/pairwise/1.jpeg"
import img2 from "./Assets/pairwise/2.jpeg"
import img3 from "./Assets/pairwise/3.jpeg"
import img4 from "./Assets/pairwise/4.jpeg"
import img5 from "./Assets/pairwise/5.jpeg"
import img6 from "./Assets/pairwise/6.jpeg"
import img7 from "./Assets/pairwise/7.jpeg"
import img8 from "./Assets/pairwise/8.jpeg"
import img9 from "./Assets/pairwise/9.jpeg"
import img10 from "./Assets/pairwise/10.jpeg"
function Pairwiselogin () {
    return (
        <>
      <div class="container">
      <div class="row">
    <div class="col-6">
        <h1>Pairwise Login</h1>
        
        <h2>Step 1:</h2>
        <p>Click the wallet icom at the botton.make sure that you currently seeing wallet screen like the image givev below.</p>
    </div>
    <br />
    <div class="col-6">
    <img src={img1} class="float-right" alt="img"/>
    </div>
  </div>
  </div> 
   <div class="container">
 <div class="row">
    <div class="col-6">
        <h2>Step 2:</h2>
        <p><b>CONNECTION ESABLISMENT</b></p>
        <p>a. Click the SSID icon</p>
     
    </div>
    <br />
    <div class="col-6,ml-10px">
    <img src={img2} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div>
  <div class="container">
      <div class="row">
    <div class="col-6">
       
        <p>b. Now you can see a list of public did names.if.</p>
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
        
        <p>c. The link name CONNECT will to CONNECTED which means the connection between EXPLORER public did & pairwise server is <br/>
            successfully established.
    </p>
   
    </div>
    <br />
    <div class="col-6">
    <img src={img4} class="img-fluid" alt="img"/>
    </div>
  </div>
  <p class="text--danger">Notes:
    1.Once you establish a connection between a public did & pairwise server,there is no need to connect again.if you uninstall & install <br />
    the app or update the app or log out,then it will be automatically disconnected & you have to establish the connection again. 
    2.Pairwise login is impossible without establishing a connectin between a public did & pairwise server.</p>
  </div> 
  <div class="container">
      <div class="row">
    <div class="col-6">
        
        <h2>Step 3:Pairwise login</h2>
        <p>a.For pairwise login to EXPLORE , make sure that the public did EXPLORER is connected to pairwise server.</p>
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
  <p>b.Do not log out close the ssid app.Navigate to the EXPLORER url https://v3eplorer.metabit.exchage/dashboard & click the KEY icon</p>
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
       <p>c.Enter your did into the input field in this format didi:ssid:test@did& click the look up button.</p>
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
       <p>d. A pop up alert will be displayed your ssid app screen,seeking your permission to allow the login request from EXPLORER. You can allow or <br />
       deny the request.</p>
    </div>
    <br />
    <div class="col-6">
    <img src={img8} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  <div class="container">
      <div class="row">
    <div class="col-6">
       <p>e.if you allow ,then the explorer will directly connect to ssid app through peer-to-peer protocol through webrtc.Then you will be able to a see side <br />
       bar where you can check your account details & transaction history.</p>
    </div>
    <br />
    <div class="col-6">
    <img src={img9} class="img-fluid" alt="img"/>
    </div>
  </div>
  </div> 
  <div class="container">
      <div class="row">
    <div class="col-6">
       <p>f. If you want to disconnected the connection between ssid app & explorer, click this disconnect icon of explorer web app.</p>
    </div>
    <br />
    <div class="col-6">
    <img src={img10} class="img-fluid" alt="img"/>
    </div>
  </div>
  <p class="text--danger">NOTE: For pairwise login to Admin tool,you can follow these same steps.</p>
  <p class="text--danger">URL of admin tool:https"//ssid-admin-panel.web.app/login</p>
  </div> 
  </>
    )
}

export default Pairwiselogin
