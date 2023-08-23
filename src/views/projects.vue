<template>
  <div class="projects-container">
    <app-menu rootClassName="menu-root-class-name"></app-menu>
    <div class="projects-truenas">
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxjb21wdXRlcnxlbnwwfHx8fDE2NDU3Mzk4NDU&amp;ixlib=rb-1.2.1&amp;w=1400"
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        class="projects-image"
      />
      <div class="projects-container1">
        <h1 class="projects-text">TrueNAS Server</h1>
        <span class="projects-text1">
          For over a year now I have run TrueNas (formally FreeNAS) for PC backups
          and media streaming thought Plex. I have recently added more
          functionality to my sever utilizing its virtual machining capabilities
          to add ubuntu sever with docker. within docker I have portainer and pi
          hole running with Unbound and a server dashboard. I also use my server
          to store my security camera footage using NFS.
        </span>
        <span class="projects-text2">June 1,2022</span>
      </div>
    </div>
    <div class="projects-truenas1">
      <img
        alt="image"
        src="/untitled%20diagram.drawio-1400w.png"
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        class="projects-image1"
      />
      <div class="projects-container2">
        <h1 class="projects-text3">
          TrueNAS Scale Migration
          <span v-html="raw4t26"></span>
        </h1>
        <span class="projects-text4">
          Since the end of June, I have been running TrueNAS Scale. Witch runs a
          Debian base distribution. Instead of FreeBSD in TrueNAS Core. I still
          use plex and NFS for security camera footage. The reason for the switch
          was for the use of containerization that’s built into Scale.
        </span>
        <span class="projects-text5">August 10, 2022</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '../components/menu'

export default {
  name: 'Projects',
  components: {
    AppMenu,
  },
  data() {
    return {
      raw4t26: ' ',
    }
  },
  metaInfo: {
    title: 'Projects - Jason Guthrie',
    meta: [
      {
        name: 'description',
        content:
          'Hi, my name is Jason Guthrie. I have an Associate in Applied Science Degree: Computer Information Systems from Mid Michigan College.',
      },
      {
        property: 'og:title',
        content: 'Projects - Jason Guthrie',
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
.projects-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.projects-truenas {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.projects-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.projects-container1 {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.projects-text {
  margin-bottom: 0px;
}
.projects-text1 {
  color: var(--dl-color-gray-black);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.projects-text2 {
  color: var(--dl-color-gray-500);
  align-self: flex-end;
}
.projects-truenas1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.projects-image1 {
  width: 350px;
  height: 350px;
  align-self: stretch;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 0px;
}
.projects-container2 {
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.projects-text3 {
  margin-bottom: 0px;
}
.projects-text4 {
  color: var(--dl-color-gray-black);
  font-size: 1.25rem;
  margin-bottom: var(--dl-space-space-twounits);
}
.projects-text5 {
  color: var(--dl-color-gray-500);
  align-self: flex-end;
}
@media(max-width: 991px) {
  .projects-truenas {
    flex-direction: row;
    justify-content: space-between;
  }
  .projects-truenas1 {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .projects-truenas {
    flex-direction: column;
  }
  .projects-image {
    width: 100%;
  }
  .projects-truenas1 {
    flex-direction: column;
  }
  .projects-image1 {
    width: 100%;
  }
}
</style>
