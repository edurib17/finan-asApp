import React, { useState, useContext } from 'react';
import { Platform,ActivityIndicator } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from './../SignUp/stlyes';
import { AuthContext } from '../../contexts/auth';
export default function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp, loadingAuth } = useContext(AuthContext);

    function handerSignUp() {
        signUp(email, password, nome);
    }
    return (
        <Background>
            <Container
                behaivor={Platform.OS === 'ios' ? 'padding' : ''} enabled
            >
                <AreaInput>
                    <Input placeholder="Nome" autoCorrect={false} autoCapitalize="none" value={nome} onChangeText={(text) => setNome(text)} />
                </AreaInput>
                <AreaInput>
                    <Input placeholder="Email" autoCorrect={false} autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)} />
                </AreaInput>
                <AreaInput>
                    <Input secureTextEntry={true} placeholder="Senha" autoCorrect={false} autoCapitalize="none" value={password} onChangeText={(text) => setPassword(text)} />
                </AreaInput>
                <SubmitButton onPress={handerSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff" />
                        ) : (
                                <SubmitText>Cadastrar</SubmitText>
                            )
                    }
                </SubmitButton>
            </Container>
        </Background>

    );
}