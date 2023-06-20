import { clubs } from "@/app/utils/clubs";
import Link from "next/link";

export default async function JoinClubsPage() {
  // TODO: get actual list of clubs from Notion

  return (
    <>
      <h1 className="font-black text-3xl">Khoury Clubs</h1>

      <div className="mt-5 space-y-3">
        {clubs.map((club) => {
          return (
            <Link
              key={club.slug}
              href={`/clubs/join/${club.slug}`}
              className="border rounded-md p-5 flex items-center justify-between"
            >
              <div className="font-medium text-lg">{club.name}</div>
              <div>{"->"}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
