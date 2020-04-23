import { Injectable } from '@angular/core';

import { Contact } from '@core/models/interfaces/contact.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private listContacts: Contact[] = [];

  constructor(private http: HttpClient) { }

  getAllContacts() {
    return this.listContacts;
  }

  addContact(contact: Contact) {
    this.listContacts.push(contact);
  }

  getData(path: string) {
    return this.http.get<Contact[]>(path)
      .pipe(
        map(list => {
          this.listContacts = list;
          return list;
        })
      );
  }

}
