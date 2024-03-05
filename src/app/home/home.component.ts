import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  filteredContactsList: any[] = [];
  contactsList: any[] = [];

  constructor(private dataService: DataService) {}

  filterResults(text: string) {
    if (!text) {
      this.filteredContactsList = this.contactsList;
      return;
    }

    this.filteredContactsList = this.contactsList.filter((contact) =>
      contact?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.contactsList = res;
      this.filteredContactsList = this.contactsList;
    });
  }
}
