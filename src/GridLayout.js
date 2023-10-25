// react imports
import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Icon, Image, Text } from '@chakra-ui/react'

// styles and media
import { BsAlarm } from 'react-icons/bs'
import { BsPlusCircleFill } from 'react-icons/bs'

// misc
import tiles from './dummyData.json'

function GridLayout() {
    const timestamp = 1698090600000;
    const date = new Date(timestamp);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return (
        <section>
            <Grid bg={'gray.200'}
                templateColumns={{ sm: 'repeat(1,fr)', sm: 'repeat(4, 1fr)' , md: 'repeat(6, 1fr)' }} gap={4} padding={2}>
                {
                    tiles.skills.map((tileData, index) => {
                        return (
                            <GridItem key={index} id={`${index}-${tileData.tileName}`} /* w='100%' */ minHeight='120px'
                                display={'flex'} flexDirection={'column'} alignItems="flex-start" justifyContent="space-between"
                                boxShadow={'md'} bg='white' colSpan={2} p={2} borderRadius='lg' position='relative'>

                                <Flex width={'100%'} alignItems={'flex-start'} justifyContent={'space-between'}>
                                    <Heading as='h3' size='md' maxWidth={'60%'}>
                                        {tileData.displayTileName}
                                    </Heading>

                                    <Box /* width={'fit-content'} */ flex={1} bg={'blue.500'} position={'relative'}/*  alignItems="center" justifyContent="flex-start" wrap='wrap' rowGap={0} columnGap={0} */>
                                        {
                                            tileData.providerInfo.map((provider, index) => {
                                                return (
                                                    <Box key={index} position={'absolute'} right={(tileData.providerInfo.length * 4) - (index * 4)} top={0}>
                                                        {/* {index} */}
                                                        <Image src={`${provider.profileImage}`} alt={`${provider.providerId}`}
                                                            height={'30px'} width={'30px'} borderRadius={'full'} border='2px' borderColor='white' />
                                                    </Box>
                                                );
                                            })
                                        }
                                        <Icon as={BsPlusCircleFill} color={'gray.500'} width={'30px'} height={'30px'} position={'absolute'} right={0} />
                                    </Box>
                                </Flex>

                                {tileData.moreProvidersAvailable ? 'true' : ''}

                                {
                                    tileData.availability.startTime && tileData.availability.endTime &&
                                    <Flex width={'100%'} alignItems={'center'} justifyContent={'flex-end'} columnGap={1}>
                                        <Text fontSize={'xs'} fontWeight={'bold'} align={'right'} color={'green.600'}>
                                            {
                                                new Date() ===
                                                    new Date(tileData.availability.startTime) ?
                                                    'Now' :
                                                    new Date().getDate() + 1 ===
                                                        new Date(tileData.availability.startTime).getDate() ?
                                                        'Tomorrow' :
                                                        new Date(tileData.availability?.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                            }
                                            -{new Date(tileData.availability?.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                        </Text>
                                        <Icon as={BsAlarm} color={'green.600'} />
                                    </Flex>
                                }

                                <Box position='absolute' left={'-0.1rem'} top={'-0.1rem'}
                                    bg={`${tileData.availability.color}`} padding={0} margin={0}
                                    borderRadius={'full'} height={'10px'} width={'10px'}>
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