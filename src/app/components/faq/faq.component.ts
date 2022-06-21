import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Faq } from '../../interfaces/faq';
@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faqs: Faq[] = [];
  openIndex: any = undefined;
  constructor(private apiSrv: ApiServiceService) {}

  ngOnInit(): void {
    this.getFaqs();
  }

  getFaqs() {
    this.apiSrv.getData('/assets/faqs.json').subscribe({
      next: (data) => {
        this.faqs = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  handleClick(index: number) {
    this.openIndex = this.openIndex === index ? undefined : index;
  }
}
