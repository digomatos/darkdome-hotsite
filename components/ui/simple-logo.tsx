import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo-simple.svg";

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Darkdome">
      <Image
        className="max-w-none"
        src={LogoImg}
        width={60}
        height={60}
        priority
        alt="Stellar"
      />
    </Link>
  );
}
