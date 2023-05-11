import { Component, HostListener, OnInit, ElementRef, ChangeDetectionStrategy  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { GraphProfil } from './models/profile';
import { RequestService } from './request.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  yPosition: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.yPosition = window.pageYOffset;
    this.isScrolled = window.pageYOffset > 0;
    if (this.yPosition > 1200 ) {
      this.toc = 'position: fixed; top: 156px; right:271px;';
    } else {
      this.toc = 'position: static;';
    }
  }

  toc="position: static;";

  constructor (private elementRef: ElementRef, private http: HttpClient, private testService: DataService, private requestService: RequestService) {
  }



  editorOptions = {
    fontSize: '15px',
    highlightActiveLine: true,
    highlightSelectedWord: true,
    readOnly: true,
    showPrintMargin: false,
    showGutter: true,
    showLineNumbers: true,
    useWorker: false,
    minLines: '1', 
    maxLines: '60'
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
    "</mat-tab-group>\n",
    "ng gernate component [ServiceName]",
    "ng g c [ServiceName]",
    'ng g c button',
    'ng g c output',
    'ng g s data'
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
  exampleService: any;
  dataService:any;
  buttonTs: any;
  outputTs: any;
  FormModule: any;
  FormTs: any;
  formHtml: any;
  dynamicFormModel: any;
  dynamicFormTs: any;
  dynamicFormHtml: any;

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
    this.http.get('./assets/exampleService.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.exampleService = data;
    });
    this.http.get('./assets/dataService.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.dataService = data;
    });
    this.http.get('./assets/buttonTs.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.buttonTs = data;
    });
    this.http.get('./assets/outputTs.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.outputTs = data;
    });
    this.http.get('./assets/form/appModuleForm.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.FormModule = data;
    });
    this.http.get('./assets/form/formTs.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.FormTs = data;
    });
    this.http.get('./assets/form/formHtml.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.formHtml = data;
    });
    this.http.get('./assets/dynamicForm/model.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.dynamicFormModel = data;
    });
    this.http.get('./assets/dynamicForm/ts.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.dynamicFormTs = data;
    });
    this.http.get('./assets/dynamicForm/html.txt', { responseType: 'text' }).subscribe((data: any) => {
      this.dynamicFormHtml = data;
    });
  }

  isScrolled = false;

  request = new FormGroup({
    token: new FormControl('', Validators.required)
  })

  GetRes:any;
  GetRequest(){
    this.GetRes = this.requestService.Get(this.request.value.token).subscribe( data => {
      this.GetRes = data;
      console.log(data)
    });
  }

  getVar(): string {
    return this.testService.Zahl.toString()
  }

  scrollToSection(sec:string) {
    const section = this.elementRef.nativeElement.querySelector('#'+sec);
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
