import styled from "styled-components";

const inputContainer = styled.div`
    width: 100%;
`

const StyledLabel = styled.p`
    font-weight: bold;
    font-size: 14px;
    margim-bottom: 5px;
`

const StyledInput = styled.input`
    width: 100%;
    border: 1px solid ${props => props.theme.inputBorder};
    background-color: ${props => props.theme.inputBackground};
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px
`

function Input ({label, ...props}) {
    return (
        <inputContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={label} {...props} />
        </inputContainer>
    )
}

export default Input