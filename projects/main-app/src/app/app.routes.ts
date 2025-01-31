import { Routes } from '@angular/router';
import { canActivateAuthRole } from '../../../angular-keycloak/src/lib/guards/auth-role.guard';
import { BooksComponent } from './components/books/books.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'books',
        component: BooksComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'view-books' }
    },
    // {
    //     path: 'profile',
    //     component: UserProfileComponent,  // build error?
    //     canActivate: [canActivateAuthRole],
    //     data: { role: 'view-profile' }
    // },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: '**', component: NotFoundComponent }
];
