import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql, GraphQLClient } from 'graphql-request'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import styled from 'styled-components'


const Container = styled.div`
  display:flex;
  flex-direction: column;
  min-width: 100vw;
`;

const About = styled.div`
    display:flex;
    color: white;
    width: 50%;
    height: 250px;
    justify-content: center;
    align-items: center;
    margin-top:5%;
    padding: 25px;
    background: rgba(0, 0, 0, 0.26);
    backdrop-filter: blur(6px);
    font-family: 'Futura-Light';
    font-size: 20px;  
`;

const propTypes = {
  home: ["art", "photography", "music", "about"],
  art: ["oil", "charcoal", "subwayseries", "digital", "multimedia"],
  photography: ["nature", "people", "process", "street"]
}


export default function Home(props) {
  return (

    <Container>
      
      <Head>
        <title>Simon Safos</title>
        <meta name="description" content="Simon Safos, A creative from New York City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bgWrap}>
          <Image src={props.link} alt="7 train" layout="fill" objectFit="cover" quality = {100}/>
      </div>
      <ResponsiveNavbar />

      <About>
        Welcome, I’m a creative out of Queens, New York City. Enjoy the many works and vehicle of creation that are all things me.
      </About>
    </Container>
  )
}


export async function getStaticProps(context) {


  let url = process.env.URL
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