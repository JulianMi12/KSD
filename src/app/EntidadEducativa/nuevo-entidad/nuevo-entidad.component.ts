import { CosasService } from './../../services/cosas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-nuevo-entidad',
  templateUrl: './nuevo-entidad.component.html',
  styleUrls: ['./nuevo-entidad.component.css']
})
export class NuevoEntidadComponent implements OnInit {
  createDocente: FormGroup;
  enviado = false;
  cursos: any[] = [];
  cursoSeleccionado: string = "curso";
  nombreCurso: string = "";
  constructor(private fb: FormBuilder, private cosaService: CosasService) {
    this.createDocente = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cursos: ['', Validators.required],
      area: ['', Validators.required]
    }
    );
  }
  ngOnInit(): void {
    this.getCursos();
  }


  agregarDocente() {
    this.enviado = true;
    if (this.createDocente.invalid) {

      return;

    }

    const docente: any = {

      codigo: this.createDocente.value.codigo,
      nombre: this.createDocente.value.nombre,
      apellido: this.createDocente.value.apellido,
      curso: this.createDocente.value.curso,
      nombreCurso: this.nombreCurso,
      area: this.createDocente.value.area
    }

    this.cosaService.agregarDocente(docente).then(() => {

      console.log("registro exitoso");

    }).catch((error: any) => {
      console.log(error);
    })

  }
  actualizarTipo($event: any) {

    this.nombreCurso = $event.target.options[$event.target.options.selectedIndex].text;

  }

  getCursos() {

    this.cosaService.getCursos().subscribe(

      data => {

        this.cursos = [];

        data.forEach((element: any) => {

          // console.log(element.payload.doc.id);

          // console.log(element.payload.doc.data());

          this.cursos.push({

            id: element.payload.doc.id,

            ...element.payload.doc.data()

          })

        });

        console.log(this.cursos);

      }

    );

  }

}
