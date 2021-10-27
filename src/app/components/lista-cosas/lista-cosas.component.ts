import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Component, OnInit, Query } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['./css/bootstrap.min.css']
})
export class ListaCosasComponent implements OnInit {

ListaCosas: Observable<any[]> | any;
  constructor(firestore:AngularFirestore) {
    this.ListaCosas = firestore.collection('cosas').valueChanges();

  }

  ngOnInit(): void {
  }

}
