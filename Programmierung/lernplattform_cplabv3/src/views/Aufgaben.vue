<template>
  <div class="aufgaben-seite">
    <div class="div">
      <div class="summary">
        <div class="text-wrapper-18">Gesamt</div>
        <div class="text-wrapper-19">{{ averageTaskProgress }}%</div>
        <div class="text-wrapper-16">{{ getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6') }}%</div>
        <div class="text-wrapper-17">Aufgabe Komplett</div>
        <div class="text-wrapper-14">{{ getTaskProgressById('P3n7qsRGyJt5wm2aKbW8') }}%</div>
        <div class="text-wrapper-15">Bohrstation</div>
        <div class="text-wrapper-3">{{ getTaskProgressById('Hx4m8tkFVn2wLb6sQaZ9') }}%</div>
        <div class="text-wrapper-4">Förderband erweitert</div>
        <div class="text-wrapper-5">{{ getTaskProgressById('MY6m4tsFKn2twm8qKabW') }}%</div>
        <div class="text-wrapper-6">Förderband</div>
        <div class="text-wrapper-7">{{ getTaskProgressById('E7jR9ufXzLp5ah2qKbW3') }}%</div>
        <div class="text-wrapper-8">Theorie der Komponenten</div>
        <div class="frame">
          <div class="text-wrapper-9">Zusammenfassung</div>
        </div>
      </div>
      <router-link :to="getAufgabenRoute()">
        <div class="aufgabe-3">
          <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
          <div class="text-wrapper-11">Aufwand: ca. 3h</div>
          <div class="text-wrapper-12">Theorie der Komponenten</div>
          <button class="resetButton" v-if="isTask1Completed" @click="resetTask1Progress">Aufgabe erneut machen</button>
          <img class="img" alt="Noonbrew ekmak" src="../assets/Sensoren.png" />
          <div class="aufgaben-state">Aufgabenfortschritt: {{ getTaskProgressById('E7jR9ufXzLp5ah2qKbW3') }}% </div> <!--'E7jR9ufXzLp5ah2qKbW3' ist die ID der ersten Aufgabe-->
        </div>
      </router-link>
      <router-link :to="getAufgabenRoute2()">
        <div class="aufgabe">
          <div class="text-wrapper-10">In dieser kurzen Aufgabe werden die Grundfunktionen...</div>
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

    const averageTaskProgress = computed(() => {
      const totalProgress = (
        store.getters.getTaskProgressById('E7jR9ufXzLp5ah2qKbW3') +
        store.getters.getTaskProgressById('MY6m4tsFKn2twm8qKabW') +
        store.getters.getTaskProgressById('Hx4m8tkFVn2wLb6sQaZ9') +
        store.getters.getTaskProgressById('P3n7qsRGyJt5wm2aKbW8') +
        store.getters.getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6')
      );

      return totalProgress / 5;
    });

    const getAufgabenRoute = () => {
      // Fortschritt wird über den getter abgerufen 
      const userProgress = store.getters.getTaskProgressById('E7jR9ufXzLp5ah2qKbW3'); // Progress der Aufgabe 1
        // Wenn zu 0% erledigt, weiterleiten zu Seite 1 der Aufgabe (hier AzT)
        if (userProgress === 0) {
          return "/AzT";
          // Wenn zu 25% erledigt, weiterleiten zu Seite 2 der Aufgabe (hier AzT2)
        } else if (userProgress === 25) {
          return "/AzT2";
          // Wenn zu 50% erledigt, weiterleiten zu Seite 3 der Aufgabe (hier AzT3)
        } else if (userProgress === 50) {
          return "/AzT3";
          // Wenn zu 75% erledigt, weiterleiten zu Seite 4 der Aufgabe (hier AzT4)
        } else if (userProgress === 75) {
          return "/AzT4";
          // Wenn etwas anderes wie oben dann zur Aufgaben Seite weiterleiten (z.B. Bei 100%)
        } else {
          return "/Aufgaben";
        }
      };

    // Eigenschaft um den Abschlussstatus der Aufgabe 1 festzustellen
    const isTask1Completed = computed(() => {
      // Die Fortschrittsdaten der Aufgabe 1 aus dem Store abrufen
      const taskProgress = store.getters.getTaskProgressById('E7jR9ufXzLp5ah2qKbW3');
      // Überprüfen, ob der Fortschritt der Aufgabe 1 100% erreicht hat
      return taskProgress === 100;// Wenn ja, gibt `true` zurück, sonst `false`
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
      averageTaskProgress,
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

.aufgaben-seite .text-wrapper-3 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  right: 25px;
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
  right: 25px;
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
  right: 25px;
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
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 400;
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
  right: 3%;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  text-align: right;
  top: 10%;
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
  top: 10%;
  white-space: nowrap;
}

.aufgaben-seite .aufgaben-state {
  color: #339901;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 800;
  right: 3%;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 75%;
  white-space: nowrap;
}

.aufgaben-seite .resetButton{
  margin-top: 122.25px;
  margin-left: 184px;
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


.aufgaben-seite .aufgabe-4 .text-wrapper-12,
.aufgaben-seite .aufgabe-5 .text-wrapper-12 {
  top: 22px;
}

.aufgaben-seite .aufgabe-4 .img,
.aufgaben-seite .aufgabe-5 .img {
  top: 0;
  left: 0;
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

.aufgaben-seite .text-wrapper-15 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 191px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-14 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  right: 25px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 191px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-17 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 228px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-16 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  right: 25px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 228px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-18 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  top: 265px;
  white-space: nowrap;
}

.aufgaben-seite .text-wrapper-19 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 600;
  right: 25px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: right;
  top: 265px;
  white-space: nowrap;
}




</style>