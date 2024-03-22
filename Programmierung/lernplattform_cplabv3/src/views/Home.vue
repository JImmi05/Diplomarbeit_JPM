<template>
  <div class="startseite">
    <div class="div">
      <p class="hands-on-ist-die">
        Hands on“ ist die Divise bei den Lern und Übungsstationen. So lassen sich zum Beispiel mit dem neuen
        „Cyber Physical Laboratory“ im Wifi Dornbirn unterschiedlichste industrielle Aufgabenstellungen und Szenarien
        live erleben – vom einzelnen Transferband bis hin zur kompletten Produktionsanlage mit verschiedenen Modulen
        und Arbeitsplätzen. Alles ist dabei hochgradig vernetzt, um digitale Skills, wie Programmierung und
        Kommunikation quer durch alle Unternehmensbereiche zu erlernen, denn diese sind für die Fertigung der Zukunft
        unumgänglich. Unsere Arbeit soll das Erlernen von zukunftsweisenden Automatisier
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
      <img class="image" alt="Image" src="../assets/image-9.png" />
      <p class="p">
        Die einzelnen Funktionsmodule werden einfach auf die Bänder aufgesetzt und über Ein- und Ausgänge oder Profi
        net/Profi - bus mit der integrierten Steuerung am Bandsystem verbunden. Damit sind sie innerhalb kürzester
        Zeit einsatzbereit.
      </p>
      <img class="img" alt="Image" src="../assets/Bohrstation.png" />
      
      <p class="text-wrapper-3">Lernplattform der digitalen Lernfabrik im WIFI Dornbirn</p>
      <div class="footer">
        <footer>
          <h2>Impressum & Kontakt</h2>
          <p>WIFI Dornbirn</p>
          <p>Bahnhofstraße 24, 6850 Dornbirn</p>
          <p>info(at)vlbg.wifi.at</p>
          <p>Telefon: +43 5572 3894-425</p>
        </footer>
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
  position: absolute;
  width: 1440px;
}

.startseite .hands-on-ist-die {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 309px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1400px;
  width: 822px;
}

.startseite .unser-ziel {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 24px;
  font-weight: 600;
  left: 96px;
  letter-spacing: 0.96px;
  line-height: 38.4px;
  position: absolute;
  top: 1350px;
  width: 181px;
}

.startseite .text-wrapper {
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 629px;
  letter-spacing: -0.14px;
  line-height: 22.4px;
  position: absolute;
  top: 900px;
  width: 786px;
}

.startseite .image {
  height: 512px;
  left: 695px;
  object-fit: cover;
  position: absolute;
  top: 400px;
  width: 666px;
}

.startseite .p {
  color: #000000;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  left: 144px;
  letter-spacing: -0.14px;
  line-height: 22.4px;
  position: absolute;
  top: 1200px;
  width: 1029px;
}

.startseite .img {
  height: 708px;
  left: 144px;
  object-fit: cover;
  position: absolute;
  top: 500px;
  width: 453px;
}

.startseite .button {
  all: unset;
  background-color: #426b1f;
  border-radius: 8px;
  box-sizing: border-box;
  height: 64px;
  left: 607px;
  overflow: hidden;
  position: absolute;
  top: 250px;
  width: 227px;
}

.startseite .text-wrapper-2 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  height: 26px;
  left: 47px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 18px;
  white-space: nowrap;
}

.startseite .text-wrapper-3 {
  color: #000000;
  font-family: "Newsreader-Regular", Helvetica;
  font-size: 64px;
  font-weight: 400;
  left: 217px;
  letter-spacing: -1.28px;
  line-height: 76.8px;
  position: absolute;
  text-align: center;
  top: 10px;
  width: 1020px;
}

.startseite .header {
  background-color: transparent;
  height: 112px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.startseite .cart-button {
  background-color: #426b1f;
  border-radius: 8px;
  height: 48px;
  left: 1218px;
  overflow: hidden;
  position: absolute;
  top: 32px;
  width: 126px;
}

.startseite .text-wrapper-4 {
  color: #ffffff;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 21px;
  left: 24px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 12px;
  white-space: nowrap;
}

.startseite .text-wrapper-5 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 1107px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 44px;
  white-space: nowrap;
}

.startseite .text-wrapper-6 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  left: 1003px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 45px;
  white-space: nowrap;
  width: 73px;
}

.startseite .text-wrapper-7 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 882px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 45px;
  white-space: nowrap;
}

.startseite .text-wrapper-8 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  left: 777px;
  letter-spacing: 0;
  line-height: 20.8px;
  position: absolute;
  text-align: center;
  top: 44px;
  white-space: nowrap;
}

.startseite .text-wrapper-9 {
  color: #426b1f;
  font-family: "Newsreader-Medium", Helvetica;
  font-size: 32px;
  font-weight: 500;
  left: 96px;
  letter-spacing: -0.32px;
  line-height: 32px;
  position: absolute;
  top: 40px;
  white-space: nowrap;
}

.footer {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  top: 1950px;
}
</style>
