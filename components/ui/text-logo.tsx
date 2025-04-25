import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/text-logo.svg";

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Darkdome">
      <Image
        className="max-w-none"
        src={LogoImg}
        width={130}
        height={40}
        priority
        alt="Stellar"
      />
    </Link>
  );
}
