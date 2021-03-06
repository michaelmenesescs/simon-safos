import React from 'react'
import Image from 'next/image'
import { bgWrap } from '../../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'
import { gql, GraphQLClient } from 'graphql-request'
import NameNavbar from '../../components/NameNavbar'
import Head from 'next/head'

const SubPages = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Typographica';
    font-size: 40px;
    color: #8D8D8D;
    margin-left: 10%;
    margin-top: 10%;
    font-size: 37pt;
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  color: #8D8D8D;
`;

const StyledLink = styled.a`
   &:hover {
    color: black;
    transition: all 2s ease;
    position: relative; 
    top: -5px;
    left: 20px;
  }
 
`


const index = (props) => {
  return (
    <Container>
      <Head>
            <title>Art</title>
            <meta name="description" content="Simon Safos, A creative from New York City" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      <div className={bgWrap}>
        <Image src={props.link} alt="Art Landing" layout="fill" objectFit="cover" quality={100} />
      </div>
      <NameNavbar color={'#8D8D8D'} />
      <SubPages>
        <StyledLink href={"/art/oil"}>
          oil
        </StyledLink>
        <StyledLink href={"/art/digital"}>
          digital
        </StyledLink>
        <StyledLink href={"/art/charcoal"}>
          charcoal
        </StyledLink>
        <StyledLink href={"/art/subway-series"}>
          subway series
        </StyledLink>
        <StyledLink href={"/art/multimedia"}>
          mixmedia figure
        </StyledLink>
      </SubPages>
    </Container>
  )
}



export async function getStaticProps(context) {

  let url = "https://api-ca-central-1.graphcms.com/v2/ckui3azur0w7s01xqhu545bmx/master"
  let token = process.env.GRAPH_CMS_TOKEN


  const graphQLCLient = new GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  const query = gql`
    query Background {
      asset(where: {id: "ckulqg7k062tt0a85h8owrsc4"}){
        url
        fileName
      }
    }
    
    `
  const data = await graphQLCLient.request(query)
  let link = data.asset.url

  return {
    props: {
      link
    }, // will be passed to the page component as props
  }
}

export default index