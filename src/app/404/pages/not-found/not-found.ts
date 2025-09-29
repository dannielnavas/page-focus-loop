import { Component } from '@angular/core';
import { NgxFuzzyTextComponent } from '@omnedia/ngx-fuzzy-text';

@Component({
  selector: 'app-not-found',
  imports: [NgxFuzzyTextComponent],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {}
