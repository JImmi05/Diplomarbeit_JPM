<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe" style="height:400px">
        <div class="fortschritt">
        <div> Aufgabenfortschritt des Benutzers: {{ getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6') }}%</div>
        </div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <button class="button2" @click="handleClick2"> Weiter </button>
        <div class="schritttitel">Schritt 3: Förderband steuern</div>
        <div class="schritt2">
          In diesem Schritt soll die Steuerung des Förderbands erstellt werden. Das Förderband soll eingeschaltet sein, bis der Näherungsschalter
          auslöst. Somit fährt das Förderband, bis das Bauteil, dass den Näherungsschalter auslöst, die richtige Position erreicht hat. Dies ermöglicht es,
          später einen kompletten Bohrvorgang zu simulieren.
        </div>
        <div class="schritt2">
          Anleitung: Verbinde ein weiteres Digital-I/O-Modul mit dem Tec2Screen®-Connect. Konfiguriere einen Ausgang, un verbinde diesen mit einem
          schwarzen Sicherheitskabel mit der Sicherheitsbuchse, die das Förderband einschaltet. Programmiere mithilfe des Eingangs des Näherungsschalters
          die notwendige Logik, um das Förderband beim Auslösen des Näherungsschalters für 2 Sekunden anzuhalten.
        </div>
        <!-- Weitere Inhalte hier -->
      </div>
      <div class="page-heading">
        <div class="frame">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-3">Aufgabe Komplett</div>
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
      store.dispatch('decreaseTask5Progress');
      router.push('/AK2')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask5Progress');      
      router.push('/AK4')
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