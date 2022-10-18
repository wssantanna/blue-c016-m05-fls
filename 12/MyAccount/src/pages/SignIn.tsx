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

import ICredential from '@interfaces/Credential';

import AuthService from '@services/AuthService';

import { AccountContext } from '../contexts/AccountContext';

function SignIn() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setToken } = useContext(AccountContext);

    const navigate = useNavigate();

    function OnSubmit(e: any) {
        e.preventDefault();
        const currentCredential: ICredential = {
            username,
            password
        }

        AuthService.Authentication(currentCredential)
            .then((token: any) => {
                setToken(token);
                navigate('/painel-de-controle/minha-conta');
            })
    }


    return (
        <>
            <Container>

                <Title>Identifique-se</Title>

                <form
                    name="signIn"
                    onSubmit={(e) => { OnSubmit(e) }}
                >

                    <Row>
                        <Col>
                            <FormGroup>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id='email'
                                    autoComplete='username'
                                    placeholder='Digite sua credencial'
                                    onChange={(e) => { setUsername(e.target.value) }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <label htmlFor="password">Senha</label>
                                <input
                                    type="password"
                                    id='password'
                                    autoComplete='current-password'
                                    placeholder='Digite sua senha'
                                    onChange={(e) => { setPassword(e.target.value) }}
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