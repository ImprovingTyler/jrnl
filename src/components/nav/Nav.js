import { render } from '@testing-library/react'
import styled from 'styled-components'

const S = {}

const Nav = () => {

    S.Nav = styled.div`
        height: 100vh;
        width: 50px;
        background: #1b1b1b;
        position: fixed;
    `;

    render(
        <S.Nav>

        </S.Nav>
    )
}

export default Nav;