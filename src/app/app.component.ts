import { Component, HostListener, OnInit, ElementRef, Output  } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  editorOptions = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    fontSize: '15px',
    highlightActiveLine: true,
    highlightSelectedWord: true,
    readOnly: true,
    showPrintMargin: false,
    showGutter: true,
    showLineNumbers: true,
    useWorker: false,
    minLines: '1', 
    maxLines: '50'
  };

  snippets:any[] = [
    "ng add @angular/material",
    "import { MatButtonModule } from '@angular/material/button;",
    "imports: [MatButtonModule]",
    "<button mat-raised-button color='primary'>Requests</button>",
    "import { MatIconModule } from '@angular/material/icon'; \nimports: [MatIconModule]",
    "imports: [MatIconModule]",
    "<mat-icon color='>home</mat-icon>",
    "<button mat-icon-button aria-label='Example icon button with a vertical three dot icon'>\n   <mat-icon>more_vert</mat-icon>\n</button>",
    "<button mat-raised-button>\n   <span style='color:black'>\n        <mat-icon color=''>content_copy</mat-icon>\n    </span>\n</button>",
    "import { MatTabsModule } from '@angular/material/tabs';",
    "imports: [MatTabsModule]",
    "\n<mat-tab-group>\n"+
    "   <mat-tab label='First'> Content 1 </mat-tab>\n"+
    "   <mat-tab label='Second'> Content 2 </mat-tab>\n"+
    "   <mat-tab label='Third'> Content 3 </mat-tab>\n"+
    "</mat-tab-group>\n"
  ]

  importMatButton: any;
  importMatIcon: any;
  importMatTab:any;
  designTabs: any;
  exampleArchitecture: any;
  exampleClass: any;
  exampleModelClass: any;
  exampleModelInterface: any;
  export: any = 'export class [ClassName]\nexport interface [InterfaceName]\nimport [ClassName] from "./[Verzeichnis]/"';

  ngOnInit() {
    this.http.get('./assets/importMatButton.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.importMatButton = data;
    });
    this.http.get('./assets/importMatIcon.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.importMatIcon = data;
    });
    this.http.get('./assets/importMatTab.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.importMatTab = data;
    });
    this.http.get('./assets/designTabs.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.designTabs = data;
    });
    this.http.get('./assets/exampleArchitecture.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.exampleArchitecture = data;
    });
    this.http.get('./assets/exampleClass.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.exampleClass = data;
    });
    this.http.get('./assets/exampleModelClass.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.exampleModelClass = data;
    });
    this.http.get('./assets/exampleModelInterface.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.exampleModelInterface = data;
    });
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  constructor (private elementRef: ElementRef, private http: HttpClient) {

  }

  scrollToSection(sec:string) {
    const section = this.elementRef.nativeElement.querySelector('#'+sec);
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
