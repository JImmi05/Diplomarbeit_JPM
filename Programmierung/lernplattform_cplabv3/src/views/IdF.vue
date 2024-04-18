<template>
  <div class="news">
    <div class="div">
      <div class="aufgabe">
        <div class="overlap">
          <p class="p">
            Lorem ipsum dolor sit amet
          </p>
          <img class="image" alt="Image" src="../assets/Festo_Tablet.jpg" />
        </div>
      </div>
      <div class="page-heading">
        <div class="frame">
          <div class="div-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-3">Umgang mit dem Tec2Screen®-Connect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
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

.news .text-wrapper-2 {
  color: #000000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 39px;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  top: 22px;
  width: 849px;
}

.news .overlap {
  height: 680px;
  left: 42px;
  position: absolute;
  top: 70px;
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
  top: 0;
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

</style>