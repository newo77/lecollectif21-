import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomeView.vue'),
		},
		// section accompagnement
		{
			path: '/accompagnement',
			name: 'accompagnement',
			component: () => import('../views/Accompagnement.vue'),
		},
		{
			path: '/modalite',
			name: 'modalite',
			component: () => import('../views/under_views/modalite.vue'),
		},
		{
			path: '/missions-accompagnement',
			name: 'missions-accompagnement',
			component: () =>
				import('../views/under_views/missions_accompagnement.vue'),
		},
		{
			path: '/pack-tarifs',
			name: 'pack-tarifs',
			component: () => import('../views/under_views/packs_tarifs.vue'),
		},

		// section formations
		{
			path: '/formations',
			name: 'Formations',
			component: () => import('../views/Formations.vue'),
		},
		{
			path: '/objectifs',
			name: 'objectifs',

			component: () => import('../views/under_views/objectifs.vue'),
		},
		{
			path: '/connaissance-des-aliments',
			name: 'connaissance-des-aliments',
			component: () => import('../views/under_views/connaissance_aliments.vue'),
		},
		{
			path: '/dietetique_nutrition',
			name: 'dietetique_nutrition',
			component: () => import('../views/under_views/dietetique_nutrition.vue'),
		},
		{
			path: '/GEMRCN',
			name: 'GEMRCN',
			component: () => import('../views/under_views/GEMRCN.vue'),
		},
		{
			path: '/HACCP-hygiene',
			name: 'HACCP-hygiene',
			component: () => import('../views/under_views/HACCP_hygiene.vue'),
		},
		{
			path: '/pilotage-gestion',
			name: 'pilotage_gestion',
			component: () => import('../views/under_views/pilotage_gestion.vue'),
		},
		{
			path: '/Gestions-achats',
			name: 'Gestions-achats',
			component: () => import('../views/under_views/Gestions_achats.vue'),
		},
		{
			path: '/Gestions-operationelle',
			name: 'Gestions-operationelle',
			component: () =>
				import('../views/under_views/Gestions_operationelle.vue'),
		},

		// section nos valeurs

		{
			path: '/valeurs',
			name: 'valeurs',
			component: () => import('../views/Valeurs.vue'),
		},

		// section contact

		{
			path: '/contact',
			name: 'contact',
			component: () => import('../views/Contact.vue'),
		},
	],
});

export default router;
