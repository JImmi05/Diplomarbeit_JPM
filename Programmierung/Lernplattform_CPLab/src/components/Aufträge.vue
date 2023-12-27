<template>
  <div class="aufgaben-seite">
    <div class="div">
      <div class="summary">
        <button class="button">
          <img class="icon" alt="Icon" src="icon.svg" />
          <div class="text-wrapper">Abgeben</div>
        </button>
        <div class="text-wrapper-2">5.5h</div>
        <div class="text-wrapper-3">Gesamt</div>
        <div class="text-wrapper-4">3h</div>
        <div class="text-wrapper-5">Bohrstation</div>
        <div class="text-wrapper-6">1h</div>
        <div class="text-wrapper-7">Sensoren des Förderbands</div>
        <div class="text-wrapper-8">1.5h</div>
        <div class="text-wrapper-9">Förderband</div>
        <div class="frame">
          <div class="text-wrapper-10">Aufträge</div>
        </div>
      </div>
      <div class="aufgabe">
        <div class="text-wrapper-11">1h</div>
        <div class="text-wrapper-12">Datum Abgabe</div>
        <div class="text-wrapper-13">Sensoren des Förderbands</div>
        <img class="img" alt="Noonbrew ekmak" src="../assets/Sensoren.png" />
      </div>
      <div class="aufgabe-2">
        <div class="text-wrapper-11">3h</div>
        <div class="text-wrapper-12">Datum Abgabe</div>
        <div class="text-wrapper-13">Bohrstation</div>
        <img class="img" alt="Fkphulv m" src="../assets/Bohrstation.png" />
      </div>
      <div class="aufgabe-3">
        <div class="text-wrapper-11">1.5 h</div>
        <div class="text-wrapper-12">Datum Abgabe</div>
        <div class="text-wrapper-13">Förderband</div>
        <img class="img" alt="Ed o neil" src="../assets/image-9.png" />
      </div>
      <div class="page-heading">
        <img class="divider" alt="Divider" src="divider.svg" />
        <div class="frame-wrapper">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-14">Aufträge</div>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="cart-button">
          <div class="text-wrapper-15">Abmelden</div>
        </div>
        <router-link to="/profil" class="text-wrapper-16">Mein Profil</router-link>
        <router-link to="/aufträge" class="text-wrapper-17">Aufträge</router-link>
        <router-link to="/anleitungen" class="text-wrapper-18">Anleitungen</router-link>
        <router-link to="/" class="text-wrapper-19">Startseite</router-link>
        <div class="text-wrapper-20">Lernplattform CPLAB</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AufgabenSeite",
};
</script>

<style>
.aufgaben-seite {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.aufgaben-seite .div {
  background-color: #ffffff;
  height: 1024px;
  position: relative;
  width: 1440px;
}

.aufgaben-seite .summary {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 318px;
  left: 949px;
  overflow: hidden;
  position: absolute;
  top: 301px;
  width: 395px;
}

.aufgaben-seite .button {
  all: unset;
  background-color: #426b1f;
  border-radius: 8px;
  box-sizing: border-box;
  height: 48px;
  left: 24px;
  overflow: hidden;
  position: absolute;
  top: 246px;
  width: 347px;
}

.aufgaben-seite .icon {
  height: 32px;
  left: 299px;
  position: absolute;
  top: 8px;
  width: 32px;
}

.aufgaben-seite .text-wrapper {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 13px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 336px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 188px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-3 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 191px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-4 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 351px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 154px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-5 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 154px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-6 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 354px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 117px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-7 {
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

.aufgaben-seite .text-wrapper-8 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 340px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 80px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-9 {
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

.aufgaben-seite .frame {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 14px;
  padding: 10px;
  position: absolute;
  top: 14px;
}

.aufgaben-seite .text-wrapper-10 {
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

.aufgaben-seite .aufgabe {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 96px;
  overflow: hidden;
  position: absolute;
  top: 491px;
  width: 821px;
}

.aufgaben-seite .text-wrapper-11 {
  color: #426b1f;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 184px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 52px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-12 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 652px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-13 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 184px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 22px;
  white-space: nowrap;
}

.aufgaben-seite .img {
  height: 159px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 160px;
}

.aufgaben-seite .aufgabe-2 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 96px;
  overflow: hidden;
  position: absolute;
  top: 681px;
  width: 821px;
}

.aufgaben-seite .aufgabe-3 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 96px;
  overflow: hidden;
  position: absolute;
  top: 301px;
  width: 821px;
}

.aufgaben-seite .page-heading {
  background-color: #ffffff;
  height: 149px;
  left: 0;
  position: absolute;
  top: 112px;
  width: 1440px;
}

.aufgaben-seite .divider {
  height: 2px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 147px;
  width: 1256px;
}

.aufgaben-seite .frame-wrapper {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 86px;
  padding: 10px;
  position: absolute;
  top: 46px;
}

.aufgaben-seite .div-wrapper {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  justify-content: center;
  position: relative;
}

.aufgaben-seite .text-wrapper-14 {
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

.aufgaben-seite .navigation {
  height: 112px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.aufgaben-seite .cart-button {
  background-color: #426b1f;
  border-radius: 8px;
  height: 48px;
  left: 1218px;
  overflow: hidden;
  position: absolute;
  top: 32px;
  width: 126px;
}

.aufgaben-seite .text-wrapper-15 {
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

.aufgaben-seite .text-wrapper-16 {
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

.aufgaben-seite .text-wrapper-17 {
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

.aufgaben-seite .text-wrapper-18 {
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

.aufgaben-seite .text-wrapper-19 {
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

.aufgaben-seite .text-wrapper-20 {
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
