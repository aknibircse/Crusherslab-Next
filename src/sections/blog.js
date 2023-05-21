/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news1 from 'assets/images/blog/1.png';
import news2 from 'assets/images/blog/2.png';
import news3 from 'assets/images/blog/3.png';
import news4 from 'assets/images/blog/4.png';

const data = [
  {
    id: 1,
    image: news1,
    title: 'Introducing our newest team with great experience',
    desc:
      'Brian Halligan knows that you need more than a great product to have a great brand.',
    link: '#',
  },
  {
    id: 2,
    image: news2,
    title:
      'New banking application has  developed and we expecting good feedback',
    desc: '',
    link: '#',
  },
  {
    id: 3,
    image: news3,
    title: 'Ui/UX industry are doing great job in previous year history',
    desc: '',
    link: '',
  },
  {
    id: 4,
    image: news4,
    title: 'Develop you design experience with figma features.',
    desc: '',
    link: '',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Latest newsfeed"
          title="Our recent blog post that updated"
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
  },
  heading: {
    mb: [6, null, null, 14],
    h3: {
      color: 'white',
    },
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
