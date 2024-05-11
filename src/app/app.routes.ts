import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'portfolio-website', loadChildren:()=>import('./portfolio/portfolio.module').then(m=>m.PortfolioModule)
    }
];
