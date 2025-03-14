export interface CalEvent {
  id: string;
  date: string;
  time: string;
  name: string;
  location: string;
  country: string;
  venue?: string;
  link?: string;
}
export interface Piece {
  type: "piece" | "calendar" | "other";
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  castAndCrew: string;
  tagline: string;
  concept: string;
  quote?: string;
  aesthetics: string;
  color: string;
  width: number;
  height: number;
  fontSize?: number;
  xTranslate: number;
  yTranslate: number;
  maskOpacity?: number;
  images: {
    main: string;
    mask: string;
    promos: string[];
  };
  duration?: string;
  sustainability?: string;
  stageSize?: string;
  HeightClearance?: string;
  TouringParty?: string;
  contact?: string;
  position: 0 | 1 | 2;
  events: CalEvent[];
}

export const usePieces = (): Piece[] => {
  return [
    {
      type: "piece",
      id: "after_the_rain",
      title: "AFTER THE RAIN",
      shortDesc: "A kinetic poem about letting go of someone you love.",
      fullDesc:
        "Through an energetic dance of forces, open narratives and transient landscapes; The meeting and constant transformation of two individuals awakens unexpected memories about the nature of our lives. After the Rain is a dance of hopes and fears.",
      castAndCrew: "",
      tagline: "",
      concept:
        "After the Rain takes this natural phenomenon as a metaphor for the ephemeral. " +
        "At the same time that Tom and Roser entered a studio together, Roser’s father was diagnosed with a brain tumor. " +
        "AFTER THE RAIN is the artistic work that has accompanied and moved through the process of her father’s illness and passing. " +
        "It holds the sensations and questions that arise—many of which are deeply tied to the very essence of living. And it does so by looking at nature as a reflection. " +
        "Letting go of someone you love is a deeply personal experience, yet also a universal one. From this perspective, the piece explores beliefs about love, death, transformation, spirit, and transcendence, mirroring itself in the natural world and its processes.",
      aesthetics: "",
      color: "#ff0000",
      width: 200,
      height: 360,
      fontSize: 90,
      xTranslate: -500,
      yTranslate: -10,
      images: {
        main: "/pieces/after_the_rain/main.png",
        mask: "/pieces/after_the_rain/main.png",
        promos: [
          "/pieces/after_the_rain/1.jpg",
          "/pieces/after_the_rain/2.jpg",
          "/pieces/after_the_rain/3.jpg",
          "/pieces/after_the_rain/4.jpg",
        ],
      },
      events: [],
      position: 0,
    },
    {
      type: "piece",
      id: "momentum",
      title: "MOMENTUM",
      shortDesc: "A mythological tale about humans, nature and gravity.",
      fullDesc:
        "In this new creation, Wonderground presents a dreamlike " +
        "journey in which four performers—two women, one man, and " +
        "a live musician—explore the tensions between the human " +
        "instinct for connection and the forces that pull us, both " +
        "literally and metaphorically. " +
        "Through landscapes that oscillate between the real and the " +
        "imaginary—an internal storm, a body defying gravity, and a" +
        "mountain that breaks and rebuilds itself—they create a " +
        "choreography that reflects the fragility and resilience of our " +
        "time. Somewhere between a poetic recital and a rock " +
        "concert, MOMENTUM fuses movement, acrobatic dance, " +
        "minimalism, and humor to imagine what our future could be.",
      castAndCrew:
        "<strong>Concept, choreography and direction</strong> Roser Tutusaus and Tom Weksler / <strong>Dancers</strong> Tom Weksler, Nora Baylach and Yuval Finkelshtein / <strong>Original music and artistic collaboration</strong>  Miguel Marin Pavón / <strong>Lighting Design</strong> Filip Horn / <strong>Costumes Design</strong> Benjamin Nivison / <strong>Col·laboració artística</strong> Oded Avinathan, Ariadna Montfort and Joan Català / <strong>Participants of the first phase of creation</strong> Carla Piris Lasaga and Girordan Cruz / <strong>Communication and promotion during the creation</strong> A129Lacarte -  Anso Raybaut-Pérès / <strong>Distribution</strong> Fani Benages / <strong>Production</strong> Wonderground / <strong>Videography</strong> Ignasi Castañé / <strong>Photography</strong> Aida Vargas / <strong>Coproduction</strong> Mercat de les Flors and Ajuntament de Tarragona / <strong>Residencies</strong> El Canal Centre d’arts Escèniques de Salt and The Island / <strong>Supported By</strong> Beca recerca OSIC, Departament de Cultura-Generalitat de Catalunya i l’Institut Ramón Llull.",
      tagline: "What moves us in a world that seems to have lost its balance?",
      concept:
        "There is a universal truth when one feels gravity and the weight of the " +
        "body. It is one of the most primal human experiences of what it means to " +
        "be in the world. If we add displacement, a multiplicity of questions begins to arise. Why " +
        "do we move in one direction? What drives us? Where do we want to go? " +
        "What do we expect to find? Are we going or returning? <br/>  <br/>" +
        "In MOMENTUM, this displacement materializes through the use of various " +
        "extreme actions as generators of dramatic choreography. Spinning, " +
        "falling, dragging, climbing, suspending, or flying all have a very specific " +
        "relationship with gravity when we consider their distance from the " +
        "ground. <br/>  <br/> <strong> We place these actions within archetypal natural landscapes, which " +
        "follow one another and intuitively reveal symbolic relationships—" +
        "both of the soul’s inner landscapes and of the forces that sometimes govern our relationships. </strong>",
      aesthetics:
        "The soundscape is created from deconstructed natural " +
        "sounds and live music. The musical staging ranges from a " +
        "poetic recital to a rock concert with a computer, samplers, " +
        "electric guitar, and electronic drums." +
        "The stage space will recreate natural landscapes in an " +
        "alternative way through portable objects, lights, colors," +
        "perspectives, trajectories, dimensions, and spatial depths." +
        "The stage itself is an object that transforms as the" +
        "performance progresses, but it does evocatively, with a" +
        "minimalism that seeks to awaken the imagination. <br/>  <br/>" +
        "<strong>MOMENTUM aims to be a dreamlike, minimalist, free," +
        "unconscious spectacle—somewhere between futuristic" +
        "and mythological. At the same time, it wishes to look" +
        "with humor at where we are and where we are going" +
        "(or could go!). </strong>",
      quote:
        '"To the eyes of the man of imagination, nature is imagination itself. As a man is, so he sees." William Blake',
      color: "#5DAD8C",
      width: 300,
      height: 560,
      fontSize: 140,
      xTranslate: 300,
      yTranslate: -100,
      images: {
        main: "/pieces/momentum/main.jpeg",
        mask: "/pieces/momentum/2.jpeg",
        promos: [
          "/pieces/momentum/1.jpeg",
          "/pieces/momentum/2.jpeg",
          "/pieces/momentum/3.jpeg",
          "/pieces/momentum/4.jpeg",
        ],
      },
      events: [],
      position: 1,
    },
    {
      type: "piece",
      id: "wall-peace",
      title: "WALL & PEACE",
      shortDesc:
        "A site-specific night show that follows the mysterious story of two men and a wall, told and illuminated",
      fullDesc:
        "Through dance, circus and martial arts, the two men rediscover their friendship and perhaps, their place in the world. The show transforms the public space into an imaginary theatrical landscape that pushes the boundaries of handmade aesthetics and physical storytelling.",
      castAndCrew: "",
      tagline:
        "What lies beyond the wall when shadows become our bridge to the other side?",
      concept:
        "Walls are architectures with great socio-political content. But what they " +
        "really hide is the image of who or what is on the other side. They create a " +
        "physical and mental division between self and other, between us and them. " +
        "<strong>It is tempting to wonder if on the other side there is someone just like us...</strong>",
      aesthetics:
        "WALL & PEACE has the aesthetics of Film Noir and is handcrafted with portable light " +
        "objects. The show can be performed on any wall in any town or city. " +
        "It is inspired by the mystery and fantasy of bedtime stories. A play with shadows; with " +
        "visible and invisible; with dreams and ghosts. An act of transformation." +
        "<strong> A unique show that seeks to convey the spectacular nature of intimacy. </strong>",
      color: "rgb(255,255,255)",
      width: 500,
      height: 360,
      fontSize: 110,
      xTranslate: 850,
      yTranslate: -1000,
      maskOpacity: 0.4,
      images: {
        main: "/pieces/wall_and_peace/main.png",
        mask: "/pieces/wall_and_peace/main.png",
        promos: [
          "/pieces/wall_and_peace/1.jpg",
          "/pieces/wall_and_peace/2.jpg",
          "/pieces/wall_and_peace/3.jpg",
          "/pieces/wall_and_peace/4.jpg",
        ],
      },
      events: [],
      position: 1,
    },
    {
      type: "piece",
      id: "rise",
      title: "RISE",
      shortDesc: "A wild brushstroke of calligraphy in public space.",
      fullDesc:
        "It is the movement forwards and upwards, from distant to intimate that drives this performance. An invitation to ask what it is to be human. It is a unique street spectacle that interacts with the audience and erases the boundary between dance, daily movement and acrobatics.",
      castAndCrew:
        "<strong>Creation & Interpretation</strong> Roser Tutusaus Tom Weksler / <strong>Artistic Collaboration</strong> Orit Nevo, Oryan Zacks & Spela Vodev / <strong>Costume Design</strong> Benjamin Nivisson & Tom Weklser / <strong>Artistic Collaboration</strong> Oded Avinathan, Ariadna Montfort and Joan Català / <strong>Musical Composition </strong> Miguel Marín Pavón / <strong>Choreography assistant</strong> Marta Dalmau / <strong>Distribution</strong> Fani Benages / <strong>Production</strong> Wonderground and Brechtje Randag/ <strong>Supported By</strong> Circuit Est-Centre Chorégraphique Montréal, Maison pour la danse de Québec, Me’ever Mitzpe Ramon a Israel, Aula de Teatre i Dansa de Mataró, On Contemporary Circus Creation de Israel, Centre Cívic de la Barceloneta, Institut Ramon Lull.",
      tagline: "What moves us in a world that seems to have lost its balance?",
      concept: "",
      aesthetics:
        "RISE explores the collision and encounter of different physical languages corresponding to the diverse artistic backgrounds of Tom and Roser." +
        "These languages—Butoh, Contemporary Dance, Acrobatics, Capoeira, and Partnering—have been placed outside their original context to respond to current expressive needs and encourage the reappearance of personal and gestural meanings.\n" +
        "<strong> Inspired by the urban and cold aesthetic of the movie Matrix and the cave art of ancient times, RISE expresses this transformation or regression </strong>",
      color: "rgba(255,255,255)",
      width: 160,
      height: 640,
      fontSize: 180,
      xTranslate: -400,
      yTranslate: 100,
      images: {
        main: "/pieces/rise/main.png",
        mask: "/pieces/rise/main.png",
        promos: [
          "/pieces/rise/1.jpg",
          "/pieces/rise/2.jpg",
          "/pieces/rise/3.jpg",
          "/pieces/rise/4.jpg",
        ],
      },
      events: [],
      position: 0,
    },
    {
      type: "piece",
      id: "falling-man",
      title: "THE FALLING MAN",
      shortDesc: "Questioning dance, imagination, and mental health.",
      fullDesc:
        "It moves between collective memory and the personal, creating a fluid flow of images inspired by the act of falling. Falling is an archetype that has accompanied humans from ancient times to the present.",
      castAndCrew: "",
      tagline: "What moves us in a world that seems to have lost its balance?",
      concept: "",
      aesthetics: "",
      color: "rgb(175,100,60)",
      width: 260,
      height: 920,
      fontSize: 80,
      xTranslate: -300,
      yTranslate: 10,
      images: {
        main: "/pieces/falling_man/main.png",
        mask: "/pieces/falling_man/main.png",
        promos: [
          "/pieces/falling_man/1.png",
          "/pieces/falling_man/2.png",
          "/pieces/falling_man/3.png",
        ],
      },
      events: [],
      position: 2,
    },
    {
      type: "calendar",
      id: "event-calendar",
      title: "UPCOMING EVENTS",
      shortDesc: "",
      fullDesc: "",
      castAndCrew: "",
      tagline: "",
      concept: "",
      aesthetics: "",
      color: "rgb(0,0,0)",
      width: 260,
      height: 500,
      fontSize: 80,
      xTranslate: -300,
      yTranslate: 10,
      images: {
        main: "/pieces/event_calendar/main.jpg",
        mask: "/pieces/event_calendar/main.jpg",
        promos: [
          "/pieces/event_calendar/1.png",
          "/pieces/event_calendar/2.png",
          "/pieces/event_calendar/3.png",
        ],
      },
      events: [
        {
          "id": "event-5",
          "date": "2025/01/24",
          "time": "20:00",
          "location": "Barcelona",
          "name": "Momentum Premiere",
          "venue": "Mercat de les Flors",
          "link": "https://mercatflors.cat/",
          "country": "Catalunya"
        },
        {
          "id": "event-4",
          "date": "2024/08/24",
          "time": "20:00",
          "location": "Amersfoort",
          "name": "Wall & Peace",
          "venue": "Spoffin Festival",
          "link": "https://spoffin.nl/",
          "country": "Netherlands"
        },
        {
          "id": "event-3",
          "date": "2024/08/23",
          "time": "20:00",
          "location": "Amersfoort",
          "name": "Wall & Peace Premiere",
          "venue": "Spoffin Festival",
          "link": "https://spoffin.nl/",
          "country": "Netherlands"
        },
        {
          "id": "event-2",
          "date": "2024/08/09",
          "time": "20:00",
          "location": "Les Piles",
          "name": "Wall & Peace Pre-premiere",
          "venue": "Danseu Festival",
          "link": "https://danseufestival.com/",
          "country": "Catalunya"
        },
        {
          "id": "event-1",
          "date": "2024/05/18",
          "time": "20:00",
          "location": "Tarragona",
          "name": "The Falling Man",
          "venue": "Centre Penitenciari",
          "link": "https://www.tarragona.cat/cultura/agenda/2024/programacio-marc-juny-2024/cd/rise-roser-tutusaus-i-tom-weksler",
          "country": "Catalunya"
        },
        {
          "id": "event-6",
          "date": "Postponed",
          "time": "20:00",
          "location": "Mollet del Vallès",
          "name": "After the Rain",
          "venue": "Teatre Can Gomà",
          "link": "https://molletvalles.koobin.com/index.php",
          "country": "Catalunya"
        },
        {
          "id": "event-7",
          "date": "Postponed",
          "time": "20:00",
          "location": "Mataró",
          "name": "After the Rain",
          "venue": "Teatre Monumental",
          "link": "https://www.culturamataro.cat/teatre-monumental",
          "country": "Catalunya"
        }
      ],
      position: 1,
    },
  ];
};
