export interface Person {
  id: string;
  name: string;
  bio: string;
  image: string;
}
export const usePeople = (): Person[] => {
  return [
    {
      id: "1",
      name: "Roser Tutusaus",
      bio: "Roser is a dancer, choreographer and director of Wonderground Movement Arts." +
        "Roser was born in 1985 in Tarragona, Spain. She spent her childhood competing in Rythmic gymnastics, playing the flute and participating in several theatre and dance classes where she’s performed enthusiastically.\n" +
        "After completing preliminary dance Formation in ‘Àrea Espai de Dansa i Creació’ (2005-2007) she moved to Holland to pursue a Bachelor of Dance at ‘Artez Dans Academie’ in Arnhem, which she completed in 2010. In parallel, she also attained a Bachelor’s degree in Journalism from the ‘Universitat Autònoma de Barcelona’ in 2008. In 2021 Roser attained a Master’s Degree in Space Design (Ephemeral Architectures and Interior Design) from ’The Polytechnic University of Barcelona’ in Collaboration with ’CCCB’.\n" +
        "In Holland, she danced for different acclaimed choreographers in Holland like Anouk van Dijk, Giulio d’Anna, Anouke de Groot, Erik Kaiel and more.\n" +
        "In 2012, Roser moved back to Barcelona where she danced for several companies, such as ‘Transit Dansa’ of Maria Rovira, ’Enclave Arts Del Movement’ of Roberto Oliván, Ana Eulate, ‘Lamajara Collective’ and Pere Faura. From 2014 to 2020, she danced and performed internationally with the company Guy Nader and Maria Campos.\n" +
        "She collaborated extensively with the circus/dance artist Joan Català in the creation of the street duet Menar, which premiered at ‘Fira Tàrrega’ in 2016. The piece was was Awarded ‘Best Street Piece Of The Year’ by the Catalan Critics Award and Roser was also nominated as a finalist for ‘Best Female Dancer Of The Year’.\n" +
        "Between 2014 and 2019 she created two solos for the theatre, called 'Simún' and 'Tecnologías Del Yo'. Both performed in at varias venues and festivals around Spain.\n" +
        "In 2018 Roser co-founded WONDERGROUND Company, together Tom Weksler. And she began to actively participate in the development of MOVEMENT ARCHERY, the pedagogical body that was founded by Tom in 2014.\n" +
        "In 2021 Roser was nominated as a finalist for ‘Best Female Dancer Of The Year In Spain’ in the prestigious MAX Awards.",
      image: "/about/rosertutusaus.jpg",
    },
    {
      id: "2",
      name: "Tom Weksler",
      bio: "Tom is a dancer, choreographer and director of the company Wonderground Movement Arts.\n" +
        "Tom was born in 1989 in Haifa, Israel. Tom has been practicing Martial Arts and different forms of acrobatic disciplines from a young age. Between the years 1998- 2009 he was a student in ‘Hacasa’ Ido Portal’s Movement and Capoeira school. There he also began his teaching practice at the age of 16. 2007-2009 Tom completed his preliminary dance studies in ‘The Workshop For Dancers and Choreographers in Haifa’.\n" +
        "In 2009 – 2011 Tom has worked as a dancer and acrobat in the ‘Israeli Opera’, including a central role in the creation and casting of the internationally acclaimed production “The Child Dreams” written by Hanoch Levin, composed by Gil Shohat and directed by Omri Nitzan. \n" +
        "From 2010 to 2014, he danced with ‘Inbal Pinto and Avshallom Pollak Dance Company’ and performed in various creations of the company around the world. From 2014 to 2017, he participated in the creation and performed Collective Loss Of Memory - choreographed by ‘Rootlessroot’ (Jozef Fruček and Linda Kapetanea) and commissioned by ‘DOT504’ in Prague. The piece was awarded Best Performance of the year in ‘Tanec Praha’ festival and toured extensively in Europe. \n" +
        "From 2017 to 2020, Tom danced in ‘Guy Nader and Maria Campos Dance Company’. In 2021 Tom was nominated as a finalist for ‘Best Male Dancer Of The Year In Spain’ in the prestigious ‘MAX Awards’.\n" +
        "As a creator, in 2012 he created LOBOS in collaboration with Circus Artists Yogi Dekel, Yuval Oz and Breno Caetano. In 2014, Tom created the Duets SARU and HEDER in collaboration with Tokyo Based Dancer and Choreographer Mayumu Minakawa, which have performed internationally in various theatres and festivals. In 2017 he premiered the duet Pilim in Collaboration with Circus Artist Yogi Dekel.\n" +
        "He has founded WONDERGROUND together with his partner Roser Tutusaus in 2018.\n" +
        "Tom is also the founder of ‘Movement Archery’ (www.movementarchery.com), a workshop concept that presents a unique approach to Movement, philosophy and dance. Since 2014 he has been teaching this approach internationally in dance schools, circus schools, universities, professional companies, martial arts gyms and more. Tom’s teaching is globally acclaimed and he is considered one of the pioneers of the modern ‘Movement Culture’.",
      image: "/about/tomweksler.jpg",
    }
  ]
}
