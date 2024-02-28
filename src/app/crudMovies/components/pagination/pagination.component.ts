import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationServiceService } from './pagination-service.service';
import { PaginationModule } from './pagination/pagination.module';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() count: any;
  @Input() page: any;
  @Input() perPage: any;

  @Output() changePage = new EventEmitter<number>();

  pagination = new PaginationModule();

  constructor(
    private paginationService: PaginationServiceService,
  ) { }

  ngOnChanges(): void {
    this.pagination.count = this.count;
    this.pagination.perPage = this.perPage;
    this.pagination.page = this.page;
    this.pagination = this.paginationService.getPagination(
      this.pagination.count,
      this.pagination.page,
      this.pagination.perPage);
  }

  selectPage(page: number): void {
    this.changePage.emit(page);
  }

}
