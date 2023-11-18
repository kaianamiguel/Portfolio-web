import { Repository } from 'src/app/types/repository.interface';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  repositories: Repository[] = [];

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.gitHubService.getRepos().subscribe({
      next: (response) => this.repositories = response.body ?? []
    })
  }
}
