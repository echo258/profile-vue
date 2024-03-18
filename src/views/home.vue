<template>
  <div class="home-container">
    <app-menu></app-menu>
    <div class="home-container1">
      <img alt="image" src="/me-1500w.jpg" class="home-image" />
    </div>
    <span class="home-text">
      <span>
        Hi, my name is Jason Guthrie. I have an Associate in Applied Science
        Degree: Computer Information Systems from Mid Michigan College.
        <span v-html="rawrxbh"></span>
      </span>
      <span></span>
      <span>
        I have extensive knowledge in making and troubleshooting Cisco networks in
        simulation and on real hardware.
      </span>
    </span>
    <div class="home-features">
      <h1 class="home-text04"><span>Highlight Skills</span></h1>
      <div class="home-container2">
        <div class="home-feature-card">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path
              d="M1024 713.143v182.857c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h54.857v-109.714h-292.571v109.714h54.857c30.286 0 54.857 24.571 54.857 54.857v182.857c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h54.857v-109.714h-292.571v109.714h54.857c30.286 0 54.857 24.571 54.857 54.857v182.857c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h54.857v-109.714c0-40 33.143-73.143 73.143-73.143h292.571v-109.714h-54.857c-30.286 0-54.857-24.571-54.857-54.857v-182.857c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857v182.857c0 30.286-24.571 54.857-54.857 54.857h-54.857v109.714h292.571c40 0 73.143 33.143 73.143 73.143v109.714h54.857c30.286 0 54.857 24.571 54.857 54.857z"
            ></path>
          </svg>
          <h2 class="home-text06">Cisco Switches / Routers</h2>
          <span class="home-text07">
            Fundamentals of computer networks and OSI model
          </span>
        </div>
        <div class="home-feature-card1">
          <svg viewBox="0 0 1024 1024" class="home-icon2">
            <path
              d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"
            ></path>
          </svg>
          <h2 class="home-text08">Web Design</h2>
          <span class="home-text09">
            I have took a class in web design at Mid Michigan Collage. Learning
            the basics of web sites.
          </span>
        </div>
        <div class="home-feature-card2">
          <svg viewBox="0 0 1024 1024" class="home-icon4">
            <path
              d="M213.333 512h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM768 426.667v-128c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965-134.741 28.715-181.035 74.965-74.965 110.336-74.965 181.035v128h-42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v298.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM341.333 426.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005 89.728 19.072 120.661 50.005 50.005 73.515 50.005 120.661v128z"
            ></path>
          </svg>
          <h2 class="home-text10">Cyber Security</h2>
          <span class="home-text11">
            <span>
              I have taken two class in cyber security. Learned about
              <span v-html="raw2mts"></span>
            </span>
            <br />
            <span>
              Security Operations Center (SOC) and expering in virtual labs.
            </span>
          </span>
        </div>
        <div class="home-feature-card3">
          <svg viewBox="0 0 1024 1024" class="home-icon6">
            <path
              d="M170.667 42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM170.667 128h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM170.667 554.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM170.667 640h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM298.667 256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667zM298.667 768c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"
            ></path>
          </svg>
          <h2 class="home-text14">NAS Server</h2>
          <span class="home-text15">Setup and maintaining of TrueNAS Scale</span>
        </div>
      </div>
    </div>
    <div class="home-container3">
      <span class="home-text16">Version 23.9.6</span>
    </div>
  </div>
</template>

<script>
import AppMenu from '../components/menu'

export default {
  name: 'Home',
  props: {},
  components: {
    AppMenu,
  },
  data() {
    return {
      rawrxbh: ' ',
      raw2mts: ' ',
    }
  },
  metaInfo: {
    title: 'Jason Guthrie',
    meta: [
      {
        name: 'description',
        content:
          'Hi, my name is Jason Guthrie. I have an Associate in Applied Science Degree: Computer Information Systems from Mid Michigan College.',
      },
      {
        property: 'og:title',
        content: 'Jason Guthrie',
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
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: column;
  justify-content: flex-start;
}
.home-container1 {
  width: 10rem;
  height: 10rem;
  display: flex;
  margin-top: var(--dl-space-space-five-unit);
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  background-size: cover;
  justify-content: center;
  background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
  background-position: center;
}
.home-image {
  width: 100%;
  height: 100%;
  align-self: center;
  margin-top: 0px;
  object-fit: cover;
  padding-top: 0px;
  border-radius: var(--dl-radius-radius-round);
}
.home-text {
  width: 65VW;
  font-size: 18px;
  font-style: normal;
  margin-top: var(--dl-space-space-unit-haf);
  text-align: center;
  font-family: Noto Sans;
  font-weight: 400;
}
.home-features {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-five-unit);
  align-items: center;
  flex-direction: column;
}
.home-text04 {
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-twounits);
  margin-top: var(--dl-space-space-unit1);
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.home-feature-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.home-icon {
  width: var(--dl-size-size-three-unit);
}
.home-text06 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text07 {
  color: var(--dl-color-gray-700);
  text-align: center;
}
.home-feature-card1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.home-icon2 {
  width: var(--dl-size-size-three-unit);
}
.home-text08 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text09 {
  color: var(--dl-color-gray-700);
  text-align: center;
}
.home-feature-card2 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.home-icon4 {
  width: var(--dl-size-size-three-unit);
}
.home-text10 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text11 {
  color: var(--dl-color-gray-700);
  text-align: center;
}
.home-feature-card3 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
}
.home-icon6 {
  width: var(--dl-size-size-three-unit);
}
.home-text14 {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text15 {
  color: var(--dl-color-gray-700);
  text-align: center;
}
.home-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.home-text16 {
  color: var(--dl-color-gray-700);
  margin-right: var(--dl-space-space-unit1);
}
@media(max-width: 991px) {
  .home-text04 {
    text-align: center;
  }
  .home-container2 {
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 767px) {
  .home-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text04 {
    text-align: center;
  }
}
@media(max-width: 479px) {
  .home-features {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container2 {
    grid-template-columns: 1fr;
  }
}
</style>
