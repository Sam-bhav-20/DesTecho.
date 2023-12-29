import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';

const faqsData = [
    {
      "id": 1,
      "title": "What are DesTecho Workshops",
      "description": "DesTecho Workshops are live, limited-seat virtual sessions that let you learn valuable lessons directly from leading designers within the creative community. With a range of sessions spanning a diverse range of design disciplines—from logo design to lettering to systems design—DesTecho Workshops offer up opportunities for nearly every creative to build up important skills from the best in the biz. Class sizes for DesTecho Workshops are kept small so you have the chance to engage, ask questions, and participate in these hands-on sessions. Since our workshop sessions are virtual, and concentrated into just a few hours, you can walk away with a laundry-list of new design insights and inspiration—all without needing to take extra time off of work or be away from the office."
    },
    {
      "id": 2,
      "title": "How do DesTecho Workshops work?",
      "description": "Attending a DesTecho Workshop is easy—once you reserve your ticket through DesTecho, we’ll be in touch with a confirmation receipt and unique attendance URL that will allow you to access the event at its advertised date and time. DesTecho Workshops take place over Zoom, one of the leading video conferencing platforms available. This means we can reliably connect you with your workshop host and fellow attendees—no matter where they are located across the globe. For instructions on how to use Zoom on your preferred device, be sure to check out their online setup guide."
    },
    {
      "id": 3,
      "title": "How long are workshop tickets on sale?'",
      "description": "Tickets for this workshop are on sale until at least 2 days before the workshop, but you’ll want to act fast, since seats are limited. Don’t miss out, designers!"
    },
    {
      "id": 4,
      "title": "Do I need a DesTecho account to attend?",
      "description": "Nope, you don’t need a DesTecho account to attend a workshop, but we still encourage you to join our creative community. We’d love to have you join our platform—it’s free!"
    },
    {
      "id": 5,
      "title": "Is this workshop pre-recorded or live?",
      "description": "DesTecho Workshops are live and in living color. You’ll be sitting in the same virtual room as your instructor—meaning you’ll have the opportunity to ask questions and network with fellow creative attendees."
    },
    {
      "id": 6,
      "title": "Can I get a bulk discount if I am attending with my colleagues or classmates?'",
      "description": "Yes! We offer group discounts if 5 or more colleagues or classmates want to attend a DesTecho Workshop. Get in touch to find out more!"
    },
    {
      "id": 7,
      "title": "I can no longer attend the event—can I get a ticket refund?'",
      "description": "Sorry, all workshop ticket sales are final. But if you’d like to transfer your ticket to another person, just drop us a line at info@pau.be at least 2 days before the workshop."
    }
  ]

  const Faqs = () => {
    return (
      <Container maxW="container.lg">
        <Heading as="h1" size="xl" lineHeight="56px" mb="1rem" textAlign="center" color="#4b0f70" fontFamily="Georgia">
          FAQ'S
        </Heading>
        <Box bgColor="bgFAQ" py="4rem">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              
              <Accordion allowMultiple>
                {faqsData.map((faqs) => (
                  <AccordionItem key={faqs.id}>
                    <h2>
                      <AccordionButton p="2rem" border="none" borderTop="2px solid #f2f2f2">
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="550"
                          fontSize="1rem"
                          
                        //   color="black"
                          // marginLeft="2rem"
                        >
                          {faqs.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel px="1.5rem" my="0.5rem" pb={4} color="#575251">
                      {faqs.description}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Box>
      </Container>
    );
  };
  
  export default Faqs;
