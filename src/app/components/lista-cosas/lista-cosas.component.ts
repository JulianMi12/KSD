import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Component, OnInit, Query } from '@angular/core'
import { Observable } from 'rxjs'
import { ToastrService } from 'ngx-toastr';
import { CosasService } from 'src/app/services/cosas.service';

@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['css/bootstrap.css']
})
export class ListaCosasComponent implements OnInit {

ListaCosas: Observable<any[]> | any;
cosas: any[] = [];
  constructor(firestore:AngularFirestore, private cosaService: CosasService, private toastr: ToastrService) {

    this.ListaCosas = firestore.collection('cosas').valueChanges();

  }

  ngOnInit(): void {
  }

  eliminarCosa(id: string) {
    this.cosaService.eliminarCosa(id).then(() => {
      console.log('cosa eliminada con éxito');
      this.toastr.error('registro eliminado', 'cosa eliminada', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    });
  }
  getCosas() {

    this.cosaService.getCosas().subscribe(

      data => {

        this.cosas = [];

        data.forEach((element: any) => {

          // console.log(element.payload.doc.id);

          // console.log(element.payload.doc.data());

          this.cosas.push({

            id: element.payload.doc.id,

            ...element.payload.doc.data()

          })

        });

        console.log(this.cosas);

      }

    );

  }

}
