import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[30vh] content-center bg-green-500 w-full">
      <div className="mx-auto flex justify-center gap-5 text-white max-w-screen-xl">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </div>
  );
}
