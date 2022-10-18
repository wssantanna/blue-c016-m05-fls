import {
    Container,
    Row,
    Col
} from '@styles'

function NotFound() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <article>
                            <h1>404</h1>
                            <h2>Ops... página não encontrada</h2>
                        </article>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NotFound;