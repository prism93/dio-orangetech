import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Priscila Semper" image="https://avatars.githubusercontent.com/u/116367665?s=400&u=a044d312e4e6f7e375f76d653cc1255ee39f1fb9&v=4" percentual={25}/>
                <UserInfo nome="Priscila Semper" image="https://avatars.githubusercontent.com/u/116367665?s=400&u=a044d312e4e6f7e375f76d653cc1255ee39f1fb9&v=4" percentual={65}/>
                <UserInfo nome="Priscila Semper" image="https://avatars.githubusercontent.com/u/116367665?s=400&u=a044d312e4e6f7e375f76d653cc1255ee39f1fb9&v=4" percentual={45}/>
                <UserInfo nome="Priscila Semper" image="https://avatars.githubusercontent.com/u/116367665?s=400&u=a044d312e4e6f7e375f76d653cc1255ee39f1fb9&v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 