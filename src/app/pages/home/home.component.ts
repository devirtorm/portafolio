import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BadgeComponent } from "./components/badge/badge.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BadgeComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent { }
