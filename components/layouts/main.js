import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name ="viewport" content="width=devide-width, initial=scale=1"/>
                <title>JulianFmv - Home</title>

            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW={"container.md"} pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main