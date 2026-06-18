import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_6709dcz';
const EMAILJS_TEMPLATE_ID = 'template_q9p35kg';
const EMAILJS_PUBLIC_KEY  = 'bhtEQRwcF90qwte3n';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = { nombre: '', correo: '', asunto: '', mensaje: '' };

  enviando = false;
  estadoMensaje = '';
  esError = false;

  enviarMensaje() {
    this.enviando = true;
    this.estadoMensaje = '';

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        nombre:  this.formData.nombre,
        correo:  this.formData.correo,
        asunto:  this.formData.asunto,
        mensaje: this.formData.mensaje,
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      this.enviando = false;
      this.esError = false;
      this.estadoMensaje = '¡Mensaje enviado con éxito!';
      this.formData = { nombre: '', correo: '', asunto: '', mensaje: '' };
    }).catch(() => {
      this.enviando = false;
      this.esError = true;
      this.estadoMensaje = 'Error al enviar. Intentá nuevamente.';
    });
  }
}
