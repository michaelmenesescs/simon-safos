import Head from 'next/head'
import Image from 'next/image'
import {bgWrap, bgText} from '../../styles/Home.module.css'
import styled from 'styled-components'
import HomeNavbar from '../../components/HomeNavbar'
import { gql, GraphQLClient } from 'graphql-request'
import ResponsiveHomeNavbar from '../../components/ResponsiveHomeNavbar'
import FooterForAll from '../../components/FooterForAll'


const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

const About = styled.div`
    display:flex;
    color: white;
    width: 35%;
    height: 400px;
    justify-content: center;
    align-items: center;
    margin-top:5%;
    margin-left: 15px;
    padding: 25px;
    background: rgba(0, 0, 0, 0.26);
    backdrop-filter: blur(6px);
    font-family: 'Futura-Light';
    font-size: 20px;  
    white-space: normal;
    overflow: scroll;
    text-overflow: ellipsis;
    border-radius: 25px;
`;



const index = (props) => {
    return (
        <Container>
            <Head>
                <title>About</title>
            </Head>
            <div className={bgWrap}>
                   <Image src={props.link} alt="About" layout="fill" objectFit="cover" quality = {100}/>           
            </div>
            <ResponsiveHomeNavbar />
            <About>
                Simón Safos is a cross-disciplinary creative out of Queens, New York whose work primarily consists of fine art, illustration, photography and music. From performances at Carnegie Hall to gallery exhibitions with various curators throughout New York, Simón has had the privilege of expressing himself through these different expressive disciplines. He attended the Frank Sinatra School of the Arts where he studied as a vocal major refining his craft and love of music, to then study as an illustrator at the Fashion Institute of Technology in Manhattan while simoultaeneously attending The Art Students League of New York, further strengthening his artistic endeavors.
            </About>
            <FooterForAll />
        </Container>
    )
}

export async function getStaticProps(context){
    

    let url = "https://api-ca-central-1.graphcms.com/v2/ckui3azur0w7s01xqhu545bmx/master"
    let token = process.env.GRAPH_CMS_TOKEN


  const graphQLCLient = new GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  
  const query = gql`
    query {
      values: asset(where: {id: "ckulsqq8g63je0b28e6t5cvt6"}) {
        url
      }
    }
  `
  const data = await graphQLCLient.request(query)
  let link = data.values.url
  
  return {
    props: {
      link
    }, // will be passed to the page component as props
  }
    

}


export default index
