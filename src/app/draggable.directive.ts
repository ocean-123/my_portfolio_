import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private isDragging = false;
  private timeout: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.timeout = setTimeout(() => {
      this.isDragging = true;
      this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
      this.renderer.addClass(this.el.nativeElement, 'dragging');
    }, 1000);
  }

  @HostListener('mouseup')
  onMouseUp() {
    clearTimeout(this.timeout);
    if (this.isDragging) {
      this.isDragging = false;
      this.renderer.removeClass(this.el.nativeElement, 'dragging');
      localStorage.setItem(this.el.nativeElement.id, JSON.stringify({
        left: this.el.nativeElement.style.left,
        top: this.el.nativeElement.style.top
      }));
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    clearTimeout(this.timeout);
    if (this.isDragging) {
      this.isDragging = false;
      this.renderer.removeClass(this.el.nativeElement, 'dragging');
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const x = event.clientX - this.el.nativeElement.offsetWidth / 2;
      const y = event.clientY - this.el.nativeElement.offsetHeight / 2;
      this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);
    }
  }

  ngOnInit() {
    const savedPosition = localStorage.getItem(this.el.nativeElement.id);
    if (savedPosition) {
      const { left, top } = JSON.parse(savedPosition);
      this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
      this.renderer.setStyle(this.el.nativeElement, 'left', left);
      this.renderer.setStyle(this.el.nativeElement, 'top', top);
    }
  }
}
