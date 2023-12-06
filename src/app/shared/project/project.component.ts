import { Component, Input } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() title: string = '';
  @Input() tag: string = '';
  @Input() summary: string = '';
}
