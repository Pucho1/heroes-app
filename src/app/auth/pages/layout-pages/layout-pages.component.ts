import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-layout-pages',
  templateUrl: './layout-pages.component.html',
  styleUrl: './layout-pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPagesComponent { }
