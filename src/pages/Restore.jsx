import React from 'react'
import img1 from "./Assets/Restore/1.jpeg"
import img2 from "./Assets/Restore/2.jpeg"
import img3 from "./Assets/Restore/3.jpeg"
import img4 from "./Assets/Restore/4.jpeg"
import img5 from "./Assets/Restore/5.jpeg"
import img6 from "./Assets/Restore/6.jpeg"
import img7 from "./Assets/Restore/7.jpeg"
import img8 from "./Assets/Restore/8.jpeg"
function  Restore () {
    return (
      <>
          <div class="container">
          <div class="row">
          <div class="col-6">
              <h1>Restore wallet by using existing mnemonics:</h1>
              <br />
              <h2>Step 1:</h2>
              <p>If the have uninstalled & installed the app agian or logged Out, then you an againsign in to the app by using email address & password to land <br />
              on Dashboard sacreen.</p>
              <h2>Step 2:</h2>
              <p>Click the wallet icon at the bottom.</p>
          </div>
          <div class="col-6">
          <img src={img1} class="img-fluid" alt="img"/>
          </div>
          </div>
          <div class="container"></div>
          <div class="row">
          <div class="col-6">
          <h2>Step 3:</h2>
          <p>Click the Existing User button.</p> 
          </div>
          <div class="col-6">
          <img src={img2} class="img-fluid" alt="img"/>
          </div>
          </div>
          </div>
          <div class="container">
          <div class="row">
          <div class="col-6">
          <h2>Step 4:</h2>
          <p>Click the Restore with Mnemonics button.</p> 
          </div>
          <div class="col-6">
          <img src={img3} class="img-fluid" alt="img"/>
          </div>
          </div>
          <div class="container">
          <div class="row">
          <div class="col-6">
          <h2>Step 5:</h2>
          <p>Enter your Personal DID verification ,thrn click Nextbutton.</p> 
          </div>
          <div class="col-6">
          <img src={img4} class="img-fluid" alt="img"/>
          </div>
          </div>
          </div>
          <div class="container">
          <div class="row">
          <div class="col-6">
          <h2>Step 6:</h2>
          <p>Enter your 24 mnemonic words to restore your identity wallet.Make sure to give space between each word. Just copy & paste your mnemonics <br />
          into the text area. Then click the submit button.</p> 
          </div>
          <div class="col-6">
          <img src={img5} class="img-fluid" alt="img"/>
          </div>
          </div>
          </div>
          <div class="container">
          <div class="row">
          <div class="col-6">
          <h2>Step 7:</h2>
          <p>Set a new Password for your wallet & confirm..</p> 
          </div>
          <div class="col-6">
          <img src={img6} class="img-fluid" alt="img"/>
          </div>
          </div>
          </div>
          <div class="container">
          <div class="row">
          <div class="col-6">
          <h2>Step 8:</h2>
          <p>Enter your new wallet password & submit.</p> 
          </div>
          <div class="col-6">
          <img src={img7} class="img-fluid" alt="img"/>
          </div>
          </div>
          </div>
          <div class="container">
          <div class="row">
          <div class="col-6">
          <h2>Step 9:</h2>
          <p>You are ready to do use your walllet now.</p> 
          </div>
          <div class="col-6">
          <img src={img8} class="img-fluid" alt="img"/>
          </div>
          </div>
          </div>
          </div>
      </>
    )
}

export default Restore
