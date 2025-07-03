const qoranCourses = [
  {
    id: "tadjwid",
    title: "Introduction au Tadjwid",
    description: "Découvre les règles de récitation du Coran : prolongations, lettres emphatiques, règles du Noun Sakin, et plus encore.",
    audios: [
        {
            name: "Cours 1 : Maîtriser la vitesse de la lecture",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/1.mp3"
        },
        {
            name: "Cours 2 : La gestion du souffle",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/2.mp3"
        },
        {
            name: "Cours 3 : La simplicité de la voix",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/3.mp3"
        },
        {
            name: "Cours 4 : Réciter avec un récitateur",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/4.mp3"
        },
        {
            name: "Cours 5 : Les règles de tadjwid",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/5.mp3"
        },
        {
            name: "Cours 6 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/6.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/6.mp3"
        },
        {
            name: "Cours 7 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/7.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/7.mp3"
        },
        {
            name: "Cours 8 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/8.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/8.mp3"
        },
        {
            name: "Cours 9 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/9.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/9.mp3"
        },
        {
            name: "Cours 10 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/10.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/10.mp3"
        },
        {
            name: "Cours 11 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/11.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/11.mp3"
        },
        {
            name: "Cours 12 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/12.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/12.mp3"
        },
        {
            name: "Cours 13 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/13.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/13.mp3"
        },
        {
            name: "Cours 14 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/14.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/14.mp3"
        },
        {
            name: "Cours 15 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/15.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/15.mp3"
        },
        {
            name: "Cours 16 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/16.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/16.mp3"
        },
        {
            name: "Cours 17 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/17.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/17.mp3"
        },
        {
            name: "Cours 18 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/18.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/18.mp3"
        },
        {
            name: "Cours 19 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/19.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/19.mp3"
        },
        {
            name: "Cours 20 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/20.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/20.mp3"
        },
        {
            name: "Cours 21 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/21.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/21.mp3"
        },
        {
            name: "Cours 22 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/22.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/22.mp3"
        },
        {
            name: "Cours 23 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/23.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/23.mp3"
        },
        {
            name: "Cours 24 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/24.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/24.mp3"
        },
        {
            name: "Cours 25 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/25.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/25.mp3"
        },
        {
            name: "Cours 26 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/26.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/26.mp3"
        },
        {
            name: "Cours 27 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/27.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/27.mp3"
        },
        {
            name: "Cours 28 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/28.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/28.mp3"
        },
        {
            name: "Cours 29 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/29.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/29.mp3"
        },
        {
            name: "Cours 30 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/30.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/30.mp3"
        },
        {
            name: "Cours 31 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/31.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/31.mp3"
        },
        {
            name: "Cours 32 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/32.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/32.mp3"
        },
        {
            name: "Cours 33 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/33.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/33.mp3"
        },
        {
            name: "Cours 34 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/34.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/34.mp3"
        },
        {
            name: "Cours 35 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/35.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/35.mp3"
        },
        {
            name: "Cours 36 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/36.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/36.mp3"
        },
        {
            name: "Cours 37 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/37.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/37.mp3"
        },
        {
            name: "Cours 38 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/38.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/38.mp3"
        },
        {
            name: "Cours 39 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/39.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/39.mp3"
        },
        {
            name: "Cours 40 : Les règles de tadjwid",
            cover: "https://bases-islam.b-cdn.net/images/qoran/tadjwid/40.jpg",
            audio: "https://bases-islam.b-cdn.net/courses/qoran/tadjwid/40.mp3"
        }
    ]
  },
]

export default qoranCourses;