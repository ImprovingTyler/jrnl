import styled from "styled-components";

const S = {}





const Page = (props) => {
    const {
        isDarkModeEnabled,
        pageHeight,
        jrnl,
        setJrnl,
        page,
        setPage
    } = props


    const lines = []
    S.Page = styled.div`
        /* background: ${isDarkModeEnabled ? '#efefef' : '#4d4a4a'}; */
        background-color: white;
        background: repeating-linear-gradient(white, white 1.8em, #9198e5 1.9em, #9198e5 2em);
        height: 100%;
        width: 100%;
        padding: 0;
        overflow: hidden;
    `;


    // S.RedLine = styled.div`
    //     width: 3px;
    //     background: red;
    //     min-height: 500vw;
    //     position: fixed;
    //     margin-left: 10%;
    // `;

    S.LeftMargin = styled.div`
        float: left;
        width: 100px;
        height: 100%;
        border-right: 2px solid pink;
    `;
    S.RightMargin = styled.div`
        float: right;
        width: 100px;
        height: 100%;
        border-left: 1px solid pink;
    `;
  

    S.Text = styled.textarea`
        /* text-align: center; */
        background:none;
        resize: none;
        border: none;
        width: calc(100vw - 210px);
        height: 100%;
        font-size: 2em;
        line-height: 123%;
        overflow:hidden;
        padding: 0 105px;
    `;

    S.PageContent = styled.div`
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: 99;

    `;

    S.SaveButton = styled.button`
        margin: auto;
        width: 100px;
        height: 100vh;
        position: absolute;
        bottom: 0; right: 0;
        border: none;
        background: rgba(60,60,60,.5);
        color: white;
        font-size: 2rem;
        :hover {
            background: rgb(100,100,100);
        }
        transition: 250ms;
        line-height: 14vh;
    `;
    


    return(
        <S.Page>
            <S.PageContent id='PageContent'>
                <S.Text onChange={(e)=>jrnl[0].content = e.target.value}/>
                <S.SaveButton onClick={()=>{setJrnl(jrnl)}}>SAVE SAVE SAVE SAVE SAVE SAVE SAVE</S.SaveButton>
            </S.PageContent>
            <S.LeftMargin/>
            <S.RightMargin/>
        </S.Page>
    )
}

export default Page