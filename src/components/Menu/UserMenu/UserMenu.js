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
    `;

    S.LogIn = styled.div`

    `;

    return (
        <UserContext.Consumer>
            {({user, signOutUser}) => 
                <S.UserMenu>
                    <img src={user.photoURL}/>
                    <h1>{user.email}</h1>
                    <button onClick={signOutUser} >SIGN OUT</button>
                </S.UserMenu>
            }
        </UserContext.Consumer>
    )
}

export default UserMenu