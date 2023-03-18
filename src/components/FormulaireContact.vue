<script>
// Bibliothèque Firestore : import des fonctions
import {
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

// Cloud Storage : import des fonctions
import {
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js'

export default {
    name: 'CreateView',
    data() {
        return {
            contact: {
                nom: null,
                email: null,
                message: null,
            },
            formSent: false,

        }
    },
    methods: {
        async getContact() {
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document pays
            const dbContact = collection(firestore, "contact");
        },
        async createContact() {
            // Obtenir storage Firebase
            const storage = getStorage();

            const db = getFirestore();
            const docRef = addDoc(collection(db, "contact"), this.contact);

            this.formSent = true;

        },

    },
}



</script>
<template>
    <div class=" flex items-center justify-center">
        <form enctype="multipart/form-data" @submit.prevent="createContact">
            <div class="">

                <div class="">
                    <div class="">
                        <div class="">
                            <input class="h-8 w-[400px] rounded-lg mb-2" placeholder="  Nom" v-model="contact.nom"
                                required />
                        </div>
                        <div>
                            <input class="h-8 w-[400px] rounded-lg mb-2" placeholder="  Email" v-model="contact.email"
                                required />
                        </div>
                        <div>
                            <textarea class="h-[200px] w-[400px] rounded-lg mb-2" placeholder="  Message"
                                v-model="contact.message" required></textarea>
                        </div>

                    </div>
                </div>
                <div class="rounded-lg">
                    <button type="submit" class="text-blue-600 bg-blue-50 p-2">Envoyer</button>
                </div>
                <div class="text-white" v-if="formSent">Votre message à bien été envoyé</div>
            </div>
        </form>
    </div>
</template>