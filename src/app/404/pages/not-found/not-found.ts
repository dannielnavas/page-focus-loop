import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxFuzzyTextComponent } from '@omnedia/ngx-fuzzy-text';

@Component({
  selector: 'app-not-found',
  imports: [NgxFuzzyTextComponent, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {}
