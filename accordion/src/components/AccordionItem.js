import { useState } from 'react';

export default function AccordionItem({ num, title, text }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className={`item ${open ? 'open' : ''}`}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={handleOpen}>
        {open ? '-' : '+'}
      </p>
      {open ? <div className="content-box">{text}</div> : ''}
    </div>
  );
}
