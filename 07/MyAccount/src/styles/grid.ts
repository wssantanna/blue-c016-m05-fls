import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 25px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (min-width: 720px) {
        flex-direction: row;
    }
`;

const Col = styled.div`
    flex: 1;
`;

export {
    Container,
    Row,
    Col
};
