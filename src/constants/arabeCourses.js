const arabeCourses = [
  {
    id: "lecture-arabe",
    title: "Les lettres de l’alphabet arabe",
    description: "Apprends à reconnaître, prononcer et écrire les 28 lettres de l’alphabet arabe, base essentielle pour lire le Coran.",
    support: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/lettres.pdf",
    audios: [
      {
        name: "Cours 1 : Lecture Arabe - Introduction",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/1.mp3"
      },
      {
        name: "Cours 2 : Lecture Arabe -  أ ب ت ث",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/1.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/2.mp3"
      },
      {
        name: "Cours 3 : Lecture Arabe -  ج ح خ د",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/1.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/3.mp3"
      },
      {
        name: "Cours 4 : Lecture Arabe - ذ ر ز س",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/1.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/4.mp3"
      },
      {
        name: "Cours 5 : Lecture Arabe -  ش ص ض ط",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/1.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/5.mp3"
      },
      {
        name: "Cours 6 : Lecture Arabe -  ظ ع غ ف",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/1.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/6.mp3"
      },
      {
        name: "Cours 7 : Lecture Arabe - ق ك ل م",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/1.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/7.mp3"
      },
      {
        name: "Cours 8 : Lecture Arabe - ن هـ و ي",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/1.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/8.mp3"
      },
      {
        name: "Cours 9 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/2.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/9.mp3"
      },
      {
        name: "Cours 10 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/3.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/10.mp3"
      },
      {
        name: "Cours 11 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/4.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/11.mp3"
      },
      {
        name: "Cours 12 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/5.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/12.mp3"
      },
      {
        name: "Cours 13 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/6.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/13.mp3"
      },
      {
        name: "Cours 14 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/7.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/14.mp3"
      },
      {
        name: "Cours 15 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/8.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/15.mp3"
      },
      {
        name: "Cours 16 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/9.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/16.mp3"
      },
      {
        name: "Cours 17 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/10.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/17.mp3"
      },
      {
        name: "Cours 18 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/11.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/18.mp3"
      },
      {
        name: "Cours 19 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/12.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/19.mp3"
      },
      {
        name: "Cours 20 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/13.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/20.mp3"
      },
      {
        name: "Cours 21 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/14.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/21.mp3"
      },
      {
        name: "Cours 22 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/15.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/22.mp3"
      },
      {
        name: "Cours 23 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/16.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/23.mp3"
      },
      {
        name: "Cours 24 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/17.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/24.mp3"
      },
      {
        name: "Cours 25 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/18.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/25.mp3"
      },
      {
        name: "Cours 26 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/19.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/26.mp3"
      },
      {
        name: "Cours 27 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/20.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/27.mp3"
      },
      {
        name: "Cours 28 : Lecture Arabe",
        cover: "https://bases-islam.b-cdn.net/images/arabe/lecture-arabe/21.jpeg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/lecture-arabe/28.mp3"
      }
    ]
  },
  {
    id: "medine1",
    title: "Approche du Tome 1 de Médine",
    description: "Apprends à la langue arabe avec les tomes de Médine",
    support: "https://bases-islam.b-cdn.net/courses/arabe/medine1/medine1.pdf",
    audios: [
      {
        name: "Cours 1 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/1.m4a"
      },
      {
        name: "Cours 2 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/2.mp3"
      },
      {
        name: "Cours 3 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/3.mp3"
      },
      {
        name: "Cours 4 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/4.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/4.mp3"
      },
      {
        name: "Cours 5 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/5.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/5.mp3"
      },
      {
        name: "Cours 6 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/6.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/6.mp3"
      },
      {
        name: "Cours 7 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/7.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/7.mp3"
      },
      {
        name: "Cours 8 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/8.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/8.mp3"
      },
      {
        name: "Cours 9 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/9.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/9.mp3"
      },
      {
        name: "Cours 10 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/10.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/10.mp3"
      },
      {
        name: "Cours 11 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/11.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/11.mp3"
      },
      {
        name: "Cours 12 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/12.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/12.mp3"
      },
      {
        name: "Cours 13 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/13.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/13.mp3"
      },
      {
        name: "Cours 14 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/14.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/14.mp3"
      },
      {
        name: "Cours 15 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/15.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/15.mp3"
      },
      {
        name: "Cours 16 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/16.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/16.mp3"
      },
      {
        name: "Cours 17 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/17.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/17.mp3"
      },
      {
        name: "Cours 18 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/18.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/18.mp3"
      },
      {
        name: "Cours 19 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/19.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/19.mp3"
      },
      {
        name: "Cours 20 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/20.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/20.mp3"
      },
      {
        name: "Cours 21 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/21.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/21.mp3"
      },
      {
        name: "Cours 22 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/22.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/22.mp3"
      },
      {
        name: "Cours 23 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/23.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/23.mp3"
      },
      {
        name: "Cours 24 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/24.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/24.mp3"
      },
      {
        name: "Cours 25 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/25.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/25.mp3"
      },
      {
        name: "Cours 26 : Tome 1 de Médine",
        cover: "https://bases-islam.b-cdn.net/images/arabe/medine1/26.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/medine1/26.mp3"
      }
    ]
  },
  {
    id: "adjourroumiyah",
    title: "Résumé d'Al Adjourroumiyah",
    description: "Étudie les bases de la grammaire arabe : les types de mots, les déclinaisons et les règles de la phrase nominale et verbale.",
    audios: [
      {
        name: "Cours 1 : Adjourroumiyah - Introduction",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/0.mp3"
      },
      {
        name: "Cours 2 : Adjourroumiyah - Contenue du livre - 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/0.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/intro1.mp3"
      },
      {
        name: "Cours 3 : Adjourroumiyah - Contenue du livre - 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/0.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/intro2.mp3"
      },
      {
        name: "Cours 4 : Adjourroumiyah - 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/1.mp3"
      },
      {
        name: "Cours 5 : Adjourroumiyah - 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/2.mp3"
      },
      {
        name: "Cours 6 : Adjourroumiyah - 3 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/3(1).mp3"
      },
      {
        name: "Cours 7 : Adjourroumiyah - 3 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/3(2).mp3"
      },
      {
        name: "Cours 8 : Adjourroumiyah - 4",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/4.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/4.mp3"
      },
      {
        name: "Cours 9 : Adjourroumiyah - 5",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/5.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/5.mp3"
      },
      {
        name: "Cours 10 : Adjourroumiyah - 6-1 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/6-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/6-1(1).mp3"
      },
      {
        name: "Cours 11 : Adjourroumiyah - 6-1 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/6-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/6-1(2).mp3"
      },
      {
        name: "Cours 12 : Adjourroumiyah - 6-1 - Partie 3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/6-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/6-1(3).mp3"
      },
      {
        name: "Cours 13 : Adjourroumiyah - 6-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/6-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/6-2.mp3"
      },
      {
        name: "Cours 14 : Adjourroumiyah - 7-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/7-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/7-1.mp3"
      },
      {
        name: "Cours 15 : Adjourroumiyah - 7-2 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/7-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/7-2(1).mp3"
      },
      {
        name: "Cours 16 : Adjourroumiyah - 7-2 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/7-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/7-2(2).mp3"
      },
      {
        name: "Cours 17 : Adjourroumiyah - 8-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/8-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/8-1.mp3"
      },
      {
        name: "Cours 18 : Adjourroumiyah - 8-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/8-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/8-2.mp3"
      },
      {
        name: "Cours 19 : Fa'ida - 1-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida1(1).mp3"
      },
      {
        name: "Cours 20 : Fa'ida - 1-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida1(2).mp3"
      },
      {
        name: "Cours 21 : Fa'ida - 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida2.mp3"
      },
      {
        name: "Cours 22 : Fa'ida - 3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida3.mp3"
      },
      {
        name: "Cours 23 : Fa'ida - 4",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida4.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida4.mp3"
      },
      {
        name: "Cours 24 : Fa'ida - 5",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida5.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida5.mp3"
      },
      {
        name: "Cours 25 : Fa'ida - 6",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida6.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida6.mp3"
      },
      {
        name: "Cours 26 : Fa'ida - 7",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida7.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida7.mp3"
      },
      {
        name: "Cours 27 : Fa'ida - 8",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida8.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida8.mp3"
      },
      {
        name: "Cours 28 : Fa'ida - 9",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida9.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida9.mp3"
      },
      {
        name: "Cours 29 : Adjourroumiyah - 9-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/9-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/9-1.mp3"
      },
      {
        name: "Cours 30 : Adjourroumiyah - 9-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/9-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/9-2.mp3"
      },
      {
        name: "Cours 31 : Adjourroumiyah - 10-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/10-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/10-1.mp3"
      },
      {
        name: "Cours 32 : Adjourroumiyah - 10-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/10-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/10-2.mp3"
      },
      {
        name: "Cours 33 : Adjourroumiyah - 10-3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/10-3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/10-3.mp3"
      },
      {
        name: "Cours 34 : I'rab - 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/irab1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/irab1.mp3"
      },
      {
        name: "Cours 35 : I'rab - 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/irab2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/irab2.mp3"
      },
      {
        name: "Cours 36 : I'rab - 3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/irab3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/irab3.mp3"
      },
      {
        name: "Cours 37 : Adjourroumiyah - 11-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/11-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/11-1.mp3"
      },
      {
        name: "Cours 38 : Adjourroumiyah - 11-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/11-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/11-2.mp3"
      },
      {
        name: "Cours 39 : Adjourroumiyah - 12",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/12.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/12.mp3"
      },
      {
        name: "Cours 40 : Adjourroumiyah - 13-1 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/13-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/13-1(1).mp3"
      },
      {
        name: "Cours 41 : Adjourroumiyah - 13-1 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/13-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/13-1(2).mp3"
      },
      {
        name: "Cours 42 : Adjourroumiyah - 13-1 - Partie 3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/13-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/13-1(3).mp3"
      },
      {
        name: "Cours 43 : Adjourroumiyah - 13-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/13-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/13-2.mp3"
      },
      {
        name: "Cours 44 : Adjourroumiyah - 14-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/14-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/14-1.mp3"
      },
      {
        name: "Cours 45 : Adjourroumiyah - 14-2 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/14-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/14-2(1).mp3"
      },
      {
        name: "Cours 46 : Adjourroumiyah - 14-2 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/14-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/14-2(2).mp3"
      },
      {
        name: "Cours 47 : Adjourroumiyah - 14-3 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/14-3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/14-3(1).mp3"
      },
      {
        name: "Cours 48 : Adjourroumiyah - 14-3 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/14-3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/14-3(2).mp3"
      },
      {
        name: "Cours 49 : I'rab - 4",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/irab4.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/irab4.mp3"
      },
      {
        name: "Cours 50 : Adjourroumiyah - 15-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-1.mp3"
      },
      {
        name: "Cours 51 : Adjourroumiyah - 15-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-2.mp3",
      },
      {
        name: "Cours 52 : Adjourroumiyah - 15-3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-3.mp3",
      },
      {
        name: "Cours 53 : Adjourroumiyah - 15-4",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-4.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-4.mp3",
      },
      {
        name: "Cours 54 : Adjourroumiyah - 15-5",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-5.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-5.mp3",
      },
      {
        name: "Cours 55 : Adjourroumiyah - 15-6",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-6.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-6.mp3",
      },
      {
        name: "Cours 56 : Adjourroumiyah - 15-7 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-7.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-7(1).mp3",
      },
      {
        name: "Cours 57 : Adjourroumiyah - 15-7 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-7.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-7(2).mp3",
      },
      {
        name: "Cours 58 : Adjourroumiyah - 15-8",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-8.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-8.mp3",
      },
      {
        name: "Cours 59 : Adjourroumiyah - 15-9",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-9.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-9.mp3",
      },
      {
        name: "Cours 60 : Adjourroumiyah - 15-10",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-10.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-10.mp3",
      },
      {
        name: "Cours 61 : Adjourroumiyah - 15-11",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-11.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-11.mp3",
      },
      {
        name: "Cours 62 : Adjourroumiyah - 15-12",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-12.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-12.mp3",
      },
      {
        name: "Cours 63 : Adjourroumiyah - 15-13",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-13.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-13.mp3",
      },
      {
        name: "Cours 64 : Adjourroumiyah - 15-14",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/15-14.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/15-14.mp3",
      },
      {
        name: "Cours 65 : Adjourroumiyah - 16-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-1.mp3",
      },
      {
        name: "Cours 66 : Adjourroumiyah - 16-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-2.mp3",
      },
      {
        name: "Cours 67 : Adjourroumiyah - 16-3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-3.mp3",
      },
      {
        name: "Cours 68 : Adjourroumiyah - 16-4",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-4.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-4.mp3",
      },
      {
        name: "Cours 69 : Adjourroumiyah - 16-5",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-5.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-5.mp3",
      },
      {
        name: "Cours 70 : Adjourroumiyah - 16-6",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-6.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-6.mp3",
      },
      {
        name: "Cours 71 : Adjourroumiyah - 16-7",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-7.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-7.mp3",
      },
      {
        name: "Cours 72 : Adjourroumiyah - 16-8",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-8.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-8.mp3",
      },
      {
        name: "Cours 73 : Adjourroumiyah - 16-9",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-9.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-9.mp3",
      },
      {
        name: "Cours 74 : Fa'ida - 11",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/faida12.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/faida12.mp3",
      },
      {
        name: "Cours 75 : Adjourroumiyah - 16-10 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-10(1).jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-10(1).mp3",
      },
      {
        name: "Cours 76 : Adjourroumiyah - 16-10 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-10(2).jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-10(2).mp3",
      },
      {
        name: "Cours 77 : Adjourroumiyah - 16-11 - Partie 1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-11(1).jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-11(1).mp3",
      },
      {
        name: "Cours 78 : Adjourroumiyah - 16-11 - Partie 2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-11(2).jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-11(2).mp3",
      },
      {
        name: "Cours 79 : Adjourroumiyah - 16-11 - Partie 3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-11(3).jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-11(3).mp3",
      },
      {
        name: "Cours 80 : Adjourroumiyah - 16-12",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-12.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-12.mp3",
      },
      {
        name: "Cours 81 : Adjourroumiyah - 16-13",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-13.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-13.mp3",
      },
      {
        name: "Cours 82 : Adjourroumiyah - 16-14",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-14.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-14.mp3",
      },
      {
        name: "Cours 83 : Adjourroumiyah - 16-15",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/16-15.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/16-15.mp3",
      },
      {
        name: "Cours 84 : Adjourroumiyah - 17",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/17.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/17.mp3",
      },
      {
        name: "Cours 85 : Adjourroumiyah - 18-1",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/18-1.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/18-1.mp3",
      },
      {
        name: "Cours 86 : Adjourroumiyah - 18-2",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/18-2.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/18-2.mp3",
      },
      {
        name: "Cours 87 : Adjourroumiyah - 18-3",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/18-3.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/18-3.mp3",
      },
      {
        name: "Cours Finale : Adjourroumiyah - 18-4",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/18-4.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/18-4.mp3",
      },
      {
        name: "Révision : Adjourroumiyah - Révision",
        cover: "https://bases-islam.b-cdn.net/images/arabe/adjourroumiyah/revision.jpg",
        audio: "https://bases-islam.b-cdn.net/courses/arabe/adjourroumiyah/revision.mp3",
      },
    ]
  },
  {
    id: "sarf",
    title: "Le sarf (Variation arabe)",
    description: "Découvre la science du sarf : les transformations des mots en arabe, comprendre les formes verbales et nominales de l'arabe",
    audios: [
      {
        "name": "Cours 1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/1.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/1.mp3"
      },
      {
        "name": "Cours 2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/2.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/2.mp3"
      },
      {
        "name": "Cours 3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/3.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/3.mp3"
      },
      {
        "name": "Cours 4-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/4.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/4.mp3"
      },
      {
        "name": "Cours 4-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/5.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/5.mp3"
      },
      {
        "name": "Cours 4-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/6.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/6.mp3"
      },
      {
        "name": "Cours 5-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/7.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/7.mp3"
      },
      {
        "name": "Cours 5-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/8.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/8.mp3"
      },
      {
        "name": "Cours 5-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/9.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/9.mp3"
      },
      {
        "name": "Cours 6-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/10.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/10.mp3"
      },
      {
        "name": "Cours 6-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/11.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/11.mp3"
      },
      {
        "name": "Cours 7-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/12.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/12.mp3"
      },
      {
        "name": "Cours 7-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/13.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/13.mp3"
      },
      {
        "name": "Cours 8-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/14.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/14.mp3"
      },
      {
        "name": "Cours 8-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/15.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/15.mp3"
      },
      {
        "name": "Cours 9-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/16.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/16.mp3"
      },
      {
        "name": "Cours 9-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/17.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/17.mp3"
      },
      {
        "name": "Cours 10-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/18.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/18.mp3"
      },
      {
        "name": "Cours 10-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/19.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/19.mp3"
      },
      {
        "name": "Cours 11 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/20.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/20.mp3"
      },
      {
        "name": "Cours 12 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/21.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/21.mp3"
      },
      {
        "name": "Cours : Sarf - Niv.1 - Les 6 Formes",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/22.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/22.mp3"
      },
      {
        "name": "Cours 13-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/23.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/23.mp3"
      },
      {
        "name": "Cours 13-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/24.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/24.mp3"
      },
      {
        "name": "Cours 13-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/25.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/25.mp3"
      },
      {
        "name": "Cours 13-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/26.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/26.mp3"
      },
      {
        "name": "Cours 13-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/27.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/27.mp3"
      },
      {
        "name": "Cours 14-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/28.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/28.mp3"
      },
      {
        "name": "Cours 14-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/29.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/29.mp3"
      },
      {
        "name": "Cours 14-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/30.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/30.mp3"
      },
      {
        "name": "Cours 14-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/31.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/31.mp3"
      },
      {
        "name": "Cours 14-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/32.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/32.mp3"
      },
      {
        "name": "Cours 15-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/33.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/33.mp3"
      },
      {
        "name": "Cours 15-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/34.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/34.mp3"
      },
      {
        "name": "Cours 15-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/35.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/35.mp3"
      },
      {
        "name": "Cours 15-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/36.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/36.mp3"
      },
      {
        "name": "Cours 15-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/37.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/37.mp3"
      },
      {
        "name": "Cours 16-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/38.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/38.mp3"
      },
      {
        "name": "Cours 16-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/39.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/39.mp3"
      },
      {
        "name": "Cours 16-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/40.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/40.mp3"
      },
      {
        "name": "Cours 16-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/41.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/41.mp3"
      },
      {
        "name": "Cours 16-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/42.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/42.mp3"
      },
      {
        "name": "Cours 17-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/43.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/43.mp3"
      },
      {
        "name": "Cours 17-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/44.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/44.mp3"
      },
      {
        "name": "Cours 17-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/45.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/45.mp3"
      },
      {
        "name": "Cours 17-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/46.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/46.mp3"
      },
      {
        "name": "Cours 17-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/47.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/47.mp3"
      },
      {
        "name": "Cours 18-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/48.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/48.mp3"
      },
      {
        "name": "Cours 18-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/49.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/49.mp3"
      },
      {
        "name": "Cours 18-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/50.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/50.mp3"
      },
      {
        "name": "Cours 18-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/51.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/51.mp3"
      },
      {
        "name": "Cours 18-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/52.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/52.mp3"
      },
      {
        "name": "Cours 19-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/53.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/53.mp3"
      },
      {
        "name": "Cours 19-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/54.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/54.mp3"
      },
      {
        "name": "Cours 19-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/55.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/55.mp3"
      },
      {
        "name": "Cours 19-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/56.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/56.mp3"
      },
      {
        "name": "Cours 19-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/57.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/57.mp3"
      },
      {
        "name": "Cours 20 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/58.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/58.mp3"
      },
      {
        "name": "Cours 21-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/59.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/59.mp3"
      },
      {
        "name": "Cours 21-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/60.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/60.mp3"
      },
      {
        "name": "Cours 21-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/61.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/61.mp3"
      },
      {
        "name": "Cours 21-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/62.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/62.mp3"
      },
      {
        "name": "Cours 21-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/63.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/63.mp3"
      },
      {
        "name": "Cours 21-6 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/64.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/64.mp3"
      },
      {
        "name": "Cours 21-7 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/65.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/65.mp3"
      },
      {
        "name": "Cours 22-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/66.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/66.mp3"
      },
      {
        "name": "Cours 22-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/67.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/67.mp3"
      },
      {
        "name": "Cours 22-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/68.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/68.mp3"
      },
      {
        "name": "Cours 22-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/69.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/69.mp3"
      },
      {
        "name": "Cours 22-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/70.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/70.mp3"
      },
      {
        "name": "Cours 22-6 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/71.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/71.mp3"
      },
      {
        "name": "Cours 22-7 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/72.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/72.mp3"
      },
      {
        "name": "Cours 23-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/73.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/73.mp3"
      },
      {
        "name": "Cours 23-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/74.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/74.mp3"
      },
      {
        "name": "Cours 23-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/75.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/75.mp3"
      },
      {
        "name": "Cours 23-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/76.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/76.mp3"
      },
      {
        "name": "Cours 23-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/77.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/77.mp3"
      },
      {
        "name": "Cours 23-6 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/78.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/78.mp3"
      },
      {
        "name": "Cours 23-7 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/79.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/79.mp3"
      },
      {
        "name": "Cours 24-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/80.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/80.mp3"
      },
      {
        "name": "Cours 24-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/81.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/81.mp3"
      },
      {
        "name": "Cours 24-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/82.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/82.mp3"
      },
      {
        "name": "Cours 24-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/83.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/83.mp3"
      },
      {
        "name": "Cours 24-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/84.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/84.mp3"
      },
      {
        "name": "Cours 24-6 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/85.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/85.mp3"
      },
      {
        "name": "Cours 24-7 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/86.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/86.mp3"
      },
      {
        "name": "Cours 25-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/87.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/87.mp3"
      },
      {
        "name": "Cours 25-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/88.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/88.mp3"
      },
      {
        "name": "Cours 25-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/89.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/89.mp3"
      },
      {
        "name": "Cours 25-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/90.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/90.mp3"
      },
      {
        "name": "Cours 25-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/91.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/91.mp3"
      },
      {
        "name": "Cours 26-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/92.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/92.mp3"
      },
      {
        "name": "Cours 26-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/93.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/93.mp3"
      },
      {
        "name": "Cours 26-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/94.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/94.mp3"
      },
      {
        "name": "Cours 26-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/95.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/95.mp3"
      },
      {
        "name": "Cours 26-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/96.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/96.mp3"
      },
      {
        "name": "Cours 27-1 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/97.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/97.mp3"
      },
      {
        "name": "Cours 27-2 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/98.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/98.mp3"
      },
      {
        "name": "Cours 27-3 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/99.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/99.mp3"
      },
      {
        "name": "Cours 27-4 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/100.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/100.mp3"
      },
      {
        "name": "Cours 27-5 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/101.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/101.mp3"
      },
      {
        "name": "Cours 28 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/102.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/102.mp3"
      },
      {
        "name": "Cours 29 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/103.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/103.mp3"
      },
      {
        "name": "Cours 30 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/104.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/104.mp3"
      },
      {
        "name": "Cours 31 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/105.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/105.mp3"
      },
      {
        "name": "Cours 32 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/106.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/106.mp3"
      },
      {
        "name": "Cours 33 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/107.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/107.mp3"
      },
      {
        "name": "Cours 34 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/108.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/108.mp3"
      },
      {
        "name": "Cours 35 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/109.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/109.mp3"
      },
      {
        "name": "Cours 36 : Sarf - Niv.1",
        "chapitre": "Livre : الصّرف للمبتدئين",
        "cover": "https://bases-islam.b-cdn.net/images/arabe/sarf/110.jpg",
        "audio": "https://bases-islam.b-cdn.net/courses/arabe/sarf/110.mp3"
      }
    ]
  },
]

export default arabeCourses;
