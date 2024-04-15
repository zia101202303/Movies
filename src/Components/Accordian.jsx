import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // Import ExpandLessIcon
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <AddIcon /> : <RemoveIcon />} // Change icon based on expanded state
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: '20px' }} 
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails  sx={{ fontSize: '20px' }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <AddIcon /> : <RemoveIcon />} // Change icon based on expanded state
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ fontSize: '20px' }} 
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails  sx={{ fontSize: '20px' }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} defaultExpanded>
        <AccordionSummary
          expandIcon={expanded === 'panel3' ? <AddIcon /> : <RemoveIcon />} // Change icon based on expanded state
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ fontSize: '20px' }} 
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails  sx={{ fontSize: '20px' }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
