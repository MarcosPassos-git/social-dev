import {forwardRef} from 'react'
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
    border-radius: 10px;

    ${props => props.error && `border: 2px solid ${props.theme.error};`}

    &:focus {
        outline: none;
    }
`

const ErrorLabel = styled.span`
    color: ${props => props.theme.error};
    font-weight: bold;
    font-size: 14px;
`

const errorMessage = {
    'string.empty': 'Este campo é obrigatório',
    'string.email': 'Por favor, digite um email válido.'
}

const Input = forwardRef(({label, error, ...props}, ref) => {
    return (
        <inputContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={label} error={error} {...props} ref={ref} />
            {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
        </inputContainer>
    )
})

export default Input