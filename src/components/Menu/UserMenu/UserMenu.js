import styled from 'styled-components'
import { UserContext } from '../../../App';
const S = {}

const UserMenu = (props) => {
    
    const {
       
    } = props

    S.UserMenu = styled.div`
        color: white;
        display: grid;
        align-items: center;
        justify-items: center;
        width: 100%;
        height: 100%;
        font-family: 'Roboto Mono';
    `;

    S.LogIn = styled.div`

    `;

    S.UserImage = styled.img`
        width: auto;
        height: 30%;
        border-radius: 50%;
    `;

    return (
        <UserContext.Consumer>
            {({user, signOutUser}) => 
                <S.UserMenu>
                    <S.UserImage src={user.photoURL}/>
                    <h3>{user.email}</h3>
                    <button onClick={signOutUser} >SIGN OUT</button>
                </S.UserMenu>
            }
        </UserContext.Consumer>
    )
}

export default UserMenu