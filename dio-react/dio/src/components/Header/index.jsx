import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';


import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture } from './styles'; 

const Header = ({autenticado}) => {
    return (
        <Wrapper>
          <Container>
              <Row>
                <img src={logo} alt="Logo da dio"/>
                {autenticado ? (
                  <>
                   <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                   </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                  </>
                ) : null}
              </Row>
              <Row>
                  {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/116367665?s=400&u=a044d312e4e6f7e375f76d653cc1255ee39f1fb9&v=4"/>
                  ) : (
                  <>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                  </>)}
              </Row>
          </Container>
        </Wrapper>
      )
    }
    
    export { Header }