<template>
  <div class="resume-container">
    <app-menu></app-menu>
    <div class="resume-about-me">
      <div class="resume-container1">
        <h1 class="resume-text">More About Me</h1>
        <span>
          My hobbies are skiing photography and any thing that has to do with
          computer. that includes inspecting websites, networks, and security
          threats. including learning about privacy on and offline and the best
          practices to follow.
          <span v-html="rawafb5"></span>
        </span>
      </div>
      <img alt="image" src="/me1-200w.jpg" class="resume-image" />
    </div>
    <div class="resume-class-experience">
      <h1 class="resume-class-experience1">Class Experience</h1>
      <div class="resume-class-1">
        <div class="resume-cisco">
          <span class="resume-text02 subHeading">Cisco Internetworking I-IV</span>
          <span class="resume-text03 date">September 2017 to May 2018</span>
        </div>
        <ul class="resume-ul list">
          <li class="resume-li list-item">
            <span class="resume-text04">
              Learned fundamentals of computer networks and Cisco IOS software
            </span>
          </li>
          <li class="resume-li01 list-item">
            <span>Simulated networks using Packet Tracer</span>
          </li>
          <li class="resume-li02 list-item">
            <span>
              Gained hands-on experience building networks in a laboratory setting
            </span>
          </li>
          <li class="resume-li03 list-item">
            <span>
              Studied switches, routers, IGRP, OSPF, OSI models, subnetting, WAN,
              PPP, and frame relay
            </span>
          </li>
        </ul>
      </div>
      <div class="resume-class-2">
        <div class="resume-cyber">
          <span class="resume-text08 subHeading">
            Cybersecurity Operations
            <span v-html="rawg7wa"></span>
          </span>
          <span class="resume-text09 date">September 2018 to May 2019</span>
        </div>
        <ul class="resume-ul1 list">
          <li class="resume-li04 list-item">
            <span>
              Acquiring knowledge and skills needed to work in a Security
              Operations Center (SOC)
            </span>
          </li>
          <li class="resume-li05 list-item">
            <span>
              Worked with hands-on labs using virtual environments to simulate
              real-world cybersecurity threat scenarios and create opportunities
              for ethical hacking, security monitoring, analysis and resolution
            </span>
          </li>
          <li class="resume-li06 list-item">
            <span class="resume-text12">
              Learned about systems security, access control list, network
              infrastructure, security assessments, and security audits
            </span>
          </li>
        </ul>
      </div>
      <div class="resume-class-3">
        <div class="resume-info-sys">
          <span class="resume-text13 subHeading">
            Introduction to Information Systems
          </span>
          <span class="resume-text14 date">September 2017 to December 2017</span>
        </div>
        <ul class="resume-ul2 list">
          <li class="resume-li07 list-item">
            <span>Learned in-depth features of the programs</span>
          </li>
          <li class="resume-li08 list-item">
            <span class="resume-text16">
              Class focusing on Word, Excel, and PowerPoint
            </span>
          </li>
        </ul>
      </div>
      <div class="resume-class-4">
        <div class="resume-web-design">
          <span class="resume-text17 subHeading">
            Web Design
            <span v-html="rawrtju"></span>
          </span>
          <span class="resume-text18 date">September 2018 to December 2018</span>
        </div>
        <ul class="resume-ul3 list">
          <li class="resume-li09 list-item">
            <span>
              Learned in-depth functions
              <span v-html="rawa1mo"></span>
            </span>
          </li>
          <li class="resume-li10 list-item">
            <span class="resume-text20">Class focusing on HTML, CSS</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="resume-education">
      <h1 class="resume-education1">Education</h1>
      <div class="resume-ed">
        <div class="resume-mid">
          <span class="resume-text21 subHeading">
            Mid Michigan College, Mount Pleasant, MI
          </span>
          <span class="resume-text22 date">May 2020</span>
        </div>
        <span class="resume-text23">
          Associates in Applied Science: Computer Information Systems
          <span v-html="raw8mbc"></span>
        </span>
        <span class="resume-text24"><span>GPA: 3.3</span></span>
      </div>
      <div class="resume-ed1">
        <div class="resume-mid1">
          <span class="resume-text26 subHeading">
            <span class="resume-text27">
              Mount Pleasant Senior High School &amp;
            </span>
            <br />
            <span class="resume-text29">
              Technical Center, Mount Pleasant, MI
            </span>
          </span>
          <span class="resume-text30 date">June 2017</span>
        </div>
        <span class="resume-text31">
          <span>
            High School Diploma
            <span v-html="raw05a5"></span>
          </span>
        </span>
        <span class="resume-text33"><span>GPA: 3.3</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '../components/menu'

