import { useState, createContext, useEffect } from 'react'

import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Menu from './components/Menu/Menu'
import Page from './components/Page';

import AutoSave from './utils/AutoSave'
import LogInWithGoogle from './components/LogInWithGoogle/LogInWithGoogle';
import { auth, db, provider,  } from './firebase'
import { doc, getDoc, getDocs, addDoc, setDoc, collection, query, where} from "firebase/firestore"; 
import { signInWithPopup, signOut } from "firebase/auth";
import LoadSelected from './utils/LoadSelected';

export const UserContext = createContext()

const S = {} 
S.App = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`;



function App() {
  const [jrnls, setJrnls] = useState([[],[]])
  const [jrnl, setJrnl] = useState('JRNL TITLE') // title
  const [page, setPage] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(0)
  const [user, setUser] = useState(null)
  const [uID, setUID] = useState(null)
  const [jrnlNumber, setJrnlNumber] = useState(0)

  
  const handleLoad = () => LoadSelected(jrnlNumber, jrnls, setIsMenuOpen, setJrnl, setPage, db, uID)

  async function GetJrnlList() {
    // const docRef = collection(db, uID)
    // await getCollection(docRef)
    // .then((result)=>console.log(result.data()))
    // .catch(e=>console.log(e))
    const q = query(collection(db, uID), where("ownerID", "==", uID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      console.log(doc.data().jrnlTitle)
      jrnls[0].push([doc.data().jrnlTitle])
      jrnls[1].push([doc.id])
    });
    setJrnls(jrnls)
  }
  async function SaveData() {
    if (setDoc(collection(db, auth.currentUser.uid, jrnlNumber)))
      await addDoc(collection(db, auth.currentUser.uid), {
      jrnlTitle: jrnl,
      pages: [page],
      ownerID: auth.currentUser.uid
      });
  }
  function handleLogin() {
    signInWithPopup(auth, provider)
    .then((result) => {setUser(result.user) })
    .then(setUID(auth.currentUser.uid))
    .catch((error) => console.log(error))
  }
  
  
  
  
  function signOutUser () {
    signOut(auth)
    .then(setUser(null))
    .catch((e)=>console.log(e))
  }
  
  useEffect(()=>{
    AutoSave(auth, jrnl, page, user, db, collection, addDoc)
  },[])
  
  return (
    <>
          <button onClick={SaveData}>SAVE PAGE</button>
          <button onClick={handleLoad}>LOAD</button>
          <button onClick={()=>console.log(user)}>LOG USER</button>
          <button onClick={GetJrnlList}>GET DATA FROM USER</button>
          <button onClick={()=>console.log(page)}>log page</button>
          <button onClick={()=>console.log(jrnl)}>log jrnl</button>
        { user ? 

<S.App id='App'>
            
              { isMenuOpen ? 
              <UserContext.Provider value={{user: user, signOutUser: signOutUser, jrnls: jrnls, setJrnlNumber: setJrnlNumber}}>
                <Menu menuSelected={menuSelected} setJrnl={setJrnl} setIsMenuOpen={setIsMenuOpen} auth={auth} signOut={signOut}/>
              </UserContext.Provider>
                 : <></>
                }
            
            <Nav setJrnl={setJrnl} jrnl={jrnl} setPage={setPage} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} setMenuSelected={setMenuSelected} menuSelected={menuSelected}/>
            <Page jrnl={jrnl} page={page} setPage={setPage}/>
          </S.App> 

:
<LogInWithGoogle handleLogin={handleLogin}/>
        }
      </>
  );
}



export default App;

// async function loadJrnl() {
//   console.log('START LOADING JRNL')
//   console.log(jrnlID.toString())
//   const jrnlID = jrnls[1][jrnlNumber]
//   const docRef = doc(db, uID, jrnlID.toString())
//   const docSnap = await getDoc(docRef)
//   if (docSnap.exists())
//   { 
//     console.log('DOCUMENT DATA:', docSnap.data())
//     setJrnl(docSnap.data().jrnlTitle)
//     setPage(docSnap.data().pages[0]) 
//     setIsMenuOpen(false)
//   }
//   else {
//     console.log("DOCUMENT DOESN'T EXIST")
//   }
//   console.log('DONE LOADING JRNL')

// }

// async function handleSave() {
  //   await setDoc(doc(db, 'users', auth.currentUser.uid, doc().id), {
    //     jrnl: [
//       {
//         jrnlTitle: jrnl,
//         pages: [
//           {
//             pageTitle: 'pageTitle',
//             content: page
//           }
//         ]
//       }
//     ]
//   });
// }