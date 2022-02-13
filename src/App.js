import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Page from './components/Page';

const S = {}

S.App = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`;
function App() {
  return (
    <S.App>
      <Page pageHeight={50} isDarkMode={false}/>
      <Nav/>
    </S.App>
  );
}

export default App;
