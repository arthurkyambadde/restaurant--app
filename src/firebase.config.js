import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDnL0p8WuvL9M5Sh2_EzyHZYzQHtcUzdnc',
  authDomain: 'restaurantapp-3e699.firebaseapp.com',
  databaseURL: 'https://restaurantapp-3e699-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-3e699',
  storageBucket: 'restaurantapp-3e699.appspot.com',
  messagingSenderId: '643449461499',
  appId: '1:643449461499:web:dc8f10a8e770a14f026e5e',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
