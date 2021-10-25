import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './pages/area/area.component';
import { DepartamentComponent } from './pages/departament/departament.component';
import { HomeComponent } from './pages/home/home.component';
import { LevelComponent } from './pages/level/level.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { PositionComponent } from './pages/position/position.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maestros', component: AreaComponent },
  { path: 'maestros/area', component: AreaComponent },
  { path: 'departamento', component: DepartamentComponent },
  { path: 'nivel', component: LevelComponent },
  { path: 'informacion-personal', component: PersonalInformationComponent },
  { path: 'position', component: PositionComponent },
  { path: 'reportes', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
