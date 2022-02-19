import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

const S = {}

const Menu = (props) => {
    const {
        menuIsOpen,
        menuSelected
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
        visibility: ${props => props.menuIsOpen ? 'visible' : 'hidden'};
        
    `;

    return (
        <S.Menu>
            <Outlet/>            
        </S.Menu>
    )
}

export default Menu