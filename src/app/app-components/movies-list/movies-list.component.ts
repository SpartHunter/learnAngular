import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/movie";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

 readonly listOfMovies: Movie[];

  constructor(private movieService: MovieService) {
    this.listOfMovies = movieService.getMovies();
  }

  ngOnInit(): void {
    console.log(this.listOfMovies)
  }

}
