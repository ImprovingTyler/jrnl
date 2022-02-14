import { render } from '@testing-library/react'
import styled from 'styled-components'
import icon0 from './icons/0.png'
import icon1 from './icons/1.png'
import icon2 from './icons/2.png'
import icon3 from './icons/3.png'
import icon4 from './icons/4.png'
import icon5 from './icons/5.png'

const S = {}

const Nav = () => {

    S.Nav = styled.div`
        height: 100vh;
        width: 50px;
        background: #1b1b1b;
        position: fixed;
        
    `;
    S.Top = styled.div`
        background: #1b1b1b;
        border-bottom-right-radius: 40px;
        height: 33vh;
        width: 75px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
    `;
    S.Middle = styled.div`
        height: 34vh;
        width: 50px;
        background: #1b1b1b;
    `;
    S.Bottom = styled.div`
        background: #1b1b1b;
        height: 33vh;
        width: 75px;
        bottom: 0;
        position: absolute;
        border-top-right-radius: 40px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
    `;

    S.Icon = styled.img`
        content:url(${props => props.icon});
        width: 50px;
        height: 50px;
        align-self: center;
        justify-self: center;
        transition: 250ms;
        :hover {
            width: 57px;
            height: 57px;
        }
    `;

    render(
        <S.Nav>
            <S.Top>
                <S.Icon icon={icon1}/>
                <S.Icon icon={icon0}/>
                <S.Icon icon={icon5}/>
            </S.Top>

            <S.Middle>

            </S.Middle>

            <S.Bottom>
                <S.Icon icon={icon4}/>
                <S.Icon icon={icon3}/>
                <S.Icon icon={icon2}/>
            </S.Bottom>
        </S.Nav>
    )
}

export default Nav;