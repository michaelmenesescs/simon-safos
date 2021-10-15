import React from 'react'
import PhotoNavbar from '../../../components/PhotoNavbar'
import styled from 'styled-components'
import Image from 'next/image'
import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'


const colors = {
    purple: '#7D3457',
    darkorange: '#714730',
    orange: '#582F21',
    gray: '#464646',
    darkgray: '#474747',
    darkgreen: '#303826',
    darkyellow: '#3B3830',
    blue: '2F3D45'
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

const ColumnBreak = styled.div`
    display: flex;
    flex-direction: column;
`;
const RowBreak = styled.div`
    display: flex;
    flex-direction: row;
`;


const PurpletoOrange = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#7D3457, #714730);
    padding: 10px;
`
const OrangeToGray = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#714730, #582F21, #464646);
    padding: 10px;
`
const GrayToGreen = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#464646, #474747, #303826);
    padding: 10px;
`
const GreenToYellow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#303826, #3B3830);
    padding: 10px;
`
const YellowToBlue = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: linear-gradient(#3B3830, #2F3D45);
    padding: 10px;
`


const index = (props) => {
    return (
        <div>
            <Head>
                <title>People</title>
                <meta name="description" content="People Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PhotoNavbar color={colors.purple} />
            <Photos>
                <PurpletoOrange>
                    <RowBreak>
                        {
                            props.PurpleOne.pictures.map(pic => {
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
                        <ColumnBreak>
                            {
                                props.PurpleTwo.pictures.map(pic => {
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
                        </ColumnBreak>
                        <ColumnBreak>
                            {
                                props.PurpleThree.pictures.map(pic => {
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
                        </ColumnBreak>
                    </RowBreak>
                    {
                        props.PurpleFour.pictures.map(pic => {
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
                    <RowBreak>
                        <ColumnBreak>
                            {
                                props.PurpleFive.pictures.map(pic => {
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
                        </ColumnBreak>
                    </RowBreak>
                    {
                        props.PurpleSix.pictures.map(pic => {
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
                </PurpletoOrange>
                <OrangeToGray>
                    {
                        props.OrangeOne.pictures.map(pic => {
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
                    <RowBreak>
                        {
                            props.OrangeTwo.pictures.map(pic => {
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

                    </RowBreak>
                    {
                        props.OrangeThree.pictures.map(pic => {
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
                </OrangeToGray>
                <GrayToGreen>
                    <ColumnBreak>
                        {
                            props.GrayOne.pictures.map(pic => {
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
                        <RowBreak>
                            {
                                props.GrayTwo.pictures.map(pic => {
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

                        </RowBreak>
                    </ColumnBreak>
                    {
                        props.GrayThree.pictures.map(pic => {
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
                    <RowBreak>
                        {
                            props.GrayFour.pictures.map(pic => {
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
                    </RowBreak>
                    <ColumnBreak>
                        <RowBreak>
                            {
                                props.GrayFive.pictures.map(pic => {
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
                        </RowBreak>
                        {
                            props.GraySix.pictures.map(pic => {
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
                    </ColumnBreak>
                </GrayToGreen>
                <GreenToYellow>
                    {
                        props.GreenOne.pictures.map(pic => {
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
                    <RowBreak>
                        {
                            props.GreenTwo.pictures.map(pic => {
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
                    </RowBreak>
                    <ColumnBreak>
                        {
                            props.GreenThree.pictures.map(pic => {
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
                    </ColumnBreak>
                    {
                        props.GreenFour.pictures.map(pic => {
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


                </GreenToYellow>
                <YellowToBlue>
                    <RowBreak>
                        <ColumnBreak>
                            {
                                props.BlueOne.pictures.map(pic => {
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
                        </ColumnBreak>
                    </RowBreak>
                    {
                        props.BlueTwo.pictures.map(pic => {
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
                </YellowToBlue>
            </Photos>
        </div >
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

    const one = gql`
    query purples {
        pictures(
          where: {fileName_contains: "purple", section: "one"}
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
    const two = gql`
    query purples {
        pictures(
          where: {fileName_contains: "purple", section: "PurpleTwo"}
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
    const three = gql`
    query purples {
        pictures(
          where: {fileName_contains: "purple", section: "three"}
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
    const four = gql`
    query purples {
        pictures(
          where: {fileName_contains: "purple", section: "four "}
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
    const five = gql`
    query purples {
        pictures(
          where: {fileName_contains: "purple", section: "five"}
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
    const six = gql`
    query purples {
        pictures(
          where: {fileName_contains: "purple", section: "six"}
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
    const orangeOne = gql`
    query purples {
        pictures(
          where: {fileName_contains: "orange", section: "one"}
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
    const orangeTwo = gql`
    query purples {
        pictures(
          where: {fileName_contains: "orange", section: "two"}
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
    const orangeThree = gql`
    query purples {
        pictures(
          where: {fileName_contains: "orange", section: "three"}
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
    const grayOne = gql`
    query purples {
        pictures(
          where: {fileName_contains: "gray", section: "one"}
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
    const grayTwo = gql`
    query purples {
        pictures(
          where: {fileName_contains: "gray", section: "two"}
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
    const grayThree = gql`
    query purples {
        pictures(
          where: {fileName_contains: "gray", section: "three"}
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
    const grayFour = gql`
    query purples {
        pictures(
          where: {fileName_contains: "gray", section: "four"}
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
    const grayFive = gql`
    query purples {
        pictures(
          where: {fileName_contains: "gray", section: "five"}
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
    const graySix = gql`
    query purples {
        pictures(
          where: {fileName_contains: "gray", section: "six"}
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
    const greenOne = gql`
    query purples {
        pictures(
          where: {fileName_contains: "green", section: "one"}
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
    const greenTwo = gql`
    query purples {
        pictures(
          where: {fileName_contains: "green", section: "two"}
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
    const greenThree = gql`
    query purples {
        pictures(
          where: {fileName_contains: "green", section: "three"}
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
    const greenFour = gql`
    query purples {
        pictures(
          where: {fileName_contains: "green", section: "four"}
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
    const blueOne = gql`
    query purples {
        pictures(
          where: {fileName_contains: "blue", section: "one"}
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
    const blueTwo = gql`
    query purples {
        pictures(
          where: {fileName_contains: "blue", section: "two"}
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


    const PurpleOne = await graphQLCLient.request(one)
    const PurpleTwo = await graphQLCLient.request(two)
    const PurpleThree = await graphQLCLient.request(three)
    const PurpleFour = await graphQLCLient.request(four)
    const PurpleFive = await graphQLCLient.request(five)
    const PurpleSix = await graphQLCLient.request(six)

    const OrangeOne = await graphQLCLient.request(orangeOne)
    const OrangeTwo = await graphQLCLient.request(orangeTwo)
    const OrangeThree = await graphQLCLient.request(orangeThree)

    const GrayOne = await graphQLCLient.request(grayOne)
    const GrayTwo = await graphQLCLient.request(grayTwo)
    const GrayThree = await graphQLCLient.request(grayThree)
    const GrayFour = await graphQLCLient.request(grayFour)
    const GrayFive = await graphQLCLient.request(grayFive)
    const GraySix = await graphQLCLient.request(graySix)

    const GreenOne = await graphQLCLient.request(greenOne)
    const GreenTwo = await graphQLCLient.request(greenTwo)
    const GreenThree = await graphQLCLient.request(greenThree)
    const GreenFour = await graphQLCLient.request(greenFour)



    const BlueOne = await graphQLCLient.request(blueOne)
    const BlueTwo = await graphQLCLient.request(blueTwo)





    return {
        props: {
            PurpleOne,
            PurpleTwo,
            PurpleThree,
            PurpleFour,
            PurpleFive,
            PurpleSix,
            OrangeOne,
            OrangeTwo,
            OrangeThree,
            GrayOne,
            GrayTwo,
            GrayThree,
            GrayFour,
            GrayFive,
            GraySix,
            GreenOne,
            GreenTwo,
            GreenThree,
            GreenFour,
            BlueOne,
            BlueTwo

        }, // will be passed to the page component as props
    }
}

