import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue'),
    },
    {
      path: '/internal',
      name: 'internalPrograms',
      component: () => import('../views/InternalProgramsView.vue'),
    },
    {
      path: '/ministryPart',
      name: 'ministryPart',
      component: () => import('../views/MinistryPartView.vue'),
    },
    {
      path: '/overseas',
      name: 'overseasPrograms',
      component: () => import('../views/OverseasProgramsView.vue'),
    },
    {
      path: '/regionalStudy',
      name: 'regionalStudy',
      component: () => import('../views/RegionalStudyView.vue'),
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('../views/BoardView.vue'),
    },
    {
      path: '/donation',
      name: 'donation',
      component: () => import('../views/DonationView.vue'),
    },
  ],
});

export default router;
