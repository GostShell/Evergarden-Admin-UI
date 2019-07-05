<template>
  <nav
    ref="navbar"
    class="navbar is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/dashboard">Dashboard</nuxt-link>

        <a class="navbar-item">
          Documentation
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-item">
            <figure class="image is-32x32">
              <img
                src="~assets/images/julian-alexander-22273-unsplash.jpg"
                alt="avatar"
                class="is-rounded"
              />
            </figure>
          </div>
          <a href="#" class="navbar-link">Hello, John</a>
          <div class="navbar-dropdown">
            <a href="#" class="navbar-item">Profile</a>
            <a href="#" class="navbar-item">Dashboard</a>
            <hr class="navbar-divider" />
            <a href="#" class="navbar-item">Log out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    // console.warn('the ref is the ref' + this.$refs.navbar.offsetHeight)
  }
}
</script>

<style lang="scss" scoped></style>
