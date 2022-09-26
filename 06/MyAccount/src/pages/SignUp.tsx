import {
    Container,
    Row,
    Col,
    FormGroup,
    Button,
    Title
} from '@styles';

function SignUp() {


    return (
        <>
            <Container>

                <Title>Faça seu cadastro</Title>

                <form
                    name="signUp"
                    onSubmit={() => { }}
                >

                    <Row>
                        <Col>
                            <FormGroup>
                                <label htmlFor="name">Nome</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder='Digite seu nome completo'
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder='Digite seu e-mail de cadastro'
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <label htmlFor="reemail">Confirme seu e-mail</label>
                                <input
                                    name="reemail"
                                    type="email"
                                    placeholder='Confirme o e-mail'
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
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
                        Cadastrar
                    </Button>

                </form>

            </Container>
        </>
    )
}

export default SignUp;