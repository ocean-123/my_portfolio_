// star-background.component.ts
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-star-background',
  templateUrl: './star-background.component.html',
  styleUrls: ['./star-background.component.css'],
  animations: [
    trigger('starAnimation', [
      state('initial', style({ left: '{{ x }}%', top: '{{ y }}%' }), { params: { x: 0, y: 0 } }),
      state('final', style({ left: '{{ x }}%', top: '{{ y }}%' }), { params: { x: 0, y: 0 } }),
      transition('initial => final', [
        animate('{{ duration }}s linear infinite', style({ left: '{{ x }}%', top: '{{ y }}%' }))
      ], { params: { x: 0, y: 0, duration: 10 } })
    ])
  ]
})
export class StarBackgroundComponent implements OnInit {
  stars: { x: number; y: number; state: 'initial' | 'final' }[] = [];
  private starCount = 100;

  ngOnInit() {
    this.generateStars();
  }

  private generateStars() {
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        state: 'initial'
      });
    }
  }
}
