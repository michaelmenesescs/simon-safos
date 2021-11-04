import React from 'react'
import PhotoNavbar from '../../../components/PhotoNavbar'
import Image from 'next/image'
import styled from 'styled-components'
import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import ResponsivePhotoNavbar from '../../../components/ResponsivePhotoNavbar'

const colors = {
    gray: '#393939',
    orange: '#6C391C',
    purple: '#603B57',
    darkorange: '#633F1D',
    red: '#646F1F',
    blue: '#2D3F45',
    darkyellow: '#5B5232',
    green: '#426639',
    darkgreen: '#5B605B',
    lightblue: '#184157'
}

const ImageWrapper = styled.div`
    display:flex;
    padding: 6px;
`;

const StyledImage = styled(Image)`
    display: flex;
    padding: 10px;
    border-radius: 7px;
    margin: 5px;
    bottom: 10px;
`;
const Photos = styled.div`
    display:flex;
    flex-direction: column;
`;

const Gray = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: #393939;
    padding: 10px;
`

const GraytoOrange = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#393939, #6C391C);
    padding: 10px;
`
const OrangetoPurple = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#6C391C, #603B57);
    padding: 10px;
`


const PurpleToRed = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#603B57, #633F1D);
    padding: 10px;
`
const RedToBlue = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#633F1D, #2D3F45);
    padding: 10px;
`
const BlueToYellow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#2D3F45, #5B5232);
    padding: 10px;
`
const YellowToGreen = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#5B5232, #426639);
    padding: 10px;
`
const GreenToBlue = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#426639, #184157);
    padding: 10px;
`



const index = (props) => {
    return (
        <div>
            <Head>
                <title>Nature</title>
                <meta name="description" content="People Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
               // <PhotoNavbar color={colors.gray} />
            }
            <Photos>
                <Gray>
                    <ResponsivePhotoNavbar />
                </Gray>
                <GraytoOrange>
                    {
                        props.GrayToOrange.pictures.map(pic => {
                            return (
                                <ImageWrapper key={pic.id}>
                                    <StyledImage
                                        src={pic.image.url}
                                        width={pic.width}
                                        height={pic.height}
                                        quality={100}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </GraytoOrange>
                <OrangetoPurple>
                    {
                        props.OrangeToPurple.pictures.map(pic => {
                            return (
                                <ImageWrapper key={pic.id}>
                                    <StyledImage
                                        src={pic.image.url}
                                        width={pic.width}
                                        height={pic.height}
                                        quality={100}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </OrangetoPurple>
                <PurpleToRed>
                    {

                        props.PurpleToRed.map(pic => {
                            return (
                                <ImageWrapper key={pic.id}>
                                    <StyledImage
                                        src={pic.image.url}
                                        width={pic.width}
                                        height={pic.height}
                                        quality={100}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </PurpleToRed>
                <RedToBlue>
                    {
                        props.RedToBlue.map(pic => {
                            return (
                                <ImageWrapper key={pic.id}>
                                    <StyledImage
                                        src={pic.image.url}
                                        width={pic.width}
                                        height={pic.height}
                                        quality={100}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </RedToBlue>
                <BlueToYellow>
                    {
                        props.BlueToYellow.map(pic => {
                            return (
                                <ImageWrapper key={pic.id}>
                                    <StyledImage
                                        src={pic.image.url}
                                        width={pic.width}
                                        height={pic.height}
                                        quality={100}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </BlueToYellow>
                <YellowToGreen>
                    {
                        props.YellowToGreen.map(pic => {
                            return (
                                <ImageWrapper key={pic.id}>
                                    <StyledImage
                                        src={pic.image.url}
                                        width={pic.width}
                                        height={pic.height}
                                        quality={100}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </YellowToGreen>
                <GreenToBlue>
                    {
                        props.GreenToBlue.map(pic => {
                            return (
                                <ImageWrapper key={pic.id}>
                                    <StyledImage
                                        src={pic.image.url}
                                        width={pic.width}
                                        height={pic.height}
                                        quality={100}
                                        layout="intrinsic"
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </GreenToBlue>
            </Photos>
        </div>
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

    const bw = gql`
        query bw {
                pictures(where: {section: "bw"}, orderBy: fileName_ASC){
                id
                fileName
                width
                height
                image {
                    url
                }
                }
            }   
     `
    const sun = gql`
        query sun  {
                pictures(where: {section: "sun"}, orderBy: fileName_ASC){
                id
                fileName
                width
                height
                image {
                    url
                }
                }
            }   
     `
    const night = gql`
        query sun  {
                pictures(where: {section: "night"}, orderBy: fileName_ASC){
                id
                fileName
                width
                height
                image {
                    url
                }
                }
            }   
     `
    const daytime = gql`
        query day {
            pictures(where: {fileName_contains: "day"}) {
            id
            fileName
            width
            height
            image {
                url
            }
            }
        }
     `
    const greens = gql`
        query greens {
            pictures(
            where: {fileName_contains: "green", page: "nature"}
            orderBy: fileName_ASC
            ) {
            id
            fileName
            width
            height
            image {
                url
            }
            }
        }
     `
    const blues = gql`
        query blues  {
            pictures(
            where: {fileName_contains: "blues", page: "nature"}
            orderBy: fileName_ASC
            ) {
            id
            fileName
            width
            height
            image {
                url
            }
            }
        }
     `





    const GrayToOrange = await graphQLCLient.request(bw)
    const OrangeToPurple = await graphQLCLient.request(sun)
    const Night = await graphQLCLient.request(night)
    const Daytime = await graphQLCLient.request(daytime)
    const Greens = await graphQLCLient.request(greens)
    const Blues = await graphQLCLient.request(blues)




    const PurpleToRed = Night.pictures.splice(0, 18)
    const RedToBlue = Night.pictures.splice(18)
    const BlueToYellow = Daytime.pictures
    const YellowToGreen = Greens.pictures
    const GreenToBlue = Blues.pictures






    return {
        props: {
            GrayToOrange,
            OrangeToPurple,
            PurpleToRed,
            RedToBlue,
            BlueToYellow,
            YellowToGreen,
            GreenToBlue
        }, // will be passed to the page component as props
    }
}