export default {
  name: 'Resume',
  props: {},
  components: {
    AppMenu,
  },
  data() {
    return {
      rawafb5: ' ',
      rawg7wa: ' ',
      rawrtju: ' ',
      rawa1mo: ' ',
      raw8mbc: ' ',
      raw05a5: ' ',
    }
  },
  metaInfo: {
    title: 'Resume - Jason Guthrie',
    meta: [
      {
        name: 'description',
        content:
          'Hi, my name is Jason Guthrie. I have an Associate in Applied Science Degree: Computer Information Systems from Mid Michigan College.',
      },
      {
        property: 'og:title',
        content: 'Resume - Jason Guthrie',
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
.resume-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.resume-about-me {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  margin-top: var(--dl-space-space-unit1);
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  margin-bottom: var(--dl-space-space-three-unit);
  padding-bottom: 0px;
  justify-content: center;
}
.resume-container1 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.resume-text {
  font-size: 1.5em;
  align-self: flex-start;
  padding-bottom: var(--dl-space-space-unit1);
}
.resume-image {
  width: 183px;
  height: 149px;
  object-fit: cover;
  margin-left: var(--dl-space-space-unit-haf);
}
.resume-class-experience {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  padding-left: 0px;
  flex-direction: column;
  justify-content: flex-start;
}
.resume-class-experience1 {
  align-self: center;
  margin-bottom: var(--dl-space-space-two-unit);
  padding-bottom: var(--dl-space-space-two-unit);
}
.resume-class-1 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  border-color: #9a9a9a;
  border-width: 1px;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: disc;
  border-top-width: 0px;
  list-style-image: none;
  border-left-width: 0px;
  border-right-width: 0px;
  list-style-position: outside;
}
.resume-cisco {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.resume-text02 {
  align-self: flex-start;
  font-style: normal;
  margin-left: 10%;
}
.resume-text03 {
  align-self: flex-start;
  font-style: normal;
  text-align: center;
}
.resume-ul {
  position: relative;
  margin-top: var(--dl-space-space-haf-unit);
  margin-left: 0%;
  list-style-type: disc;
  list-style-position: inside;
}
.resume-li {
  text-align: left;
  margin-left: 10%;
}
.resume-text04 {
  text-align: left;
}
.resume-li01 {
  text-align: left;
  margin-left: 10%;
}
.resume-li02 {
  text-align: left;
  margin-left: 10%;
}
.resume-li03 {
  text-align: left;
  margin-left: 10%;
}
.resume-class-2 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  border-color: #9a9a9a;
  border-width: 1px;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: disc;
  border-top-width: 0px;
  list-style-image: none;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  list-style-position: outside;
}
.resume-cyber {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.resume-text08 {
  align-self: flex-start;
  font-style: normal;
  margin-left: 10%;
}
.resume-text09 {
  align-self: flex-start;
  font-style: normal;
  text-align: center;
}
.resume-ul1 {
  position: relative;
  margin-top: var(--dl-space-space-haf-unit);
  margin-left: 0%;
  list-style-type: disc;
  list-style-position: inside;
}
.resume-li04 {
  text-align: left;
  margin-left: 10%;
}
.resume-li05 {
  text-align: left;
  margin-left: 10%;
}
.resume-li06 {
  text-align: left;
  margin-left: 10%;
}
.resume-text12 {
  text-align: left;
}
.resume-class-3 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  border-color: #9a9a9a;
  border-width: 1px;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: disc;
  border-top-width: 0px;
  list-style-image: none;
  border-left-width: 0px;
  border-right-width: 0px;
  list-style-position: outside;
}
.resume-info-sys {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.resume-text13 {
  align-self: flex-start;
  font-style: normal;
  margin-left: 10%;
}
.resume-text14 {
  align-self: flex-start;
  font-style: normal;
  text-align: center;
}
.resume-ul2 {
  position: relative;
  margin-top: var(--dl-space-space-haf-unit);
  margin-left: 0%;
  list-style-type: disc;
  list-style-position: inside;
}
.resume-li07 {
  text-align: left;
  margin-left: 10%;
}
.resume-li08 {
  text-align: left;
  margin-left: 10%;
}
.resume-text16 {
  text-align: left;
}
.resume-class-4 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  border-color: #9a9a9a;
  border-width: 1px;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: disc;
  border-top-width: 0px;
  list-style-image: none;
  border-left-width: 0px;
  border-right-width: 0px;
  list-style-position: outside;
}
.resume-web-design {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.resume-text17 {
  align-self: flex-start;
  font-style: normal;
  margin-left: 10%;
}
.resume-text18 {
  align-self: flex-start;
  font-style: normal;
  text-align: center;
}
.resume-ul3 {
  position: relative;
  margin-top: var(--dl-space-space-haf-unit);
  margin-left: 0%;
  list-style-type: disc;
  list-style-position: inside;
}
.resume-li09 {
  text-align: left;
  margin-left: 10%;
}
.resume-li10 {
  text-align: left;
  margin-left: 10%;
}
.resume-text20 {
  text-align: left;
}
.resume-education {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  margin-top: var(--dl-space-space-three-unit);
  align-items: center;
  padding-top: var(--dl-space-space-unit-haf);
  padding-left: 0px;
  margin-bottom: var(--dl-space-space-unit1);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-five-unit);
  justify-content: flex-start;
}
.resume-education1 {
  align-self: center;
  margin-bottom: var(--dl-space-space-two-unit);
  padding-bottom: var(--dl-space-space-two-unit);
}
.resume-ed {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  border-color: #9a9a9a;
  border-width: 1px;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit1);
  justify-content: flex-start;
  list-style-type: disc;
  border-top-width: 0px;
  list-style-image: none;
  border-left-width: 0px;
  border-right-width: 0px;
  list-style-position: outside;
}
.resume-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.resume-text21 {
  align-self: flex-start;
  font-style: normal;
  margin-left: 10%;
}
.resume-text22 {
  align-self: flex-start;
  font-style: normal;
  text-align: center;
}
.resume-text23 {
  align-self: flex-start;
  margin-top: var(--dl-space-space-haf-unit);
  margin-left: 15%;
  margin-bottom: var(--dl-space-space-haf-unit);
}
.resume-text24 {
  align-self: flex-start;
  margin-top: 0px;
  margin-left: 15%;
  margin-bottom: 0px;
}
.resume-ed1 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit1);
  border-color: #9a9a9a;
  border-width: 1px;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit1);
  justify-content: flex-start;
  list-style-type: disc;
  border-top-width: 0px;
  list-style-image: none;
  border-left-width: 0px;
  border-right-width: 0px;
  list-style-position: outside;
}
.resume-mid1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.resume-text26 {
  align-self: flex-start;
  font-style: normal;
  margin-left: 10%;
}
.resume-text27 {
  font-style: normal;
}
.resume-text29 {
  font-style: normal;
}
.resume-text30 {
  align-self: flex-start;
  font-style: normal;
  text-align: center;
}
.resume-text31 {
  align-self: flex-start;
  margin-top: var(--dl-space-space-haf-unit);
  margin-left: 15%;
  margin-bottom: var(--dl-space-space-haf-unit);
}
.resume-text33 {
  align-self: flex-start;
  margin-top: 0px;
  margin-left: 15%;
  margin-bottom: 0px;
}
</style>
