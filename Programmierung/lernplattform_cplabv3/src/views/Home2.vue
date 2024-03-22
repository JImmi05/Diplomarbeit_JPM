<template>
  <div class="startseite">
    <main class="content">
      <p class="p1">Willkommen auf unserer Lernplattform!</p>
      <p class="p2">CP-Lernplatform - Die digitale Lernplattform für Lehrnende und Lernende, die sich mit Industrie4.0 auseinandersetzen wollen</p>

      <div class="items">
        <div class="diploma-item">
          <h2 class="item-title">Anleitungen</h2>
          <div class="image-container">
            <img src="../assets/SkillsConveyor.jpg" alt="Anleitungen Bild">
          </div>
        </div>
        <div class="diploma-item">
          <h2 class="item-title">Aufgaben</h2>
          <div class="image-container">
            <img src="../assets/image-9.png" alt="Aufgaben Bild">
          </div>
        </div>
      </div>
      <p class="instructions">Hier finden Sie verschiedene Anleitungen und Informationen zu unserer Diplomarbeit.</p>  
      <div class="footer">
        <footer>
          <h2>Impressum & Kontakt</h2>
          <p>WIFI Dornbirn</p>
          <p>Bahnhofstraße 24, 6850 Dornbirn</p>
          <p>info(at)vlbg.wifi.at</p>
          <p>Telefon: +43 5572 3894-425</p>
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style>

.startseite {
  background-image: url('../assets/SkillsConveyor.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.content {
  text-align: center;
}

.p1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.p2 {
  font-size: 18px;
  margin-bottom: 20px;
}

.items {
  display: flex;
  justify-content: space-around;
}

.diploma-item {
  flex-basis: 45%;
}

.item-title {
  margin-bottom: 10px;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.instructions {
  margin-top: 20px;
}

.footer {
  margin-top: 20px;
}

footer {
  text-align: center;
}

</style>