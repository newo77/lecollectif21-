import { createRouter, createWebHistory } from 'vue-router';
import Accompagnement from '../views/Accompagnement.vue';
import Modalite from '../views/sub_views/Modalite.vue';
import Missions from '../views/sub_views/missions_accompagnement.vue';
import Pack from '../views/sub_views/packs_tarifs.vue';
import Formation from '../views/Formations.vue';
import Objectifs from '../views/sub_views/objectifs.vue';
import Aliments from '../views/sub_views/connaissance_aliments.vue';
import Diet from '../views/sub_views/dietetique_nutrition.vue';
import Gemrcn from '../views/sub_views/GEMRCN.vue';
import hygiene from '../views/sub_views/HACCP_hygiene.vue';
import pilotage from '../views/sub_views/pilotage_gestion.vue';
import achats from '../views/sub_views/Gestions_achats.vue';
import operationelle from '../views/sub_views/Gestions_operationelle.vue';
import Valeurs from '../views/Valeurs.vue';
import Contact from '../views/Contact.vue';

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
			component: Missions,
		},
		{
			path: '/accompagnement/pack-tarifs',
			name: 'pack-tarifs',
			component: Pack,
		},

		// section formations
		{
			path: '/formations',
			name: 'Formations',
			component: Formation,
		},
		{
			path: '/formations/objectifs',
			name: 'objectifs',

			component: Objectifs,
		},
		{
			path: '/formations/connaissance-des-aliments',
			name: 'connaissance-des-aliments',
			component: Aliments,
		},
		{
			path: '/formations/dietetique-nutrition',
			name: 'dietetique-nutrition',
			component: Diet,
		},
		{
			path: '/formations/GEMRCN',
			name: 'GEMRCN',
			component: Gemrcn,
		},
		{
			path: '/formations/HACCP-hygiene',
			name: 'HACCP-hygiene',
			component: hygiene,
		},
		{
			path: '/formations/pilotage-gestion',
			name: 'pilotage_gestion',
			component: pilotage,
		},
		{
			path: '/formations/Gestions-achats',
			name: 'Gestions-achats',
			component: achats,
		},
		{
			path: '/formations/Gestions-operationelle',
			name: 'Gestions-operationelle',
			component: operationelle,
		},

		// section nos valeurs

		{
			path: '/valeurs',
			name: 'valeurs',
			component: Valeurs,
		},

		// section contact

		{
			path: '/contact',
			name: 'contact',
			component: Contact,
		},
	],
});

export default router;
