/* tslint:disable:no-unused-variable */
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { PrivacyComponent } from './privacy.component';
import { Store, StateObservable } from '@ngrx/store';

@Component({
	selector: 'app-navbar',
	template: ''
})
class AppNavbarStubComponent { }

@Component({
	selector: 'app-footer',
	template: ''
})
class AppFooterStubComponent { }

describe('Component: Privacy', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				PrivacyComponent,
				AppNavbarStubComponent,
				AppFooterStubComponent
			],
			providers: [
				{ provide: Store, useValue: {} },
				{ provide: StateObservable, useValue: {} }
			]
		});
	});

	it('should create an instance', () => {
		const fixture = TestBed.createComponent(PrivacyComponent);
		const component = fixture.debugElement.componentInstance;
		expect(component).toBeTruthy();
	});

		it('should have an app-footer component', async(() => {
		const fixture = TestBed.createComponent(PrivacyComponent);
		const component = fixture.debugElement.componentInstance;
		const compiled = fixture.debugElement.nativeElement;

		expect(compiled.querySelector('app-footer')).toBeTruthy();
	}));

		it('should have an app-navbar component', async(() => {
		const fixture = TestBed.createComponent(PrivacyComponent);
		const component = fixture.debugElement.componentInstance;
		const compiled = fixture.debugElement.nativeElement;

		expect(compiled.querySelector('app-navbar')).toBeTruthy();
	}));
});
