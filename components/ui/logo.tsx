import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Darkdome">
      <Image
        className="max-w-none"
        src={LogoImg}
        width={150}
        height={60}
        priority
        alt="Stellar"
      />
    </Link>
  );
}
