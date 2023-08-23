<template>
  <div class="truenas-container">
    <app-menu rootClassName="menu-root-class-name1"></app-menu>
    <div class="truenas-container1"><h1>TrueNAS</h1></div>
    <img
      alt="image"
      src="https://play.teleporthq.io/static/svg/default-img.svg"
      class="truenas-image"
    />
    <span>body text</span>
    <button class="button">back</button>
  </div>
</template>

<script>
import AppMenu from '../components/menu'

export default {
  name: 'Truenas',
  components: {
    AppMenu,
  },
  metaInfo: {
    title: 'truenas - Jason Guthrie',
    meta: [
      {
        name: 'description',
        content:
          'Hi, my name is Jason Guthrie. I have an Associate in Applied Science Degree: Computer Information Systems from Mid Michigan College.',
      },
      {
        property: 'og:title',
        content: 'truenas - Jason Guthrie',
      },
      {
        property: 'og:description',
        content:
          'Hi, my name is Jason Guthrie. I have an Associate in Applied Science Degree: Computer Information Systems from Mid Michigan College.',
      },
    ],
  },
}
</script>

<style scoped>
.truenas-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.truenas-container1 {
  flex: 0 0 auto;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
}
.truenas-image {
  width: 100px;
  object-fit: cover;
}
</style>
