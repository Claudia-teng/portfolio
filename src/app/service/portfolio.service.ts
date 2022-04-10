import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contact, ResponseMessage, Work } from "src/app/model";

@Injectable({ providedIn: 'root' })

export class PortfolioService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAllWorks(): Observable<Array<Work>> {
    return this.http.get<Array<Work>>(`https://portfolio-api-claudia.herokuapp.com/works`);
  }

  public sendContactForm(contactForm: Contact): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(`https://portfolio-api-claudia.herokuapp.com/contact`, contactForm);
  }
}



