import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

const S = {}

const Menu = (props) => {
    const {
        isMenuOpen,
        menuSelected,
        setIsMenuOpen
    } = props
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
        width: 50px;
        height: 50px;
        background: red;
    `;

    function closeMenu () {
        setIsMenuOpen(false)
    }
    return (
        <S.Menu>
            <S.ExitButton onClick={closeMenu}/>
        </S.Menu>
    )
}

export default Menu