import styled from 'styled-components'
import googleSignIn from './btn_google_signin_dark_normal_web.png'
    const S = {}

const UserMenu = () => {
    S.Container = styled.div`
        width: 60vw;
        height: 60vh;
        background: rgb(70,70,70);
    `;

    S.LogIn = styled.div`

    `;

    return (
        <S.Container>
            <img src={googleSignIn}></img>
        </S.Container>
    )
}