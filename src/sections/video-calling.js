/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import videoCalling from 'assets/images/video-calling.png';

const VideoCalling = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <SectionHeading
          title="Introducing video calling support"
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

export default VideoCalling;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 15],
    pb: [6, null, null, null, 10, 12],
  },
  illustration: {},
};
