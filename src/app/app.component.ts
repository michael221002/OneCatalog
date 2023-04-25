import { Component, HostListener, OnInit, ElementRef  } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  snippets = [
    "ng add @angular/material",
    "import { MatButtonModule } from '@angular/material/button;",
    "imports: [MatButtonModule]",
    "<button mat-raised-button color='primary'>Requests</button>",
    "import { MatIconModule } from '@angular/material/icon';",
    "imports: [MatIconModule]",
    "<mat-icon color='>home</mat-icon>",
    "<button mat-icon-button aria-label='Example icon button with a vertical three dot icon'><mat-icon>more_vert</mat-icon></button>",
    "<button mat-raised-button><span style='color:black'><mat-icon color=''>content_copy</mat-icon></span></button>",
    "import { MatTabsModule } from '@angular/material/tabs';",
    "imports: [MatTabsModule]",
    ["<mat-tab-group>",
    "<mat-tab label='First'> Content 1 </mat-tab>",
    "<mat-tab label='Second'> Content 2 </mat-tab>",
    "<mat-tab label='Third'> Content 3 </mat-tab>",
    "</mat-tab-group>"]
  ]


  ngOnInit(): void {
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  constructor (private elementRef: ElementRef) {

  }

  scrollToSection(sec:string) {
    const section = this.elementRef.nativeElement.querySelector('#'+sec);
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
