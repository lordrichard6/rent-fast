import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"
import {SCREENS} from "../../components/responsive"

import BrabusImg from "../../../assets/images/brabus.png"

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        py-4
        px-7
        md:px-0
        bg-white
    `}
`

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -50px;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height:28em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height:30em;
    }

    @media (min-width: ${SCREENS["2xl"]}) {
        height:35em;
        margin-left: 0;
    }
    
`

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`

const InfoText = styled.p`
    ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `}
`

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={BrabusImg} alt="brabus" />
            </CarContainer>
            <InfoContainer>
                <Title>Your trust is our business</Title>
                <InfoText>
                Benefit from FastRent great deals available all year round for a 
                seamless car hire experience in Zurich in Switzerland. 
                Travel your way by choosing from our collection of brand new cars, 
                from one of our 9 stations across Zurich. 
                Whether you are looking for car rental in Zurich as part of a vacation, 
                or renting a car for a special event, you will be sure to find a car 
                to suit your needs from our wide range of economy and luxury models. 
                As a global leader in car rental, we pride ourselves on providing 
                world class service, offering flexible short- and long-term rental, 
                all at great prices with no hidden charges. 
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}