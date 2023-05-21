/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import clients from 'assets/images/clients.png';

const Clients = () => {
  return (
    <section id="our-clients" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Agencies who also worked us"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
          learnMore="Explore Details"
        />
        <Flex as="figure" sx={styles.illustration}>
          <Image src={clients} alt="clients" />
        </Flex>
      </Container>
    </section>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [3, null, null, 0],
  },
};
