// react imports
import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Icon, Image, Text } from '@chakra-ui/react'

// styles and media
import './GridLayout.css'
import { BsAlarm } from 'react-icons/bs'
import { BsPlusCircleFill } from 'react-icons/bs'

// misc
import tiles from './dummyData.json'

function GridLayout() {
    return (
        <section>
            <Grid className='grid-parent'>
                {
                    tiles?.skills?.map((tileData, index) => {
                        return (
                            <GridItem key={index} id={`${index}-${tileData?.tileName}`} className='grid-item'>
                                <Flex className='grid-title__providers' /* width={'100%'} alignItems={'flex-start'} justifyContent={'space-between'} */>
                                    <Heading as='h3' className='grid-item__title'>
                                        {tileData?.displayTileName}
                                    </Heading>

                                    <Box className='grid-item__providers-parent' /*  alignItems="center" justifyContent="flex-start" wrap='wrap' rowGap={0} columnGap={0} */>
                                        {
                                            tileData?.providerInfo?.slice(0,4)?.map((provider, index) =>{
                                                return (
                                                    <Box key={index} className='grid-item__provider-container' right={(tileData?.providerInfo?.length * 4) - ((index + 1) * 4)}>
                                                        <Image src={`${provider.profileImage}`} alt={`${provider.providerId}`}
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
                }
            </Grid>
        </section>
    )
}

export default GridLayout;