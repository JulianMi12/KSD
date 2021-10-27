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
  constructor(private fb: FormBuilder, private cosaService: CosasService) {
    this.createDocente = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cod_curso: ['', Validators.required],
      nom_curso: ['', Validators.required],
      area: ['', Validators.required]
    }
    );
  }
  ngOnInit(): void {
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
      cod_curso: this.createDocente.value.cod_curso,
      nom_curso: this.createDocente.value.nom_curso,
      area: this.createDocente.value.area
        }

this.cosaService.agregarDocente(docente).then(() => {

      console.log("registro exitoso");

    }).catch((error: any) => {
      console.log(error);
    })

  }


}
