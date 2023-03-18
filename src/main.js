import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHORmS4pGo8ptvlYoXIqTjRZcHK2Pl5UY",
    authDomain: "portfolio-6af2a.firebaseapp.com",
    projectId: "portfolio-6af2a",
    storageBucket: "portfolio-6af2a.appspot.com",
    messagingSenderId: "894223222925",
    appId: "1:894223222925:web:962b48c9ea3b4fbf0abac4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
