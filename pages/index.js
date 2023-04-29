import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Hello! I&apos;m, a full-stack developer based in Argentina
            </Box>
            <Box display={{md: "flex"}}/>
            <Box flexGrow={1}/>
            <Heading as="h2" variant="page-title">
                Julian Martinez
            </Heading>
         <p> Full-stack web developer/ Software engineer</p>
        </Container>
    )
}
export default Page