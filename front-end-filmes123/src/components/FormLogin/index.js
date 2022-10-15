import {useContext, useState} from 'react';
import {FormContainer, Label, Input, BtnEntrar, Span, SpanLabel, BoxScreen} from './styles';
import {AuthContext} from '../../context';

export default function FormLogin() {
    const [labelCadastro, setLabelCadastro] = useState(false);
    const {setSenhaD, setEmailD, handleLogin} = useContext(AuthContext);

    return (

            <FormContainer onSubmit={handleLogin} >
            <BoxScreen>
                <Label>
                    <SpanLabel>Email</SpanLabel>
                    <Input type='email' onChange={e => setEmailD(e)} required/>
                </Label>
                <Label>
                    <SpanLabel>Senha</SpanLabel>
                    <Input type='password' onChange={e => setSenhaD(e)} required/>
                </Label>
                {labelCadastro ? (
                    <>
                        <Label>
                            <SpanLabel>Nome</SpanLabel>
                            <Input type='password' onChange={e => setSenhaD(e)} required/>
                        </Label>
                        <Span>Já tenho cadastro.<p onClick={e => setLabelCadastro(false)}> Clique aqui </p></Span>
                    </>
                ) : (
                    <Span>Não tenho cadastro ainda.<p onClick={e => setLabelCadastro(true)}>Clique aqui</p></Span>
                )}
                <BtnEntrar onClick={handleLogin}>Entrar</BtnEntrar>
            </BoxScreen>
        </FormContainer>

    );
}
