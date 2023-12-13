import { Component } from '@angular/core';

@Component({
  selector: 'app-best-price',
  templateUrl: './best-price.component.html',
  styleUrls: ['./best-price.component.scss']
})
export class BestPriceComponent {
  steps: string[] = [
    'أولا: ستطلب ولن تبحث وستوفر عنا البحث',
    'ثانيا: ستكشف سعر السوق للخدمة التي تبحث عنها',
    'ثالثا: ستتصفح السيرة الذكية للمشتغلين الجاهزين لخدمتك',
    'رابعا: ستختار السعر والمشتغل الأنسب لك بكل ثقة وراحة بال'
  ];
  boxes = [
    {
      icon: 'fa-solid fa-sack-dollar',
      text: 'تكشف اسعار السوق'
    },
    {
      icon: 'fa-regular fa-calendar-check',
      text: 'تكشف اسعار السوق'
    },
    // Add more objects as needed
  ];

}
