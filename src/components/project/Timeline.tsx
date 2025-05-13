import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HubIcon from '@mui/icons-material/Hub';
import Typography from '@mui/material/Typography';

const CustomizedTimeline: React.FC = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
          July 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Started BE in Computer Engineering</Typography>
          <Typography>Joined Pulchowk Campus to dive into tech and problem-solving.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Node.js & Express</Typography>
          <Typography>Completed a course on backend development with Express and MongoDB.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
          2023-2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <AppRegistrationIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Built Gantabya & Hamro Bus</Typography>
          <Typography>Built full-stack apps for travel and ticket booking using the MERN stack & Flutter.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <HubIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Cogni Care</Typography>
          <Typography>Developed a dementia care app with real-time tracking, chat, and caregiver tools.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Keep Building</Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomizedTimeline;
