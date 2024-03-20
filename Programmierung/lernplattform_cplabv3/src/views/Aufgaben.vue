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
        <router-link :to="getAufgabenRoute()">
        <div class="aufgabe-3">
          <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
          <div class="text-wrapper-11">Aufwand: ca. 3h</div>
          <div class="text-wrapper-12">Theorie der Komponenten</div>
          <button class="resetButton" v-if="isTask1Completed" @click="resetTask1Progress">Aufgabe erneut machen</button>
          <img class="img" alt="Noonbrew ekmak" src="../assets/Sensoren.png" />
          <div class="aufgaben-state">Aufgabenfortschritt: {{ getTaskProgressById('E7jR9ufXzLp5ah2qKbW3') }}% </div>
        </div>
      </router-link>
      <router-link :to="getAufgabenRoute2()">
        <div class="aufgabe">
          <p class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...</p>
          <div class="text-wrapper-11">Aufwand: ca. 3h</div>
          <div class="text-wrapper-12">Förderband</div>
          <button class="resetButton" v-if="isTask2Completed" @click="resetTask2Progress">Aufgabe erneut machen</button>
          <img class="img" alt="Ed o neil" src="../assets/vetter_kleinförderband.jpg" />
          <div class="aufgaben-state">Aufgabenfortschritt: {{ getTaskProgressById('MY6m4tsFKn2twm8qKabW') }}% </div>
        </div>
      </router-link>
      <router-link :to="getAufgabenRoute3()">
        <div class="aufgabe-2">
          <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
          <div class="text-wrapper-11">Aufwand: ca. 3h</div>
          <div class="text-wrapper-12">Förderband erweitert</div>
          <button class="resetButton" v-if="isTask3Completed" @click="resetTask3Progress">Aufgabe erneut machen</button>
          <img class="img" alt="Fkphulv m" src="../assets/Bohrstation.png" />
          <div class="aufgaben-state">Aufgabenfortschritt: {{ getTaskProgressById('Hx4m8tkFVn2wLb6sQaZ9') }}% </div>
        </div>
      </router-link>
      <router-link :to="getAufgabenRoute4()">
        <div class="aufgabe-4">
          <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
          <div class="text-wrapper-11">Aufwand: ca. 3h</div>
          <div class="text-wrapper-12">Bohrstation</div>
          <button class="resetButton" v-if="isTask4Completed" @click="resetTask4Progress">Aufgabe erneut machen</button>
          <img class="img" alt="Fkphulv m" src="../assets/Bohrstation.png" />
          <div class="aufgaben-state">Aufgabenfortschritt: {{ getTaskProgressById('P3n7qsRGyJt5wm2aKbW8') }}% </div>
        </div>
      </router-link>
      <router-link :to="getAufgabenRoute5()">
        <div class="aufgabe-5">
          <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
          <div class="text-wrapper-11">Aufwand: ca. 3h</div>
          <div class="text-wrapper-12">Aufgabe Komplett</div>
          <button class="resetButton" v-if="isTask5Completed" @click="resetTask5Progress">Aufgabe erneut machen</button>
          <img class="img" alt="Fkphulv m" src="../assets/Bohrstation.png" />
          <div class="aufgaben-state">Aufgabenfortschritt: {{ getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6') }}% </div>
        </div>
      </router-link>
      
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
//import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    //const router = useRouter();

    const getTaskProgressById = computed(() => {
      return store.getters.getTaskProgressById;
    });

    const getAufgabenRoute = () => {
      const userProgress = store.getters.getTaskProgressById('E7jR9ufXzLp5ah2qKbW3'); // Progress der Aufgabe 1
        if (userProgress === 0) {
          return "/AzT";
        } else if (userProgress === 25) {
          return "/AzT2";
        } else if (userProgress === 50) {
          return "/AzT3";
        } else if (userProgress === 75) {
          return "/AzT4";
        } else {
          return "/Aufgaben";
        }
      };

       // Überprüfen, ob die Aufgabe 1 zu 100% erledigt ist
    const isTask1Completed = computed(() => {
      const taskProgress = store.getters.getTaskProgressById('E7jR9ufXzLp5ah2qKbW3');
      return taskProgress === 100;
    });

    // Funktion zum Zurücksetzen des Fortschritts der Aufgabe 1
    const resetTask1Progress = () => {
      store.dispatch('resetTask1Progress'); // Action im Store aufrufen
    };


    const getAufgabenRoute2 = () => {
      const userProgress = store.getters.getTaskProgressById('MY6m4tsFKn2twm8qKabW'); // Progress der Aufgabe 1
        if (userProgress === 0) {
          return "/AzF";
        } else if (userProgress === 25) {
          return "/AzF2";
        } else if (userProgress === 50) {
          return "/AzF3";
        } else if (userProgress === 75) {
          return "/AzF4";
        } else {
          return "/Aufgaben";
        }
    };


    const isTask2Completed = computed(() => {
      const taskProgress = store.getters.getTaskProgressById('MY6m4tsFKn2twm8qKabW');
      return taskProgress === 100;
    });


    const resetTask2Progress = () => {
      store.dispatch('resetTask2Progress');
      //router.push('AzF')
    };


    const getAufgabenRoute3 = () => {
      const userProgress = store.getters.getTaskProgressById('Hx4m8tkFVn2wLb6sQaZ9'); // Progress der Aufgabe 1
        if (userProgress === 0) {
          return "/AzFe";
        } else if (userProgress === 25) {
          return "/AzFe2";
        } else if (userProgress === 50) {
          return "/AzFe3";
        } else if (userProgress === 75) {
          return "/AzFe4";
        } else {
          return "/Aufgaben";
        }
    };


    const isTask3Completed = computed(() => {
      const taskProgress = store.getters.getTaskProgressById('Hx4m8tkFVn2wLb6sQaZ9');
      return taskProgress === 100;
    });


    const resetTask3Progress = () => {
      store.dispatch('resetTask3Progress');
    };


    const getAufgabenRoute4 = () => {
      const userProgress = store.getters.getTaskProgressById('P3n7qsRGyJt5wm2aKbW8'); // Progress der Aufgabe 1
        if (userProgress === 0) {
          return "/AzB";
        } else if (userProgress === 25) {
          return "/AzB2";
        } else if (userProgress === 50) {
          return "/AzB3";
        } else if (userProgress === 75) {
          return "/AzB4";
        } else {
          return "/Aufgaben";
        }
    };


    const isTask4Completed = computed(() => {
      const taskProgress = store.getters.getTaskProgressById('P3n7qsRGyJt5wm2aKbW8');
      return taskProgress === 100;
    });


    const resetTask4Progress = () => {
      store.dispatch('resetTask4Progress');
    };


    const getAufgabenRoute5 = () => {
      const userProgress = store.getters.getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6'); // Progress der Aufgabe 1
        if (userProgress === 0) {
          return "/AK";
        } else if (userProgress === 25) {
          return "/AK2";
        } else if (userProgress === 50) {
          return "/AK3";
        } else if (userProgress === 75) {
          return "/AK4";
        } else {
          return "/Aufgaben";
        }
    };


    const isTask5Completed = computed(() => {
      const taskProgress = store.getters.getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6');
      return taskProgress === 100;
    });


    const resetTask5Progress = () => {
      store.dispatch('resetTask5Progress');
    };

    return {
      getTaskProgressById,
      getAufgabenRoute,
      isTask1Completed,
      resetTask1Progress,
      getAufgabenRoute2,
      isTask2Completed,
      resetTask2Progress,
      getAufgabenRoute3,
      isTask3Completed,
      resetTask3Progress,
      getAufgabenRoute4,
      isTask4Completed,
      resetTask4Progress,
      getAufgabenRoute5,
      isTask5Completed,
      resetTask5Progress,
      
    };

    
  }
};
</script>

