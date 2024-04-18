<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe">
        <div class="fortschritt">
        <div> Aufgabenfortschritt des Benutzers: {{ getTaskProgressById('MY6m4tsFKn2twm8qKabW') }}%</div>
        </div>
        <div class="text-wrapper-2">Letzte Aktualisierung: 17.02.2024</div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <button class="button2" @click="handleClick2"> Weiter </button>
        <div class="schritttitel">Schritt 1: Starten des Förderbands</div>
        <div class="schritt2">
Erklärung der Funktion: Das Förderband ist eine mechanische Vorrichtung, die dazu dient, Gegenstände von einem Ort zum anderen zu transportieren. Es besteht aus einer endlosen Schleife von Riemen oder Rollen, die von einer Antriebseinheit angetrieben werden.
Anweisung: Starten Sie das Förderband mithilfe der entsprechenden Steuerungseinheit. (z. B. durch Betätigen eines Schalters oder einer Schaltfläche auf dem Bedienfeld)
        </div>
        <div class="schritt2">
Erklärung der Funktion: Das Förderband ist eine mechanische Vorrichtung, die dazu dient, Gegenstände von einem Ort zum anderen zu transportieren. Es besteht aus einer endlosen Schleife von Riemen oder Rollen, die von einer Antriebseinheit angetrieben werden.
Anweisung: Starten Sie das Förderband mithilfe der entsprechenden Steuerungseinheit. (z. B. durch Betätigen eines Schalters oder einer Schaltfläche auf dem Bedienfeld)
        </div>
      </div>
      <div class="page-heading">
        <div class="frame">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-3">Aufgaben zum Förderband</div>
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
      store.dispatch('decreaseTask2Progress');
      router.push('/AzF2')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask2Progress');      
      router.push('/AzF4')
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