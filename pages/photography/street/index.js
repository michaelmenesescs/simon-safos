import React from "react";
import PhotoNavbar from "../../../components/PhotoNavbar";
import Image from "next/image";
import Link from "next/link"
import styled from "styled-components";
import {Navbar, Nav} from "react-bootstrap/Navbar";
import {gql, GraphQLCLient} from 'graphql-request'

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
const NavWrapper = styled.div`
    background-color: ${colors.green};
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
  background: linear-gradient(#393326);
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

const photoPath = `/image/photography/streetphotography/`;

const index = () => {
  return (
    <Photos>
      {/*

      
      <PhotoNavbar color={colors.green} />
    
      <Green>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green1.jpg`}
            width="317px"
            height="446px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green2.jpg`}
            width="665px"
            height="446px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green3.jpg`}
            width="317px"
            height="446px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green4.jpg`}
            width="317px"
            height="446px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green5.jpg`}
            width="317px"
            height="446px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green6.jpg`}
            width="665px"
            height="446px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green7.jpg`}
            width="437px"
            height="612px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green8.jpg`}
            width="437px"
            height="612px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}green9.jpg`}
            width="437px"
            height="612px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
      </Green>
      <GreenToBlue>
        <Wrapper>
          <StyledImage
            src={`${photoPath}greentoblue1.jpg`}
            width="898px"
            height="1239px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <ColumnBreak>
          <Wrapper>
            <StyledImage
              src={`${photoPath}greentoblue2.jpg`}
              width="426px"
              height="589px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
          <Wrapper>
            <StyledImage
              src={`${photoPath}greentoblue3.jpg`}
              width="426px"
              height="625px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
        </ColumnBreak>
        <Wrapper>
          <StyledImage
            src={`${photoPath}greentoblue4.jpg`}
            width="319px"
            height="496px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}greentoblue5.jpg`}
            width="319px"
            height="496px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}greentoblue6.jpg`}
            width="319px"
            height="496px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}greentoblue7.jpg`}
            width="319px"
            height="496px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <ColumnBreak>
          <Wrapper>
            <StyledImage
              src={`${photoPath}greentoblue8.jpg`}
              width="437px"
              height="622px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
          <Wrapper>
            <StyledImage
              src={`${photoPath}greentoblue9.jpg`}
              width="437px"
              height="609px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
        </ColumnBreak>
        <Wrapper>
          <StyledImage
            src={`${photoPath}greentoblue10.jpg`}
            width="887px"
            height="1257px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
      </GreenToBlue>
      <Blue>
        <Wrapper>
          <StyledImage
            src={`${photoPath}blue1.jpg`}
            width="437px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}blue2.jpg`}
            width="437px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}blue3.jpg`}
            width="437px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}blue4.jpg`}
            width="886px"
            height="1249px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <ColumnBreak>
          <Wrapper>
            <StyledImage
              src={`${photoPath}blue5.jpg`}
              width="437px"
              height="600px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
          <Wrapper>
            <StyledImage
              src={`${photoPath}blue6.jpg`}
              width="437px"
              height="600px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
        </ColumnBreak>
        <Wrapper>
          <StyledImage
            src={`${photoPath}blue7.jpg`}
            width="311px"
            height="450px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}blue8.jpg`}
            width="308px"
            height="450px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}blue9.jpg`}
            width="680px"
            height="450px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
      </Blue>
      <BlueToBronze>
        <ColumnBreak>
          <Wrapper>
            <StyledImage
              src={`${photoPath}bluetobronze1.jpg`}
              width="418px"
              height="620px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
          <Wrapper>
            <StyledImage
              src={`${photoPath}bluetobronze2.jpg`}
              width="418px"
              height="633px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
        </ColumnBreak>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bluetobronze3.jpg`}
            width="905px"
            height="1278px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bluetobronze4.jpg`}
            width="319px"
            height="419px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bluetobronze5.jpg`}
            width="319px"
            height="419px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bluetobronze6.jpg`}
            width="319px"
            height="419px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bluetobronze7.jpg`}
            width="319px"
            height="419px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
      </BlueToBronze>
      <BronzeToGray>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray1.jpg`}
            width="318px"
            height="447px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray2.jpg`}
            width="662px"
            height="447px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray3.jpg`}
            width="436px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray4.jpg`}
            width="436px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray5.jpg`}
            width="436px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray6.jpg`}
            width="687px"
            height="447px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray7.jpg`}
            width="313px"
            height="447px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}bronzetogray8.jpg`}
            width="313px"
            height="447px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
      </BronzeToGray>
      <GrayToOrange>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange1.jpg`}
            width="446px"
            height="687px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange2.jpg`}
            width="446px"
            height="687px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange3.jpg`}
            width="964px"
            height="1349px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange4.jpg`}
            width="436px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange5.jpg`}
            width="436px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange6.jpg`}
            width="436px"
            height="598px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange7.jpg`}
            width="597px"
            height="888px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange8.jpg`}
            width="436px"
            height="597px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <Wrapper>
          <StyledImage
            src={`${photoPath}graytoorange9.jpg`}
            width="888px"
            height="1269px"
            quality={100}
            layout="intrinsic"
          />
        </Wrapper>
        <ColumnBreak>
          <Wrapper>
            <StyledImage
              src={`${photoPath}graytoorange10.jpg`}
              width="436px"
              height="621px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
          <Wrapper>
            <StyledImage
              src={`${photoPath}graytoorange11.jpg`}
              width="436px"
              height="621px"
              quality={100}
              layout="intrinsic"
            />
          </Wrapper>
        </ColumnBreak>
      </GrayToOrange>
      */}
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

    const query = gql`
        query MyQuery {
            paintings(where: {page: "process"}, orderBy: id_ASC) {
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
            asset(where: {id: "ckun50ymg6ngw0c33oao7u32t"}) {
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
            //paintings,
            //backgroundURL

        }, // will be passed to the page component as props
    }
}

