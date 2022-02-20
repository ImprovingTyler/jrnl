import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Menu from './components/Menu/Menu'
import Page from './components/Page';
import { useState, createContext } from 'react'

import LogInWithGoogle from './components/LogInWithGoogle/LogInWithGoogle';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyDSi0QLsrrr-hq3DWKSaaUDq-rRRGh1NOY",
  authDomain: "jrnl-7e606.firebaseapp.com",
  projectId: "jrnl-7e606",
  storageBucket: "jrnl-7e606.appspot.com",
  messagingSenderId: "56356826329",
  appId: "1:56356826329:web:47b302df53882b0999e2c8",
  measurementId: "G-MDVLYT5W3H"
};
const app = initializeApp(firebaseConfig) 
const auth = getAuth()
const provider = new GoogleAuthProvider()
const db = getFirestore()

export const UserContext = createContext()

const S = {} 
S.App = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`;
S.Login = styled.button`

`;


function App() {
  const [jrnlCollection, setJrnlCollection] = useState() // db
  const [jrnl, setJrnl] = useState('JRNL TITLE') // title
  const [page, setPage] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(0)
  const [user, setUser] = useState(null)
  
  let userID

  let loadedJrnl = {
    jrnlTitle: '',
    pages: []
  }

  let loadedPage = {
    pageTitle: '',
    pageContent: '',
    tags: [],
    pageID: 0
  }

  function handleLogin() {
    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user)
      userID = result.user.id
    })
    .catch((error) => {
      console.log(error)
    })
  }
  async function handleSave() {
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      jrnl: [
        {
          jrnlTitle: jrnl,
          pages: [
            {
              pageTitle: 'pageTitle',
              content: page
            }
          ]
        }
      ]
    });
  }
  async function loadJrnl() {
    const docRef = doc(db, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists())
    {
      console.log('DOCUMENT DATA:', docSnap.data())
      setJrnl(docSnap.data().jrnl[0].jrnlTitle)
      setPage(docSnap.data().jrnl[0].pages[0].content)
    }
    else {
      console.log("DOCUMENT DOESN'T EXIST")
    }
    
  }
  const signOutUser = () => {
    signOut(auth).then(setUser(null))
    .catch((err)=>console.log(err))
    
  }
  

  return (
      <>
          {/* <button onClick={handleSave}>SAVE PAGE</button>
          <button onClick={loadJrnl}>LOAD</button>
          <button onClick={()=>console.log(user.email)}>LOG USER</button> */}
        { user ? 

          <S.App id='App'>
            
              { isMenuOpen ? 
              <UserContext.Provider value={{user: user, signOutUser: signOutUser}}>
                <Menu menuSelected={menuSelected} setIsMenuOpen={setIsMenuOpen} auth={auth} signOut={signOut}/>
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
