import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, Slides } from 'ionic-angular';
import {Deploy} from '@ionic/cloud-angular';

let itemId = -1;
let dataId = -1;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild(Slides) slidesElem: Slides;

  public items: any[] = [1, 2, 3];
  public data: any[] = null;

  constructor(
    private cd: ChangeDetectorRef,
    private deploy: Deploy,
    public navCtrl: NavController,
    private http: Http
  ) {
    this.fetch();
  }

  ionSlideDidChange() {
    const prevValue =  this.data[this.getPrevDataId()];
    Array.from(document.querySelectorAll(`.tension-id-${getPrevItemId()}`)).forEach(elem => {
      elem['innerHTML'] = prevValue;
    });
  }

  ionSlideNextStart(event) {
    itemId = getNextItemId();
    dataId = this.getNextDataId();
    
    const nextVal = this.data[this.getNextDataId()];
    
    Array.from(document.querySelectorAll(`.tension-id-${getNextItemId()}`)).forEach(elem => {
      elem['innerHTML'] = nextVal;
    });
  }

  ionSlidePrevStart() {
    itemId = getPrevItemId();
    dataId = this.getPrevDataId();
  }

  fetch() {
    const API = '/tension' || 'http://mini2-botters.rhcloud.com';
        this.http.get(API + '/test')
          .map(res => res.json())
          .subscribe(response => {
            response = response.map(elem => {
              if(elem.description.indexOf('<b>') > -1){
                return `<p class="hahaxd">
                  ${elem.description}
                </p>`;
              }else{
                return `<p class="hahaxd">${elem.title}</p>`;
              }

            })
            this.items[0] = ':D';
            this.data = response;
          });
  }
  getNextDataId(){
    return (dataId + 1) === this.data.length ? 0 : dataId + 1;
  }
  
  getPrevDataId(){
    return  (dataId - 1) === -1 ? this.data.length -1 : dataId - 1;
  }
}

function getNextItemId(){
  return (itemId + 1) === 3 ? 0 : itemId + 1;
}
function getPrevItemId(){
  return (itemId - 1) === -1 ? 2 : itemId - 1;
}