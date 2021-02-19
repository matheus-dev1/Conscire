import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import db from './db.json'
import Widget from '../../components/Widget'
import QuizBackground from '../../components/QuizBackground'
import GitHubCorner from '../../components/GitHubCorner'
import Input from '../../components/input'
import Button from '../../components/Button'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
 `

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: 65px 210px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState(''); 
  console.log('usestate', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title> Quiz - Irmão do Jorel </title>
      </Head>
      <QuizContainer>
        <Widget
         as={motion.section}
         transition={{ delay: 0.5, duration: 0.5 }}
         variants={{
           show: { opacity: 1 },
           hidden: { opacity: 0 },
         }}
         initial="hidden"
         animate="show"           
        >
        <Widget.Header>
          <h1>Quiz Irmão do Jorel</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              // router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por react');
            }}>
              <Input 
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  placeholder="Digite seu nome" 
                  value={name}
                  />
                            
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget 
        as={motion.section}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
        >
        <Widget.Content>
        <h1>
            Quiz Irmão do Jorel
          </h1>
          <p>
            Você sabe tudo sobre Irmão do Jorel? Então venha encarar este desafio! 
          </p>
          </Widget.Content>
        </Widget>
        
      </QuizContainer>
    </QuizBackground>
  );
}
