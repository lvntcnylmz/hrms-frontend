import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobPosition } from 'src/app/models/jobPosition';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.css'],
})
export class JobPositionComponent implements OnInit {
  jobPositions: JobPosition[] = [];
  dataLoaded = false;
  filterText = '';
  currentJob: JobPosition;

  constructor(
    private jobPositionService: JobPositionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getJobPositions();
  }

  getJobPositions() {
    this.jobPositionService.getJobPositions().subscribe((response) => {
      this.jobPositions = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentJob(currentJob: JobPosition) {
    this.currentJob = currentJob;
  }

  getCurrentJob(currentJob: JobPosition) {
    if (currentJob == this.currentJob) {
      return 'list-group-item list-group-item-action list-group-item-active list-group-item-dark';
    } else {
      return 'list-group-item list-group-item-action lislist-group-item-dark';
    }
  }
}
