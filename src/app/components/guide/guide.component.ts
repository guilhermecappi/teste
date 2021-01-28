import { Component, OnInit } from '@angular/core';
import { faBars, faChevronDown, faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Channels } from 'src/app/interfaces/channels';
import { ChannelService } from 'src/app/services/channel.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');

  channels: Channels[];
  hours = [];

  weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  date = new Date;
  markerWidth: number = this.setMarkerWidth();
  watchedPosition: number = this.setWatchedPosition();
  entireDay = 48*210;

  weekday = this.date.getDay();
  day = this.date.getDate();

  arrowRight = faChevronRight;
  arrowLeft = faChevronLeft;
  arrowDown = faChevronDown;

  constructor( private channelService: ChannelService, private themeService: ThemeService ) {
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme);
    this.getChannels();
    this.populateHours();
  }

  ngOnInit(): void {
  }

  getChannels(){
    this.channelService.getChannels().subscribe(
      channels => this.channels = channels
    )
  }

  populateHours(){
    let date = new Date;
    
    date.setHours(0);
    date.setMinutes(0);

    let hour = date.getHours();
    let minute = date.getMinutes();

    for( var i = 0; i < 48; i++){
      this.hours.push(`${hour}:${minute}`)
      if(minute <= 60){
        minute = minute + 30;
      }
      if(minute == 60){
        minute = 0;
        hour++
      }
    }
  }

  setMarkerWidth(){
    return this.date.getHours() * 60 + this.date.getMinutes();
  }

  setWatchedPosition(){
    let hours = this.date.getHours()*2;
    let minutes = 0;
    if(this.date.getMinutes() >= 30){
      minutes = 1;
    }
    let position = hours + minutes;
    if(position <= 42){
      return position;
    }
    else if(position > 42){
      return position = 42;
    }
    
  }

  next(){
    if(this.watchedPosition < 42){
      this.watchedPosition += 1;
    }
  }

  prev(){
    if(this.watchedPosition > 0){
      this.watchedPosition -= 1;
    }
  }

  goBack(){
    this.watchedPosition = this.setWatchedPosition();
  }
  
}
