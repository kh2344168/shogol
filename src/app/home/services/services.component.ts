import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  cards = [
    {
      imageSrc: '../../../assets/work.jpg',
      name: 'عدنان السوري',
      specialties: 'تصميم مواقع, جافا سكريبت',
      rating: 4.2,
      numReviews: 22,
      expertise: 'متخصصو تطبيقات الويب التقدمية',
      description: 'مصمم جرافيك مرحبا، أنا أبو عدنان السوري، أعمل لدي شركة فرانكو للادوات الصحية ولدي العديد من الخبرات في هذا المجال',
      price: '250 ريال',
      timeAgo: 'قبل 30 دقيقة'
    },
    {
      imageSrc: '../../../assets/work.jpg',
      name: 'عدنان السوري',
      specialties: 'تصميم مواقع, جافا سكريبت',
      rating: 4.2,
      numReviews: 22,
      expertise: 'متخصصو تطبيقات الويب التقدمية',
      description: 'مصمم جرافيك مرحبا، أنا أبو عدنان السوري، أعمل لدي شركة فرانكو للادوات الصحية ولدي العديد من الخبرات في هذا المجال',
      price: '250 ريال',
      timeAgo: 'قبل 30 دقيقة'
    },
    {
      imageSrc: '../../../assets/work.jpg',
      name: 'عدنان السوري',
      specialties: 'تصميم مواقع, جافا سكريبت',
      rating: 4.2,
      numReviews: 22,
      expertise: 'متخصصو تطبيقات الويب التقدمية',
      description: 'مصمم جرافيك مرحبا، أنا أبو عدنان السوري، أعمل لدي شركة فرانكو للادوات الصحية ولدي العديد من الخبرات في هذا المجال',
      price: '250 ريال',
      timeAgo: 'قبل 30 دقيقة'
    },
    {
      imageSrc: '../../../assets/work.jpg',
      name: 'عدنان السوري',
      specialties: 'تصميم مواقع, جافا سكريبت',
      rating: 4.2,
      numReviews: 22,
      expertise: 'متخصصو تطبيقات الويب التقدمية',
      description: 'مصمم جرافيك مرحبا، أنا أبو عدنان السوري، أعمل لدي شركة فرانكو للادوات الصحية ولدي العديد من الخبرات في هذا المجال',
      price: '250 ريال',
      timeAgo: 'قبل 30 دقيقة'
    },
    // Add more objects as needed
  ];
}
