import React from 'react'
import ArtNavbar from '../../../components/ArtNavbar'
import Painting from '../../../components/Painting'
import styled from 'styled-components'
import { bgWrap, bgText } from '../../../styles/Home.module.css'
import Image from 'next/image'
import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import ResponsiveArtNavbar from '../../../components/ResponsiveArtNavbar'


const Container = styled.div`
    display:flex;
    flex-direction: column;
`;
const Paintings = styled.div`
    display:flex;
    padding: 30px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 1px 6px 5px rgba(0, 0, 0, 0.36);
    backdrop-filter: blur(2px);
    flex: 3;
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 10px;
    max-width: 1200px;
`;

const Wrapper = styled.div`
    padding: 10px;
`;


const PaintingContainer = styled.div`
    display: flex;
    padding: 20px;
    flex: 3;
    justify-content: center;
    padding: 40px;
`;

let white = "#FFFFF"

const index = (props) => {
    return (
        <Container>
            <Head>
                <title>Multimedia</title>
                <meta name="description" content="Simon Safos, A creative from New York City" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={bgWrap}>
                <Image src={props.backgroundURL} width={props.width} height={props.height} alt="Subway Landing" layout="fixed" objectFit="full" quality={100} />
            </div>
            {
                //<ArtNavbar />
            }
            <ResponsiveArtNavbar />
            <PaintingContainer>
                <Paintings>
                    {
                        props.paintings.map(painting => {
                            return (
                                <Wrapper key={painting.id} >
                                    <Painting
                                        image={painting.image.url}
                                        width={264}
                                        height={304}
                                        title={painting.title}
                                        year={2021}
                                        dimensions={painting.dimensions}
                                        key={painting.image.url}
                                        type={painting.type}
                                        backgroundcolor='white'
                                        text='black'
                                    />
                                </Wrapper>
                            )
                        })

                    }
                </Paintings>
            </PaintingContainer>
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
    query MyQuery {
        paintings(where: {page: "multimedia"}, orderBy: id_ASC) {
          id
          title
          type
          dimensions
          year
          image {
            url
            fileName
          }
        }
        asset(where: {id: "ckun4k0a86nfg0b30aswhzpxa"}) {
          url
          fileName
          width
          height
        }
      }
      
       
      `
    const data = await graphQLCLient.request(query)

    let paintings = data.paintings
    let backgroundURL = data.asset.url
    let width = data.asset.width
    let height = data.asset.height

    return {
        props: {
            paintings,
            backgroundURL,
            width,
            height

        }, // will be passed to the page component as props
    }
}
