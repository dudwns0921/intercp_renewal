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
      path: '/sub',
      name: 'sub',
      component: () => import('../views/SubView.vue'),
      children: [
        {
          path: 'introduction',
          name: 'introduction',
          component: () => import('../views/introduction/SummaryView.vue'),
        },
        {
          path: 'internal',
          name: 'internal',
          component: () => import('../views/internal/VisionSchoolView.vue'),
        },
        {
          path: 'ministryPart',
          name: 'ministryPart',
          component: () => import('../views/ministryPart/SummaryView.vue'),
        },
        {
          path: 'overseas',
          name: 'overseas',
          component: () => import('../views/overseas/SummaryView.vue'),
        },
        {
          path: 'regionalStudy',
          name: 'regionalStudy',
          component: () => import('../views/RegionalStudyView.vue'),
        },
        {
          path: 'board',
          name: 'board',
          component: () => import('../views/BoardView.vue'),
        },
      ],
    },
    {
      path: '/donation',
      name: 'donation',
      component: () => import('../views/DonationView.vue'),
    },
  ],
});

export default router;
