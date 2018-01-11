import * as angular from 'angular';
import {PaginationComponent} from './pagination.component';

export const PaginationModule = angular.module('paginationModule', [])
  .component('pagination', PaginationComponent)
  .name;

export class PaginationModel {
  maxSize: number = 5;
  currentPage: number = 1;
  itemsPerPage: number = 25;
  totalItems: number;
  showPagination: boolean;
  showItemsPerPageSelection: boolean = true;

  items: any[];

  constructor(private allItems: any[], itemsPerPage?: number) {
    this.totalItems = this.allItems.length;
    if (itemsPerPage !== undefined) {
      this.itemsPerPage = itemsPerPage;
      this.showItemsPerPageSelection = false;
    }
    this.showPagination = (this.totalItems > this.itemsPerPage);
    this.pageChanged();
  }

  pageChanged(): void {
    let start: number = (this.currentPage - 1) * this.itemsPerPage;
    let end: number = start + this.itemsPerPage;

    if (this.totalItems < end) {
      end = this.totalItems;
    }

    this.items = [];
    for (var i = start; i < end; i++) {
      this.items.push(this.allItems[i]);
    }
  };

  get first(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get last(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  get percent(): number {
    return this.last / this.totalItems * 100;
  }

}
