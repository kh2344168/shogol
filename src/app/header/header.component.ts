import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  myObjectArray: { name: string, state: string }[] = [
    {  name: 'الرئسية' , state : 'active'},
    {  name: 'الاعلانات'  ,state : ''  },
    {  name: 'الطلبات',  state : ''  },
    {  name: 'المشتغلين'  , state : '' },
    {  name: 'تواصل معنا',  state : ''}
  ];
  show : boolean = false ;

  onshow(){
    this.show = !this.show ;
    console.log(this.show)
  }
}
