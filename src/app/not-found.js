import Link from "next/link";

export default function nofound() {
  return (
    <div>
      <h2>{`this page isn't invalid`}</h2>
      <Link href={"/"}>Back To Home</Link>
    </div>
  );
}
