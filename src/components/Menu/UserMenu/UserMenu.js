import styled from 'styled-components'
import { DataContext } from '../../../App';
const S = {}
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
const UserMenu = (props) => {
    
    const {
       
    } = props

    

    return (
        <DataContext.Consumer>
            {({user, handleSignOut}) => 
                <S.UserMenu>
                    <S.UserImage src={user.photoURL}/>
                    <h3>{user.email}</h3>
                    <button onClick={handleSignOut} >SIGN OUT</button>
                </S.UserMenu>
            }
        </DataContext.Consumer>
    )
}

export default UserMenu