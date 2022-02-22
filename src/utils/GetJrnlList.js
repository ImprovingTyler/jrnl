import { query, where, getDocs, collection } from 'firebase/firestore'

async function GetJrnlList (db, uID, jrnls) {
    const q = query(collection(db, uID), where("ownerID", "==", uID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data().jrnlTitle)
      jrnls[0].push([doc.data().jrnlTitle])
      jrnls[1].push([doc.id])
    });
}


export default GetJrnlList