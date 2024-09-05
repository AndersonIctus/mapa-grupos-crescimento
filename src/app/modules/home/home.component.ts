import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  grupos = [
    {
      nome: 'Grupo 1',
      descricao: 'Descrição do Grupo 1',
      linkWhatsapp: 'https://chat.whatsapp.com/EXAMPLE1',
    },
    {
      nome: 'Grupo 2',
      descricao: 'Descrição do Grupo 2',
      linkWhatsapp: 'https://chat.whatsapp.com/EXAMPLE2',
    },
    // Adicione mais grupos conforme necessário
  ]
}
