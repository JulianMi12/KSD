import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class CosasService {
  constructor(private firestore: AngularFirestore) { }
  agregarCosa(cosa: any): Promise<any> {
    var ref = this.firestore.doc(`/cursos/${cosa.curso}`);
    return this.firestore.collection('cosas').add(cosa);
  }
  agregarDocente(docente: any): Promise<any> {
    var ref = this.firestore.doc(`/cursos/${docente.curso}`);


    return this.firestore.collection('docentes').add({
      codigo: docente.codigo,
      nombre: docente.nombre,
      apellido: docente.apellido,
      nombreCurso: docente.nombreCurso,
      area: docente.area
    }).then(documentReference => {

      const referencia_2: AngularFirestoreDocument<Config> = this.firestore.doc<Config>('/cursos/' + docente.curso);

      this.firestore.collection('docentes').doc(`${documentReference.id}`).update({

        'curso': referencia_2.ref

      })

    });
  }
  eliminarCosa(id: string): Promise<any> {
    console.log("*********ID: " + id);
    return this.firestore.collection('cosas').doc(id).delete();
  }
  getCosa(id: string): Observable<any> {
    return this.firestore.collection('cosas').doc(id).snapshotChanges();
  }
  getCosas(): Observable<any> {

    return this.firestore.collection('cosas').snapshotChanges();

  }
  editarCosa(id: string, data: any): Promise<any> {
    return this.firestore.collection('cosas').doc(id).update(data);
  }

  getCursos(): Observable<any> {

    return this.firestore.collection('cursos').snapshotChanges();

  }

}
