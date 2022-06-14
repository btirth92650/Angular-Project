import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from 'src/app/models/Todo';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!: Todo[];
  inputTodo:string = "";
  constructor( private snak:MatSnackBar) { }

  ngOnInit(): void { 
    this.todos=[
      {
        content:'First todo',
        completed: false
      },
      {
        content:'Second todo',
        completed: false
      },
      {
        content:'Tirth Patel',
        completed: true
      },
    ]
  }
  toggleDone( id:number){
    this.todos.map((v,i)=> {
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }

   deleteTodo(id:number){
     this.todos=this.todos.filter((v,i)=>i !==id);
     //alert('Are you sure! you want to DELET this todo.')
   }

   addTodo (){ 
    {
            const val = this.inputTodo; 
      if(val.trim().length == 0){
        alert('fiels must not be blank');
        return; 
      } 
    }
    //  alert('succesfully add your todo')

    Swal.fire({
      icon: 'success',
      title: 'succesfully add your todo',
    })

     this.todos.push({
       content: this.inputTodo,
       completed: false 
     });
     
     this.inputTodo="";
     
          
   }
}




// this.snak.open('fiels must not be blank','',{
//   duration: 3000, });      horizontalPosition:'center', verticalPosition:'bottom', 
