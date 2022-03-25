import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contact, ResponseMessage } from "src/app/model";

@Injectable({ providedIn: 'root' })

export class PortfolioService {
  constructor(
    private http: HttpClient,
  ) { }

  public sendContactForm(contactForm: Contact): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`https://portfolio-api-claudia.herokuapp.com/contact`, contactForm);
  }
}



