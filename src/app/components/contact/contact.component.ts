import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

// estos valores en https://www.emailjs.com/  Account > API Keys y Email Services
const SERVICE_ID = 'service_6709dcz';
const TEMPLATE_ID = 'template_qgp6zmj';
const PUBLIC_KEY = 'bhtEQRwcF90qwte3n';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: FormGroup;
  sending = false;
  sent = false;
  error = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.invalid) return;
    this.sending = true;
    this.sent = false;
    this.error = false;

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: this.form.value.name,
        from_email: this.form.value.email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      }, PUBLIC_KEY);
      this.sent = true;
      this.form.reset();
    } catch {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }
}
