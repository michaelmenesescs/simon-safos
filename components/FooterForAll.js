import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const Contact = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: centers;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterForAll = () => {
  return (
    <footer>
      <Info>
        <Contact>
          contact: inquiries@studiosafos.com
        </Contact>
        <Links>
          <a href={"https://www.instagram.com/simonsafos/"} >
            <Image src={"/IG.png"} alt="Instagram" width="50px" height="50px" quality={100} />
          </a>
          <a href={"https://www.instagram.com/simonsafos/"} >
            <Image src={"/behance.png"} alt="Behance" width="50px" height="50px" quality={100} />
          </a>
        </Links>
      </Info>

    </footer>
  )
}

export default FooterForAll
