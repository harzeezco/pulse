import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';
import { Container } from '@/layout';

const QUESTIONS = [
  {
    title: 'Why Pulse?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title: 'Why Pulse?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title: 'Why Pulse?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title: 'Why Pulse?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title: 'Why Pulse?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
  {
    title: 'Why Pulse?',
    desc: 'Crafted for world-class performance and developed with unmatched expertise, Pulse will deliver outstanding results every time, without fail.',
  },
];

function Faq() {
  return (
    <Container as='section' className='mt-16'>
      <div className='mb-5 flex items-center justify-between max-lg:flex-col max-lg:items-start'>
        <h1 className='bg-gradient-to-t from-neutral-500 to-white bg-clip-text text-xl font-medium text-transparent md:text-3xl lg:max-w-xs lg:text-4xl'>
          Frequently Asked Questions
        </h1>

        <p className='max-w-lg font-medium md:text-lg'>
          Crafted for world-class performance and developed with
          unmatched expertise, Pulse will deliver outstanding results
          every time, without fail.
        </p>
      </div>

      <div className='mt-7 items-center'>
        <Accordion
          collapsible
          className='grid w-full grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2'
          type='multiple'
        >
          {QUESTIONS.map(({ desc, title }, idx) => (
            <div key={title}>
              <AccordionItem
                className='rounded-[22px] border border-solid border-[#292929] bg-[#1e1e1e] px-4 transition-all duration-300 hover:bg-blue-500/20 hover:text-white'
                value={`item-${idx}`}
              >
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>{desc}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

export default Faq;
