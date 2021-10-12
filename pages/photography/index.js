import React from 'react'
import NameNavbar from '../../components/NameNavbar'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import {bgWrap, bgText} from '../../styles/Home.module.css'
import ResponsiveNavbar from '../../components/ResponsiveNavbar'
import {gql, GraphQLClient} from 'graphql-request'



const Container = styled.div`
  display:flex;
  flex-direction: column;
  color: white;
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Typographica';
    margin-left: 5%;
    margin-top: 10%;
    font-size: 20pt; 
`;

const index = (props) => {
    return (
        <Container>
            <div className = {bgWrap}>
                <Image src={props.link} alt="Photography Landing" layout="fill" objectFit="cover" quality = {100}/>
            </div>
            <NameNavbar color={'#FFFFF'} /> 
            <Links>
                <Link href = {"/photography/street"}>Street</Link>
                <Link href = {"/photography/nature"}>Nature</Link>
                <Link href = {"/photography/people"}>People</Link>
                <Link href = {"/photography/process"}>Process</Link>
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
