import styled from 'styled-components'
import SignInButton from './btn_google_signin_dark_normal_web.png'

const S = {}
S.LogInWithGoogle = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(60,60,60);
    display: grid;
    align-items: center;
    justify-content: center;
`;
S.Button = styled.img`

`;


const LogInWithGoogle = (props) => {

    const {
        handleLogin
    } = props

    function handleSignIn () {
        handleLogin()
    }

    return (
        <S.LogInWithGoogle>
            <S.Button src={SignInButton} onClick={handleSignIn}/>
        </S.LogInWithGoogle>
    )
}

export default LogInWithGoogle