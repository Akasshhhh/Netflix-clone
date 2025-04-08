import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.movie.createMany({
      data: [
        {
          id: 0,
          title: "Gran Turismo",
          age: 12,
          duration: 2.15,
          overview:
            "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
          videoSource:
            "https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4",
          imageString:
            "https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
          release: 2023,
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/GVPzGBvPrzw",
        },
        {
          imageString:
            "https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg",
          title: "A Haunting in Venice",
          age: 12,
          duration: 1.44,
          id: 1,
          overview:
            "Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/yEddsSwweyE",
        },
        {
          id: 2,
          title: "Five Nights at Freddy's",
          age: 16,
          duration: 1.5,
          overview:
            "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
          release: 2023,
          videoSource: "",
          imageString:
            "https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/0VH9WCFV6XQ",
        },
        {
          id: 3,
          title: "The Blacklist",
          age: 16,
          duration: 2.45,
          imageString:
            "https://image.tmdb.org/t/p/original/dDPwCyZG8arYwMDoQl0sm4xccCE.jpg",
          overview: `Raymond "Red" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this "The Blacklist". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler`,
          release: 2013,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/-WYdUaK54fU",
        },
        {
          id: 4,
          title: "Suits",
          age: 12,
          duration: 107,
          imageString:
            "https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
          overview:
            "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
          release: 2011,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/85z53bAebsI",
        },
        {
          id: 5,
          title: "Chernobyl",
          age: 16,
          duration: 5,
          imageString:
            "https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
          overview:
            "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
          release: 2019,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/s9APLXM9Ei8",
        },
        {
          id: 6,
          title: "Retribution",
          age: 12,
          duration: 1.31,
          imageString:
            "https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
          overview:
            "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/jzQn0-WH4WM",
        },
        {
          id: 7,
          title: "Spider-Man: Across the Spider-Verse",
          age: 12,
          duration: 2.2,
          imageString:
            "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
          overview:
            "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse's very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
          release: 2023,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/shW9i6k8cB0",
        },
        {
          id: 8,
          title: "Coco",
          release: 2017,
          age: 12,
          duration: 1.45,
          imageString:
            "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
          overview:
            "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/xlnPHQ3TLX8",
        },
        {
          id: 9,
          title: "Monk",
          release: 2002,
          age: 12,
          duration: 2.55,
          imageString:
            "https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg",
          overview:
            "Adrian Monk was once a rising star with the San Francisco Police Department, legendary for using unconventional means to solve the department's most baffling cases. But after the tragic (and still unsolved) murder of his wife Trudy, he developed an extreme case of obsessive-compulsive disorder. Now working as a private consultant, Monk continues to investigate cases in the most unconventional ways.",
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/mftbaaU82Uc",
        },
        {
          id: 10,
          title: "Family Guy",
          age: 16,
          duration: 200,
          imageString:
            "https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg",
          overview:
            "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
          release: 1999,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/7hRxWGo49oc",
        },
        {
          id: 11,
          title: "Oppenheimer",
          age: 15,
          duration: 3.0,
          imageString:
            "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          overview:
            "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. Exploring the moral complexities and consequences of one of history's most transformative scientific breakthroughs.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/uYPbbksJxIg",
        },
        {
          id: 12,
          title: "Barbie",
          age: 12,
          duration: 1.54,
          imageString:
            "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
          overview:
            "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
          release: 2023,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/pBk4NYhWNMM",
        },
        {
          id: 13,
          title: "Breaking Bad",
          age: 18,
          duration: 98,
          imageString:
            "https://image.tmdb.org/t/p/original/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
          overview:
            "When mild-mannered high school chemistry teacher Walter White is diagnosed with terminal cancer, he turns to a life of crime, producing and selling methamphetamine with a former student to secure his family's financial future.",
          release: 2008,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/HhesaQXLuRY",
        },
        {
          id: 14,
          title: "Dune: Part Two",
          age: 12,
          duration: 2.46,
          imageString:
            "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
          overview:
            "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
          release: 2024,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/Way9Dexny3w",
        },
        {
          id: 15,
          title: "Inside Out 2",
          age: 5,
          duration: 1.52,
          imageString:
            "https://image.tmdb.org/t/p/original/bGQyu8H6q20ZRxqr3z65kE17QPA.jpg",
          overview:
            "As Riley enters adolescence, Joy, Sadness, Anger, Fear, and Disgust are joined by new emotions Anxiety, Envy, Ennui, and Embarrassment in the control room of her mind, creating a period of emotional turmoil.",
          release: 2024,
          videoSource: "",
          category: "recent",
          youtubeString: "https://www.youtube.com/embed/VbqVh2-UaZQ",
        },
        {
          id: 16,
          title: "Stranger Things",
          age: 14,
          duration: 110,
          imageString:
            "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
          overview:
            "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl. As the friends, family, and local police search for answers, they're drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces, and one very strange little girl.",
          release: 2016,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/b9EkMc79ZSU",
        },
        {
          id: 17,
          title: "The Godfather",
          age: 18,
          duration: 2.55,
          imageString:
            "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
          overview:
            "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
          release: 1972,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/sY1S34973zA",
        },
        {
          id: 18,
          title: "Wednesday",
          age: 14,
          duration: 16,
          imageString:
            "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
          overview:
            "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, solve a murder mystery, and adjust to new relationships.",
          release: 2022,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/Di310WS8zLk",
        },
        {
          id: 19,
          title: "The Shawshank Redemption",
          age: 16,
          duration: 2.22,
          imageString:
            "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
          overview:
            "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
          release: 1994,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/6hB3S9bIaco",
        },
        {
          id: 20,
          title: "Interstellar",
          age: 12,
          duration: 2.49,
          imageString:
            "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
          overview:
            "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
          release: 2014,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/zSWdZVtXT7E",
        },
        {
          id: 21,
          title: "Game of Thrones",
          age: 18,
          duration: 120,
          imageString:
            "https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
          overview:
            "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          release: 2011,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/KPLWWIOCOOQ",
        },
        {
          id: 22,
          title: "The Dark Knight",
          age: 12,
          duration: 2.32,
          imageString:
            "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
          overview:
            "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
          release: 2008,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/EXeTwQWrcwY",
        },
        {
          id: 23,
          title: "Avatar: The Way of Water",
          age: 12,
          duration: 3.12,
          imageString:
            "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          overview:
            "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
          release: 2022,
          videoSource: "",
          category: "movie",
          youtubeString: "https://www.youtube.com/embed/d9MyW72ELq0",
        },
        {
          id: 24,
          title: "The Office",
          age: 14,
          duration: 110,
          imageString:
            "https://image.tmdb.org/t/p/original/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
          overview:
            "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. Based on the hit BBC series.",
          release: 2005,
          videoSource: "",
          category: "show",
          youtubeString: "https://www.youtube.com/embed/tNcDHWpselE",
        }],
    });
  }
  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}