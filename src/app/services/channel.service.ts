import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChannelList } from '../interfaces/channel-list';
import { Channels, Programs } from '../interfaces/channels';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  channels: Channels[];
  program: Programs;

  constructor() {
    this.getChannels().subscribe(channels => 
      this.channels = channels)
  }

  getChannels(): Observable<Channels[]>{
    return of(ChannelList);
  }

  getProgram(programId){
    this.channels.forEach(channel => {
      for(let i=0; i<channel.programs.length; i++){
        let program = channel.programs[i];
        if(program.id == programId){
          this.program = program
        }
      }
    })
    return this.program;
  }

}
