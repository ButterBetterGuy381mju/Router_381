<template>
  <div class="store">
    <img src="https://inwfile.com/s-gd/nngs16.jpg" alt="ร้านค้าที่ 1" />
    <h2>Gucci</h2>
    <p>Gucci คือหนึ่งในแบรนด์ลักชูรี่ชั้นนำของโลก จากประวัติอันยาวนานกว่าร้อยปีของแบรนด์ Gucci ยังคงมุ่งมั่นที่จะมอบนิยามใหม่ให้กับความหรูหรา และเชิดชูคุณค่าของความคิดสร้างสรรค์ เอกลักษณ์ประณีตศิลป์ของอิตาลี </p>

    <!-- เข้าชม Gucci แสดงเฉพาะในหน้า Store1 -->
    <a
      v-if="$route.name === 'store1'"
      href="https://www.gucci.com/us/en/"
      target="_blank"
      rel="noopener noreferrer"
      class="visit-button" 
    >
      เข้าชม Gucci
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // เพิ่มข้อมูลสินค้าของร้านค้าที่ 1 ตรงนี้
      products: [
        {
          name: 'สินค้าที่ 1',
          description: 'รายละเอียดสินค้าที่ 1',
        },
        {
          name: 'สินค้าที่ 2',
          description: 'รายละเอียดสินค้าที่ 2',
        },
        // เพิ่มสินค้าเพิ่มเติมตามต้องการ
      ],
    };
  },
};
</script>
  <style>
  
  h2 {
    color: rgb(241, 241, 241);
  }
  .store img {
    width: 550px; 
    height: 300px; 
  }
  .store {
    padding: 10px; 
    background-color: rgb(8, 1, 1);
    color: #f5f5f5;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    transition: all 0.3s;
  }
  .visit-button {
    background-color: #121c27;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  .visit-button:hover {
    background-color: #163350;
  }
  </style>
  