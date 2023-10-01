<template>
  <div>
    <header>
      <div class="header-left">
        <router-link to="/" class="logo-link">
          <img src="https://inwfile.com/s-c/5vgxco.png" alt="โลโก้ร้านค้า" class="logo" />
          <h1 class="app-title">Shopping Market</h1>
        </router-link>
      </div>
      <div class="header-right">
        <router-link to="/contact" class="header-link">Contact Us</router-link>
        <router-link to="/review" class="header-link">Review</router-link>
        <router-link to="/about" class="header-link">About</router-link>
      </div>
    </header>
    <main class="store-layout">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "ยินดีต้อนรับสู่ร้านค้า"
    }
  },
  methods: {
    showMessage() {
      alert(this.message);
    }
  }
}
</script>

<style scoped>

.app-title {
  margin: 0px; 
  text-align: center; 
  color: #ffffff;
  text-decoration: none; 
  font-size: 30pxx; 
}
header {
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.header-left {
  display: flex;
  align-items: center;
}


.logo {
  width: 100px; 
  height: auto;
  margin-right: 10px;
}

.header-link {
  color: #ffffff;
  text-decoration: none;
  margin-left: 20px; 
  font-size: 18px;
}

.header-link:hover {
  text-decoration: underline;
}

.header-right button {
  background-color: #d8d8d8;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.header-right button:hover {
  background-color: #616161;
}

.header-center .app-title {
  text-align: center;
  color: #000000;
  font-size: 36px;
  margin-top: 20px;
}

.store-links {
  display: flex;
  justify-content:center;
  background-color: #000000;
  padding: 10px 0;
}

.store-link {
  color: #f5f5f5;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  transition: all 0.3s;
}

.store-link:hover {
  color: #d60303;
  transform: scale(1.1);
}

.store-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  padding: 20px; 
  width: 100%; 
  height: auto; 
}

.store {
  border: 1px solid #ccc; 
  padding: 20px; 
  text-align: center;
  margin-left: 600px;
}
.store img {
  width: 100%; 
  height: auto; 
}
</style>
