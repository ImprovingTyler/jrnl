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
        box-shadow: 0px 1px 10px black;
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
    
    
    S.TitleContainer = styled.div`
        width: 25vh;
        height: 50px; 
        color: white;
        text-align: center;
        line-height: 20px;
        justify-self: center;
        display: grid;
        align-items: center;
        overflow-y: hidden;
        white-space: nowrap;
        font-size: 1rem;
        :hover {
            cursor: pointer;
        }
        font-family: 'Roboto Mono';
    `;

    S.EditTitle = styled.input`
        background: none;
        /* border-radius: 0; */
        border: 1px solid white;
        color: white;
        ::placeholder {
            color: white;
        }
    `;

    const [titleClicked, setTitleClicked] = useState()
    
    function changeTitle (e) {
        jrnl[0].title = e.target.value
        setTitleClicked(false)
        
    }

    return(
        <S.Nav id='Nav'>
                <S.Icon id='UserMenuIcon' icon={icon1}/>
                <S.Icon id='JrnlMenuIcon' icon={icon0} setJrnl={setJrnl}/>
                <S.Icon id='PageMenuIcon' icon={icon5} setPage={setPage}/>

                <S.TitleContainer id='TitleContainer' onClick={()=>setTitleClicked(true)}>
                    { titleClicked ?
                        <S.EditTitle onBlur={(e)=>{changeTitle(e)}} placeholder={jrnl[0].title} maxLength="25" autoFocus/>
                        :
                        <h5 id='JrnlTitle'>{jrnl[0].title}</h5>             
                    }
                </S.TitleContainer>

                <S.Icon id='TagMenuIcon' icon={icon4}/>
                <S.Icon id='NewMenuIcon' icon={icon3}/>
                <S.Icon id='SettingsMenuIcon' icon={icon2}/>
        </S.Nav>
    )
}


export default Nav;