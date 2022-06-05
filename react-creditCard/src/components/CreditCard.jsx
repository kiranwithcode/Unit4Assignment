import { Box, Flex, Heading, Icon,Text} from "@chakra-ui/react";
import React from "react";
import { FcSimCardChip } from "react-icons/fc";

const CreditCard = ({info}) => {
	return (
		<Box
			w="35%"
            h="300px"
			m="auto"
			my="5%"
			color="white"
			bgGradient="linear(to-r,#333333, #dd1818)"
			borderRadius="15px"

		>
            <Flex direction="column" gap="20px">
			<Heading textAlign="right" p="10px" mr="20px">VISA</Heading>
            <Icon as={FcSimCardChip} w={10} h={10} ml="10%" />
            <Text ml="10%" align="left" fontSize="lg">{info.cardNumber}</Text>

            <Flex direction="row" justifyContent="space-around" mt="3%">
                <Flex direction="column">
                    <Text fontSize="xs" textAlign="left">CARD HOLDER</Text>
                    <Text fontSize="xs">{info.cardHolder}</Text>
                </Flex>
                <Flex direction="column">
                    <Text fontSize="xs" textAlign="left">EXPIRY</Text>
                    <Text fontSize="xs">{`${info.expMonth}/${info.expYear}`}</Text>
                </Flex>
                <Flex direction="column">
                    <Text fontSize="xs" textAlign="left">CVC</Text>
                    <Text fontSize="xs">{info.cvc}</Text>
                </Flex>
            </Flex>

            </Flex>
		</Box>
	);
};

export default CreditCard;
