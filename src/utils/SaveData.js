import { setDoc, addDoc, collection, doc, getDoc} from 'firebase/firestore'
async function SaveData (selectedJrnl, jrnl, jrnls, page, uID, db, selectedPage, handleGetJrnlList) {

    console.log('JRNLS : ', jrnls)
    const docRef = doc(db, uID, selectedJrnl[0]);
    const collectionRef = collection(db, uID)
    const docSnap = await getDoc(docRef);
    
    if (selectedJrnl === 'default' && selectedPage === 'default') {
        // save as new jrnl (CONSIDER DOING A POP UP)
        await addDoc(collectionRef, {
            jrnlTitle: jrnl,
            ownerID: uID,
            pages: [page]
        })
    } else {
        // save as selected jrnl
        await setDoc(docRef, {
            jrnlTitle: jrnl,
            ownerID: uID,
            pages: docSnap.data().pages[selectedPage]
        })
    }
    handleGetJrnlList()
}

export default SaveData