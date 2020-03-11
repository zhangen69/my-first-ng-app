import { NgSwitchComponent } from './common-directives/ng-switch/ng-switch.component';
import { NgIfComponent } from './common-directives/ng-if/ng-if.component';
import { SampleServiceComponent } from './sample-service/sample-service/sample-service.component';
import { BuiltInPipesComponent } from './sample-pipes/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from './sample-pipes/custom-pipes/custom-pipes.component';
import { HomeComponent } from './home/home.component';
import { InterporationComponent } from './data-binding/interporation/interporation.component';
import { OneWayBindingComponent } from './data-binding/one-way-binding/one-way-binding.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { ReactiveFormComponent } from './ng-forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './ng-forms/template-driven-form/template-driven-form.component';
import { NgForComponent } from './common-directives/ng-for/ng-for.component';

const routes: Routes = [
  { path: 'data-binding', children: [
    { path: 'one-way-binding', component: OneWayBindingComponent },
    { path: 'two-way-binding', component: TwoWayBindingComponent },
    { path: 'interporation', component: InterporationComponent },
  ]},
  { path: 'common-directives', children: [
    { path: 'ng-if', component: NgIfComponent },
    { path: 'ng-for', component: NgForComponent },
    { path: 'ng-switch', component: NgSwitchComponent },
  ]},
  { path: 'sample-service', component: SampleServiceComponent},
  { path: 'pipes', children: [
    { path: 'built-in', component: BuiltInPipesComponent },
    { path: 'custom', component: CustomPipesComponent },
  ]},
  { path: 'ng-forms', children: [
    { path: 'reactive', component: ReactiveFormComponent },
    { path: 'template-driven', component: TemplateDrivenFormComponent },
  ]},
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
