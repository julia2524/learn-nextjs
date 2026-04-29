import Link from "next/link";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <h1>Oops! Movie not found.</h1>
      <Link href="/">Go back to Homepage</Link>
    </div>
  );
}
