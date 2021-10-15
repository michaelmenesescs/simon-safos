import Head from 'next/head'
import Image from 'next/image'
import PaintingMusic from '../../components/PaintingMusic'
import styled from 'styled-components'
import { bgWrap } from '../../styles/Home.module.css'
import ResponsiveNavbar from '../../components/ResponsiveNavbar'
import { gql, GraphQLClient } from 'graphql-request'
import HomeNavbar from '../../components/HomeNavbar'


const Container = styled.div`
    display:flex;
    flex-direction: column;
`;
const Paintings = styled.div`
    display:flex;
    padding: 30px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex: 3;
`;

const Wrapper = styled.div`
    padding: 10px;
`;


const index = (props) => {
    return (
        <Container>
            <Head>
                <title>Music</title>
                <meta name="description" content="Simon Safos, A creative from New York City" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={bgWrap}>
                <Image src={props.backgroundURL} alt="Music Landing" layout="fill" objectFit="cover" quality={100} />
            </div>
            <HomeNavbar />
            <Paintings>
                {
                    props.pics.map(pic => {
                        return (
                            <Wrapper key={pic.node.id} >
                                <PaintingMusic
                                    image={pic.node.image.url}
                                    width={264}
                                    height={304}
                                    title={pic.node.title}
                                    year={2021}
                                    key={pic.node.id}
                                />
                            </Wrapper>
                        )
                    })
                }
            </Paintings>
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
        query MusicPics {
            paintingsConnection(where: {page: "music"}) {
            edges {
                node {
                id
                title
                year
                image{
                    url		
                }
                }
            }
            }
            
            asset(where: {id: "ckulwd0tk65gt0a85gpzhwcyx"}){
            url
            fileName
            }
        }
    `
    const data = await graphQLCLient.request(query)

    let backgroundURL = data.asset.url
    let pics = data.paintingsConnection.edges

    pics.map(pic => {
        let url = pic.node.image.url
    })



    return {
        props: {
            backgroundURL,
            pics
        }, // will be passed to the page component as props
    }
}