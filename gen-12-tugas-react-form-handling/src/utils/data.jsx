const genresCol = [
  "action",
  "comedy",
  "drama" ,
  "thriller",
  "horror",
  "sci-fi",
  "romance"
]

let movies = [
  {
    id: 1,
    title: "Stranger Things",
    year: "2016",
    synopsis: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    poster: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a6a68144592045.628efcd3e77b5.jpg",
    genres: [
      "thriller",
    ]
  },
  {
    id: 2,
    title: "Alice in Borderland",
    year: "2020",
    synopsis: "A group of bored delinquents are transported to a parallel dimension as part of a survival game.",
    poster: "https://img.alinea.id/img/content/2021/09/18/121501/alice-in-borderland-survival-ala-gim-yang-menegangkan-I7hOTLMz5F.jpg",
    genres: [
      "thriller",
      "action",
    ]
  },
  {
    id: 3,
    title: "3 Idiots",
    year: "2009",
    synopsis: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
    poster: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/5/1/original/3_Idiots.PNG",
    genres: [
      "thriller",
      "comedy",
    ]
  },
  {
    id: 4,
    title: "12 Angry Men",
    year: "1957",
    synopsis: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    poster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    genres: [
      "thriller",
    ]
  },
  {
    id: 5,
    title: "Startup",
    year: "2020",
    synopsis: "Young entrepreneurs aspiring to launch virtual dreams into reality compete for success and love in the cutthroat world of Korea's high-tech industry.",
    poster: "https://occ-0-34-32.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVcUPxmpDBSplGbCKpg_rVEQKd1K8cCGDgdtt5aCX8-rBUX6cKjXlqjz7vcyseoV736jXyHsF2xDpoduI74KPddNLup3QfDTHHfjS21gBnU0FhfivKgEdOD3D-2l2wifdOdFDQ.jpg?r=30b",
    genres: [
      "drama", "romance"
    ]
  },
  {
    id: 6,
    title: "Interstellar",
    year: "2014",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://assets.fontsinuse.com/static/use-media-items/27/26619/full-1500x690/567022b0/interstellar_ver7_xlg.jpeg",
    genres: [
      "sci-fi", "action"
    ]
  }
]

function getAllMovies(){
  return movies
}

function getMovie(id){
  const movie = movies.find((movie) => movie.id === id)
  return movie
}

function addMovie({title, year, synopsis, poster, genres}){
  movies = [...movies, {
    id: new Date().getTime(),
    title,
    year,
    synopsis,
    poster,
    genres
  }]
}

function deleteMovie(id){
  const newMovies = movies.filter((movie) => movie.id !== id)
  movies = newMovies
}

export {
  genresCol,
  getAllMovies,
  getMovie,
  addMovie,
  deleteMovie
}