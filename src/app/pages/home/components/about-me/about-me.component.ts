import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent { }
