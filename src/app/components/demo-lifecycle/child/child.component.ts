import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
  DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() userList: string[] = [];
  @ViewChild('titleText') titleTextRef: ElementRef;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called ');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit is called ');
    console.log(this.titleTextRef);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called');
    console.log(this.titleTextRef);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called');
  }

  public logUserList(): void {
    console.log(this.userList);
  }
}
