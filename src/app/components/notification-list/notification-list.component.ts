import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
export class NotificationListComponent implements OnInit, DoCheck {
  notificacoes: Notificacao[] = NOTIFICACOES;
  notificacoesFiltradas: Notificacao[] = [];
  filtro: string = '';

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filtraNotificacoes();
  }

  ngDoCheck(): void {
    this.filtraNotificacoes();
  }

  filtraNotificacoes(): void {
    this.filtro = this.route.firstChild!.snapshot.params['filtro'];
    this.notificacoesFiltradas = [];
    switch (this.filtro) {
      case 'todos':
        this.notificacoesFiltradas = this.notificacoes;
        break;
      case 'lidos':
        this.notificacoes.forEach((notificacao) => {
          if (notificacao.lido) this.notificacoesFiltradas.push(notificacao);
        });
        break;
      case 'nao-lidos':
        this.notificacoes.forEach((notificacao) => {
          if (!notificacao.lido) this.notificacoesFiltradas.push(notificacao);
        });
        break;
    }
  }

  marcarLido(notificacao: Notificacao) {
    notificacao.lido = true;
  }
}
