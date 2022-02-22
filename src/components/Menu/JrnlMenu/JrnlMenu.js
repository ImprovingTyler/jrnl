import styled from 'styled-components'
import { DataContext } from '../../../App';
import jrnlIcon from './../../nav/icons/0.png'
const S = {}
S.JrnlMenu = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    display: grid;
    align-content: center;
    justify-items: center;
`;
S.JrnlCard = styled.div`
    width: 80%;
    height: 60px;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    font-family: 'Roboto Mono';
    margin-bottom: 1rem;
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
    } = props
    

    return (
        <S.JrnlMenu>
            <DataContext.Consumer>
            { ({jrnls, handleLoad}) =>
                jrnls[0].map((jrnl, index)=>{
                    return(
                        <S.JrnlCard key={index} onClick={()=>handleLoad(index)}>
                            <S.JrnlIcon src={jrnlIcon}/>
                            <h3>{jrnl}</h3>
                        </S.JrnlCard>)
                })
            }
            </DataContext.Consumer>
        </S.JrnlMenu>
    )
}

export default JrnlMenu