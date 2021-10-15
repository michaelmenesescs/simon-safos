import React from 'react'
import NameNavbar from '../../components/NameNavbar'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import {bgWrap, bgText} from '../../styles/Home.module.css'
import ResponsiveNavbar from '../../components/ResponsiveNavbar'
import {gql, GraphQLClient} from 'graphql-request'
import Head from 'next/head'



const Container = styled.div`
  display:flex;
  flex-direction: column;
  color: white;
`;


const StyledLink = styled.a`
    &:hover {
        color: #8D8D8D;
    }
    font-size: 25pt;

`
const Links = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Typographica';
    margin-left: 5%;
    margin-top: 10%;
    font-size: 20pt; 
    font-weight: 100;

`;

const index = (props) => {
    return (
        <Container>
          <Head>
            <title>Photography</title>
            <meta name="description" content="Simon Safos, A creative from New York City" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <div className = {bgWrap}>
                <Image src={props.link} alt="Photography Landing" layout="fill" objectFit="cover" quality = {100}/>
            </div>
            <NameNavbar color={'#FFFFF'} /> 
            <Links>
                <StyledLink href = {"/photography/street"}>Street</StyledLink>
                <StyledLink href = {"/photography/nature"}>Nature</StyledLink>
                <StyledLink href = {"/photography/people"}>People</StyledLink>
                <StyledLink href = {"/photography/process"}>Process</StyledLink>
            </Links>
        </Container>
    )
}

export default index


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
            asset(where: {id: "ckulr5rb463bc0b30elkc68iz"}){
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
