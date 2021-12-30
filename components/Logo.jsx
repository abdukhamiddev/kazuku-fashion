import Link from 'next/link';
const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className="block relative w-[34px] h-[34px] bg-[url('/static/logo.jpg')] bg-cover bg-center outline-none" />
      </Link>
    
    </>
  );
};

export default Logo;