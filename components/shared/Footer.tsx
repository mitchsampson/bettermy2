import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
        </Link>

        <p>2024 BetterMy. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;