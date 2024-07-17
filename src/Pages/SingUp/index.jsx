import { Container,Form, Background } from "./style";

import {  FiMail, FiLock, FiUser } from "react-icons/fi";
import { TfiArrowLeft } from "react-icons/tfi";

import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

export function SingUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>RcoketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>
                <h2>Faça seu login</h2>
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="email" icon={FiMail}/>
                <Input placeholder="Senha"  type="password" icon={FiLock}/>
                <Button title="Entrar"/>
                <a href="#">
                    <TfiArrowLeft />
                    Voltar para o login
                </a>
            </Form>
           
        </Container>
    )
}