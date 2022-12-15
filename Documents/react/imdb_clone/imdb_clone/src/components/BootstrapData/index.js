const users = [
  {
    firstName: "Utkarsh",
    lastName: "Mehta",
    email: "utkarsh.mehta@gmail.com",
    password: "qwerty123!!",
  },
  {
    firstName: "Admin",
    lastName: "Admin",
    email: "admin@imdb.com",
    password: "admin@123",
  },
];

const login = (email, password) => {
  const user = users.filter(
    (u) => u.email === email.toLowerCase() && u.password === password
  );
  return user.length > 0
    ? {
        success: true,
        user: user[0],
      }
    : {
        success: false,
        message: "Invalid email or password!",
      };
};

const signup = (firstName, lastName, email, password) => {
  if (firstName && lastName && email && password) {
    const existing = users.filter((u) => u.email === email);
    if (existing.length > 0) {
      return {
        success: false,
        message: "Email already registered!",
      };
    } else {
      users.push({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password,
      });
      return {
        success: true,
        message: "User signed up!",
      };
    }
  } else {
    return {
      success: false,
      message: "Fields missing!",
    };
  }
};

const list = [
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/aa17005fd6e7eb3e15e32b9f9252e0aea07b50c7bd0bfe686ac45498fc6f809b._V_SX1080_.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1e71",
    rank: 2,
    name: " The Godfather",
    year: 1972,
    rating: 9.1,
    numberOfRatings: 831947138,
    yourRating: null,
    description:
      "The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart.—srijanarora-152-448595",
    tagline: "An offer you can't refuse.",
    Genre: ["crimes", "drama"],
    image:
      "https://c4.wallpaperflare.com/wallpaper/670/168/947/the-godfather-wallpaper-preview.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 3,
    name: " The Dark Knight",
    year: 2008,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as 'The Joker' appears in Gotham, creating a new wave of chaos. Batman's struggle against The Joker becomes deeply personal, forcing him to 'confront everything he believes' and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.—Leon Lombardi",
    tagline: "Why So Serious?",
    Genre: ["Action", "Crime", "Drama", "Thriller"],
    image: "https://images.indianexpress.com/2019/08/the-dark-knight-759.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 4,
    name: "The Godfather Part II",
    year: 1974,
    rating: 9.0,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image:
      "https://wolfcrow.com/wp-content/uploads/2021/09/Why-Godfather-part-2-is-Better-Film-than-Godfather-part-1.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 5,
    name: "12 Angry Men",
    year: 1957,
    rating: 9.0,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c._SX1080_.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 6,
    name: "Schindler's List",
    year: 1993,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image:
      "https://resizing.flixster.com/ezHToRtzr_GHzu0OXPF1Facu2IQ=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/614/191/9125.png",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 7,
    name: " The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image:
      "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/lotr-the-return-of-the-king-keyart-min.jpg.adapt.crop191x100.628p.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 8,
    name: " Pulp Fiction",
    year: 1994,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image:
      "https://www.epicurious.com/images/articlesguides/entertaining/partiesevents/pulp-fiction-dance_612.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 9,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image:
      "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/4/7/7/1252477_fellowship.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
  },
  {
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 10,
    name: "The Good, the Bad and the Ugly",
    year: 1996,
    rating: 8.9,
    numberOfRatings: 8319470138,
    yourRating: null,
    description:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.—J-S-Golden",
    tagline: "Fear can hold you prisoner. Hope can set you free",
    Genre: ["Drama"],
    image: "https://ychef.files.bbci.co.uk/976x549/p03j3nzf.jpg",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
  },
];

const data = {
  users: {
    users,
    login,
    signup,
  },
  movies: {
    list,
  },
};

export default data;