const numbers = ["5", "2", "3", "4"];

let nums = numbers.find((n) => {
  return n.includes("4"); // 4
});
let nums2 = numbers.find((n) => n.indexOf("5") === 0); // 5

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];
let nums3 = movies.find((movie) => {
  // if (movie.score > 70) {
  //   console.log(movie.title);
  // }
  if (movie.title === "Alien") console.log(movie);
});
