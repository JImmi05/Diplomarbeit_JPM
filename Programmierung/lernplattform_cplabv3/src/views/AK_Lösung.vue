<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe">
        <div class="fortschritt">
        </div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <div> </div>
        <div> </div>
        <div class="schritt2" style="margin-top:8%">
          Hier befindet sich ein Lösungsvorschlag für diese Aufgabe. Auf den Bildern sind der Aufbau und die Logik-Programmierung zu erkennen.
        </div>
        <img class="schrittimg" src="../assets/Verkabelung_Aufgabe_Komplett.jpg" />
        <img class="schrittimg" src="../assets/Tablet_Aufgae_Komplett.jpg" />
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
      router.push('/AK4')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask5Progress');      
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
  .news .button1{
    position: absolute;
    left: 22px;
    top: 22px;
    width: 70px;
    height: 40px;
    border-radius: 24px;
  }

  .news .button2{
    position: absolute;
    right: 22px;
    top: 22px;
    width: 70px;
    height: 40px;
    border-radius: 24px;
  }

  .fortschritt {
  margin-top: 0.5%;
  margin-left: 2%;
}

.text-wrapper-2 {
  margin-top: 120%;
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
  height: 800px;
  left: 0;
  object-fit: fill;
  top: 0;
  width: 1209.6px;
}

.news .aufgabe {
  height: 1800px;
}


  
  </style>