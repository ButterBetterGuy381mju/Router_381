  <template>
    <div class="store">
      <img src="https://www.modaes.com/files/000_2016/iconix/umbro-728-dentro.jpg" alt="ร้านค้าที่ 4" />
      <h2>Umbro</h2>
      <p>อัมโบร (อังกฤษ: Umbro) เป็นผู้ผลิตอุปกรณ์กีฬาของอังกฤษที่ก่อตั้งขึ้นใน ค.ศ. 1924 ในเมืองวิล์มสโลว์ เทศมณฑลเชชเชอร์ และตั้งอยู่ในเมืองแมนเชสเตอร์ พวกเขาเชี่ยวชาญด้านชุดกีฬาฟุตบอลและรักบี้ ที่มีตรา เพชรคู่ ผลิตภัณฑ์ของอัมโบรวางตลาดในกว่า 100 ประเทศ</p>
  
      <a
        v-if="$route.name === 'store4'"
        href="https://www.umbro.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        class="visit-button" 
      >
        เข้าชม Umbro
      </a>
    </div>
  </template>
  
  <script>
  export default {

  }
  </script>
  
  <style>
  
  h2 {
    color: rgb(255, 255, 255); 
  }

  </style>
