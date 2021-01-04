import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // recipe css only within the component 
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParapgrah', {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructure called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changed called', changes);
  }

  ngOnInit(): void {
    console.log('init called........................');
    console.log('test content: ' + this.header.nativeElement.textContent);
    console.log('Text content: ' +  this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngcheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked!!!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit!!');
    console.log('test content: ' + this.header.nativeElement.textContent);
    console.log('Text content: ' +  this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {  
    console.log('ngAfterViewChecked!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy.......');
  }

  
}
