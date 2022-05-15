import { Injectable } from '@angular/core';
import {Movie} from "../interfaces/movie";

const MOVIES: Movie[] = [
  {
    id: "1",
    title: "Black Widow",
    director: "Cate Shortland",
    storyline: "Natasha Romanoff, " +
      "aka Black Widow, confronts the darker parts of her ledger when " +
      "a dangerous conspiracy with ties to her past arises. Pursued by " +
      "a force that will stop at nothing to bring her down, Natasha must " +
      "deal with her history as a spy, and the broken relationships left " +
      "in her wake long before she became an Avenger."
  },
  {
    id: "2",
    title: "Cruella",
    director: "Craig Gillespie",
    storyline: "Estella is a young and clever grifter who's " +
      "determined to make a name for herself in the fashion world. " +
      "She soon meets a pair of thieves who appreciate her appetite for " +
      "mischief, and together they build a life for themselves on the streets " +
      "of London. However, when Estella befriends fashion legend Baroness von Hellman, " +
      "she embraces her wicked side to become the raucous and revenge-bent Cruella."
  },
  {
    id: "3",
    title: "Eternals",
    director: "Chloe Zhao",
    storyline: "The saga of the Eternals, a race of immortal beings who lived on Earth " +
      "and shaped its history and civilizations."
  },
  {
    id: "4",
    title: "Raya and the Last Dragon",
    director: "Don Hall",
    storyline: "Long ago, in the fantasy world of Kumandra, humans and dragons lived together " +
      "in harmony. However, when sinister monsters known as the Druun threatened the land, " +
      "the dragons sacrificed themselves to save humanity. Now, 500 years later, those same " +
      "monsters have returned, and it's up to a lone warrior to track down the last dragon " +
      "and stop the Druun for good."
  },
  {
    id: "5",
    title: "The Finest Hours",
    director: "Craig Gillespie",
    storyline: "Le 18 février 1952, une gigantesque tempête s'abat sur la Nouvelle-Angleterre. " +
      "Près des côtes de Cape Cod, deux pétroliers se brisent en deux, ballottés par des vagues " +
      "monstrueuses. Les marins de l'un d'eux, le SS Pendelton, trouvent refuge dans la poupe du navire."
  },
  {
    id: "6",
    title: "Nomadland",
    director: "Chloe Zhao",
    storyline: "Fern était une veuve fort travaillante entamant la soixantaine lorsqu'une centrale " +
      "ferme ses portes, la laissant sans emploi et transformant la région en village fantôme."
  }

]

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[]{
    return MOVIES;
  }

  getMovie(id: string): Movie | undefined{
    return MOVIES.find((current: Movie) => (current.id === id));
  }
}
