<template>
  <div class="store">
    <img src="https://snkrtoday.com/wp-content/uploads/2020/06/Nike-Siam-Center_pic05.jpg" alt="ร้านค้าที่ 2" />
    <h2>Nike</h2>
    <p>Nike, Inc. บริษัทผลิตรองเท้ากีฬาสัญชาติอเมริกัน ก่อตั้งขึ้นในปี 1964 โดย Bill Bowerman โค้ชด้านกีฬาของมหาวิทยาลัยโอเรกอน และ Phil Knight ลูกศิษย์ของเขาเอง โดยมีชื่อเดิมว่าบริษัท Blue Ribbon Sports ซึ่งเป็นชื่อที่ใช้ในช่วงปี 1964-1978 </p>

    <!-- เข้าชม Gucci แสดงเฉพาะในหน้า Store1 -->
    <a
      v-if="$route.name === 'store2'"
      href="https://www.nike.com/th/w/sale-3yaep?cp=27937905253_search_%7cth%7cCore+Brand+-+Core+Brand+-+General+-+EN_EN%7cGOOGLE%7cnike&ds_rl=1300698&gclid=CjwKCAjwseSoBhBXEiwA9iZtxgoUlGLN51zct3Jwle5apgRVGuNyaZus6LsWgxTWEqwZrbzXQdqVxRoCyW8QAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
      class="visit-button" 
    >
      เข้าชม Nike
    </a>
  </div>
</template>
<script>
export default {
  // ...
};
</script>
  
  <style>
  
  h2 {
    color: rgb(216, 216, 216); 
  }
 

  </style>
 