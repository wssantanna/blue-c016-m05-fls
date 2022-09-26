import {
    Container,
    Row,
    Col,
    FormGroup,
    Button,
    Title
} from '@styles';

function SignIn() {


    return (
        <>
            <Container>

                <Title>Identifique-se</Title>

                <form
                    name="signIn"
                    onSubmit={() => { }}
                >

                    <Row>
                        <Col>
                            <FormGroup>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder='Digite sua credencial'
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <label htmlFor="password">Senha</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder='Digite sua senha'
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button>
                        Entrar
                    </Button>

                </form>

            </Container>
        </>
    )
}

export default SignIn;