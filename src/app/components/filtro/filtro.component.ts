import { Component, EventEmitter, Output } from '@angular/core';
import { BOTOES } from 'src/app/static/lista-botoes';

interface Botao {
  texto: string;
  url: string;
}

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent {
  botoes: Botao[] = BOTOES;
  @Output() clickBotao = new EventEmitter<string>();
}
