import styled from 'styled-components'
import icon0 from './icons/0.png'
import icon1 from './icons/1.png'
import icon2 from './icons/2.png'
import icon3 from './icons/3.png'
import icon4 from './icons/4.png'
import icon5 from './icons/5.png'

const S = {}

const Nav = (props) => {

    const {
        jrnl,
        setJrnl,
        setPage
    } = props

    S.Nav = styled.div`
        height: 100vh;
        width: 50px;
        background: #1b1b1b;
        position: fixed;
        z-index: 1000;
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
        display: grid;
        justify-items: center;
        align-items: center;
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
    
    
    S.JrnlTitle = styled.div`
        width: 33vh;
        height: 50px; 
        transform: rotate(-90deg);
        color: white;
        position: absolute;
        text-align: center;
        line-height: 50px;
    `;

    return(
        <S.Nav id='Nav'>
            <S.Top id='NavTop'>
                <S.Icon id='UserMenuIcon' icon={icon1}/>
                <S.Icon id='JrnlMenuIcon' icon={icon0}/>
                <S.Icon id='PageMenuIcon' icon={icon5}/>
            </S.Top>

            <S.Middle id='NavMiddle'>
                <S.JrnlTitle id='JrnlTitleContainer' >
                    <h5 id='JrnlTitle'>{jrnl[0].title}</h5>
                </S.JrnlTitle>
            </S.Middle>

            <S.Bottom id='NavBottom'>
                <S.Icon id='TagMenuIcon' icon={icon4}/>
                <S.Icon id='NewMenuIcon' icon={icon3}/>
                <S.Icon id='SettingsMenuIcon' icon={icon2}/>
            </S.Bottom>
        </S.Nav>
    )
}

export default Nav;