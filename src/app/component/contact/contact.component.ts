import { Component } from '@angular/core';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Contact } from 'src/app/model';
import { PortfolioService } from 'src/app/service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  public faPhone = faPhone;
  public faAt = faAt;
  public faLinkedin = faLinkedin;
  public faGithub = faGithub;

  public contactForm!: FormGroup;
  public processing: boolean = false;
  public sentContact: boolean = false;
  public success: boolean = false;

  constructor(private portfolioService: PortfolioService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', Validators.email],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  public onSubmit(): void {
    console.log('this.contactForm', this.contactForm)
    this.processing = true;
    const contactForm: Contact = {
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    }
    console.log('contactForm', contactForm)
    this.portfolioService.sendContactForm(contactForm).subscribe(res => {
      this.processing = false;
      this.sentContact = true;
      this.success = res.response === 'ok' ? true : false;
      this.contactForm.reset();
    });
  }
}
