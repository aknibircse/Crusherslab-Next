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
    <>
        <Grid sx={styles.grid}>
          <Text>Contact Us</Text>
        </Grid>

    </>  
  ); 
};

export default Career;

const styles = {

  grid: {
    textAlign: 'center',
    fontSize:[40, 40],
    padding:[10],
    marginBottom:[10],
    fontFamily: ['DM Sans', 'sans-serif'],
    position: ['Relative'],
  },
};
