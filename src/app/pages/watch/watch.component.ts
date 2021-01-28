import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ChannelService } from 'src/app/services/channel.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  storedTheme: any = localStorage.getItem('theme-color');
  
  programId: any;
  program: any;

  arrowLeft = faArrowLeft;

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer,
    private themeService: ThemeService,
  ) { 
    themeService.recieveTheme().subscribe(theme => this.storedTheme = theme)
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.programId = params['programId'];
        this.program = this.channelService.getProgram(this.programId);
      })
  }

  goBack(){
    this.location.back();
  }

  transform(url){
    let youtubeURL = "https://www.youtube.com/embed/"
    let urlFix = url.split("=");
    let embed = urlFix[1].split("&");
    youtubeURL += embed[0];
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL + '?ecver=2');
  }

  NewTransform(url){
    let youtubeURL = "https://www.youtube.com/embed/"
    let urlFix = url.split("=");
    let embed = urlFix[1].split("&");
    youtubeURL += embed[0];
    return youtubeURL 
  }
}
