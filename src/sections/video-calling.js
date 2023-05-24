/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import videoCalling from 'assets/images/video-calling.gif';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
const VideoCalling = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <SectionHeading
          title="Introducing Our Subscription Based Software QA Services"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          learnMore="Explore Details"
          sx={{ mb: [6] }}
        />
        <Box as="figure" sx={styles.illustration}>
          <Image src={videoCalling} alt="Video Calling" />
          {/* <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(252, 224, 162)', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(252, 224, 162)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(252, 224, 162)', color: '#FCE0A2' }}
    icon={mobileicon}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(252, 224, 162)', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(252, 224, 162)' }}
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(252, 224, 162)', color: '#FCE0A2' }}
    icon={<mobileicon/>}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(252, 224, 162)', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(252, 224, 162)' }}
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(252, 224, 162)', color: '#FCE0A2' }}
    icon={<mobileicon/>}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline> */}
        </Box>
      </Container>
    </section>
  );
};

export default VideoCalling;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 15],
    pb: [6, null, null, null, 10, 12],
  },
  illustration: {},
};
