import React from "react";
import ResponsivePhotoNavbar from "../../../components/ResponsivePhotoNavbar";
import Image from "next/image";
import Link from "next/link"
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap/Navbar";
import Head from "next/head";
import { gql, GraphQLClient, GraphQLCLient } from 'graphql-request'


const colors = {
  green: "#3F452D",
  greenblue: "#344541",
  darkerblue: "#2A373B",
  darkblue: "#273339",
  bronze: "#393326",
  gray: "#515250",
  orange: "#70563E",
  darkorange: "#432611",
};

const StyledImage = styled(Image)`
  display: flex;
  border-radius: 7px;
`;

const Wrapper = styled.div`
    padding: 5px;

`

const Photos = styled.div`
  display: flex;
  flex-direction: column;
`;

const Green = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #3f452d;
`;
const GreenToBlue = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: linear-gradient(#3f452d, #344541);
`;
const Blue = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: linear-gradient(#344541, #2a373b);
`;
const BlueToBronze = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: linear-gradient(#393326, #2a373b);
`;
const BronzeToGray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: linear-gradient(#2a373b, #515250);
`;
const GrayToOrange = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: linear-gradient(#515250, #70563e);
`;

const ColumnBreak = styled.div`
  display: flex;
  flex-direction: column;
`;

const index = (props) => {

  const GreenToBlueBottom = props.GreenToBlue.pictures.slice(3)
  const Blue1To4 = props.Blue.pictures.slice(0, 4)
  const Blue5To6 = props.Blue.pictures.slice(4, 6)
  const Blue6ToEnd = props.Blue.pictures.slice(6)

  const BlueToBronze1To2 = props.BlueToBronze.pictures.slice(0, 2)
  const BlueToBronze2ToEnd = props.BlueToBronze.pictures.slice(0, 2)

  const GrayToOrange1To9 = props.GrayToOrange.pictures.slice(0, 10)
  const GrayToOrangeEnd = props.GrayToOrange.pictures.slice(11)


  return (
    <Photos>
           <Head>
                <title>Street</title>
                <meta name="description" content="People Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
              //<PhotoNavbar color={colors.green} />
            }
      <ResponsivePhotoNavbar color={colors.green} />
      <Green>
        {/* Green Section */}
        {
          props.Green.pictures.map(pic => {
            return (
              <Wrapper key={pic.id}>
                <StyledImage
                  src={pic.image.url}
                  width={pic.width}
                  height={pic.height}
                  quality={100}
                  layout="intrinsic"
                />
              </Wrapper>
            )
          })
        }
      </Green>
      <GreenToBlue>
        <Wrapper>
          <StyledImage
            src={props.GreenToBlue.pictures[0].image.url}
            width={props.GreenToBlue.pictures[0].width}
            height={props.GreenToBlue.pictures[0].height}
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <ColumnBreak>
          <Wrapper>
            <StyledImage
              src={props.GreenToBlue.pictures[1].image.url}
              width={props.GreenToBlue.pictures[1].width}
              height={props.GreenToBlue.pictures[1].height}
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
          <Wrapper>
            <StyledImage
              src={props.GreenToBlue.pictures[2].image.url}
              width={props.GreenToBlue.pictures[2].width}
              height={props.GreenToBlue.pictures[2].height}
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
        </ColumnBreak>
        {
          GreenToBlueBottom.map(pic => {
            return (
              <Wrapper key={pic.id}>
                <StyledImage
                  src={pic.image.url}
                  width={pic.width}
                  height={pic.height}
                  quality={100}
                  layout="intrinsic"
                />
              </Wrapper>
            )
          })
        }
      </GreenToBlue>
      <Blue>
        {
          Blue1To4.map(pic => {
            return (
              <Wrapper key={pic.id}>
                <StyledImage
                  src={pic.image.url}
                  width={pic.width}
                  height={pic.height}
                  quality={100}
                  layout="intrinsic"
                />
              </Wrapper>
            )
          })
        }
        <ColumnBreak>
          {
            Blue5To6.map(pic => {
              return (
                <Wrapper key={pic.id}>
                  <StyledImage
                    src={pic.image.url}
                    width={pic.width}
                    height={pic.height}
                    quality={100}
                    layout="intrinsic"
                  />
                </Wrapper>
              )
            })
          }
        </ColumnBreak>
        {
          Blue6ToEnd.map(pic => {
            return (
              <Wrapper key={pic.id}>
                <StyledImage
                  src={pic.image.url}
                  width={pic.width}
                  height={pic.height}
                  quality={100}
                  layout="intrinsic"
                />
              </Wrapper>
            )
          })
        }
      </Blue>
      <BlueToBronze>
        <ColumnBreak>
          {
            BlueToBronze1To2.map(pic => {
              return (
                <Wrapper key={pic.id}>
                  <StyledImage
                    src={pic.image.url}
                    width={pic.width}
                    height={pic.height}
                    quality={100}
                    layout="intrinsic"
                  />
                </Wrapper>
              )
            })
          }
        </ColumnBreak>
        {
          BlueToBronze2ToEnd.map(pic => {
            return (
              <Wrapper key={pic.id}>
                <StyledImage
                  src={pic.image.url}
                  width={pic.width}
                  height={pic.height}
                  quality={100}
                  layout="intrinsic"
                />
              </Wrapper>
            )
          })
        }
      </BlueToBronze>
      <BronzeToGray>
        {
          props.BronzeToGray.pictures.map(pic => {
            return (
              <Wrapper key={pic.id}>
                <StyledImage
                  src={pic.image.url}
                  width={pic.width}
                  height={pic.height}
                  quality={100}
                  layout="intrinsic"
                />
              </Wrapper>
            )
          })
        }
      </BronzeToGray>
      <GrayToOrange>
        {
          GrayToOrange1To9.map(pic => {
            return (
              <Wrapper key={pic.id}>
                <StyledImage
                  src={pic.image.url}
                  width={pic.width}
                  height={pic.height}
                  quality={100}
                  layout="intrinsic"
                />
              </Wrapper>
            )
          })
        }
        <ColumnBreak>
          {
            GrayToOrangeEnd.map(pic => {
              return (
                <Wrapper key={pic.id}>
                  <StyledImage
                    src={pic.image.url}
                    width={pic.width}
                    height={pic.height}
                    quality={100}
                    layout="intrinsic"
                  />
                </Wrapper>
              )
            })
          }
        </ColumnBreak>

      </GrayToOrange>
    </Photos>
  );
};

export default index;

export async function getStaticProps(context) {

  let url = "https://api-ca-central-1.graphcms.com/v2/ckui3azur0w7s01xqhu545bmx/master"
  let token = process.env.GRAPH_CMS_TOKEN


  const graphQLCLient = new GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  const GreenSection = gql`
    query Green {
      pictures(where: {section: "green"}){
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
  const GreenToBlueSection = gql`
      query GreentoBlue {
        pictures(where: {section: "greentoblue"}) {
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
  const BlueSection = gql`
      query Blue {
        pictures(where: {section: "blue"}) {
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
  const BlueToBronzeSection = gql`
      query Blue {
        pictures(where: {section: "bluetobronze"}) {
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
  const BronzeToGraySection = gql`
      query Blue {
        pictures(where: {section: "bronzetogray"}) {
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
  const GrayToOrangeSection = gql`
      query Blue {
        pictures(where: {section: "graytoorange"}) {
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
  const Green = await graphQLCLient.request(GreenSection)
  const GreenToBlue = await graphQLCLient.request(GreenToBlueSection)
  const Blue = await graphQLCLient.request(BlueSection)
  const BlueToBronze = await graphQLCLient.request(BlueToBronzeSection)
  const BronzeToGray = await graphQLCLient.request(BronzeToGraySection)
  const GrayToOrange = await graphQLCLient.request(GrayToOrangeSection)

  return {
    props: {
      Green,
      GreenToBlue,
      Blue,
      BlueToBronze,
      BronzeToGray,
      GrayToOrange
    }, // will be passed to the page component as props
  }
}

