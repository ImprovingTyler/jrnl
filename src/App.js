import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Page from './components/Page';
import { useState, useContext } from 'react'

const S = {}

S.App = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`;
function App() {
  const [jrnl, setJrnl] = useState('test1')
  const [page, setPage] = useState()
  
  return (
    <S.App>
        <Nav/>
        <Page pageHeight={50} isDarkMode={false} jrnl={jrnl} />
    </S.App>
  );
}

export default App;
