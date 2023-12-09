<template>
    <div class="profil-anlegen">
      <div class="div">
        <form id="signup-form">
          <div class="e-mail">
            <div class="text-wrapper">Passwort:</div>
            <input type="passwort" id="signup-password">
          </div>
          <div class="div-wrapper">
            <div class="text-wrapper">E-Mail:</div>
            <input type="email" id="signup-email">
          </div>
          <div class="jahrgang">
            <div class="text-wrapper">Jahrgang:</div>
            <input type="text" id="signup-jahrgang">
          </div>
          <div class="username">
            <div class="text-wrapper">Profilname:</div>
            <input type="text" id="signup-profilename">
          </div>
            <div class="cart-button">
            <button type="submit" class="text-wrapper-10">Speichern</button>
          </div>
        </form>
        <div class="summary">
          <div class="text-wrapper-2">n</div>
          <div class="text-wrapper-3">Gesamt</div>
          <div class="text-wrapper-4">n</div>
          <div class="text-wrapper-5">Offene Aufträge</div>
          <div class="text-wrapper-6">n</div>
          <div class="text-wrapper-7">Abgeschlossene Aufträge</div>
          <div class="frame">
            <div class="text-wrapper-8">Lernfortschritt</div>
          </div>
        </div>
        <div class="page-heading">
          <div class="overlap">
            <div class="overlap-group">
              <!--img class="divider" alt="Divider" src="divider.svg" /-->  <!-- Braucht es das????-->
              <div class="frame-wrapper">
                <div class="frame-2">
                  <div class="frame-2">
                    <div class="text-wrapper-9">Profil erstellen</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ellipse" />
          </div>
        </div>
        <div class="navigation">

            <router-link to="/profil" class="text-wrapper-11">Mein Profil</router-link>
            <router-link to="/aufträge" class="text-wrapper-12">Aufträge</router-link>
            <router-link to="/anleitungen" class="text-wrapper-13">Anleitungen</router-link>
            <router-link to="/" class="text-wrapper-14">Startseite</router-link>
            <div class="text-wrapper-15">Lernplattform CPLAB</div>   
        </div>
      </div>
    </div>
  </template>
  
  <script>
// Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCn6vUOiF9SQ1hlMB7Us4FWPFOdnbx1DiM",
    authDomain: "lernplattform-cplab.firebaseapp.com",
    projectId: "lernplattform-cplab",
    storageBucket: "lernplattform-cplab.appspot.com",
    messagingSenderId: "678246357632",
    appId: "1:678246357632:web:582d432e75eb768985a465",
    measurementId: "G-82N4YY9NLB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  


  export default {
    name: "ProfilAnlegen",
  };
  
  </script>

  
  <style>
  .profil-anlegen {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .profil-anlegen .div {
    background-color: #ffffff;
    height: 1024px;
    position: relative;
    width: 1440px;
  }
  
  .profil-anlegen .e-mail {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 52px;
    left: 96px;
    overflow: hidden;
    position: absolute;
    top: 547px;
    width: 821px;
  }
  
  .profil-anlegen .text-wrapper {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 29px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 11px;
    white-space: nowrap;
  }
  
  .profil-anlegen .div-wrapper {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 52px;
    left: 96px;
    overflow: hidden;
    position: absolute;
    top: 465px;
    width: 821px;
  }
  
  .profil-anlegen .jahrgang {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 52px;
    left: 96px;
    overflow: hidden;
    position: absolute;
    top: 383px;
    width: 821px;
  }
  
  .profil-anlegen .username {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 52px;
    left: 96px;
    overflow: hidden;
    position: absolute;
    top: 301px;
    width: 821px;
  }
  
  .profil-anlegen .summary {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 211px;
    left: 949px;
    overflow: hidden;
    position: absolute;
    top: 301px;
    width: 395px;
  }
  
  .profil-anlegen .text-wrapper-2 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    left: 361px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: right;
    top: 154px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-3 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    left: 24px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    top: 157px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-4 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 361px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: right;
    top: 117px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-5 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 24px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    top: 117px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-6 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 361px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: right;
    top: 80px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-7 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    left: 24px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    top: 80px;
    white-space: nowrap;
  }
  
  .profil-anlegen .frame {
    align-items: center;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 14px;
    padding: 10px;
    position: absolute;
    top: 14px;
  }
  
  .profil-anlegen .text-wrapper-8 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 26px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .profil-anlegen .page-heading {
    background-color: #ffffff;
    height: 149px;
    left: 0;
    position: absolute;
    top: 112px;
    width: 1440px;
  }
  
  .profil-anlegen .overlap {
    height: 98px;
    left: 92px;
    position: relative;
    top: 51px;
    width: 1256px;
  }
  
  .profil-anlegen .overlap-group {
    height: 97px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 1256px;
  }
  
  .profil-anlegen .divider {
    height: 2px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 95px;
    width: 1256px;
  }
  
  .profil-anlegen .frame-wrapper {
    align-items: center;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 101px;
    padding: 10px;
    position: absolute;
    top: 0;
  }
  
  .profil-anlegen .frame-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    position: relative;
  }
  
  .profil-anlegen .text-wrapper-9 {
    color: #000000;
    font-family: "Newsreader-Regular", Helvetica;
    font-size: 64px;
    font-weight: 400;
    letter-spacing: -1.28px;
    line-height: 76.8px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
  
  .profil-anlegen .ellipse {
    background-color: #d9d9d9;
    border-radius: 43.5px;
    height: 87px;
    left: 4px;
    position: absolute;
    top: 0;
    width: 87px;
  }
  
  .profil-anlegen .navigation {
    height: 112px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1440px;
  }
  
  .profil-anlegen .cart-button {
    background-color: #426b1f;
    border-radius: 8px;
    height: 48px;
    left: 260px;
    overflow: hidden;
    position: absolute;
    top: 610px;
    width: 200px;
  }
  
  .profil-anlegen .text-wrapper-10 {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    height: 21px;
    left: 24px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 12px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-11 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 21px;
    left: 1107px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 44px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-12 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 20px;
    left: 1003px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 45px;
    white-space: nowrap;
    width: 73px;
  }
  
  .profil-anlegen .text-wrapper-13 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 21px;
    left: 882px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 45px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-14 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 21px;
    left: 777px;
    letter-spacing: 0;
    line-height: 20.8px;
    position: absolute;
    text-align: center;
    top: 44px;
    white-space: nowrap;
  }
  
  .profil-anlegen .text-wrapper-15 {
    color: #426b1f;
    font-family: "Newsreader-Medium", Helvetica;
    font-size: 32px;
    font-weight: 500;
    left: 91px;
    letter-spacing: -0.32px;
    line-height: 32px;
    position: absolute;
    top: 40px;
    white-space: nowrap;
  }

  .profil-anlegen input {
  margin-top: 5px;
  margin-left: 150px;
  height: 60%;
  width: 75%;
}
  </style>
  