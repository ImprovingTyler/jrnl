import { useState, createContext, useEffect } from 'react'

import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Menu from './components/Menu/Menu'
import Page from './components/Page';

import { AutoSave, GetJrnlList, GetPageList, LoadSelected, Login, SaveData, SignOut} from './utils/index'

import LogInWithGoogle from './components/LogInWithGoogle/LogInWithGoogle';
import { auth, db, provider,  } from './firebase'
import Save from './components/Save/Save';

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
  const [jrnl, setJrnl] = useState('TITLE(CLICK TO EDIT)') // title
  const [page, setPage] = useState(null)
  const [pages] = useState([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuSelected, setMenuSelected] = useState(0)
  const [user, setUser] = useState(null)
  const [uID, setUID] = useState(null)
  const [jrnlNumber, setJrnlNumber] = useState(0)
  const [selectedJrnl, setSelectedJrnl] = useState('default')
  const [selectedPage, setSelectedPage] = useState('default')

  const handleLogin = () => Login(setUser, setUID)
  const handleSignOut = () => SignOut(setUser)
  const handleGetJrnlList = () => GetJrnlList(db, uID, jrnls)
  const handleSave = () => SaveData(selectedJrnl, jrnl, jrnls, page, uID, db, selectedPage, handleGetJrnlList)
  const handleLoad = async (index) => {
    LoadSelected(index, jrnls,  setJrnl, setPage, db, uID, setSelectedJrnl)
    setIsMenuOpen(false) 
    setJrnlNumber(index)   
  }
  
  
  
  useEffect(()=>{
    if (uID !== null) handleGetJrnlList()
    
  },[uID])
  
  return (
    <>
          <S.Btns>
            <S.TestBtn onClick={()=>GetPageList(db, uID, selectedJrnl, pages)}>GetPageList</S.TestBtn>
            <S.TestBtn onClick={()=>SaveData(selectedJrnl, jrnl, page, uID, db, selectedPage)}>SaveData</S.TestBtn>
            <S.TestBtn onClick={()=>console.log('JRNL: ',jrnl, ' PAGE: ',page)}>Log Jrnl / Page</S.TestBtn>
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
            <Save handleSave={handleSave}/>
          </S.App> 
              :
          <LogInWithGoogle handleLogin={handleLogin}/>
        }
      </>
  );
}



export default App;
