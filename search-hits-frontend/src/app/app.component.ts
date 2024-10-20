import {Component} from '@angular/core';
import {SearchService} from './app-api.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText: string = null;
  queryText: string = null;
  highlightedText: string = null;
  loading: boolean = false;
  isQueryResult: boolean = false;

  constructor(
    private searchService: SearchService,
    private messageService: MessageService,
  ) {
  }

  isSearchButtonDisabled(): boolean {
    return (this.inputText === null || this.queryText === null) || (this.inputText === "" || this.queryText === "");
  }

  isClearButtonDisabled(): boolean {
    return this.inputText === null && this.queryText === null;
  }

  onSearch(): void {
    this.loading = true;
    this.searchService.searchText(this.inputText, this.queryText)
      .subscribe({
        next: (response) => {
          this.highlightedText = this.highlightMatches(response.input, response.hits);
          this.messageService.add({
            severity: 'success',
            summary: 'SUCCESS',
            detail: 'your request has been processed successfully',
            key: 'bl',
            life: 3000
          });
          this.loading = false;
          this.isQueryResult = true;
        },
        error: (error) => {
          this.highlightedText = "We are not able to proceed your request"
          this.messageService.add({
            severity: 'error',
            summary: 'ERROR',
            detail: 'error while processing your request',
            key: 'bl',
            life: 3000
          });
          this.loading = false;
          this.isQueryResult = true;
          console.log('ERROR', error);
        }
      });
  }

  onClear() {
    this.inputText = null;
    this.queryText = null;
    this.isQueryResult = false;
  }

  highlightMatches(input: string, hits: any[]): string {
    let highlightedText = input;
    hits.forEach((hit) => {
      highlightedText = highlightedText.replaceAll(hit.match, `<span class="app-highlight">${hit.match}</span>`);
    });
    return highlightedText;
  }
}
