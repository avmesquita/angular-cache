import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit {

  // Dados fictícios para os cards
  public cardData = [
    { title: 'Vendas Totais', value: 'R$ 15.000', icon: 'attach_money', color: 'primary' },
    { title: 'Pedidos', value: '450', icon: 'shopping_cart', color: 'accent' },
    { title: 'Novos Clientes', value: '85', icon: 'group', color: 'warn' },
    { title: 'Taxa de Conversão', value: '3.2%', icon: 'trending_up', color: 'primary' }
  ];

  // Dados fictícios para a tabela
  public recentSales = [
    { product: 'Notebook Gamer', customer: 'João Silva', date: '25/08/2025', status: 'Entregue' },
    { product: 'Monitor Ultrawide', customer: 'Maria Oliveira', date: '24/08/2025', status: 'Em Trânsito' },
    { product: 'Mouse sem Fio', customer: 'Carlos Pereira', date: '24/08/2025', status: 'Processando' },
    { product: 'Teclado Mecânico', customer: 'Ana Costa', date: '23/08/2025', status: 'Entregue' },
    { product: 'Headset', customer: 'Pedro Souza', date: '23/08/2025', status: 'Entregue' }
  ];

  // Colunas da tabela
  public displayedColumns: string[] = ['product', 'customer', 'date', 'status'];

  constructor() { }

  ngOnInit(): void { }

  getCardColorClass(color: string): any {
    return {
      'mat-primary': color === 'primary',
      'mat-accent': color === 'accent',
      'mat-warn': color === 'warn'
    };
  }  
}
