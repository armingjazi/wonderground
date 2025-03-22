export interface Person {
  id: string;
  name: string;
  bio: string;
  image: string;
  title?: string;
  type: 'main' | 'collaborator';
}
export const usePeople = (): Person[] => {
  return [
    {
      id: "roser-tutusaus",
      name: "Roser Tutusaus",
      bio: "Born in 1985 in Tarragona, Roser Tutusaus began as a rhythmic gymnast and studied music and theater before turning to dance. She train at Artez Dance Academy (Netherlands), studied journalism at UAB, and space design at UPC-CCCB." +
        "Her multidisciplinary background shapes a unique perspective, revealing performers’ inner landscapes and their dialogue with space." +
        "She has performed with Anouk van Dijk, Giulio d’Anna, Erik Kaiel, Maria Rovira, Roberto Oliván, and Pere Faura. Her street duet Menar with Joan Català won Best Street Performance at the 2016 Catalan Critics’ Awards. From 2014 to 2020, she toured internationally with Guy Nader & Maria Campos." +
        "Her work explores fragility and strength, limits and transcendence, shaping movement where friction drives expression." +
        "She is also deeply engaged in Movement Archery, contributing as both a teacher and a developer of its pedagogical content, shaping its methodology and practice. She is also deeply engaged in Movement Archery, contributing as both a teacher and a developer of its pedagogical content, shaping its methodology and practice.",
      image: "/about/rosertutusaus.jpg",
      type: 'main',
    },
    {
      id: "tom-weksler",
      name: "Tom Weksler",
      bio: "Born in 1989 in Haifa, Israel, Tom Weksler began exploring movement at a young age, drawn to explore gravity, risk, and unpredictability through acrobatics and martial arts. He started teaching at 16 and trained at The Workshop for Dancers and Choreographers in Haifa. \n" +
        "Between 2009 and 2011, he danced and performed as an acrobat at the Israeli Opera. From 2010 to 2014, he toured worldwide with the Inbal Pinto & Avshalom Pollak Dance Company. He later collaborated with Rootlessroot and DOT504 on *Collective Loss of Memory*, which won Best Performance at Tanec Praha and toured Europe. From 2017 to 2020, he performed with Guy Nader & Maria Campos. In 2021, he was a finalist for Best Dancer of the Year at Spain’s Premios MAX. \n" +
        "His career combines strong physical technique with a philosophical sensitivity, shaping a movement language deeply rooted in the relationship between body, space, and nature." +
        "He is the founder of *Movement Archery* and a globally acclaimed movement teacher.",
      image: "/about/tomweksler.jpg",
      type: 'main',
    },
    {
      id: "fani-benages",
      name: "Fani Benages",
      bio: "Fani Benages has worked in the performing arts sector since 1994, specializing in contemporary dance. Since 2002, she has operated independently, focusing on representation, coaching, and distribution for dance companies and creators working with movement and physical theatre. Through her agency, Fani Benages, she supports international touring and market access across Europe, the Middle East, and Latin America. She is an active member of several industry associations, including CDAEC, ACPDC, and APGCC.",
      title: "Cultural Manager and Distributor",
      image: "/about/fanibenages.jpg",
      type: 'collaborator',
    },
    {
      id: "oded-avinathan",
      name: "Oded Avinathan",
      bio: "Oded Avinathan is a circus artist specializing in group hand-to-hand acrobatics, based in Toulouse, France. Born in 1989 in Haifa, Israel, he began performing in 2012 at Sandciel, the Israeli Circus School. He later trained at CRAC de Lomme in Lille, France, under Mahmoud Louertani and Abdeliazide Senhadji of Company XY. Oded performed in the collective BimBim and collaborated on several creations, including works with Bernadette Gruson and Komplexkapharnaüm. In 2018, he joined Company XY for the creation of Möbius and later participated in Pas du Monde (2024). He has been collaborating with Wonderground since 2022, contributing to acrobatic and movement research and performing in Wall & Peace.",
      title: "Performer, Acrobat and Artistic Collaborator",
      image: "/about/odedavinathan.jpg",
      type: 'collaborator',
    },
    {
      id: "miguel-marin-pavon",
      name: "Miguel Marín Pavón",
      bio: "Miguel Marín is a prolific composer with a strong background in independent music, contemporary dance, and film scores. He began his career in the 1990s in London as a member of the influential indie band Piano Magic. In 2001, he composed the soundtrack for Son de Mar, directed by Bigas Luna, marking a shift towards sound experimentation in cinema and dance. He later launched his solo project Árbol, releasing four albums and collaborating with Fibla. Árbol has performed internationally, including in Japan, the USA, Germany, and Turkey. Since 2015, he has continued his work from Seville and collaborates with various dance companies worldwide. Miguel has worked with Wonderground since 2019, composing for RISE, After The Rain, Wall & Peace, and Momentum—the latter featuring his live performance on stage.",
      title: "Composer and Sound Designer",
      image: "/about/miguelmarin.jpg",
      type: 'collaborator',
    },
    {
      id: "filp-horn",
      name: "Filp Horn",
      bio: "Born in 1997 in Prague, Czech Republic, Filip Horn studied Stage Technology and Production at the Janáček Academy of Music and Performing Arts in Brno. His focus on lighting design developed under Pavla Beranová, with a particular interest in dance and physical theatre. Since 2020, he has worked with Roberta Legros Štěpánková and Relax Brothers on puppet theatre projects using new technologies. In 2021, he joined STUDIO ALTA in Prague as a lighting technician and currently collaborates as a lighting designer with companies such as Spitfire Company, Tantehorse, and Dočasná Company. He is also part of the La Putika circus. Filip has been collaborating with Wonderground since 2022.",
      image: "/about/filphorn.png",
      type: 'collaborator',
    },
    {
      id: "benjamin-nivison",
      name: "Benjamin Nivison",
      bio: "Benjamin Nivison is a South African designer, artist, and entrepreneur. After completing his studies in textile design at Shenkar College in Tel Aviv, he returned to Cape Town to launch a fashion and textile brand. In 2021, he co-founded and became the creative director of BABA YAYA, an NGO dedicated to contemporary African dance and youth development in South African townships. His work bridges culture, movement, and design. As he puts it: \"The interaction between movement and intelligent design is what excites me most. Much can be achieved when body and aesthetics meet.\" Benjamin has been collaborating with Wonderground since 2022.",
      image: "/about/benjaminnvison.jpeg",
      title: "Costume Design",
      type: 'collaborator',
    },
    {
      id: "paola-didrontino",
      name: "Paola d’Idrontino",
      bio: "Paola d’Idrontino is a textile artist, costume designer, and visual creator. Her work merges storytelling with intricate textile arrangements to create costumes, sculptures, and masks inspired by otherworldly forms. A graduate of Central Saint Martins in London, she founded the brand Papayapie in 2005, focusing on amplifying and dramatizing the body’s natural silhouette. Her creations have been featured at MACBA, the Design Museum of Barcelona, the Maritime Museum of Barcelona, and in publications such as Condé Nast Traveller and Hi-Fructose. She has also designed for stage productions like Macbeth (directed by Moreno Bernardi) and directed the music video Wake Up by Radio83. Paola has been collaborating with Wonderground since 2024.",
      image: "/about/paoladidrontino.jpg",
      title: "Costume Design and Creation",
      type: 'collaborator',
    },
    {
      id: "aida-vargas",
      name: "Aida Vargas",
      bio: "Aida Vargas is a photographer with a distinct sensitivity for light and movement. Her work often explores the expressive possibilities of natural light, while also embracing the depth and nuance offered by theatrical and low lighting environments." +
        "With a personal connection to the world of dance, much of her work is dedicated to studying movement through photography and video. She is drawn to capturing the essence of a gesture or the atmosphere of a specific moment in time and space—translating it through her lens." +
        "Her artistic approach combines observation and imagination: capturing what exists, inventing from inspiration. Through the play of light, she constructs and deconstructs moments—creating visual poems that go beyond words.",
      image: "/about/aidavargas.jpg",
      title: "Photography",
      type: 'collaborator',
    },
    {
      id: "5",
      name: "Armin Jazi",
      bio: "A digital architect, Armin transforms Wonderground's artistic vision into compelling digital stories. As a software developer and designer, he crafts interfaces that mirror the creative vision of Wonderground. He operates in connections between physical and digital art. Armin co-manages Movement Archery with Tom and Roser.",
      image: "/about/arminjazi.jpeg",
      title: "Digital Manager",
      type: 'collaborator',
    }
  ]
}
