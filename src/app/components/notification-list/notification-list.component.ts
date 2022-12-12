import { Component } from '@angular/core';
import { NOTIFICACOES } from 'src/app/static/notificacoes';

interface Notificacao {
  aplicativo: string;
  mensagem: string;
  data: string;
  lido: boolean;
}

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent {
  notificacoes: Notificacao[] = NOTIFICACOES;

  marcarLido(notificacao: Notificacao) {
    notificacao.lido = true;
  }
}
