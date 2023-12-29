import { CheckCircleFilled } from '@ant-design/icons';
import { Box, Button, Flex, Icon, Link, Text } from '@chakra-ui/react';

export function PriceCard({
  title,
  desc,
  euro,
  dollar,
  options,
  percentage,
  yearly,
  stateChanger,
  link = 'https://buy.stripe.com/test_00g17J6C17Pk26kbIJ',
}) {
  return (
    <Box
      border="1px solid #dee2e6"
      p="8"
      borderRadius="xl"
      my={{ base: '5', md: '10' }}
      flex="0.5"
      maxW="350px"
    >
      <Flex direction="column" alignItems="center" gap="2">
        <Text fontSize="2xl" fontFamily={'Georgia'} fontWeight="bold" color="#4b0f70">
          {title}
        </Text>
        <Text color="#495057">{desc}</Text>
        <Flex align="baseline">
          <Text fontSize="6xl" fontWeight="extrabold" color="#e83e8c">
            €{euro}
          </Text>
          <Text fontSize="xl" fontWeight="extrabold" color="#e83e8c">
            EUR
          </Text>
        </Flex>
        <Text fontSize="sm" color="#495057">
          ${dollar} USD per month{yearly && ', paid annually'}{' '}
        </Text>
        {yearly && (
          <Flex color="#ea4c89" alignItems="center">
            <Text py="2" px="3" bg="#f8d7da" borderRadius="3xl" color="#721c24">
              {percentage}% Savings
            </Text>
          </Flex>
        )}
        <Link
          fontWeight="medium"
          onClick={() => stateChanger(!yearly)}
          color="#ea4c89"
          _hover={{ color: '#d9534f' }}
        >
          Switch to {yearly ? 'monthly' : 'yearly'} billing
        </Link>
        <Link
          isExternal
          href={link}
          color="white"
          _hover={{ textDecoration: 'none', color: 'white' }}
        >
          <Button bg="#8a3dba" color="white" borderRadius="5%" _hover={{background:"#51246e"}}>Get started</Button>
        </Link>
      </Flex>
      <Flex direction="column" gap="1.5" ml="4" mt="8">
        {options?.map((option) => (
          <Flex gap="2" key={option}>
            <Icon fontSize="2xl" color="#28a745" as={CheckCircleFilled} />
            <Text align="left">{option}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
