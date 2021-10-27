
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Component, OnInit, Query } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: ['./css/bootstrap.min.css']

})
export class EntidadComponent implements OnInit {

  ListaDocente: Observable<any[]> | any;
  constructor(firestore:AngularFirestore) {
    this.ListaDocente = firestore.collection('docentes').valueChanges();

  }
  ngOnInit(): void {
  }

}

