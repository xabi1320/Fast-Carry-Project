import { ModuleWithProviders, Component } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { LandingComponent } from './components/landing/landing.component'

const appRoutes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'nosotros', component: AboutComponent},
    {path: 'testimoniales', component: TestimonialComponent},
    {path: 'contacto', component: ContactComponent}
     

]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)