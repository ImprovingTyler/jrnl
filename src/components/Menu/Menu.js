import { Outlet } from 'react-router-dom';
import styled from 'styled-components'
import UserMenu from './UserMenu/UserMenu';
import JrnlMenu from './JrnlMenu/JrnlMenu';
import PageMenu from './PageMenu/PageMenu';
import TagsMenu from './TagsMenu/TagsMenu';
import CreateMenu from './CreateMenu/CreateMenu';
import SettingsMenu from './SettingsMenu/SettingsMenu';
import {AiOutlineClose} from 'react-icons/ai'
const S = {}
S.Menu = styled.div`
        width: 80vw;
        height: 80vh;
        background: rgb(50,50,50);
        position: absolute;
        left: 0; 
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 999;
`;
S.ExitButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    color: white;
`;

const Menu = (props) => {
    const {
        menuSelected,
        setIsMenuOpen,
        setJrnl
    } = props
    

    function closeMenu () {
        setIsMenuOpen(false)
    }
    function openMenu(menuSelected) {
        switch(menuSelected) {
            case 0 : return <UserMenu/>
            case 1 : return <JrnlMenu setJrnl={setJrnl} />
            case 2 : return <PageMenu/>
            case 3 : return <TagsMenu/>
            case 4 : return <CreateMenu/>
            case 5 : return <SettingsMenu/>
            
        }
    }
    return (
        <S.Menu>
            <S.ExitButton onClick={closeMenu}>
                <AiOutlineClose/>
            </S.ExitButton>
            {openMenu(menuSelected)}
        </S.Menu>
    )
}

export default Menu