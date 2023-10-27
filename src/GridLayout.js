// react imports
import React, { useState } from 'react'
import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, Icon, Image, Text } from '@chakra-ui/react'

// styles and media
import './GridLayout.css'
import { BsAlarm } from 'react-icons/bs'
import { BsPlusCircleFill } from 'react-icons/bs'

// misc
// import tiles from './dummyData.json'
import allData from './dummyDataNew.json'
import categoriesList from './dictArray.json'

function GridLayout() {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [categorySelected, setCategory] = useState("Leadership Coaching");

    const changeCategory = (e, index) => {
        setCategoryIndex(index);
        setCategory(e.currentTarget.id);
    }

    return (
        <section className='grid-page'>
            <Box className='categories-container'>
                {
                    categoriesList?.map((category, index) => {
                        return (
                            <button key={index} id={`${category}`}
                                onClick={(e) => changeCategory(e, index)}
                                className={`categories-container__member categories-container__member${index} ${category === categorySelected ? 'categories-container__member-active' : ''}`}
                            >
                                <p>
                                    {category}
                                </p>
                            </button>
                        )
                    })
                }
            </Box>
            <Grid className='grid-parent'>
                {
                    allData[categoryIndex][categorySelected].map((event, index) => {
                        return (
                            <GridItem key={index} id={``} className='grid-item'>
                                <Flex className='grid-title__providers'>
                                    <Heading as='h3' className='grid-item__title'>
                                        {event?.displayTileName}
                                    </Heading>

                                    <Box className='grid-item__providers-parent'>
                                        {
                                            event?.providerInfo?.slice(0, 4)?.map((provider, index) => {
                                                return (
                                                    <Box key={index} className='grid-item__provider-container' right={(event?.providerInfo?.length * 4) - ((index + 1) * 4)}>
                                                        <Avatar src={`${provider.profileImage}`} alt={`${provider.providerId}`}
                                                            className='grid-item__provider-picture' />
                                                    </Box>
                                                );
                                            })
                                        }
                                        {
                                            event?.providerInfo?.length > 4 &&
                                            <Icon as={BsPlusCircleFill} className='grid-item__plus-icon' right={0} />
                                        }
                                    </Box>
                                </Flex>

                                {
                                    event?.availability?.startTime && event?.availability?.endTime &&
                                    <Flex className='grid-item__time-container'>
                                        <Text className='grid-item__time-container__time'>
                                            {
                                                new Date() ===
                                                    new Date(event?.availability?.startTime) ?
                                                    'Now' :
                                                    new Date().getDate() + 1 ===
                                                        new Date(event?.availability?.startTime).getDate() ?
                                                        'Tomorrow' :
                                                        new Date(event?.availability?.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                            }
                                            -{new Date(event?.availability?.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                        </Text>
                                        <Icon as={BsAlarm} className='grid-item__time-container__icon' />
                                    </Flex>
                                }

                                <Box className='grid-item__availability' bg={`${event?.availability?.color}`}>
                                </Box>
                            </GridItem>
                        )
                    })
                }

                {/* {
                    tiles?.skills?.map((tileData, index) => {
                        return (
                            <GridItem key={index} id={`${index}-${tileData?.tileName}`} className='grid-item'>
                                <Flex className='grid-title__providers'>
                                    <Heading as='h3' className='grid-item__title'>
                                        {tileData?.displayTileName}
                                    </Heading>

                                    <Box className='grid-item__providers-parent'>
                                        {
                                            tileData?.providerInfo?.slice(0, 4)?.map((provider, index) => {
                                                return (
                                                    <Box key={index} className='grid-item__provider-container' right={(tileData?.providerInfo?.length * 4) - ((index + 1) * 4)}>
                                                        <Avatar src={`${provider.profileImage}`} alt={`${provider.providerId}`}
                                                            className='grid-item__provider-picture' />
                                                    </Box>
                                                );
                                            })
                                        }
                                        {
                                            tileData?.providerInfo?.length > 4 &&
                                            <Icon as={BsPlusCircleFill} className='grid-item__plus-icon' right={0} />
                                        }
                                    </Box>
                                </Flex>

                                {
                                    tileData?.availability?.startTime && tileData?.availability?.endTime &&
                                    <Flex className='grid-item__time-container'>
                                        <Text className='grid-item__time-container__time'>
                                            {
                                                new Date() ===
                                                    new Date(tileData?.availability?.startTime) ?
                                                    'Now' :
                                                    new Date().getDate() + 1 ===
                                                        new Date(tileData?.availability?.startTime).getDate() ?
                                                        'Tomorrow' :
                                                        new Date(tileData?.availability?.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                            }
                                            -{new Date(tileData?.availability?.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                        </Text>
                                        <Icon as={BsAlarm} className='grid-item__time-container__icon' />
                                    </Flex>
                                }

                                <Box className='grid-item__availability' bg={`${tileData?.availability?.color}`}>
                                </Box>
                            </GridItem>
                        )
                    })
                } */}
            </Grid>
        </section>
    )
}

export default GridLayout;