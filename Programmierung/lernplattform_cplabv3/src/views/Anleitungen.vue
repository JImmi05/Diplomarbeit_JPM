<template>
    <div class="anleitungen-seite">
      <div class="div">
        <router-link to="/IdBu"><div class="anleitung">
          <p class="text-wrapper">Anleitung zur den verschiedenen Buchsen der Sensoren</p>
          <div class="text-wrapper-2">Anleitung der Buchsen</div>
          <img class="image" alt="Image" src="../assets/SkillsConveyor.jpg" />
        </div></router-link>
        <router-link to="/IdB"><div class="anleitung-2">
          <p class="p">Anleitung zur Installation der Bohrstation auf unsere Lenrplattform</p>
          <div class="text-wrapper-2">Installation der Bohrstation</div>
          <img class="img" alt="Image" src="../assets/Bohrstation.png" />
        </div></router-link>
        <router-link to="/IdF"><div class="anleitung-3">
          <p class="text-wrapper-3">Anleitung zur Installation des Förderbandes auf unsere Lenrplattform</p>
          <div class="text-wrapper-2">Installation des Förderbandes</div>
          <img class="image-2" alt="Image" src="../assets/vetter_kleinförderband.jpg" />
        </div></router-link>
        <router-link to="/IdBu"><div class="anleitung-4">
          <p class="text-wrapper">Anleitung zur den verschiedenen Buchsen der Sensoren</p>
          <div class="text-wrapper-2">Anleitung der Buchsen</div>
          <img class="image" alt="Image" src="../assets/SkillsConveyor.jpg" />
        </div></router-link>
        <router-link to="/IdB"><div class="anleitung-5">
          <p class="p">Anleitung zur Installation der Bohrstation auf unsere Lenrplattform</p>
          <div class="text-wrapper-2">Installation der Bohrstation</div>
          <img class="img" alt="Image" src="../assets/Bohrstation.png" />
        </div></router-link>
        <router-link to="/IdF"><div class="anleitung-6">
          <p class="text-wrapper-3">Anleitung zur Installation des Förderbandes auf unsere Lenrplattform</p>
          <div class="text-wrapper-2">Installation des Förderbandes</div>
          <img class="image-2" alt="Image" src="../assets/vetter_kleinförderband.jpg" />
        </div></router-link>
        <div class="page-heading">
          <div class="text-wrapper-4">Anleitungen</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AnleitungenSeite",
  };
  </script>
  
  <style>
  .anleitungen-seite {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .anleitungen-seite .div {
    background-color: #ffffff;
    height: 1354px;
    position: absolute;
    width: 1440px;
  }
  
  .anleitungen-seite .anleitung {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 444px;
    left: 949px;
    overflow: hidden;
    position: absolute;
    top: 205px;
    width: 395px;
  }
  
  .anleitungen-seite .text-wrapper {
    color: #426b1f;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 24px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 348px;
    width: 358px;
  }
  
  .anleitungen-seite .text-wrapper-2 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 24px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 318px;
    white-space: nowrap;
  }
  
  .anleitungen-seite .image {
    height: 304px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 395px;
  }
  
  .anleitungen-seite .anleitung-2 {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 444px;
    left: 522px;
    overflow: hidden;
    position: absolute;
    top: 205px;
    width: 395px;
  }
  
  .anleitungen-seite .p {
    color: #426b1f;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 24px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 348px;
    width: 310px;
  }
  
  .anleitungen-seite .img {
    height: 274px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 395px;
  }
  
  .anleitungen-seite .anleitung-3 {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 444px;
    left: 95px;
    overflow: hidden;
    position: absolute;
    top: 205px;
    width: 395px;
  }
  
  .anleitungen-seite .text-wrapper-3 {
    color: #426b1f;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 24px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 348px;
    width: 351px;
  }
  
  .anleitungen-seite .image-2 {
    height: 237px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 395px;
  }
  
  .anleitungen-seite .anleitung-4 {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 444px;
    left: 949px;
    overflow: hidden;
    position: absolute;
    top: 705px;
    width: 395px;
  }
  
  .anleitungen-seite .anleitung-5 {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 444px;
    left: 522px;
    overflow: hidden;
    position: absolute;
    top: 705px;
    width: 395px;
  }
  
  .anleitungen-seite .anleitung-6 {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 444px;
    left: 95px;
    overflow: hidden;
    position: absolute;
    top: 705px;
    width: 395px;
  }
  
  .anleitungen-seite .page-heading {
    background-color: #ffffff;
    height: 149px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1440px;
  }
  
  .anleitungen-seite .text-wrapper-4 {
    color: #000000;
    font-family: "Newsreader-Regular", Helvetica;
    font-size: 64px;
    font-weight: 400;
    height: 77px;
    left: 96px;
    letter-spacing: -1.28px;
    line-height: 76.8px;
    position: absolute;
    top: 55px;
    white-space: nowrap;
  }
  
  </style>