import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  columnas:any[] = [];
  personas: any[] = [];

  constructor(private service: PersonaService) { }

  ngOnInit(): void {
    this.obtenerTodos();
    this.columnas = [
      {header: 'Código', field:'codigo'},
      {header: 'Nombre', field: 'nombre'}, 
      {header: 'Apellido', field: 'apellido'},
      {header: 'Fecha Nacimiento', field: 'fechaNacimiento'},

    ];
  }

  
  obtenerTodos(){
    this.service.obtenerTodos()
    .subscribe(data=>{
      this.personas = data;
      console.log(data);
    });
  }
}
