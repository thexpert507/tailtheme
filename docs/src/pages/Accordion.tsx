import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box,
  Title,
} from "tailtheme/components";

export default function AccordionPage() {
  return (
    <Box flat full items="start" justify="start" direction="column" gap="2xl">
      <Title size="2xl">Accordion</Title>

      <Box full>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
