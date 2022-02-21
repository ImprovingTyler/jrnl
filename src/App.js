import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Menu from './components/Menu/Menu'
import Page from './components/Page';
import { useState, createContext } from 'react'
import LogInWithGoogle from './components/LogInWithGoogle/LogInWithGoogle';
import { auth, db, provider,  } from './firebase'
import { doc,  setDoc, getDoc, addDoc, collection } from "firebase/firestore"; 
import { signInWithPopup, signOut } from "firebase/auth";

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
  const [jrnl, setJrnl] = useState('JRNL TITLE') // title
  const [page, setPage] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(0)
  const [user, setUser] = useState(null)
  
  async function SaveData() {
    await addDoc(collection(db, 'jrnls'), {
      jrnlTitle: "jrnl",
      pages: [page],
      ownerID: auth.currentUser.uid
    });
  }
  function handleLogin() {
    signInWithPopup(auth, provider)
    .then((result) => setUser(result.user))
    .catch((error) => console.log(error))
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

  function signOutUser () {
    signOut(auth)
    .then(setUser(null))
    .catch((e)=>console.log(e))
  }

  

  return (
      <>
          <button onClick={SaveData}>SAVE PAGE</button>
          <button onClick={loadJrnl}>LOAD</button>
          <button onClick={()=>console.log(user.email)}>LOG USER</button>
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