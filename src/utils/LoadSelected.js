import {doc, getDoc} from 'firebase/firestore'

async function LoadSelected ( jrnlNumber, jrnls, setIsMenuOpen, setJrnl, setPage, db, uID) {

    // console.log(jrnlNumber)
    // console.log(jrnls)
    // console.log(db)
    // console.log(uID)
    const jrnlID = jrnls[1][jrnlNumber] // jrnls array [ [titles], []]
    const docRef = doc(db, uID, jrnlID.toString())
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        await setJrnl(docSnap.data().jrnlTitle)
        await setPage(docSnap.data().pages[0])
    }
}

export default LoadSelected