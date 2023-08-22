import AccordionItem from './AccordionItem';

export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((item) => (
        <AccordionItem
          num={`0${faqs.indexOf(item) + 1}`}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}
