export default async function JoinClubsPage() {
  // TODO: get actual list of clubs from Notion
  const clubs = [
    {
      name: "Code4Community",
      email: "c4cneu@gmail.com",
      website: "https://www.c4cneu.com/",
      president: {
        name: "Somya Prabhakar",
        email: "prabhakar.so@northeastern.edu",
      },
      contact: {
        name: "Somya Prabhakar",
        email: "prabhakar.so@northeastern.edu",
      },
    },
    {
      name: "ColorStack",
      president: {
        name: "Levin Sanchez",
        email: "sanchez.le@northeastern.edu",
      },
    },
    {
      name: "NER",
      email: "northeasternelectricracing@gmail.com",
      website: "https://electricracing.northeastern.edu",
      president: {
        name: "Catherine Kennedy",
      },
      contact: {
        name: "Anthony Bernardi",
        email: "bernardi.an@northeastern.edu",
      },
    },
    {
      name: "Sandbox",
      email: "sandboxneu@gmail.com",
      website: "https://www.sandboxnu.com/",
      president: {
        name: "Ally Chao",
        email: "chao.al@northeastern.edu",
      },
      contact: {
        name: "Ally Chao",
        email: "chao.al@northeastern.edu",
      },
    },
  ];

  return (
    <div className="p-3 md:py-5 md:mx-auto md:max-w-[75ch]">
      <h1 className="font-black text-3xl">Khoury Clubs</h1>

      <div className="mt-5 space-y-3">
        {clubs.map(club => {
          return <section className="border rounded-md p-5">
            <div className="font-medium text-lg">{club.name}</div>
          </section>
        })}
      </div>
    </div>
  );
}
