import styled from "styled-components";

const Header = styled.h1`
    margin-bottom: 1rem;
`;

const Title = styled(Header)`
    font-size: 2rem;
`;

const Subtitle = styled(Header)`
    font-size: 1.5rem;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 25px;
`;

const Row = styled.div`
    display: flex;
    gap: 1rem; // 16px;
`;

const Col = styled.div`
    flex: 1;
`;

const FormGroup = styled.div`
    margin: 1rem 0;
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

const Button = styled.button`
    background-color: purple;
    border: none;
    border-radius: 5px;
    color: white;
    display: block;
    font-size: 1.25rem;
    padding: 10px;
    width: 100%;
`;

export {
    Button,
    Container,
    Row,
    Col,
    FormGroup,
    Header,
    Title,
    Subtitle
};