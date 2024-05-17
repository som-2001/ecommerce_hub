import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div style={{padding:"3%"}}>
     <p className='mb-3 text-2xl text-center'>FAQ</p>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-purple-700'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='text-purple-700'>Is shipping Available or not?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! shipping is Available for 24/7
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-purple-700' />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className='text-purple-700'>Can i use Phonepay on this app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           yes! you can use phonepe as a prepaid mode of payment for orders on this app.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-purple-700' />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='text-purple-700'>Can i change the delivery address for my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The delivery address for your order can be changed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}