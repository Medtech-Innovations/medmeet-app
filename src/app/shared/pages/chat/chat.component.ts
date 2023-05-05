import {Component} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {
  doctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      status: 'Online',
      speciality: 'Cardiologist',
    },
    {
      id: 2,
      name: 'Dr. Sarah Smith',
      status: 'Offline',
      speciality: 'Pediatrician',
    },
    {
      id: 3,
      name: 'Dr. Alex Johnson',
      status: 'Online',
      speciality: 'General Medicine',
    }
  ];
}
