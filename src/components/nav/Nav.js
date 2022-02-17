import {useState} from 'react'
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
        height: 55px;
        width: 100vw;
        background: #005eec;
        position: fixed;
        z-index: 1000;
        display: grid;
        grid-auto-flow: column;
    `;
    
    S.Icon = styled.img`
        content:url(${props => props.icon});
        width: 50px;
        height: 50px;
        align-self: center;
        justify-self: center;
        transition: 250ms;
        :hover {
            filter: invert();
        }
    `;
    
    
    S.Title = styled.div`
        width: 33vh;
        height: 50px; 
        color: white;
        text-align: center;
        line-height: 50px;
        justify-self: center;
        :hover {
            cursor: pointer;
        }
        font-family: 'Roboto Mono';
    `;

  

    const [titleClicked, setTitleClicked] = useState()
    
    return(
        <S.Nav id='Nav'>
                <S.Icon id='UserMenuIcon' icon={icon1}/>
                <S.Icon id='JrnlMenuIcon' icon={icon0}/>
                <S.Icon id='PageMenuIcon' icon={icon5}/>

                <S.Title id='TitleContainer' >
                    <h5 contentEditable="true" id='JrnlTitle' onMouseDown={console.log('CLICK')} onBlur={(e)=>{jrnl[0].title = e.target.innerText}}>{jrnl[0].title}</h5>             
                </S.Title>

                <S.Icon id='TagMenuIcon' icon={icon4}/>
                <S.Icon id='NewMenuIcon' icon={icon3}/>
                <S.Icon id='SettingsMenuIcon' icon={icon2}/>
        </S.Nav>
    )
}

export default Nav;