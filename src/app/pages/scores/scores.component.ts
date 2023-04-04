import { Score } from './models/score.model';
import { CONSTANTS } from 'src/app/components/constants/constants';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scoreList: Score[];

  constructor(
    private httpService: HttpClient
  ) {}

  ngOnInit(): void {

    this.httpService.get(`${environment.baseUrl}${CONSTANTS.GET_SCORES_URL}`)
    .subscribe((response: any) => {      

      this.scoreList = response.scores.map( (score: any, index: number) => {
        return {
          position: index + 1,
          player: score.player,
          victories: score.victories,
          matches: score.matches
        }
      });      
    });
  }
}
