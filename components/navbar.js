import Link from "next/link";
import { useRouter } from "next/router";

function ActiveLink({ href, children }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={router.asPath === href ? "text-blue-600" : ""}>{children}</a>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
    </nav>
  );
}
