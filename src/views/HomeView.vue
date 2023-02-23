<template>
	<div class="container_homeview">
		<header>
			<div class="container_image">
				<div class="container_text_title">
					<div class="text_title">
						<p>
							LECOLLECTIF 21 AU SERVICE DE L'ALIMENTATION DE LA FOURCHE A LA
							FOURCHETTE
						</p>
					</div>
				</div>
			</div>
		</header>
		<div class="separator"></div>
		<section>
			<div class="first_section_container">
				<div class="first_section">
					<div class="image_container">
						<img
							src="../../assets//cabinet-g089f510dc_1920.jpg"
							alt="cabinet de conseils" />
					</div>
				</div>
				<div class="text_container">
					<h2>Cabinet</h2>
					<p>
						Un cabinet de conseils et d’accompagnement pour les TPE et TPI du
						secteur de l’alimentaire
					</p>
					<button class="button_link"><a href="#">Voir plus</a></button>
				</div>
			</div>
		</section>
		<div class="separator"></div>
		<section>
			<div class="first_section_container">
				<div class="text_container">
					<h2>Centre de Formation</h2>
					<p>Un centre de formation et de développement personnel</p>
					<button class="button_link"><a href="#">Voir plus</a></button>
				</div>
				<div class="first_section">
					<div class="image_container">
						<img
							src="../../assets/formation-2-1-150x150.png"
							alt="cabinet de conseils" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container_image {
	background-image: url(../../assets/flower_homepage.jpg);
	height: 100vh;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}
section {
	margin-left: 380px;
	margin-right: 380px;
	margin-top: 60px;
	margin-bottom: 60px;
}
.separator {
	height: 5px;
	background-color: #6fad73;
	border-radius: 5px;
	width: 550px;
	margin-top: 60px;
	display: flex;
	margin-left: auto;
	margin-right: auto;
}
.container_text_title {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: brightness(0.5);
}
.text_title > p {
	margin: 0;
	color: white;
	font-size: 60px;
	margin: 101px;
	text-align: center;
}
.first_section_container {
	gap: 50px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}
.text_container {
	padding: 60px;
	background: #bbcdff;
	border-radius: 100px;
	margin: auto;
}
.button_link {
	border: none;
	background-color: transparent;
	text-decoration: none;
}
.image_container > img {
	width: 500px;
	border-radius: 40px;
	height: 400px;
}
</style>
