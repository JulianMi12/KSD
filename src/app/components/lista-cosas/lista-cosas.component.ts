import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['./lista-cosas.component.css']
})
export class ListaCosasComponent implements OnInit {
ListaCosas: Observable<any[]> | any;
  constructor(firestore:AngularFirestore) {
    this.ListaCosas = firestore.collection('cosas').valueChanges();

  }

  ngOnInit(): void {
  }

}
