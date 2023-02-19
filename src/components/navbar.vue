<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<ul>
					<li>
						<RouterLink to="/accompagnement">Accompagnement</RouterLink>
						<ul>
							<li>
								<router-link to="/modalite">Modalite</router-link>
							</li>
							<li>
								<router-link to="/missions-accompagnement"
									>Missions d'Accompagnement</router-link
								>
							</li>
							<li>
								<router-link to="/pack-tarifs">Packs et Tarifs</router-link>
							</li>
						</ul>
					</li>
				</ul>

				<RouterLink to="/formations">Formations</RouterLink>
				<ul>
					<li>
						<router-link to="/objectifs">objectifs</router-link>
					</li>
					<li>
						<router-link to="/connaissance-des-aliments"
							>Connaissance des aliments</router-link
						>
					</li>
					<li>
						<router-link to="/dietetique_nutrition"
							>dietetique | nutrition</router-link
						>
					</li>
					<li>
						<router-link to="/GEMRCN">GEMRCN</router-link>
					</li>
					<li>
						<router-link to="/HACCP-hygiene">HACCP hygiene</router-link>
					</li>
					<li>
						<router-link to="/pilotage-gestion"
							>Pilotage et gestion</router-link
						>
					</li>
					<li>
						<router-link to="/Gestions-achats">Gestions d'achats</router-link>
					</li>
					<li>
						<router-link to="/Gestions-operationelle"
							>Gestions opérationelle</router-link
						>
					</li>
				</ul>
				<RouterLink to="/valeurs">Nos Valeurs</RouterLink>
				<RouterLink to="/contact">Contact</RouterLink>
			</nav>
		</div>
	</header>
	<RouterView />
</template>

<script>
export default {
	name: 'Navbar',
};
</script>
