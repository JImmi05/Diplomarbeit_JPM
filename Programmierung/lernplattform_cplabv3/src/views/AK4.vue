<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe" style="height:400px">
        <div class="fortschritt">
        <div> Aufgabenfortschritt des Benutzers: {{ getTaskProgressById('Tc2x5jpYgHw9Ln4qKsF6') }}%</div>
        </div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <button class="button2" @click="handleClick2"> Beenden </button>
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
    <div class ="Lösung">
      <button @click="clickLösung">Lösung</button>
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
      router.push('/AK3')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask5Progress');      
      router.push('/Aufgaben')
    }

    const clickLösung = () => {
      router.push('AK_Lösung')
    }


    return {
      handleClick,
      handleClick2,
      clickLösung,
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
  height: 500px;
  left: 0;
  object-fit: cover;
  top: 0;
  width: 1209.6px;
}

.Lösung {
    position: absolute;
    left: 160px;
    top: 600px;
    width: 70px;
    height: 40px;
    border-radius: 24px;
}


  
  </style>