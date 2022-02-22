import {doc, getDoc} from 'firebase/firestore'

async function LoadSelected (jrnlNumber, jrnls,  setJrnl, setPage, db, uID, setSelectedJrnl) {


    const jrnlID = jrnls[1][jrnlNumber] 
    setSelectedJrnl(jrnlID)
    console.log('JRNLID: ', jrnlID)
    const docRef = await doc(db, uID, jrnlID.toString())
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        await setJrnl(docSnap.data().jrnlTitle)
        await setPage(docSnap.data().pages[0])
    }
}

export default LoadSelected