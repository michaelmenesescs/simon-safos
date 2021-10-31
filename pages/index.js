import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql, GraphQLClient } from 'graphql-request'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import styled from 'styled-components'
import HomeNavbar from '../components/HomeNavbar'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  min-width: 100vw;
  justify-content: space-between;
`;

const About = styled.div`
    display:flex;
    color: white;
    width: 60%;
    min-height: 200px;
    height: 30%;
    justify-content: center;
    align-items: center;
    margin-top:5%;
    padding: 25px;
    background: rgba(0, 0, 0, 0.17);
    backdrop-filter: blur(7px);
    font-family: 'Futura-Light';
    font-size: 30px;  
    border-radius: 21px;
    padding: 15px;
`;


const Contact = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  font-family: 'Futura-Light';
  font-size: 30px;  
  color: white;

`

const Links = styled.div`
  display:flex;
  flex-direction: row;
  padding: 30px;
  font-family: 'Futura-Light';
  align-items: center;
  `

const Info = styled.div`
  display:flex;
  margin-top: 300px;
  flex-direction: column;

`

const propTypes = {
  home: ["art", "photography", "music", "about"],
  art: ["oil", "charcoal", "subwayseries", "digital", "multimedia"],
  photography: ["nature", "people", "process", "street"]
}


export default function Home(props) {
  return (
    <Container>
      <Head>
        <title>Simón Safos</title>
        <meta name="description" content="Simon Safos, A creative from New York City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bgWrap}>
            <Image src={props.link} alt="7 train" layout="fill" objectFit="cover" quality = {100}/>
      </div>
      
      <ResponsiveNavbar />

     
      <About>
        Welcome, Enjoy the many works and vehicles of creation that are the foundations that make Simón.
      </About>
      <Info>
        <Contact>
            contact: simonsafos@gmail.com
        </Contact>
        <Links>
          <a href = {"https://www.instagram.com/simonsafos/"} >
            <Image src = {"/IG.png"} alt = "Instagram" width="50px" height="50px" quality={100}/>
          </a>
          <a href = {"https://www.instagram.com/simonsafos/"} >
            <Image src = {"/behance.png"} alt = "Behance" width="50px" height="50px" quality={100}/>
          </a>
        </Links>
      </Info>
    

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
    query {
      values: asset(where: {id: "ckuiimirc4zor0b28y33qoaod"}) {
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