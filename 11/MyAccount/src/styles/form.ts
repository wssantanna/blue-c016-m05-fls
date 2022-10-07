import styled from "styled-components";

const FormGroup = styled.div`
    margin: 5px 0;
    width: 100%;
    
    label {
        display: none;
    }
    
    input {
        display: inherit;
        border: 1px solid lightgray;
        border-radius: 5px;
        font-size: 1.2rem;
        padding: 10px;
        width: inherit;
    }
`

export { FormGroup };