/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text } from 'theme-ui';
import { LearnMore } from 'components/link';
import Image from 'components/image';
import { rgba } from 'polished';

const Post = ({ post }) => {
  return (
    <article sx={styles.post}>
      <Flex as="figure">
        <Image src={post.image} alt={post.title} />
      </Flex>
      <Heading as="h4">{post.title}</Heading>
      {post.desc && <Text as="p">{post.desc}</Text>}
      {post.link && <LearnMore path={post.link} label="Learn More" />}
    </article>
  );
};

export default Post;

const styles = {
  post: {
    paddingLeft: 3,
    paddingRight: 3,
    marginBottom: 6,
    width: ['100%', null, null, '50%', '33.3333%'],
    figure: {
      margin: 0,
      img: {
        borderRadius: 5,
        width: '100%',
      },
    },
    h4: {
      color: 'white',
      fontWeight: 700,
      fontSize: [2, null, null, 4, '17px', 4],
      lineHeight: 1.5,
      mt: 3,
    },
    p: {
      color: rgba('white', 0.8),
      fontSize: [1, null, null, 2],
      marginTop: 3,
    },
    a: {
      color: rgba('white', 0.8),
      mt: [2, 3, null, 4],
    },
  },
};
