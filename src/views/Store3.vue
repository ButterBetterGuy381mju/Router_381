<template>
  <div class="store">
    <img src="https://www.emporium.co.th/wp-content/uploads/2018/05/EMP-2F-Adidas-01-500x500.jpg" alt="ร้านค้าที่ 3" />
    <h2>Adidas</h2>
    <p>Adidas เป็นยี่ห้อของสินค้าที่เกี่ยวข้องกับอุปกรณ์กีฬา ต้นกำเนิดอยู่ที่ประเทศเยอรมนี ผู้ที่คิดค้นและเริ่มผลิตคือ Adolf (Adi) Dassler </p>

    <!-- เข้าชม Gucci แสดงเฉพาะในหน้า Store1 -->
    <a
      v-if="$route.name === 'store3'"
      href="https://www.adidas.co.th/th/"
      target="_blank"
      rel="noopener noreferrer"
      class="visit-button" 
    >
      เข้าชม Adidas
    </a>
  </div>
</template>
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  h2 {
    color: rgb(250, 250, 252); 
  }
  
 
  </style>
