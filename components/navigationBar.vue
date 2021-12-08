<template>
  <header>
    <!-- top menu -->
    <div id="navTopMenu">
      <!-- links if screen > sm -->
      <div class="hidden sm:flex justify-between">
        <div id="navTopLinksContainer" class="hidden sm:flex justify-between">
          <NuxtLink class="nav-top-link menuLink" to="/">
            Verlauf
          </NuxtLink>
          <NuxtLink class="nav-top-link menuLink projects" to="/projects">
            Info
          </NuxtLink>
          <NuxtLink class="nav-top-link menuLink" to="/contact">
            Einstellungen
          </NuxtLink>
        </div>
      </div>
      <!--menu icon if screen < sm -->
      <div id="navMenuIconContainer" class="inline-flex sm:hidden" @click="sideMenu">
        <img class="nav-toggle-icon" src="./../assets/icons/navbarIcon.svg">
      </div>
    </div>
    <!--side menu -->
    <div id="navSideMenu" class="block sm:hidden navActiveSideLink">
      <!-- links if screen < sm-->
      <div id="navSideLinksContainer">
        <NuxtLink id="navSideLinkAbout" class="nav-side-link menuLink" to="/">
          Entwicklung
        </NuxtLink>
        <NuxtLink id="navSideLinkProjects" class="nav-side-link menuLink projects" to="/projects">
          Info
        </NuxtLink>
        <NuxtLink id="navSideLinkContact" class="nav-side-link menuLink" to="/contact">
          Einstellungen
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      navSideMenuActiv: false
    }
  },
  mounted () {
    const icon = document.getElementById('navMenuIconContainer')
    const sideMenu = document.getElementById('navSideMenu')
    const sideMenuLinkContainer = document.getElementById('navSideLinksContainer')

    window.addEventListener('resize', (e) => {
      if (window.innerWidth >= 420) {
        this.navSideMenuActiv = false

        sideMenu.style.height = '0px'
        sideMenuLinkContainer.style.display = 'none'

        icon.style.transform = 'rotate(0deg)'
        icon.style.paddingTop = '12px'
      } else if (window.innerWidth < 420) {
        sideMenuLinkContainer.style.display = 'block'

        if (this.navSideMenuActiv === false) {
          icon.style.transform = 'rotate(0deg)'
          icon.style.paddingTop = '12px'
        } else if (this.navSideMenuActiv === true) {
          icon.style.transform = 'rotate(90deg)'
          icon.style.paddingTop = '16px'
        }
      }
    })
  },
  methods: {
    sideMenu () {
      const icon = document.getElementById('navMenuIconContainer')
      const sideMenu = document.getElementById('navSideMenu')

      if (this.navSideMenuActiv === false) {
        this.navSideMenuActiv = true

        sideMenu.style.setProperty('height', 'calc(100vh - 88px)')

        icon.style.transform = 'rotate(90deg)'
        icon.style.paddingTop = '16px'
      } else if (this.navSideMenuActiv === true) {
        this.navSideMenuActiv = false

        sideMenu.style.height = '0px'

        icon.style.transform = 'rotate(0deg)'
        icon.style.paddingTop = '12px'
      }
    }
  }
}

</script>

<style scoped>
  .navTopMenu-currentSite {
    color: #223127;
    font-family: "silkamedium", sans-serif;
    font-size: 18px;
    line-height: 64px;
    margin-right: 48px;
  }

  .navSideMenu-currentSite {
    position: absolute;
    color: #223127;
    font-family: "silkamedium", sans-serif;
    font-size: 18px;
    line-height: 64px;
    right: 24px;
  }

  header {
    display: inline-flex;

    position: fixed;
    top: 0%;

    height: 64px;
    width: 100vw;
  }

  #navTopMenu {
    z-index: 10;

    width: 100%;
    height: 100%;

    background-color: #d37e1d;
  }

  #navTopLinksContainer {
    padding: 0 16px;
  }

  .nav-top-link {
    height: 64px;
    padding: 0 16px;
    margin-right: 16px;

    font-family: "silkasemibold", sans-serif;
    font-size: 18px;
    line-height: 64px;

    color: #ffffff;
  }

  .menuLink:hover {
    color: #585481;
    font-family: "silkabold";
  }

  #navMenuIconContainer {
    z-index: 3;

    height: 100%;
    width: 64px;

    margin-left: 8px;
    padding: 12px;

    transition-duration: 1s;
  }

  .nav-toggle-icon {
    height: 40px;
  }

  #navSideMenu {
    position: absolute;
    left: 0%;
    top: 64px;

    height: 0px;
    width: 80vw;

    transition-duration: 1s;

    background-color: #d37e1d;
  }

  #navSideLinksContainer {
    z-index: 1;
    display: block;

    position: absolute;
    bottom: 0px;

    margin-left: 24px;
    margin-bottom: 24px;
  }

  .nav-side-link {
    z-index: 1;
    display: block;

    height: 64px;

    font-family: "silkamedium", sans-serif;
    font-size: 18px;
    line-height: 64px;

    color: #ffffff;
  }

  a.nuxt-link-exact-active {
    color: #585481;
    font-family: "silkabold";
  }

  a.nuxt-link-active.projects {
    color: #585481;
    font-family: "silkabold";
  }

</style>
