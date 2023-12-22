import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVZCcfCRQdDYQshHzWxMcc60XNyEpS88U",
  authDomain: "sedatkurtuldu-6c2a7.firebaseapp.com",
  projectId: "sedatkurtuldu-6c2a7",
  storageBucket: "sedatkurtuldu-6c2a7.appspot.com",
  messagingSenderId: "795786826204",
  appId: "1:795786826204:web:fd8fb4ec01ac97e08f7f19"
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});

const storage = getStorage(app);


export { db, storage };