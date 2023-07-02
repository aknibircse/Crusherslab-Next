import {
  jsx,
  Box,
  Flex,
  Grid,
  Container,
  Button,
  Heading,
  Text,
} from "theme-ui";
const Career = () => {
  return (
    <section id="career" sx={styles.section}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Text as="p">this is career Page</Text>
        </Grid>
      </Container>
    </section>
  );
};

export default Career;

const styles = {
  section: {
    background: `linear-gradient(180deg, rgba(255, 254, 252, 0.5) 0%, #FEFAF5 100%)`,
    pt: [8, null, null, null, 10, 0],
    pb: [8, null, null, null, 10, 0],
  },
  container: {
    px: [3, null, null, 6],
  },
  grid: {
    alignItems: ["center"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
    minHeight: [null, null, null, null, "45vh", "100vh"],
    pt: [15, null, null, 17, 12],
  },
};
