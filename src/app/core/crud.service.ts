import { Injectable } from "@angular/core";
import {
  AngularFirestore,
} from "@angular/fire/firestore";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()
export class CrudService {
  constructor(
    public firestore: AngularFirestore,
    public sanitizer: DomSanitizer
  ) { }

  public read(endPoint) {
    return this.firestore.collection(endPoint, ref => ref.orderBy('date','desc')).valueChanges();
  }

  public latestRead(endPoint){
    return this.firestore.collection(endPoint, ref => ref.orderBy('date','desc').limit(1)).valueChanges()
  }

  public filterRead(endPoint, filterKey, filterValue) {
    return this.firestore.collection(endPoint, ref => ref.where(filterKey, '==', filterValue).orderBy('date','desc')).valueChanges()
  }

  public cleanLink(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
