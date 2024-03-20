<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe">
        <div> Aufgabenfortschritt des Benutzers: {{ getTaskProgressById('Hx4m8tkFVn2wLb6sQaZ9') }}%</div>
        <div class="text-wrapper-2">Letzte Aktualisierung: 17.02.2024</div>
        <button class="button1" @click="handleClick"> Zurück </button>
        <button class="button2" @click="handleClick2"> Weiter </button>
        <!-- Weitere Inhalte hier -->
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
      router.push('/AzFe')
    }

    const handleClick2 = () => {
      store.dispatch('increaseTask3Progress');      
      router.push('/AzFe3')
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
  .news {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .news .div {
    background-color: #ffffff;
    height: 1821px;
    position: absolute;
    width: 1440px;
  }
  
  .news .aufgabe {
    background-color: #fafaf5;
    border: 2px solid;
    border-color: #e6e6e6;
    border-radius: 24px;
    height: 1603px;
    left: 96px;
    overflow: hidden;
    position: absolute;
    top: 177px;
    width: 1260px;
  }
  
  .news .text-wrapper {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 900px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    text-align: right;
    top: 22px;
    white-space: nowrap;
  }
  
  .news .div .text-wrapper-2 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 40px;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 65px;
    width: 849px;
  }
  
  .news .div .overlap {
    height: 680px;
    left: 40px;
    position: absolute;
    top: 90px;
    width: 1183px;
  }
  
  .news .p {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 26px;
    position: absolute;
    top: 22;
    width: 1183px;
  }
  
  .news .image {
    height: 500px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 180px;
    width: 1183px;
  }
  
  .news .overlap-group {
    height: 657px;
    left: 42px;
    position: absolute;
    top: 793px;
    width: 1183px;
  }
  
  .news .img {
    height: 500px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 157px;
    width: 1183px;
  }
  
  .news .page-heading {
    background-color: #ffffff;
    height: 149px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1440px;
  }
  
  .news .frame {
    align-items: center;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    left: 86px;
    padding: 10px;
    position: relative;
    top: 46px;
  }
  
  .news .div-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    position: relative;
  }
  
  .news .text-wrapper-3 {
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
  
  </style>