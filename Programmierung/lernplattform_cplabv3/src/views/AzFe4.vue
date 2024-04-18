<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe">
        <div class="fortschritt">
        <div> Aufgabenfortschritt des Benutzers: {{ getTaskProgressById('Hx4m8tkFVn2wLb6sQaZ9') }}%</div>
        </div>
        <div class="text-wrapper-2">Letzte Aktualisierung: 17.02.2024</div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <button class="button2" @click="handleClick2"> Weiter </button>
        <div class="schritttitel">Schritt 4: Vollständiger Bohrvorgang</div>
        <div class="schritt2">
Dies ist der letzte Schritt, um einen vollständigen Bohrvorgang zu erstellen. Am Ende dieses Schritts sollte es möglich sein,
          dass ein Bauteil auf dem Förderband transportiert wird, bis es die Position unter dem Bohrer erreicht. Dort soll es einen Näherungsschalter auslösen,
          der gleichzeitig das Förderband anhält, sowie einen 2-sekündigen Bohrvorgang durchführt, bevor es den Bohrer wieder anhebt und das Bauteil auf dem Förderband
          weiter tranportiert wird. 
        </div>
        <div class="schritt2">
Anleitung: Theoretisch müssten nur die Anschlüsse aus den vorherhigen Schritten übernommen werden und die Logik erweitert werden, um die
          Funktionalitäten zu verbinden. Es werden keine neuen Digital-I/O-Module benötigt.
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
      store.dispatch('decreaseTask3Progress');
      router.push('/AzFe3')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask3Progress');      
      router.push('/Aufgaben')
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