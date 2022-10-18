import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    FormGroup,
    Button,
    Title
} from '@styles';

import IRegistration from '@interfaces/Registration';

import AuthService from '@services/AuthService';

import { AccountContext } from '../contexts/AccountContext';

function SignUp() {

    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setToken } = useContext(AccountContext);

    const navigate = useNavigate();

    function OnSubmit(e: any) {
        e.preventDefault();
        const userRegistration: IRegistration = {
            fullname,
            email,
            confirmEmail,
            password
        }

        AuthService.RegisterUser(userRegistration)
            .then((tokenOrFalse: any) => {
                if (tokenOrFalse) {
                    setToken(tokenOrFalse);
                    navigate('/painel-de-controle/minha-conta');
                }
                else {
                    alert('Nao foi possivel cadastra-lo');
                }
            });
    }


    return (
        <>

            <Container>

                <Title>Faça seu cadastro</Title>

                <form
                    name="signUp"
                    onSubmit={(e) => { OnSubmit(e) }}
                >

                    <Row>
                        <Col>
                            <FormGroup>
                                <label htmlFor="name">Nome</label>
                                <input
                                    type="text"
                                    placeholder='Digite seu nome completo'
                                    onChange={(e) => { setFullname(e.target.value) }}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FormGroup>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    placeholder='Digite seu e-mail de cadastro'
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <label htmlFor="reemail">Confirme seu e-mail</label>
                                <input
                                    type="email"
                                    placeholder='Confirme o e-mail'
                                    onChange={(e) => { setConfirmEmail(e.target.value) }}
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
                                    onChange={(e) => { setPassword(e.target.value) }}
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