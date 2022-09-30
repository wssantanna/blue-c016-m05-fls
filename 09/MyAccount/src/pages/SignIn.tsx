import { useState } from 'react';

import AuthService from '../services/AuthService';

import ICredential from '../interfaces/Credential';

import {
    Container,
    Row,
    Col,
    FormGroup,
    Button,
    Title
} from '@styles';



function SignIn() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function OnSubmit(e: any) {
        e.preventDefault();
        const currentCredential: ICredential = {
            username,
            password
        }

        AuthService.Authentication(currentCredential);
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
                                    name="email"
                                    type="email"
                                    id='email'
                                    placeholder='Digite sua credencial'
                                    onChange={(e) => { setUsername(e.target.value) }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <label htmlFor="password">Senha</label>
                                <input
                                    name="password"
                                    type="password"
                                    id='password'
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