import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  version = '0.0.10'
  grupos = [
    {
      nome: 'Grupo Teste',
      descricao: 'Esse é um grupo teste de GCs',
      linkWhatsapp: 'https://chat.whatsapp.com/JyyCpKh4UlpDR9i4vp44db',
    },
    {
      nome: 'Grupo 2',
      descricao: 'Descrição do Grupo 2',
      linkWhatsapp: 'https://chat.whatsapp.com/EXAMPLE2',
    },
    // Adicione mais grupos conforme necessário
  ]

  ngOnInit(): void {}
}
