import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CosasService } from './../../services/cosas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-nueva-cosa',
  templateUrl: './nueva-cosa.component.html',
  styleUrls: ['./nueva-cosa.component.css']
})
export class NuevaCosaComponent implements OnInit {
  createCosa: FormGroup;
  enviado = false;
  constructor(private fb: FormBuilder, private cosaService: CosasService) {
    this.createCosa = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required]
    }
    );
  }

  ngOnInit(): void {
  }

  agregarCosa() {
    this.enviado = true;
    if (this.createCosa.invalid) {

      return;

    }

    const cosa: any = {

      codigo: this.createCosa.value.codigo,
      nombre: this.createCosa.value.nombre,
      apellido: this.createCosa.value.apellido,
      curso: this.createCosa.value.curso,



    }

this.cosaService.agregarCosa(cosa).then(() => {

      console.log("registro exitoso");

    }).catch((error: any) => {
      console.log(error);
    })

  }


}
