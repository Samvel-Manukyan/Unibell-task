import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";

import {AudioDataModel} from "../models";

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule],
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioListComponent {
  @Output() rowClick = new EventEmitter<AudioDataModel>();
  @Input() isClickedRow?: number| null;
  @Input() audioListData: AudioDataModel[] = [];

  displayedColumns: string[] = ['id', 'audio', 'file'];
}
