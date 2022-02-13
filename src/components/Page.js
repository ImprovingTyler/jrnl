import { render } from "@testing-library/react";
import styled from "styled-components";

const S = {}





const Page = (props) => {
    const {
        isDarkModeEnabled,
        pageHeight
    } = props

    const lines = []
    S.Page = styled.div`
        background: ${isDarkModeEnabled ? '#efefef' : '#4d4a4a'};
    `;

    S.HorizontalLine = styled.div`
        background: black;
        width: 100vw;
        height: 2px;
        position: absolute;
        transform: translateY(${props => props.distance}rem);
    `;

    S.RedLine = styled.div`
        width: 3px;
        background: red;
        min-height: 500vw;
        position: fixed;
        margin-left: 10%;
    `;
    
    for(let i = 0; i < pageHeight; i++){
        lines.push(<S.HorizontalLine key={i} distance={i == 0 ? 5 : 5 + (i * 3)}/>)
    }

    render(
        <S.Page>
            {lines}
            <S.RedLine/>
        </S.Page>
    )
}

export default Page