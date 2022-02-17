import styled from 'styled-components'
import Nav from './components/nav/Nav';
import Page from './components/Page';
import { useState, useContext } from 'react'

const jrnl1 = [{
  title: "11:27 PM, I sit",
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis volutpat finibus. Maecenas velit magna, fermentum id laoreet eget, fermentum in dolor. Sed congue venenatis ex, et viverra enim fringilla et. Integer quis consequat sem. Nullam in nibh ante. Duis volutpat, mi ac scelerisque porta, nisl justo sollicitudin lorem, sed suscipit orci leo at odio. Maecenas ut tellus non ante semper tristique. Nunc vitae vestibulum lacus. Proin sem purus, auctor in feugiat eu, ornare eu arcu. Donec sollicitudin est nec enim blandit elementum eu id metus. Vestibulum ac convallis nulla. Nam aliquam justo eu magna dictum, sed fermentum orci consequat. Donec sed mauris non diam pellentesque consequat. Vestibulum id tristique ligula.',
  dateCreated: '02/16/2022',
  timeCreated: '23:28:43',
  lastEdited: '23:29:03',
  tags: ['gym', 'girl', 'awesome', 'floki', 'cats']
}]
const jrnl2 = [{
  title: "11:29 PM, I still sit",
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis volutpat finibus. Maecenas velit magna, fermentum id laoreet eget, fermentum in dolor. Sed congue venenatis ex, et viverra enim fringilla et. Integer quis consequat sem. Nullam in nibh ante. Duis volutpat, mi ac scelerisque porta, nisl justo sollicitudin lorem, sed suscipit orci leo at odio. Maecenas ut tellus non ante semper tristique. Nunc vitae vestibulum lacus. Proin sem purus, auctor in feugiat eu, ornare eu arcu. Donec sollicitudin est nec enim blandit elementum eu id metus. Vestibulum ac convallis nulla. Nam aliquam justo eu magna dictum, sed fermentum orci consequat. Donec sed mauris non diam pellentesque consequat. Vestibulum id tristique ligula.',
  dateCreated: '02/16/2022',
  timeCreated: '23:28:43',
  lastEdited: '23:29:03',
  tags: ['gym', 'boy', 'cool', 'alice', 'cats']
}]

const jrnlCollection1 = [jrnl2, jrnl1]
const S = {}

S.App = styled.div`
  width: 100vw; 
  height: 100vh;
  overflow: hidden;
`;
function App() {
  const [jrnlCollection, setJrnlCollection] = useState(jrnlCollection1)
  const [jrnl, setJrnl] = useState(jrnlCollection[0])
  const [page, setPage] = useState(jrnlCollection[0][0])
  
  return (
    <S.App id='App'>
        <Nav jrnl={jrnl} setJrnl={setJrnl} setPage={setPage}/>
        <Page isDarkMode={false} jrnl={jrnl} page={page} />
    </S.App>
  );
}

export default App;
