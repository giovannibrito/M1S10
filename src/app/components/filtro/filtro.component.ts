import { Component, EventEmitter, Output } from '@angular/core';
import { BOTOES } from 'src/app/static/lista-botoes';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent {
  botoes: string[] = BOTOES;
  @Output() clickBotao = new EventEmitter<string>();
}
