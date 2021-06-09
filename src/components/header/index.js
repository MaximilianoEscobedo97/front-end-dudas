import React, { Children } from "react";
import { Icon, Center, Flex, Spacer, Button } from "@chakra-ui/react";
import { Logo } from "../logo";
import { Link } from 'react-router-dom';
import { BiLogInCircle } from "react-icons/bi";
import './index.css'

export const Header = (props) => {
  return (
    <div>
      <Flex paddingY="4" bg="header.100" justify="space-around" className='body'>
        <Flex w="250px" justify="center" onClick={() => { console.log("halo"); }}>
          <Link to="/">
            <Logo />
          </Link>
        </Flex>
        <Flex w="200px" justify="space-around">
          <Center>
            <Button
              variant="solid"
              colorScheme="orange"
              size="sm"
              onClick={() => { console.log("halo"); }}
            >
              Iniciar Sesion
            <Icon as={BiLogInCircle} />

            </Button>
          </Center>
        </Flex>
      </Flex>
      {props.children}
    </div>

  );
};