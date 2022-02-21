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

function LoadJrnls(user) {
    let title
    let dateCreated
    let lastEdit
    return (
        <S.JrnlCard>
            <S.JrnlIcon src={jrnlIcon}/>
            <h3>{title}</h3>
            <h3>{dateCreated}</h3>
            <h3>{lastEdit}</h3>
        </S.JrnlCard>
    )
}

const JrnlMenu = (props) => {

    return (
        <UserContext.Consumer>
            { user =>
                <S.JrnlMenu>
                    <S.JrnlCard>
                        <S.JrnlIcon src={jrnlIcon}/>
                        <h3>JRNL TITLE</h3>
                    </S.JrnlCard>
                </S.JrnlMenu>
            }
        </UserContext.Consumer>
    )
}

export default JrnlMenu