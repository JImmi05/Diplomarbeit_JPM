<template>
    <div class="profil">
      <div class="div">
        <div class="summary">
          <div class="text-wrapper">n</div>
          <div class="text-wrapper-2">Gesamt</div>
          <div class="text-wrapper-3">n</div>
          <div class="text-wrapper-4">Offene Aufträge</div>
          <div class="text-wrapper-5">n</div>
          <div class="text-wrapper-6">Abgeschlossene Aufträge</div>
          <div class="frame">
            <div class="text-wrapper-7">Lernfortschritt</div>
          </div>
        </div>
        <div class="e-mail">
          <div class="text-wrapper-8">username</div>
          <div class="text-wrapper-9">Passwort:</div>
        </div>
        <div class="e-mail-2">
          <div class="text-wrapper-10">max.mustermann@student.htldornbirn.at</div>
          <div class="text-wrapper-9">E-Mail:</div>
        </div>
        <div class="jahrgang">
          <div class="text-wrapper-11">Klasse</div>
          <div class="text-wrapper-9">Jahrgang:</div>
        </div>
        <div class="username">
          <div class="text-wrapper-12">Max Mustermann</div>
          <div class="text-wrapper-9">Profilname:</div>
        </div>
        <div class="page-heading">
          <div class="overlap">
            <div class="overlap-group">
              <img class="divider" alt="Divider" src="divider.svg" />
              <div class="frame-wrapper">
                <div class="div-wrapper">
                  <div class="div-wrapper">
                    <div class="text-wrapper-13">Profil</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ellipse" />
          </div>
        </div>
        <div class="navigation">
          

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'SecretView'
    }
</script>

<style>
  .profil {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .profil .div {
    background-color: #ffffff;
    height: 1024px;
    position: relative;
    width: 1440px;
  }
  
  .profil .summary {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 211px;
    left: 949px;
    overflow: hidden;
    position: absolute;
    top: 298px;
    width: 395px;
  }
  
  .profil .text-wrapper {
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
  
  .profil .text-wrapper-2 {
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
  
  .profil .text-wrapper-3 {
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
  
  .profil .text-wrapper-4 {
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
  
  .profil .text-wrapper-5 {
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
  
  .profil .text-wrapper-6 {
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
  
  .profil .frame {
    align-items: center;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 14px;
    padding: 10px;
    position: absolute;
    top: 14px;
  }
  
  .profil .text-wrapper-7 {
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
  
  .profil .e-mail {
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
  
  .profil .text-wrapper-8 {
    color: #000000;
    filter: blur(5px);
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 597px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    text-align: right;
    top: 11px;
    white-space: nowrap;
  }
  
  .profil .text-wrapper-9 {
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
  
  .profil .e-mail-2 {
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
  
  .profil .text-wrapper-10 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 392px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    text-align: right;
    top: 11px;
    white-space: nowrap;
  }
  
  .profil .jahrgang {
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
  
  .profil .text-wrapper-11 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 700px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    text-align: right;
    top: 11px;
    white-space: nowrap;
  }
  
  .profil .username {
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
  
  .profil .text-wrapper-12 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 626px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    text-align: right;
    top: 11px;
    white-space: nowrap;
  }
  
  .profil .page-heading {
    background-color: #ffffff;
    height: 149px;
    left: 0;
    position: absolute;
    top: 112px;
    width: 1440px;
  }
  
  .profil .overlap {
    height: 98px;
    left: 92px;
    position: relative;
    top: 51px;
    width: 1256px;
  }
  
  .profil .overlap-group {
    height: 97px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 1256px;
  }
  
  .profil .divider {
    height: 2px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 95px;
    width: 1256px;
  }
  
  .profil .frame-wrapper {
    align-items: center;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 101px;
    padding: 10px;
    position: absolute;
    top: 0;
  }
  
  .profil .div-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    position: relative;
  }
  
  .profil .text-wrapper-13 {
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
  
  .profil .ellipse {
    background-color: #d9d9d9;
    border-radius: 43.5px;
    height: 87px;
    left: 4px;
    position: absolute;
    top: 0;
    width: 87px;
  }
  
  .profil .navigation {
    height: 112px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1440px;
  }
  
  .profil .cart-button {
    background-color: #426b1f;
    border-radius: 8px;
    height: 48px;
    left: 1218px;
    overflow: hidden;
    position: absolute;
    top: 32px;
    width: 126px;
  }
  
  .profil .text-wrapper-14 {
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
  
  .profil .text-wrapper-15 {
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
  
  .profil .text-wrapper-16 {
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
  
  .profil .text-wrapper-17 {
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
  
  .profil .text-wrapper-18 {
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
  
  .profil .text-wrapper-19 {
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
  </style>
