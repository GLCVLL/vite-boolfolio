import {createRouter, createWebHistory} from 'vue-router';

// importo le pagine

import HomePage from '../pages/HomePage.vue';
import ProjectPage from '../pages/ProjectPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';


//creiamo il router

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {  path:'/', name:'home', component: HomePage},
        {  path:'/projects/:id', name:'project-detail', component: ProjectDetailPage},
        {  path:'/project', name:'project', component: ProjectPage},
        {  path:'/not-found', name:'not-found', component: NotFoundPage},
        {  path:'/:patchMatch(.*)*', redirect: '/not-found'},
    ]
});

export { router }
