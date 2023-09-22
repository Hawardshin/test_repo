import Link from 'next/link';
import profilePic from '../public/vercel.svg';
import Image from 'next/image';
import {useRouter} from 'next/router';
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Image src={profilePic} alt='Picture of me' />
      <Link href='/'>
        <span className={router.pathname === '/' ? 'active ' : ''}>Home</span>
      </Link>
      <Link href='/about'>
        <span className={router.pathname === '/about' ? 'active' : ''}>
          About
        </span>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow:
            rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav span {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
