import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Document2Component } from './document2.component';

describe('Document2Component', () => {
  let component: Document2Component;
  let fixture: ComponentFixture<Document2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Document2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Document2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
