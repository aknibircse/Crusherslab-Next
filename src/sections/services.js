/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import mobiletesting from 'assets/images/icons/services/mobiletesting.png';
import webtesting from 'assets/images/icons/services/webtesting.png';
import automationtesting from 'assets/images/icons/services/automationtesting.png';
import performancetesting from 'assets/images/icons/services/performancetesting.png';
import apitesting from 'assets/images/icons/services/apitesting.png';
import cybertesting from 'assets/images/icons/services/cybertesting.png';
import gametesting from 'assets/images/icons/services/gametesting.png';
import blockchaintesting from 'assets/images/icons/services/blockchaintesting.png';
import desktopapptesting from 'assets/images/icons/services/desktopapptesting.png';
const data = [
  {
    id: 1,
    icon: mobiletesting,
    title: 'Mobile App Testing',
    description: `Efficient mobile app testing solutions to ensure flawless performance across various devices and operating systems.`,
  },
  {
    id: 2,
    icon: webtesting,
    title: 'Web App Testing',
    description: `Comprehensive web app testing services ensuring optimal functionality and seamless user experience across all browsers.`,
  },
  {
    id: 3,
    icon: automationtesting,
    title: 'Automation Testing',
    description: `Accelerate testing processes with powerful automation tools, enhancing efficiency and ensuring robust software quality.`,
  },
  {
    id: 1,
    icon: performancetesting,
    title: 'Performance Testing',
    description: `Unleash the full potential of your software with cutting-edge performance testing, delivering lightning-fast, high-performing applications.`,
  },
  {
    id: 2,
    icon: apitesting,
    title: 'API Testing',
    description: `Streamline your API testing with advanced solutions, ensuring seamless integration and optimal functionality across systems.`,
  },
  {
    id: 3,
    icon: cybertesting,
    title: 'Security Testing',
    description: `Fortify your digital infrastructure with state-of-the-art cybersecurity measures, safeguarding your valuable data and ensuring uninterrupted operations.`,
  },
  {
    id: 1,
    icon: gametesting,
    title: 'Game Testing',
    description: `Elevate your gaming experience with meticulous game testing, ensuring immersive gameplay, flawless mechanics, and captivating visuals.`,
  },
  {
    id: 2,
    icon: blockchaintesting,
    title: 'Blockchain Testing',
    description: `Ensure the reliability and security of your blockchain solutions through rigorous testing, empowering trust and scalability.`,
  },
  {
    id: 3,
    icon: desktopapptesting,
    title: 'Desktop App Testing',
    description: `Seamless desktop app testing for impeccable performance, ensuring client satisfaction and impressive user experiences.`,
  }
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        // fade: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Services = () => {
  return (
    <section id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Ideal solutions for you"
          title="Go beyond ultimate Services"
        />
        <Slider sx={styles.features} {...settings}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Services;

const styles = {
  section: {
    pt: [12],
    pb: [6, null, null, 12, 15],
  },
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
  },
  features: {
    gap: [6, null, null, 8],
    display: [null, null, null, null, 'grid'],
    maxWidth: 1175,
    mx: 'auto',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(3, 1fr)'],
    '.slick-list': {
      paddingTop: ['31px', null, null, null, 0],
    },
    '.slick-dots': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      li: {
        display: 'flex',
      },
      button: {
        backgroundColor: '#CED7E1',
        border: 0,
        outline: 0,
        padding: 0,
        margin: '0 3.5px',
        width: 10,
        height: 10,
        borderRadius: '50%',
        overflow: 'hidden',
        textIndent: '-9999rem',
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: 'heading',
        width: 13,
        height: 13,
      },
    },
  },
};
