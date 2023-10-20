import {ChangeDetectionStrategy, Component, signal, WritableSignal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

import {audioListData} from '../utils/mock-data';
import {AudioPlayerComponent} from "../audio-player/audio-player.component";
import {AudioDataModel} from "../models";
import {AudioListComponent} from "../audio-list/audio-list.component";

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule, AudioPlayerComponent, MatIconModule, AudioListComponent],
  selector: 'app-audio-container',
  templateUrl: './audio-container.component.html',
  styleUrls: ['./audio-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioContainerComponent {
  audioListData: AudioDataModel[] = audioListData;
  isClickedRow:WritableSignal<number | null> = signal(null);
  audioUrl:WritableSignal<string> = signal('');

  onRowClick(row: AudioDataModel) {
    this.audioUrl.set(row.audioUrl);
    this.isClickedRow.set(row.id);
  }

  onAudioPlayerClose() {
    this.audioUrl.set('');
    this.isClickedRow.set(null);
  }
}
