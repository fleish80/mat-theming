import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  @Output() darkModeSWitched = new EventEmitter<boolean>();

  constructor() {}

  onDarkModeSwitched({checked}: MatSlideToggleChange): void {
    this.darkModeSWitched.emit(checked);
  }
}
