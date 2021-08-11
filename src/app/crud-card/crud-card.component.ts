import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-card',
  templateUrl: './crud-card.component.html',
  styleUrls: ['./crud-card.component.css']
})
export class CrudCardComponent implements OnInit {
  quest_ans:Array<Object> = [
    {id:1,q:'',a:''},
    {id:2,q:'',a:''}
  ];
 constructor() { 
 }

 ngOnInit(): void {
 }
 addCard(){
   this.quest_ans.push( {id:this.quest_ans.length+1,q:'',a:''});
 }

}



