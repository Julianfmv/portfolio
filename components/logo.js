import Link from "next/link";
import Image from 'next/image';
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from '@emotion/styled'
import * as imageLogo from '../public/footprint.png'



const LogoBox = styled.span `
font-weight: bold;
font-size: 19px;
display: inline-flex;
align-items:center;
height: 35px;
line-height: 20px;
padding: 10px;
&hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
   
   
   
    return(
        <Link href ='/' legacyBehavior>
            <a>
                <LogoBox>
                    <Image src={imageLogo} width={20} height={20} alt="logo" />
                    <Text 
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='sans-serif'
                    fontWeight="bold"
                    ml={3}>
                        Julian Martinez
                    </Text>

                </LogoBox>
                </a>
            

        </Link>
    )
}

export default Logo