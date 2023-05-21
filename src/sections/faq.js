/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import FaqItem from 'components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'Which domain should I purchase?',
    ans: `We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result`,
  },
  {
    id: 2,
    ques: 'What are some tips when choosing a name?',
    ans: `Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.`,
  },
  {
    id: 3,
    ques: 'What if I need help choosing the right domain?',
    ans: `Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.`,
  },
  {
    id: 4,
    ques: 'Can I upgrade or downgrade my web hosting plan',
    ans: `The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.`,
  },
  {
    id: 5,
    ques: 'How do I upgrade the storage capacity of my hosting plan?',
    ans: `Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.`,
  },
  {
    id: 6,
    ques: 'What is in InMotion Hosting’s uptime rate?',
    ans: `Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install`,
  },
  {
    id: 7,
    ques: 'Learn from community on Brandwagon',
    ans: `Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: 15 }}
          slogan="Get yours question answer"
          title="Frequantly asked question"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [null, null, null, null, null, 10, 14],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
};
