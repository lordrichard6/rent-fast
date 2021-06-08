import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'

import { faCalendarAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../button'
import { Marginer } from '../marginer'

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        py-1
        px-2
        md:py-2
        md:px-6
    `}
`

const ItemContainer = styled.div`
    ${tw`
        flex
        relative
    `}
`

const Icon = styled.span`
    ${tw`
        text-blue-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`

const SmallIcon = styled.span`
    ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mx-2
        md:mx-5
    `}
`

const DateCalendar = styled.div``

export function BookCard() {
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Pick up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={faCaretDown} />
                </SmallIcon>
            </ItemContainer>
            <LineSeparator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={faCaretDown} />
                </SmallIcon>
            </ItemContainer>
            <Marginer direction='horizontal' margin='2em' />
            <Button text='Book your Car' />
        </CardContainer>
    )
}