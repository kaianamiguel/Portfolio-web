import { Component } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Repository } from 'src/app/types/repository.interface';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.scss']
})
export class MainProjectsComponent {
  repositories: Repository[] = [];

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.gitHubService.getRepos().subscribe({
      next: (repositories) => {
        this.repositories = (repositories) ?? []
        console.log(repositories)
      }
    })
  }
}
