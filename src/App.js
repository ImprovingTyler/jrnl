import { useState, createContext, useEffect } from 'react'

import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Menu from './components/Menu/Menu'
import Page from './components/Page';

import AutoSave from './utils/AutoSave'
import SaveData from './utils/SaveData'
import GetPageList from './utils/GetPageList';
import GetJrnlList from './utils/GetJrnlList';
import Login from './utils/Login';

import LogInWithGoogle from './components/LogInWithGoogle/LogInWithGoogle';
import { auth, db, provider,  } from './firebase'
import LoadSelected from './utils/LoadSelected';
import SignOut from './utils/SignOut';

export const DataContext = createContext()

const S = {} 
S.App = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`;
S.TestBtn = styled.button`
  border: none;
  border-radius: 0;
  background: black;
  color: white;
  font-family: 'Roboto Mono';
  padding: .1rem 1rem;
  margin: .2rem .2rem;
  font-size: 1.3rem;
`;
S.Btns = styled.div`
  position: absolute;
  display: grid;
  grid-auto-flow: row;
  bottom: 0;
  z-index: 9999999;
`;



function App() {
  const [jrnls] = useState([[],[]])
  const [jrnl, setJrnl] = useState('JRNL TITLE') // title
  const [page, setPage] = useState(null)
  const [pages] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(0)
  const [user, setUser] = useState(null)
  const [uID, setUID] = useState(null)
  const [jrnlNumber, setJrnlNumber] = useState(0)
  const [selectedJrnl, setSelectedJrnl] = useState()
  const [jrnlData, setJrnlData] = useState({
    jrnlTitle: jrnl,
    ownerID: uID,
    pages: []
  })

  const handleLoad = async (index) => {
    console.log('INDEX : ', index)
    LoadSelected(index, jrnls,  setJrnl, setPage, db, uID, setSelectedJrnl)
    setIsMenuOpen(false) 
    setJrnlNumber(index)   
  }
  const handleLogin = () => Login(setUser, setUID)
  const handleSignOut = () => SignOut(setUser)
  const handleGetJrnlList = () => GetJrnlList(db, uID, jrnls)
  
  
  
  useEffect(()=>{
    if(uID !== null) {handleGetJrnlList()}
  },[uID])
  
  return (
    <>
          <S.Btns>
            <S.TestBtn onClick={()=>GetPageList(db, uID, selectedJrnl, pages)}>GetPageList</S.TestBtn>
            <S.TestBtn onClick={()=>SaveData(selectedJrnl, jrnls, uID, db, jrnlNumber)}>SaveData</S.TestBtn>
          </S.Btns>
        { user ? 

<S.App id='App'>
            
              { isMenuOpen ? 
              <DataContext.Provider value={{user: user, handleSignOut: handleSignOut, jrnls: jrnls, handleLoad: handleLoad, jrnlNumber: jrnlNumber}}>
                <Menu menuSelected={menuSelected} setJrnl={setJrnl} setIsMenuOpen={setIsMenuOpen} handleSignOut={handleSignOut} handleGetJrnlList={GetJrnlList}/>
              </DataContext.Provider>
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
