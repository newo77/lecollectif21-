<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <ul>
          <li>
            <RouterLink
              :to="{
                name: 'accompagnement',
              }"
              >Accompagnement</RouterLink
            >
            <ul>
              <li>
                <RouterLink
                  :to="{
                    name: 'modalite',
                  }"
                  >Modalite</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  :to="{
                    name: 'missions-accompagnement',
                  }"
                  >Missions d'Accompagnement</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  :to="{
                    name: 'pack-tarifs',
                  }"
                  >Packs et Tarifs</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>

        <RouterLink to="/formations">Formations</RouterLink>
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
              >Connaissance des aliments</RouterLink
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
              >HACCP hygiene</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{
                name: 'pilotage_gestion',
              }"
              >Pilotage et gestion</RouterLink
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
        <RouterLink to="/valeurs">Nos Valeurs</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
