import {Grid,Text,} from "theme-ui";

// import Blog from "sections/blog";
import WorkWithUs from "sections/work-with-us";

const Aboutus = () => {
  return (
    <>
   

    <Grid sx={styles.grid}>
        <Text>About Us</Text>

        </Grid>
        <Text as="p" sx={styles.paragraph}>roduct Owners/Managers: Product owners or managers hold the responsibility of defining and prioritizing requirements, managing the product roadmap, and ensuring that the software aligns with the customers' needs. They play a vital role in quality by providing clear and comprehensive requirements, setting quality expectatio</Text>       
    
        <WorkWithUs/>


    </>
  ); 
};



export default Aboutus;

const styles = {

  grid: {
    textAlign: 'center',
    fontSize:[40, 40],
    paddingTop:[18],
    fontFamily: ['DM Sans', 'sans-serif'],
    position: ['Relative'],
  },
  paragraph: {
    textAlign: 'center',
    fontSize: [5, 8],
    marginTop: [4, 5],
    marginBottom: [4, 5],
    color: 'black',
    fontFamily: 'DM Sans, sans-serif',
   marginLeft:[300],
   marginRight:[300],
  },
};
