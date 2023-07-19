/** @jsxRuntime classic */
// /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import { Link } from 'components/link';
// import LogoSvg from 'components/icons/logo';
// export default function Logo({ isSticky, footer, ...props }) {
//   return (
//     <Link path="/" sx={styles.logo} {...props}>
//       <LogoSvg />
//     </Link>
//   );
// }
// const styles = {
//   logo: {
//     alignItems: 'center',
//     cursor: 'pointer',
//     display: 'inline-flex',
//     maxWidth: [null, null, null, 185, null, 'none'],
//     svg: {
//       height: 'auto',
//       width: [128, null, '100%'],
//     },
//   },
// };
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';


export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link href="/">
      <Image
      placeholder="blur"
      src="/logo.jpg"
      className='clabimg'
      width={150}
      height={75}
      alt="Picture of the author"
      blurDataURL="/blur.png"
    />
    </Link>
  );
}

