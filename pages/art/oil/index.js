import React from 'react'
import ArtNavbar from '../../../components/ArtNavbar'
import Painting from '../../../components/Painting'
import styled from 'styled-components'
import { bgWrap, bgText } from '../../../styles/Home.module.css'
import Image from 'next/image'
import { gql, GraphQLClient } from 'graphql-request'


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
`;

const Wrapper = styled.div`
    padding: 10px;
`;


const PaintingContainer = styled.div`
    display: flex;
    padding: 20px;
    flex: 3;

`;

const index = (props) => {
    return (
        <Container>
            <div className={bgWrap}>
                <Image src={props.backgroundURL} alt="Oil Landing" layout="fill" objectFit="full" quality={100} />
            </div>
            <ArtNavbar />
            <PaintingContainer>
            <Paintings>
            {
                props.paintings.map(painting => {
                    return (
                        <Wrapper>
                        <Painting 
                            image={painting.image.url} 
                            width={264}    
                            height={304} 
                            title={painting.title}
                            year={2021}
                            dimensions={painting.dimensions}
                            key = {painting.id}
                            type = {painting.type}
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
        paintings(where: {page: "oil"}) {
          id
          title
          type
          dimensions
          year
          image {
            url
          }
        }
        
        asset(where: {id: "ckum9y1rc6amt0c3357ox0kbh"}){
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
