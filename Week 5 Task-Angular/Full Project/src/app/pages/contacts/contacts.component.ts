import { Component, OnInit } from '@angular/core';
import { contact } from '../../model/contact';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactlist: contact[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getContacts().subscribe({
      next:(result:contact[])=>this.contactlist=result,
      error:(error)=>console.log(error)
    });
  }
}
