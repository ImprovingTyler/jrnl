import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Menu from './components/Menu/Menu'
import Page from './components/Page';
import { useState, useContext } from 'react'
import { BrowserRouter } from "react-router-dom";
// import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyDSi0QLsrrr-hq3DWKSaaUDq-rRRGh1NOY",
//   authDomain: "jrnl-7e606.firebaseapp.com",
//   projectId: "jrnl-7e606",
//   storageBucket: "jrnl-7e606.appspot.com",
//   messagingSenderId: "56356826329",
//   appId: "1:56356826329:web:47b302df53882b0999e2c8",
//   measurementId: "G-MDVLYT5W3H"
// };

// const provider = new GoogleAuthProvider();
// const auth = getAuth()

const S = {}
S.App = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`;
S.Login = styled.button`

`;

// function handleLogin() {
//   signInWithPopup(auth, provider);
// }

function App() {
  const [jrnlCollection, setJrnlCollection] = useState() // db
  const [jrnl, setJrnl] = useState(null) // collection 
  const [page, setPage] = useState(null) 
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(0)

  
  return (
            
            
              <S.App id='App'>
                  <Menu isMenuOpen={isMenuOpen} menuSelected={menuSelected}/>
                  <Nav jrnl={jrnl} setJrnl={setJrnl} setPage={setPage}/>
                  <Page isDarkMode={false} jrnl={jrnl} page={page} />
              </S.App>
      
  );
}

export default App;
