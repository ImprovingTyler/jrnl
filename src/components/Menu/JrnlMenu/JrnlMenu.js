import styled from 'styled-components'
import { UserContext } from '../../../App';
import jrnlIcon from './../../nav/icons/0.png'
const S = {}
S.JrnlMenu = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    display: grid;
    align-items: center;
    justify-items: center;
`;
S.JrnlCard = styled.div`
    width: 80%;
    height: 60px;
    border-bottom: 1px solid gray;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    font-family: 'Roboto Mono';
    :hover {
        opacity: .5;
        cursor: pointer;
    }
`;
S.JrnlIcon = styled.img`
    width: 60px;
    height: 60px;
`;



const JrnlMenu = (props) => {

    const {
        setJrnl
    } = props
    
    function LoadJrnls(jrnlToLoad) {
        setJrnl(jrnlToLoad)
    }
    
    return (
        <UserContext.Consumer>
            { ({jrnls, setJrnlNumber, loadJrnl}) =>
                jrnls[0].map((jrnl, index)=>{
                    return(
                        <S.JrnlCard key={index} onClick={()=>{
                            setJrnlNumber(index)
                            loadJrnl()
                            }}
                        >
                            <S.JrnlIcon src={jrnlIcon}/>
                            <h3>{jrnl}</h3>
                        </S.JrnlCard>)
                })
            }
        </UserContext.Consumer>
    )
}

export default JrnlMenu