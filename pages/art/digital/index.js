import React from 'react'
import ArtNavbar from '../../../components/ArtNavbar'
import Painting from '../../../components/Painting'
import styled from 'styled-components'
import { bgWrap, bgText } from '../../../styles/Home.module.css'
import Image from 'next/image'
import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import ResponsiveArtNavbar from '../../../components/ResponsiveArtNavbar'
import FooterForAll from '../../../components/FooterForAll'

const Container = styled.div`
    display:flex;
    flex-direction: column;
`;
const Paintings = styled.div`
    display:flex;
    padding: 20px 0px 20px 0px;
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

const index = (props) => {
    return (
        <Container>
            <Head>
                <title>Digital</title>
                <meta name="description" content="Simon Safos, A creative from New York City" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={bgWrap}>
                <Image src={props.backgroundURL} alt="Subway Landing" layout="fill" objectFit="full" quality={100} />
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
                                <Wrapper key={painting.id}>
                                    <Painting
                                        image={painting.image.url}
                                        width={264}
                                        height={304}
                                        title={painting.title}
                                        year={2021}
                                        dimensions={painting.dimensions}
                                        key={painting.id}
                                        type={painting.type}
                                    />
                                </Wrapper>
                            )
                        })

                    }
                </Paintings>
            </PaintingContainer>
            <FooterForAll />
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
        paintings(where: {page: "digital"}, orderBy: id_ASC) {
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
        asset(where: {id: "ckumzqtps6l9l0a85kvoz0x4z"}) {
          url
          fileName
        }
      }
       
      `
    const data = await graphQLCLient.request(query)

    let paintings = data.paintings
    let backgroundURL = data.asset.url



    return {
        props: {
            paintings,
            backgroundURL

        }, // will be passed to the page component as props
    }
}
