/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui';
import { IoMdCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { rgba } from 'polished';

const FeatureIcon = ({ value }) => {
  return value ? (
    <IoMdCheckmarkCircle size="23px" color="#3CC68A" />
  ) : (
    <IoIosCloseCircle size="23px" color="#CED7E1" />
  );
};

const PriceTable = ({ data }) => {
  return (
    <div sx={styles.card} className={data.is_recommended ? 'recommended' : ''}>
      {data.is_recommended && <span sx={styles.recommended}>Recommended</span>}
      <div
        sx={styles.priceTable}
        className={data.is_recommended ? 'recommended' : ''}
      >
        <span sx={styles.title}>{data.title}</span>
        <span sx={styles.amount}>
          ${data.amount}/<small>per mo.</small>
        </span>
        <Box as="ul" variant="styles.unStyled" sx={styles.features}>
          <li>
            <span>Full Access Library</span>
            <FeatureIcon value={data.library_access} />
          </li>
          <li>
            <span>Multiple user</span>
            <FeatureIcon value={data.multiple_user} />
          </li>
          <li>
            <span>Refund Policy</span>
            <FeatureIcon value={data.refund_policy} />
          </li>
          <li>
            <span>Google Analytics</span>
            <FeatureIcon value={data.google_analytics} />
          </li>
          <li>
            <span>24/7 support</span>
            <FeatureIcon value={data.support} />
          </li>
        </Box>
        <Button
          sx={styles.button}
          variant="primaryOutline"
          className={data.is_recommended ? 'recommended' : ''}
        >
          Choose Plan
        </Button>
        <span sx={styles.trial}>{data.trial_period} days free trial</span>
      </div>
    </div>
  );
};

export default PriceTable;

const styles = {
  card: {
    position: 'relative',
    textAlign: 'center',
    '&.recommended': {
      borderColor: [null, null, null, null, 'white'],
      borderRadius: '0px 0px 10px 10px',
      boxShadow: [
        null,
        null,
        null,
        null,
        '0px 15px 50px rgba(91, 132, 193, 0.1)',
      ],
      priceTable: {
        borderRadius: '0 0 10px 10px',
      },
    },
    mx: [null, null, null, 3, 0],
  },
  priceTable: {
    border: (t) => `1px solid ${t.colors.borderColor}`,
    borderRadius: 10,
    paddingTop: [4, null, null, null, 6],
    paddingBottom: [4, null, null, null, 6, 14],
    '&.recommended': {
      borderColor: [null, null, null, null, 'white'],
      borderRadius: '0 0 10px 10px',
    },
  },
  recommended: {
    backgroundColor: '#52ACFF',
    borderRadius: '8px 8px 0px 0px',
    color: 'white',
    fontSize: 1,
    fontWeight: 700,
    lineHeight: 1.29,
    position: 'absolute',
    width: '100%',
    minHeight: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: ['-30px', null, null, null, '-31px'],
    textTransform: 'uppercase',
  },
  title: {
    color: rgba('#0F2137', 0.5),
    display: 'block',
    fontWeight: 500,
    fontSize: [1, null, null, 2],
    lineHeight: 1.31,
    mb: [3, null, null, 5, 2, 5],
  },
  amount: {
    color: 'heading',
    display: 'block',
    fontWeight: 'bold',
    fontSize: [4, null, null, 7, 4, 7],
    lineHeight: [1.3, null, null, 1.71],
    letterSpacing: 'heading',
    small: {
      fontSize: [2, null, null, 4, 2, 4],
      fontWeight: 400,
    },
  },
  features: {
    my: [4, null, null, 8, 2, 8],
    li: {
      alignItems: 'center',
      borderTop: (t) => `1px solid ${t.colors.borderColor}`,
      display: 'flex',
      color: ['heading', null, null, null, 'headingSecondary'],
      fontSize: [1, null, null, null, 2],
      fontWeight: [500, null, null, null, 400],
      justifyContent: ['space-between', null, null, null, 'center'],
      px: [6, null, null, null, 0],
      minHeight: [null, null, null, null, 50, 59],
      pt: [3, null, null, null, 0],
      pb: [3, null, null, null, 0],
      ':first-of-type': {
        borderTop: 0,
        pt: 0,
      },
      ':last-of-type': {
        pb: 0,
      },
      span: {
        display: [null, null, null, null, 'none'],
      },
      svg: {
        height: 20,
        width: 20,
      },
    },
  },
  button: {
    minHeight: [30, null, null, 45, 40, 50],
    padding: ['0 20px', null, null, '0 40px', '0 20px', '0 40px'],
    fontSize: [1, null, null, 2, 1, 2],
    '.recommended': {
      backgroundColor: 'secondary',
      color: 'white',
      ':hover': {
        backgroundColor: 'dark',
      },
    },
  },
  trial: {
    display: 'block',
    color: rgba('#0F2137', 0.5),
    fontSize: ['13px', null, null, '15px'],
    lineHeight: 1.33,
    mt: [3, null, null, 5],
  },
};
