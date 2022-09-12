import { async } from '@firebase/util';
import { setDoc, doc, getDocs, query, collection, orderBy } from 'firebase/firestore';
import { firestore } from '../firebase.config';

//saving new items
export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true });
};

//getall food items
export const getAllFooditems = async () => {
  const items = await getDocs(query(collection(firestore, 'foodItems'), orderBy('id', 'desc')));

  return items.docs.map((doc) => doc.data());
};
