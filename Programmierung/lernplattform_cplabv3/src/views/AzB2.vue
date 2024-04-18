<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe">
        <div class="fortschritt">
        <div> Aufgabenfortschritt des Benutzers: {{ getTaskProgressById('P3n7qsRGyJt5wm2aKbW8') }}%</div>
        </div>
        <div class="text-wrapper-2">Letzte Aktualisierung: 17.02.2024</div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <button class="button2" @click="handleClick2"> Weiter </button>
        <div class="schritttitel">Schritt 2: Bohrer absenken</div>
        <div class="schritt2">
In diesem Schritt soll erreicht werden, dass sich der Bohrer absenkt, falls der Näherungsschalter unter dem Bohrer auslöst.
          Anschließend soll der Bohrer 2 Sekunden unten bleiben, bevor er wieder angehoben wird. Dies simuliert einen Bohrvorgang, der
          ausgelöst wird, wenn ein Bauteil auf dem Förderband die korrekte Position erreicht.
        </div>
        <div class="schritt2">
Anleitung: Verbinde den zuvor definierten Eingang bei dem Tec2Screen®-Connect mit der Sichreheitsbuchse, die das Ausgangssignal
          des Näherungsschalters ausgibt. Anschließend soll mit Logik-Bausteinen die gewünschte Funktion programmiert werden.
        </div>
      </div>
      <div class="page-heading">
        <div class="frame">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-3">Aufgaben zur Bohrstation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    // Fortschritt des angemeldeten Benutzers aus dem Store abrufen
    const getTaskProgressById = computed(() => {
      return store.getters.getTaskProgressById;
    });

    const handleClick = () => {
      store.dispatch('decreaseTask4Progress');
      router.push('/AzB')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask4Progress');      
      router.push('/AzB3')
    }


    return {
      handleClick,
      handleClick2,
      getTaskProgressById
    }
  }
}
</script>
  
  <style>
  .fortschritt {
  margin-top: 0.5%;
  margin-left: 2%;
}

.button1 {
  margin-top: 1%;
}

.button2 {
  margin-top: 1%;
}

.text-wrapper-2 {
  margin-top: 120%;
}

.schritttitel {
  margin-top: 5%;
  margin-left: 2%;
  font-weight: 600;
}

.schritt2 {
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
}

.schrittimg {
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  height: 500px;
  left: 0;
  object-fit: cover;
  top: 0;
  width: 1209.6px;
}
  </style>