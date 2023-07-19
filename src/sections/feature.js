/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import videoCalling from 'assets/images/video-calling.gif';

const feature = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <SectionHeading
          title="Introducing Our Subscription Based Software QA Services"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          learnMore="Explore Details"
          sx={{ mb: [6] }}
        />
        <Box as="figure" sx={styles.illustration}>
          <Image src={videoCalling} alt="Video Calling" />
        </Box>
      </Container>
    </section>
  );
};

export default feature;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 15],
    pb: [6, null, null, null, 10, 12],
  },
  illustration: {},
};
