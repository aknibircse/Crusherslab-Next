/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Image } from 'theme-ui';
import { LearnMore } from 'components/link';

const SectionHeading = ({
  title,
  emoji,
  slogan,
  description,
  learnMore,
  moreLink,
  ...props
}) => {
  return (
    <Box sx={styles.heading} {...props}>
      {slogan && (
        <Text as="p" sx={styles.slogan}>
          {slogan}
        </Text>
      )}
      <Heading as="h3" sx={styles.title}>
        {emoji ? <span>{title}</span> : title}
        {emoji && <Image src={emoji} alt="emoji" />}
      </Heading>
      {description && (
        <Text as="p" sx={styles.description}>
          {description}
        </Text>
      )}
      {learnMore && (
        <LearnMore
          path={moreLink ?? '#'}
          sx={{ mt: [3, null, null, 4] }}
          label={learnMore ?? 'Learn More'}
        />
      )}
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    mx: 'auto',
    textAlign: 'center',
  },
  slogan: {
    color: 'primary',
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 2.25,
  },
  title: {
    color: 'heading',
    fontWeight: 700,
    fontSize: [4, null, 5, 6],
    lineHeight: [1.33, 1.33, 2.08],
    letterSpacing: [null, null, null, 'heading'],

    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
      maxWidth: [25, null, null, '100%'],
    },
  },
  description: {
    color: 'heading',
    fontSize: ['14px', null, '16px'],
    lineHeight: [1.86, null, 2.2],
    mt: [5],
    maxWidth: 610,
    m: ['10px auto 0'],
  },
};
