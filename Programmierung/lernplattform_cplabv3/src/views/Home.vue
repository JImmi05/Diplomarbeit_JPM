<template>
  <div class="startseite">
    <div class="div">
      <div class="overlap-group">
        <div class="aufgabe"  style="height:1800px"></div>
        <p class="hands-on-ist-die">
          Die Lernplattform soll eine Hilfe für die Lernenden darstellen, damit diese mit der Lernstation so einfach und effektiv wie möglich die Grundlagen der Elektrotechnik, Steuerungstechnik und Automatisierungstechnik lernen können.
          <br />
          <br />
          Ein modulares Lernsystem für praxisnahe Aus- und Weiterbildung wird entwickelt, um Kompetenzen in neuen Technologien und Systemen im Kontext von Industrie 4.0 aufzubauen. 
          Es baut auf klassischen Inhalten der Elektrotechnik auf und bietet eine strukturierte Lernanleitung in Form von Informationen, aufbauenden Aufgaben und detaillierten Anleitungen. 
          Dieser Ansatz ermöglicht es den Lernenden, ihr Verständnis schrittweise zu vertiefen und praktische Fähigkeiten zu entwickeln, die für die modernen Anforderungen der Industrie relevant sind.

        </p>
        <div class="unser-ziel">ZIEL:</div>
        <img class="image" alt="Image" src="../assets/Bohrstation_k.png" />
        <img class="img" alt="Image" src="../assets/Förderband.png" />
      </div>
      <p class="text-wrapper-3">Lernsystem der digitalen Lernfabrik im WIFI Dornbirn</p>
      <div class="overlap">
        <div class="rectangle"></div>
        <p class="WIFI-dornbirn">
          WIFI Dornbirn
          <br />
          Bahnhofstraße 2 4, 6850 Dornbirn
          <br />
          info(at)vlbg.wifi.at
          <br />
          Telefon: +43 5572 3894-425
        </p>
        <div class="impressum-kontakte">IMPRESSUM &amp; KONTAKTE</div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {

    // Verwendung des Vuex-Stores im Setup
    const store = useStore();

    //Eigenschaft, um den Benutzerzustand aus dem Store zu erhalten
    const user = computed(() => store.state.user)

    onMounted(async () => {
      // Überprüfen, ob ein Benutzer im Store vorhanden ist (Wenn ja, ausführen)
      if (user.value) {
        //Hier wird die Aktion "fetchTasks aufgerufen"
        await store.dispatch('fetchTasks');
      }
    });
  }
}
</script>

<style>
.startseite {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.startseite .div {
  background-color: #ffffff;
  height: 2092px;
  position: relative;
  width: 1440px;
}

.startseite .overlap-group {
  height: 1675px;
  left: 56px;
  position: absolute;
  top: 276px;
  width: 1327px;
}

.startseite .aufgabe {
  background-color: #fafaf5;
  border: 2px solid;
  border-color: #e6e6e6;
  border-radius: 24px;
  height: 1660px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1327px;
}

.startseite .hands-on-ist-die {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 271px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 770px;
  width: 998px;
}

.startseite .unser-ziel {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 24px;
  font-weight: 600;
  left: 59px;
  letter-spacing: 0.96px;
  line-height: 38.4px;
  position: absolute;
  top: 790px;
  width: 181px;
}

.startseite .text-wrapper {
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 59px;
  letter-spacing: -0.14px;
  line-height: 22.4px;
  position: absolute;
  top: 625px;
  width: 1210px;
}

.startseite .p {
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 59px;
  letter-spacing: -0.14px;
  line-height: 22.4px;
  position: absolute;
  top: 1619px;
  width: 1210px;
}

.startseite .image {
  height: 730px;
  left: 59px;
  object-fit:fill;
  position: absolute;
  top: 20px;
  width: 1210px;
}

.startseite .img {
  height: 600px;
  left: 59px;
  object-fit: cover;
  position: absolute;
  top: 1120px;
  width: 1210px;
}

.startseite .text-wrapper-2 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  height: 26px;
  left: 19px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 18px;
  white-space: nowrap;
}

.startseite .text-wrapper-3 {
  color: #000000;
  font-family: "Newsreader-Regular", Helvetica;
  font-size: 60px;
  font-weight: 400;
  left: 210px;
  letter-spacing: -1.28px;
  line-height: 76.8px;
  position: absolute;
  text-align: center;
  width: 1020px;
}

.startseite .overlap {
  height: 137px;
  left: 0;
  position: absolute;
  top: 1951px;
  width: 1440px;
}

.startseite .rectangle {
  background-color: #339901;
  height: 136px;
  left: 0;
  position: absolute;
  top: 200px;
  width: 1440px;
}

.startseite .WIFI-dornbirn {
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 587px;
  letter-spacing: -0.14px;
  line-height: 22.4px;
  position: absolute;
  text-align: center;
  top: 220px;
  width: 265px;
}

.startseite .impressum-kontakte {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 24px;
  font-weight: 600;
  left: 559px;
  letter-spacing: 0.96px;
  line-height: 38.4px;
  position: absolute;
  top: 200px;
}

</style>
