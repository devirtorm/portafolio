import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent { }
