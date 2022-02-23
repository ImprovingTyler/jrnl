import styled from 'styled-components'

const S = {}
S.Save = styled.div`
    width: 90px;
    height: 1.7rem;
    background: red;
    position: absolute;
    top: 64px;
    left: 5px;
    z-index: 9999999;
`;

S.SaveBtn = styled.button`
    border: none;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    background: black;
    color: white;
`;

const Save = (props) => {
    const { handleSave } = props
    return (
        <S.Save>
            <S.SaveBtn onClick={()=>handleSave()}>SAVE</S.SaveBtn>
        </S.Save>
    )
}

export default Save