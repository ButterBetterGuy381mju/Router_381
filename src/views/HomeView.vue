<template>
  <div>
    <div class="store-grid">
      <router-link to="/store1" class="store-link">
        <Store1 />
      </router-link>
      <router-link to="/store2" class="store-link">
        <Store2 />
      </router-link>
      <router-link to="/store3" class="store-link">
        <Store3 />
      </router-link>
      <router-link to="/store4" class="store-link">
        <Store4 />
      </router-link>
      <router-link to="/store5" class="store-link">
        <Store5 />
      </router-link>
      <router-link to="/store6" class="store-link">
        <Store6 />
      </router-link>
    </div>
    <router-link to="/contact">
      <button>Contact Us</button>
    </router-link>
  </div>
</template>

<script>
import Store1 from '../views/Store1.vue'
import Store2 from '../views/Store2.vue'
import Store3 from '../views/Store3.vue'
import Store4 from '../views/Store4.vue'
import Store5 from '../views/Store5.vue'
import Store6 from '../views/Store6.vue'

export default {
  // ...
  components: {
    Store1,
    Store2,
    Store3,
    Store4,
    Store5,
    Store6,
  },
};
</script>
<style scoped>

.home-title {
  text-align: center; 
  font-size: 36px; 
  margin-top: 20px; 
}


.app-title {
  text-align: center;
  color: #000000;
  font-size: 36px;
  margin-top: 20px;
}

.store-link {
  display: block;
  text-align: center; 
  font-size: 18px; 
  margin-top: 10px; 
  text-decoration: none; 
}
.store-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  justify-items: center;
  margin-top: 20px;
}

</style>
