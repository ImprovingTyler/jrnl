import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Menu from './components/Menu/Menu'
import Page from './components/Page';
import { useState, useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app'

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
  const [jrnl, setJrnl] = useState(null) // collection 
  const [page, setPage] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(0)
  const [user, setUser] = useState(null)

  function handleLogin() {
    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  function handleSave() {
  
  }

  return (
      <>
          <button onClick={handleLogin}>SIGN IN</button>
          <button onClick={handleSave}>SAVE PAGE</button>
          {user ? 
          
          <S.App id='App'>
            { isMenuOpen ? <Menu menuSelected={menuSelected} setIsMenuOpen={setIsMenuOpen}/> : <></>}
            <Nav setJrnl={setJrnl} setPage={setPage} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} setMenuSelected={setMenuSelected} menuSelected={menuSelected}/>
            <Page isDarkMode={false} jrnl={jrnl} page={page} setPage={setPage}/>
          </S.App> 

          : <>LOG IN</>}
      </>
  );
}



export default App;
