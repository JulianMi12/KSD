import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CosasService } from './../../services/cosas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nueva-cosa',
  templateUrl: './nueva-cosa.component.html',
  styleUrls: ['./nueva-cosa.component.css']
})
export class NuevaCosaComponent implements OnInit {
  titulo: string = 'INSCRIPCIÓN DE CURSO';
  createCosa: FormGroup;
  enviado = false;
  router: any;
  id: string | null;
  constructor(private fb: FormBuilder, private cosaService: CosasService,private toastr: ToastrService, private aRoute: ActivatedRoute)  {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.createCosa = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required]
    }
    );
  }

  ngOnInit(): void {

  this.esEditar()

  }

  agregarCosa() {
    this.enviado = true;

    if (this.createCosa.invalid) {
      return;
    }

    if (this.id === null) { /** NUEVA COSA */

    const cosa: any = {

      codigo: this.createCosa.value.codigo,
      nombre: this.createCosa.value.nombre,
      apellido: this.createCosa.value.apellido,
      curso: this.createCosa.value.curso,
    }
    this.cosaService.agregarCosa(cosa).then(() => {
      console.log("registro exitoso");
      this.toastr.success('La cosa se agregó con éxito a la BD.', 'Cosa registrada', {
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(["nueva-cosa"]);
    }).catch(error => {
      console.log(error);
    });
  }// cierra IF
  else { /** EDITA COSA */
    const cosa: any = {
      codigo: this.createCosa.value.codigo,
      nombre: this.createCosa.value.nombre,
      apellido: this.createCosa.value.apellido,
      curso: this.createCosa.value.curso,
    }
    this.cosaService.editarCosa(this.id, cosa).then(() =>
    this.toastr.info('cosa modificada con exito.', 'cosa modificada', {
      positionClass: 'toast-bottom-right'
    })
    );
    this.router.navigate(['lista-cosas']);
  }
}//cierra agregar cosa

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'MODIFICAR CURSO';
      this.cosaService.getCosa(this.id).subscribe(data => {
        this.createCosa.setValue({
          codigo: data.payload.data()['codigo'],
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          curso: data.payload.data()['curso']
        });
      });
    } else {

    }
  }

}
