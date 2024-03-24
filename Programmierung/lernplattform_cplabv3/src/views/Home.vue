<template>
  <div class="startseite">
    <div class="div">
      <div class="overlap-group">
        <div class="aufgabe"></div>
        <p class="hands-on-ist-die">
          Hands on“ ist die Divise bei den Lernund Übungsstationen. So lassen sich zum Beispiel mit dem neuen
          „CyberPhysical Laboratory“ im Wifi Dornbirn unterschiedlichste industrielle Aufgabenstellungen und Szenarien
          live erleben – vom einzelnen Transferband bis hin zur kompletten Produktionsanlage mit verschiedenen Modulen
          und Arbeitsplätzen. Alles ist dabei hochgradig vernetzt, um digitale Skills, wie Programmierung und
          Kommunikation quer durch alle Unternehmensbereiche zu erlernen, denn diese sind für die Fertigung der
          Zukunft unumgänglich. Unsere Arbeit soll das Erlernen von zukunftsweisenden Automatisier
          <br />
          <br />
          Modulares Lernsystem für praxisnahe Aus – und Weiterbildung, welche aufbauend auf klassischen Inhalten der
          Elektrotechnik Kompetenzen neuer Technologien und Systeme in Kontext von Industrie 4.0 vermittelt.
          Lernanleitung (Webseite, Videos, AR, …) in Form von Infos, aufbauenden Aufgaben und Anleitungen.
        </p>
        <div class="unser-ziel">UNSER ZIEL:</div>
        <p class="text-wrapper">
          Kleinförderbänder von Vetter vereinen Individualität mit maximaler Qualität. Sie sind kompakt, ohne
          Störkonturen und überzeugen mit geschickt integrierten, leistungsstarken Motoren.
        </p>
        <p class="p">
          Kleinförderbänder von Vetter vereinen Individualität mit maximaler Qualität. Sie sind kompakt, ohne
          Störkonturen und überzeugen mit geschickt integrierten, leistungsstarken Motoren.
        </p>
        <img class="image" alt="Image" src="../assets/Förderband.png" />
        <img class="img" alt="Image" src="../assets/Bohrstation.png" />
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
  top: 678px;
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
  top: 674px;
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
  top: 569px;
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
  height: 500px;
  left: 59px;
  object-fit: cover;
  position: absolute;
  top: 55px;
  width: 1210px;
}

.startseite .img {
  height: 500px;
  left: 59px;
  object-fit: cover;
  position: absolute;
  top: 1112px;
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
  top: 1px;
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
  top: 30px;
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
  top: 0;
}

</style>
