<template>
    <div>
      <h2>Contact Us</h2>
  
      <p>If you have any questions or feedback, please feel free to get in touch with us.</p>
  
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // ทำตามขั้นตอนเมื่อคลิกปุ่มส่ง
        console.log('Form data:', this.formData);
        // ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือประมวลผลต่อไปตามความต้องการ
        // ในที่นี้เราแค่แสดงข้อมูลในคอนโซลเท่านั้น
      }
    }
  }
  </script>
  
  <style scoped>
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #1c4877;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #000000;
  }
  </style>
  