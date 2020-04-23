import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '@core/models/interfaces/contact.interface';
import { ContactService } from '@core/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService, private route: Router) {
    this.buildContact();
  }

  ngOnInit(): void {
  }

  buildContact() {
    this.contact = {
      name: '',
      surname: '',
      description: '',
      sex: 'Maculino',
      email: '',
      telephone: '',
      company: '',
    };
  }

  addContact() {
    console.log(this.contact);
    this.contactService.addContact(this.contact);
    this.route.navigate(['/contacts', 'list-contact']);
  }

}