<style>
/* Deine vorhandenen CSS-Stile */
</style>



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

.aufgaben-seite .resetButton{
  margin: 110px 184px;
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

.aufgaben-seite .aufgabe-4 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 96px;
  overflow: hidden;
  position: absolute;
  top: 759px; /* Hier habe ich die Position angepasst */
  width: 821px;
}

.aufgaben-seite .aufgabe-5 {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 159px;
  left: 96px;
  overflow: hidden;
  position: absolute;
  top: 949px; /* Hier habe ich die Position angepasst */
  width: 821px;
}

.aufgaben-seite .aufgabe-4 .text-wrapper-10,
.aufgaben-seite .aufgabe-5 .text-wrapper-10,
.aufgaben-seite .aufgabe-4 .text-wrapper-11,
.aufgaben-seite .aufgabe-5 .text-wrapper-11,
.aufgaben-seite .aufgabe-4 .text-wrapper-12,
.aufgaben-seite .aufgabe-5 .text-wrapper-12,
.aufgaben-seite .aufgabe-4 .img,
.aufgaben-seite .aufgabe-5 .img,
.aufgaben-seite .aufgabe-4 .aufgaben-state {
  position: absolute;
  left: 184px; /* Hier habe ich die Position angepasst */
}

.aufgaben-seite .aufgabe-4 .text-wrapper-10,
.aufgaben-seite .aufgabe-5 .text-wrapper-10 {
  top: 52px;
  width: 613px;
}

.aufgaben-seite .aufgabe-4 .text-wrapper-11,
.aufgaben-seite .aufgabe-5 .text-wrapper-11 {
  top: 22px;
  right: 184px; /* Hier habe ich die Position angepasst */
}

.aufgaben-seite .aufgabe-4 .text-wrapper-12,
.aufgaben-seite .aufgabe-5 .text-wrapper-12 {
  top: 22px;
}

.aufgaben-seite .aufgabe-4 .img,
.aufgaben-seite .aufgabe-5 .img {
  top: 0;
  left: 0;
}

.aufgaben-seite .aufgabe-4 .aufgaben-state {
  top: 0px;
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
  top: 00px;
}



</style>