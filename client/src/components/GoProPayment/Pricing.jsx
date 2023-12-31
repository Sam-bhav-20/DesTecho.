import { useState } from 'react';

import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
} from '@chakra-ui/react';

import { PriceCard } from './PriceCard';

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  const handleChange = () => {
    setYearly(!yearly);
  };

  return (
    <Container maxW="3xl" textAlign="center">
      {/* <Text fontWeight="bold" fontSize={{ base: 'xl', lg: '3xl' }} mb="4" color="#343a40">
        Level up your design career with Dribbble Pro
      </Text> */}
      {/* <Text fontWeight="medium" fontSize={{ base: 'md', lg: 'lg' }} color="#495057">
        Whether you&apos;re looking to build your portfolio, find your next
        freelance client or showcase your team's work -- we have a plan for you.
      </Text> */}

      <FormControl
        my={{ base: '10', md: '20' }}
        display="flex"
        justifyContent="center"
        gap="3"
        alignItems="center"
      >
        <FormLabel htmlFor="toggle-pricing" m="0" color="#495057">
          Monthly
        </FormLabel>
        <Switch
          id="toggle-pricing"
          colorScheme="pink"
          isChecked={yearly}
          onChange={handleChange}
        />
        <FormLabel htmlFor="toggle-pricing" m="0" color="#495057">
          Yearly
        </FormLabel>
      </FormControl>

      <Flex
        gap="4"
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <PriceCard
          link="https://buy.stripe.com/test_9AQ03F6C17Pk7qE000"
          stateChanger={setYearly}
          yearly={yearly}
          title="DesTecho Pro"
          desc="Upgrade your social portfolio with a stunning profile & enhanced shots."
          euro={yearly ? '5' : '11'}
          dollar={yearly ? '5' : '12'}
          percentage="58"
          options={[
            'Upgraded profile',
            'Multi-shot & video',
            'Instant creative portfolio',
            'Sell goods',
          ]}
        />
        <PriceCard
          link="https://buy.stripe.com/test_00g17J6C17Pk26kbIJ"
          stateChanger={setYearly}
          yearly={yearly}
          title="Pro Business"
          desc="Perfect for freelancers, agencies, and design teams."
          euro={yearly ? '14' : '18'}
          dollar={yearly ? '15' : '20'}
          percentage="25"
          options={[
            'Pro benefits plus',
            "'Hire me/us' button on shots",
            'Freelance job board exclusive',
            'Daily freelance projects email',
            'Team profile and members',
            'Hiring search listing priority placement',
            'Introduce yourself with Pitch video',
          ]}
        />
      </Flex>
    </Container>
  );
}
