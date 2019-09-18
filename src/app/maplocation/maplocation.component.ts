import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maplocation',
  templateUrl: './maplocation.component.html',
  styleUrls: ['./maplocation.component.scss']
})
export class MaplocationComponent implements OnInit {
  latitude = 40.63986;
  longitude = 22.94161;
  zoom = 15;

  constructor() {}

  ngOnInit() {}
}
