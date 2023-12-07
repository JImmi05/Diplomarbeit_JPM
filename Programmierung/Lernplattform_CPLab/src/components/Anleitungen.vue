<template>
  <div class="anleitungen-seite">
    <div class="div">
      <div class="anleitung">
        <p class="text-wrapper">Anleitung zur den verschiedenen Buchsen der Sensoren</p>
        <div class="text-wrapper-2">Anleitung der Buchsen</div>
        <img class="image" alt="Image" src="../assets/SkillsConveyor.jpg" />
      </div>
      <div class="anleitung-2">
        <p class="p">Anleitung zur Installation der Bohrstation auf unsere Lenrplattform</p>
        <div class="text-wrapper-2">Installation der Bohrstation</div>
        <img class="img" alt="Image" src="../assets/Bohrstation2.png" />
      </div>
      <div class="anleitung-3">
        <p class="text-wrapper-3">Anleitung zur Installation des Förderbandes auf unsere Lenrplattform</p>
        <div class="text-wrapper-2">Installation des Förderbandes</div>
        <img class="image-2" alt="Image" src="../assets/vetter_kleinförderband.jpg" />
      </div>
      <div class="page-heading">
        <img class="divider" alt="Divider" src="divider.svg" />
        <div class="default-chip">
          <div class="text-wrapper-4">Default</div>
        </div>
        <div class="a-z-chip">
          <div class="text-wrapper-5">A-Z</div>
        </div>
        <div class="list-chip">
          <div class="text-wrapper-5">List view</div>
        </div>
        <div class="text-wrapper-6">Anleitungen</div>
      </div>
      <div class="navigation">
        <div class="cart-button">
          <div class="text-wrapper-7">Abmelden</div>
        </div>
        <router-link to="/profil" class="text-wrapper-8">Mein Profil</router-link>
        <router-link to="/aufträge" class="text-wrapper-9">Aufträge</router-link>
        <router-link to="/anleitungen" class="text-wrapper-10">Anleitungen</router-link>
        <router-link to="/" class="text-wrapper-11">Startseite</router-link>
        <div class="text-wrapper-12">Lernplattform CPLAB</div>
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
  height: 1024px;
  position: relative;
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
  top: 317px;
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
  top: 317px;
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
  top: 317px;
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

.anleitungen-seite .page-heading {
  background-color: #ffffff;
  height: 149px;
  left: 0;
  position: absolute;
  top: 112px;
  width: 1440px;
}

.anleitungen-seite .divider {
  height: 2px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 147px;
  width: 1256px;
}

.anleitungen-seite .default-chip {
  background-color: #426b1f;
  border-radius: 20px;
  height: 40px;
  left: 1077px;
  overflow: hidden;
  position: absolute;
  top: 76px;
  width: 88px;
}

.anleitungen-seite .text-wrapper-4 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 16px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 8px;
  white-space: nowrap;
}

.anleitungen-seite .a-z-chip {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #c2c2c2;
  border-radius: 20px;
  height: 40px;
  left: 1173px;
  overflow: hidden;
  position: absolute;
  top: 76px;
  width: 62px;
}

.anleitungen-seite .text-wrapper-5 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 16px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 8px;
  white-space: nowrap;
}

.anleitungen-seite .list-chip {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #c2c2c2;
  border-radius: 20px;
  height: 40px;
  left: 1243px;
  overflow: hidden;
  position: absolute;
  top: 76px;
  width: 101px;
}

.anleitungen-seite .text-wrapper-6 {
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

.anleitungen-seite .navigation {
  height: 112px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.anleitungen-seite .cart-button {
  background-color: #426b1f;
  border-radius: 8px;
  height: 48px;
  left: 1218px;
  overflow: hidden;
  position: absolute;
  top: 32px;
  width: 126px;
}

.anleitungen-seite .text-wrapper-7 {
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

.anleitungen-seite .text-wrapper-8 {
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

.anleitungen-seite .text-wrapper-9 {
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

.anleitungen-seite .text-wrapper-10 {
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

.anleitungen-seite .text-wrapper-11 {
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

.anleitungen-seite .text-wrapper-12 {
  color: #426b1f;
  font-family: "Newsreader-Medium", Helvetica;
  font-size: 32px;
  font-weight: 500;
  left: 96px;
  letter-spacing: -0.32px;
  line-height: 32px;
  position: absolute;
  top: 40px;
  white-space: nowrap;
}
</style>
