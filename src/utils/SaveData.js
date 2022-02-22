import { setDoc, addDoc, collection, doc, getDoc} from 'firebase/firestore'
async function SaveData (selectedJrnl, jrnls, uID, db, jrnlNumber) {
    
    console.log('SELECTEDJRNL: ',selectedJrnl)
    console.log('JRNLS: ',jrnls)
    console.log('UID: ',uID)
    console.log('JRNLNUMBER: ',jrnlNumber)

    const docRef = doc(db, uID, selectedJrnl[0]);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    // const docRef = doc(collection(db, uID, selectedJrnl))
    
    // const docSnapshot = await getDoc(docRef)
    // console.log(docSnapshot)
        // await addDoc(collection(db, auth.currentUser.uid), 
        //     {
        //         jrnlTitle: jrnl,
        //         pages: [page],
        //         ownerID: auth.currentUser.uid
        //     }
        // );
    
        

}

export default SaveData