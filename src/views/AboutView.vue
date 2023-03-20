<script>
import FormulaireContact from "../components/FormulaireContact.vue";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  addDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  where,

} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";

export default {
  data() {
    return {
      listeProjet: [], // Liste des participants
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    this.getProjet();
  },
  methods: {
    async getProjet() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbProjet = collection(firestore, "projet");
      // Liste des participants triés sur leur nom
      const q = query(dbProjet, "idprojet");
      await onSnapshot(q, (snapshot) => {
        this.listeProjet = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeProjet.forEach(function (projet) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "projet/" + projet.image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              projet.image = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
    downloadImage() {
      // Récupérer l'image depuis le dossier assets
      fetch('../assets/CV_Corentin_Beuchat.pdf')
        .then(response => response.blob())
        .then(blob => {
          // Créer une URL pour l'objet Blob
          const url = window.URL.createObjectURL(new Blob([blob]));
          // Créer un élément <a> pour télécharger l'image
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'CV_Corentin_Beuchat.pdf');
          // Cliquer sur le lien pour déclencher le téléchargement
          link.click();
        });
    }
  },

  components: { FormulaireContact }
}
</script>



<template class="bg-black">
  <div class=" bg-black text-white w-screen lg:h-screen  ">
    <div class="text-center md:flex items-center  ">


      <div class="mb:w-1/3   p-10">
        <h1 class="text-2xl font-light mb-1">Bonjour, je suis Corentin BEUCHAT</h1>
        <h2 class="text-5xl font-bold font-anton ">Développeur web</h2>
        <div class="mt-4 flex align-middle justify-center mb-10">
          <a href="#"><img class="h-10 m-2" src="../assets/logo_langage/mail.png" alt="Mail"></a>
          <a href="https://www.linkedin.com/in/corentin-beuchat-593b91223/"><img class="h-10 m-2"
              src="../assets/logo_langage/LinkedIn.png" alt="LinkedIn"></a>
          <a href="https://github.com/cbeuchatmmi"><img class="h-10 m-2" src="../assets/logo_langage/github-blanc.png"
              alt="Github"></a>
        </div>
      </div>

      <img class="md:w-1/2 mx-auto my-auto " src="../assets/bienvenue.jpg" alt="">
    </div>


  </div>



  <div class=" bg-gray-200 h-screen">
    <h2 class="text-4xl text-center text-blue-600 font-bold ">À Propos de moi</h2>
    <div class="flex justify-items-center ">
      <p class="m-4 w-1/2 font-bold">Je m'appelle Corentin Beuchat, je suis étudiant développeur en 2ème année de MMI à
        Montbéliard.
        Je suis spécialisé dans le développement de sites web notamment avec Wordpress ou des Framework Javascript.</p>
      <img class="m-auto" src="../assets/LogoCB_bgb.png" alt="zdq">
    </div>

    <div class=" xl:flex align-middle justify-center ">
      <div class="m-12">
        <h3 class="text-2xl text-center text-blue-600">Les Langages</h3>
        <div class="flex align-middle justify-center">
          <img class="h-20 m-8" src="../assets/logo_langage/html.png" alt="HTML">
          <img class="h-20 m-8" src="../assets/logo_langage/css.png" alt="CSS">
          <img class="h-20 m-8" src="../assets/logo_langage/js.png" alt="JS">
          <img class="h-20 m-8" src="../assets/logo_langage/vuejs.png" alt="VueJS">
        </div>
      </div>

      <div class="m-12">
        <h3 class="text-2xl text-center text-blue-600">Les Outils</h3>
        <div class="flex align-middle justify-center">
          <img class="h-20 m-8" src="../assets/logo_langage/wordpress.png" alt="WordPress">
          <img class="h-20 m-8" src="../assets/logo_langage/vscode.png" alt="VSCode">
          <img class="h-20 m-8" src="../assets/logo_langage/github.png" alt="Github">
          <img class="h-20 m-8" src="../assets/logo_langage/figma.png" alt="Figma">
        </div>
      </div>
    </div>
    <h3 class="text-2xl text-center text-blue-600">Les Bibliothèque / Framework</h3>
    <div class="flex align-middle justify-center">
      <img class="h-20 m-8" src="../assets/logo_langage/ChartJS.png" alt="ChartJS">
      <img class="h-20 m-8" src="../assets/logo_langage/ThreeJs.png" alt="ThreeJS">
      <img class="h-20 m-8" src="../assets/logo_langage/tailwind.png" alt="TailwindCSS">
    </div>
    <div class="flex items-center justify-center ">
      <button class=" border-4 p-2 text-lg rounded-lg border-blue-600 text-blue-600 " @click="downloadImage">Télécharger
        mon
        CV</button>
    </div>
  </div>




  <div class=" bg-black ">

    <h2 class=" text-4xl text-center text-blue-500"> Mes Projets </h2>

    <div class="text-white flex flex-wrap mt-3">
      <router-link v-for='projet in listeProjet' :key='projet.id' :to="projet.lien">
        <div class="w-full p-2">
          <div class="bg-blue-600 rounded-[37px]">
            <img class="m-auto text-center" :src="projet.image" :alt="projet.nom" />
            <h3 class="text-center text-2xl">{{ projet.nom }}</h3>
          </div>
        </div>
      </router-link>
    </div>



  </div>


  <div class=" bg-blue-600">

    <h2 class="text-4xl text-white text-center mb-2"> Me Contacter</h2>
    <FormulaireContact />
    <div class="bg-blue-600">
      <h3>dz</h3>
    </div>

  </div>

  <div class="bg-black">
    <svg viewBox="0 0 724 3" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"
      class="w-[800px] h-auto m-auto">
      <line x1="-1.31134e-7" y1="1.5" x2="724" y2="1.49994" stroke="#fff" stroke-width="3"></line>
    </svg>
    <div class="flex align-middle justify-center">
      <a href="#"><img class="h-10 m-8" src="../assets/logo_langage/mail.png" alt="Mail"></a>
      <a href="https://www.linkedin.com/in/corentin-beuchat-593b91223/"><img class="h-10 m-8"
          src="../assets/logo_langage/LinkedIn.png" alt="LinkedIn"></a>
      <a href="https://github.com/cbeuchatmmi"><img class="h-10 m-8" src="../assets/logo_langage/github-blanc.png"
          alt="Github"></a>

    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;

  }
}
</style>
