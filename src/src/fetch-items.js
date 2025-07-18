import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

export async function fetchItensEstoque() {
  const itensCol = collection(db, "itens"); // Nome da coleção Firestore
  const itensSnapshot = await getDocs(itensCol);
  return itensSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
