import { Component, OnInit } from '@angular/core';
import { ContactService } from '@core/services/contact.service';
import { Contact } from '@core/models/interfaces/contact.interface';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  listContacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.listContacts = this.contactService.getAllContacts();
    if (this.listContacts.length === 0) {
      this.contactService.getData('assets/data/contacts.json')
        .subscribe(list => {
          this.listContacts = list;
        });
    }
  }

}
