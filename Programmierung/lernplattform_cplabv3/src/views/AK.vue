<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe" style="height:400px">
        <div class="fortschritt">
        <div> Aufgabenfortschritt des Benutzers: {{ getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6') }}%</div>
        </div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <button class="button2" @click="handleClick2"> Weiter </button>
        <div class="schritttitel">Schritt 1: Bohrer oben halten</div>
        <div class="schritt2">
                In diesem Schritt soll der Bohrer permanent oben gehalten werden. Dies gilt als Grundlage der meisten Programme der Bohrstation,
                da die Ausgangsposition des Bohrers "Oben" ist, sodass
                Bauteile ungehindert unter der Bohrstation durchfahren können.
                Um den Bohrer oben zu halten, müssen wir das zuständige Pneumatikventil auf Spannung legen, sodass die Druckluft im pneumatisch
                betätigten Zylinder den Bohrer nach oben drückt.
        </div>
        <div class="schritt2">
                Anleitung: Stecke ein Digital-I/O-Modul in einen dafür vorhergesehenen Steckplatz auf dem Tec2Screen®-Connect.
                Konfiguriere eine der Sicherheitsbuchsen auf Ausgang, und eine auf Eingang. Verwende ein schwarzes Sicherheitskabel,
                um den Ausgang mit der Buchse auf dem Tableu, die den Zylinder betätigt, zu verbinden. Anschließend soll mit Logik-Bausteinen
                die gewünschte Funktion programmiert werden.
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
      router.push('/Aufgaben')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask5Progress');      
      router.push('/AK2')
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