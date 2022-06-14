import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*  abc=[     |  
    {           |
                |      (define array)
    }           |
  ]   */
  /*abstract: string[] = [];     |
                                 |
 isCollapsedCyc!: boolean[];     | (((declare all three arry)))
                                 |
 tirth:number[] | undefined;     |  */ 

  constructor( ) { }
  
  ngOnInit(): void {
  }

}
