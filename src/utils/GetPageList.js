import { doc, getDoc } from 'firebase/firestore'

async function GetPageList (db, uID, selectedJrnl, pages) {
    const docRef = doc(db, uID, selectedJrnl[0])
    const docSnapshot = await getDoc(docRef)
    const pagesData = docSnapshot.data().pages
    pagesData.map(page=>{
      pages.push(page)
    })
    console.log(pages)
}


export default GetPageList