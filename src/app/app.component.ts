import { Component, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,AfterViewInit{
  title = 'myportfolio';


  lightMode = false;

  toggleLightMode() {
    this.lightMode = !this.lightMode;
    document.body.classList.toggle('light-mode', this.lightMode);
    this.updateLightMode();
  }

  updateLightMode() {
    const hostElement = this.elementRef.nativeElement;
    hostElement.classList.toggle('light-mode', this.lightMode);
  }


  constructor(private renderer: Renderer2,private elementRef: ElementRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    var elem = document.getElementById("myAnimation");
    var elem1 = document.getElementById("myAnimation1");
    var elem2 = document.getElementById("myAnimation2");

    var container = document.getElementById("myContainer");
    if (elem && container&&elem1&&elem2) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const elemWidth = elem.clientWidth;
      const elemHeight = elem.clientHeight;
      const elemWidth1 = elem1.clientWidth;
      const elemHeight1 = elem1.clientHeight;
      const elemWidth2 = elem2.clientWidth;
      const elemHeight2 = elem2.clientHeight;

      let posX = 0;
      let posY = 0;
      let dirX = 1; // 1 means moving right, -1 means moving left
      let dirY = 1; // 1 means moving down, -1 means moving up

      function frame() {
        posX += dirX;
        posY += dirY;

        // Check for collision with container borders
        if (posX + elemWidth&&posX+elemWidth1&&posX+elemWidth2 >= containerWidth || posX <= 0) {
          dirX *= -1; // Reverse direction on X-axis
        }
        if (posY + elemHeight&&posY+elemHeight1&&posY+elemHeight2 >= containerHeight || posY <= 0) {
          dirY *= -1; // Reverse direction on Y-axis
        }

        elem!.style.left = posY + "px";
        elem!.style.top = posX + "px";
        elem1!.style.left = posY + "px";
        elem1!.style.top = posY + "px";
        elem2!.style.left = posX + "px";
        elem2!.style.top = posX + "px";

        requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    }
  }
  }


