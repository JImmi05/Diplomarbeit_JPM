<template>
  <div class="aufgaben-seite">
    <div class="div">
      <div class="summary">
        <div class="text-wrapper">5.5h</div>
        <div class="text-wrapper-2">Gesamt</div>
        <div class="text-wrapper-3">3h</div>
        <div class="text-wrapper-4">Bohrstation</div>
        <div class="text-wrapper-5">1h</div>
        <div class="text-wrapper-6">Sensoren des Förderbands</div>
        <div class="text-wrapper-7">1.5h</div>
        <div class="text-wrapper-8">Förderband</div>
        <div class="frame">
          <div class="text-wrapper-9">Aufgaben</div>
        </div>
      </div>
      <router-link to="/AzS"><div class="aufgabe">
        <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
        <div class="text-wrapper-11">Aufwand: ca. 3h</div>
        <div class="text-wrapper-12">Sensoren des Förderbands</div>
        <img class="img" alt="Noonbrew ekmak" src="../assets/Sensoren.png" />
      </div></router-link>
      <router-link to="/AzB"><div class="aufgabe-2">
        <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
        <div class="text-wrapper-11">Aufwand: ca. 3h</div>
        <div class="text-wrapper-12">Bohrstation</div>
        <img class="img" alt="Fkphulv m" src="../assets/Bohrstation.png" />
      </div></router-link>
      <router-link  @click="handleClick" to="/AzF"><div class="aufgabe-3">
        <p class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...</p>
        <div class="text-wrapper-11">Aufwand: ca. 3h</div>
        <div class="aufgaben-state">Aufgabenfortschritt: {{ AufgabenState }}% </div>
        <div class="text-wrapper-12">Förderband</div>
        <img class="img" alt="Ed o neil" src="../assets/vetter_kleinförderband.jpg" />
      </div></router-link>
      <div class="page-heading">
        <div class="frame-wrapper">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-13">Aufgaben</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup(){
    const store = useStore();

    const handleClick = () => {
      store.dispatch('setAufgabenState', 0);   
    }

    const AufgabenState = computed(() => {
      return store.getters.currentAufgabenState;
    })

    return{
      handleClick,
      AufgabenState
    };
  }

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
  position: absolute;
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
  top: 189px;
  width: 395px;
}

.aufgaben-seite .text-wrapper {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 336px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 271px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 274px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-3 {
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

.aufgaben-seite .text-wrapper-4 {
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

.aufgaben-seite .text-wrapper-5 {
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

.aufgaben-seite .text-wrapper-6 {
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

.aufgaben-seite .text-wrapper-7 {
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

.aufgaben-seite .text-wrapper-8 {
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

.aufgaben-seite .text-wrapper-9 {
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
  top: 379px;
  width: 821px;
}

.aufgaben-seite .text-wrapper-10 {
  color: #426b1f;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 184px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 52px;
  width: 613px;
}

.aufgaben-seite .text-wrapper-11 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 640px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-12 {
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

.aufgaben-seite .aufgaben-state {
  color: #1fff01;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 800;
  left: 184px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 0px;
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
  top: 569px;
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
  top: 189px;
  width: 821px;
}

.aufgaben-seite .page-heading {
  background-color: #ffffff;
  height: 149px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.aufgaben-seite .frame-wrapper {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 86px;
  padding: 10px;
  position: relative;
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

.aufgaben-seite .text-wrapper-13 {
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

.aufgaben-seite .aufgabe-3 .Aufgaben-state{
  left: 0px;
  top: 100px;
}

</style>