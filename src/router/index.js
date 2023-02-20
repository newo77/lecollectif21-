import { createRouter, createWebHistory } from 'vue-router';
import Accompagnement from '../views/Accompagnement.vue'
import Modalite from '../views/under_views/Modalite.vue'
import Missions from '../views/under_views/missions_accompagnement.vue'
import Pack from '../views/under_views/packs_tarifs.vue'


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
			component: Accompagnement,
		},
		{
			path: '/accompagnement/modalite',
			name: 'modalite',
			component: Modalite,
		},
		{
			path: '/accompagnement/missions-accompagnement',
			name: 'missions-accompagnement',
			component: Missions
		},
		{
			path: '/accompagnement/pack-tarifs',
			name: 'pack-tarifs',
			component: Pack ,
		},


		// section formations
		{
			path: '/formations',
			name: 'Formations',
			component: () => import('../views/Formations.vue'),
		},
		{
			path: '/formations/objectifs',
			name: 'objectifs',

			component: () => import('../views/under_views/objectifs.vue'),
		},
		{
			path: '/formations/connaissance-des-aliments',
			name: 'connaissance-des-aliments',
			component: () => import('../views/under_views/connaissance_aliments.vue'),
		},
		{
			path: '/formations/dietetique-nutrition',
			name: 'dietetique-nutrition',
			component: () => import('../views/under_views/dietetique_nutrition.vue'),
		},
		{
			path: '/formations/GEMRCN',
			name: 'GEMRCN',
			component: () => import('../views/under_views/GEMRCN.vue'),
		},
		{
			path: '/formations/HACCP-hygiene',
			name: 'HACCP-hygiene',
			component: () => import('../views/under_views/HACCP_hygiene.vue'),
		},
		{
			path: '/formations/pilotage-gestion',
			name: 'pilotage_gestion',
			component: () => import('../views/under_views/pilotage_gestion.vue'),
		},
		{
			path: '/formations/Gestions-achats',
			name: 'Gestions-achats',
			component: () => import('../views/under_views/Gestions_achats.vue'),
		},
		{
			path: '/formations/Gestions-operationelle',
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
