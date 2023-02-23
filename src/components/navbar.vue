<template>
	<nav>
		<div class="logo">
			<RouterLink
				:to="{
					name: 'Home',
				}"
				><img src="/assets/logo_lecollectif.png" alt="Logo"
			/></RouterLink>
		</div>
		<ul class="menu">
			<li class="submenu">
				<RouterLink class="nav-link" to="/accompagnement">
					Accompagnement
				</RouterLink>
				<ul>
					<li>
						<RouterLink
							:to="{
								name: 'modalite',
							}"
							>modalite</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{
								name: 'missions-accompagnement',
							}"
							>missions et accompagnement</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{
								name: 'pack-tarifs',
							}"
							>pack-tarifs</RouterLink
						>
					</li>
				</ul>
			</li>
			<li class="submenu">
				<RouterLink
					:to="{
						name: 'Formations',
					}"
					>Formations</RouterLink
				>
				<ul>
					<li>
						<RouterLink
							:to="{
								name: 'objectifs',
							}"
							>objectifs</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{
								name: 'connaissance-des-aliments',
							}"
							>connaissance des aliments</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{
								name: 'dietetique-nutrition',
							}"
							>dietetique | nutrition</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{
								name: 'GEMRCN',
							}"
							>GEMRCN</RouterLink
						>
					</li>

					<li>
						<RouterLink
							:to="{
								name: 'HACCP-hygiene',
							}"
							>HACCP-hygiene</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{
								name: 'pilotage_gestion',
							}"
							>pilotage et gestion</RouterLink
						>
					</li>
					<li>
						<RouterLink
							:to="{
								name: 'Gestions-achats',
							}"
							>Gestions d'achats</RouterLink
						>
					</li>

					<li>
						<RouterLink
							:to="{
								name: 'Gestions-operationelle',
							}"
							>Gestions opérationelle</RouterLink
						>
					</li>
				</ul>
			</li>
			<li class="submenu">
				<RouterLink
					:to="{
						name: 'valeurs',
					}"
					>Valeurs</RouterLink
				>
			</li>
			<li class="submenu">
				<RouterLink
					:to="{
						name: 'contact',
					}"
					>contact</RouterLink
				>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			const nav = document.querySelector('nav');
			if (window.pageYOffset > 200) {
				nav.classList.add('scrolling');
			} else {
				nav.classList.remove('scrolling');
			}
		},
	},
};
</script>

<style lang="scss">
nav {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: transparent;
	padding: 20px;
	position: fixed;
	z-index: 99;
	width: 100%;
	transition: 0.5s;

	&.scrolling {
		background-color: white;
	}

	.logo {
		img {
			height: 100px;
		}
	}

	.menu {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			margin-right: 20px;
			position: relative;

			a {
				color: black;
				text-decoration: none;
			}
		}

		.submenu {
			a {
				color: white;
				text-decoration: none;
			}

			&.scrolling_sub {
				color: black;
			}

			ul {
				display: none;
				position: absolute;
				top: 100%;
				padding: 0;
				left: 0;
				z-index: 1;
				background-color: #fff;
				box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

				li {
					display: block;
					padding: 10px;

					a {
						color: #333;
						text-decoration: none;
					}
				}

				a {
					text-decoration: none;
					color: black;
				}
			}

			&:hover > ul {
				display: block;
			}
		}
	}
}

nav.scrolling ul.menu li a {
	color: black;
}

// responsive
@media only screen and (max-width: 768px) {
	nav {
		flex-direction: column;
		align-items: stretch;
	}

	.logo {
		text-align: center;
		margin-bottom: 20px;
	}

	.menu {
		margin: 0;
		justify-content: center;
	}

	.menu li {
		margin: 0;
		display: flex;
		justify-content: center;
	}

	.submenu ul {
		position: static;
		display: none;
	}

	.submenu:hover ul {
		display: block;
		position: static;
	}

	.submenu ul li {
		padding: 5px 0;
		text-align: center;
	}
}

/* Styles pour les écrans de petite taille (mobile) */
@media only screen and (max-width: 480px) {
	.menu {
		flex-direction: column;
	}

	.submenu ul {
		display: none;
		position: static;
	}

	.submenu:hover ul {
		display: block;
		position: static;
	}
}
</style>
