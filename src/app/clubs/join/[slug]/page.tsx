import { clubs } from "@/app/utils/clubs";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function ClubPage({ params }: Props) {
  const club = clubs.find((club) => club.slug === params.slug);
  if (!club) return notFound();

  return (
    <>
      <Link href="/clubs/join">{"<-"}</Link>
      <h1 className="mt-3 font-black text-3xl">{club.name}</h1>

      <div className="mt-5 border rounded-md p-5">
        <h2 className="font-medium text-lg mb-1">Contact information</h2>
        <div className="space-y-2">
          <div>
            {club.website && (
              <a href={club.website} className="underline">
                {club.website}
              </a>
            )}
          </div>
          <div>
            {club.president && <Contact title="President" name={club.president.name} email={club.president.email} />}
            {club.contact && <Contact title="Contact" name={club.contact.name} email={club.contact.email} />}
          </div>
        </div>
      </div>

      <article className="mt-5 space-y-3">
        <p>
          Some more information about the club can come here. This is just some placeholder text, but it should be
          replaced with some information on what the club does. The information can come from Notion.
        </p>

        <ul className="list-inside list-disc ml-4">
          <li>Here is a list</li>
          <li>Just for demonstration purposes</li>
        </ul>
      </article>
    </>
  );
}

function Contact({ title, name, email }: { title: string; name: string; email?: string }) {
  return (
    <div>
      <span className="text-gray-500">{title}:</span> {name}
      {email && (
        <span className="text-gray-500">
          {" "}
          (
          <a href={email} className="underline">
            email
          </a>
          )
        </span>
      )}
    </div>
  );
}
