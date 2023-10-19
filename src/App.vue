<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  let html2pdfScript = document.createElement('script')
  html2pdfScript.setAttribute('src', '/src/assets/js/html2pdf.bundle.min.js')
  document.head.appendChild(html2pdfScript)

  let oldMainScript = document.createElement('script')
  oldMainScript.setAttribute('src', '/src/assets/js/main.js')
  document.head.appendChild(oldMainScript)
})
</script>

<template>
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <a href="#" class="nav__logo">Long Thay</a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">
              <i class="bx bx-home nav__icon"></i>Home
            </a>
          </li>

          <li class="nav__item">
            <a href="#profile" class="nav__link"> <i class="bx bx-user nav__icon"></i>Profile </a>
          </li>

          <li class="nav__item">
            <a href="#skills" class="nav__link"> <i class="bx bx-receipt nav__icon"></i>Skills </a>
          </li>

          <li class="nav__item">
            <a href="#experience" class="nav__link">
              <i class="bx bx-briefcase-alt nav__icon"></i>Experience
            </a>
          </li>

          <li class="nav__item">
            <a href="#education" class="nav__link">
              <i class="bx bx-certification nav__icon"></i>Education
            </a>
          </li>

          <!-- <li class="nav__item">
                            <a href="#certificates" class="nav__link">
                                <i class='bx bx-award nav__icon' ></i>Certificates
                            </a>
                        </li> -->

          <!-- <li class="nav__item">
                            <a href="#references" class="nav__link">
                                <i class='bx bx-link-external nav__icon' ></i>References
                            </a>
                        </li> -->
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
  <main class="l-main bd-container">
    <!-- All elements within this div, is generated in PDF -->
    <div class="resume" id="area-cv">
      <div class="resume__left">
        <!--========== HOME ==========-->
        <section class="home" id="home">
          <div class="home__container section bd-grid">
            <div class="home__data bd-grid">
              <img src="/src/assets/img/long_thay.jpg" alt="" class="home__img" />

              <h1 class="home__title">Long <b>Thay</b></h1>
              <h3 class="home__profession">Fullstack Developer</h3>

              <div>
                <a download="" href="/src/assets/pdf/longthaycv.pdf" class="home__button-movil"
                  >Download CV</a
                >
              </div>
            </div>

            <div class="home__address bd-grid">
              <span class="home__information">
                <i class="bx bx-map home__icon"></i> HCMC, Vietnam
              </span>
              <span class="home__information">
                <i class="bx bx-envelope home__icon"></i> thaybunlong20@gmail.com
              </span>
              <span class="home__information">
                <i class="bx bx-phone home__icon"></i> +84-988-997-071
              </span>
            </div>
          </div>

          <!-- Theme change button -->
          <i class="bx bx-moon change-theme" title="Theme" id="theme-button"></i>
          <!-- Button to generate and download the pdf. Available for desktop. -->
          <i class="bx bx-download generate-pdf" title="Generate PDF" id="resume-button"></i>
        </section>

        <!--========== SOCIAL ==========-->
        <section class="social section">
          <h2 class="section-title">SOCIAL</h2>

          <div class="social__container bd-grid">
            <a href="https://www.linkedin.com/in/thaybunlong/" target="_blank" class="social_link">
              <i class="bx bxl-linkedin-square social__icon"></i> @thaybunlong
            </a>
            <a href="https://www.facebook.com/thaybunlong/" target="_blank" class="social_link">
              <i class="bx bxl-facebook social__icon"></i> @thaybunlong
            </a>
            <a href="https://github.com/foxbunlong" target="_blank" class="social_link">
              <i class="bx bxl-github social__icon"></i> @foxbunlong
            </a>
          </div>
        </section>

        <!--========== PROFILE ==========-->
        <section class="profile section" id="profile">
          <h2 class="section-title">Profile</h2>

          <p class="profile__description">
            <b>Professional Experience:</b> Mobile app engineer (Android and iOS), system architect
            and database analyst.<br /><b>Specialties:</b> Mobile apps, Server Architecture,
            Networking, Database Organizing, Dataflow designing and managing
          </p>
        </section>

        <!--========== SKILLS  ==========-->
        <section class="skills section" id="skills">
          <h2 class="section-title">Skills</h2>

          <div class="skills__content bd-grid">
            <ul class="skills__data">
              <li class="skills__name"><span class="skills__circle"></span> Android</li>
              <li class="skills__name"><span class="skills__circle"></span> Flutter</li>
              <li class="skills__name"><span class="skills__circle"></span> iOS</li>
            </ul>

            <ul class="skills__data">
              <li class="skills__name"><span class="skills__circle"></span> Web</li>
              <li class="skills__name"><span class="skills__circle"></span> Backend</li>
              <li class="skills__name"><span class="skills__circle"></span> Devops</li>
            </ul>
          </div>
        </section>
      </div>

      <div class="resume__right">
        <!--========== EXPERIENCE ==========-->
        <section class="experience section" id="experience">
          <h2 class="section-title">Experience</h2>

          <div class="experience__container bd-grid">
            <div class="experience__content">
              <div class="experience__time">
                <span class="experience__rounder"></span>
                <span class="experience__line"></span>
              </div>

              <div class="experience__data bd-grid">
                <h3 class="experience__title">FULLSTACK DEVELOPER</h3>
                <span class="experience__company">Jul 2023 - Present | Pollen.tech</span>
                <p class="experience__description">
                  Work as fullstack developer for private B2B liquidation platform, ensure
                  application's stability and improve user experience.
                </p>
              </div>
            </div>
            <div class="experience__content">
              <div class="experience__time">
                <span class="experience__rounder"></span>
                <span class="experience__line"></span>
              </div>

              <div class="experience__data bd-grid">
                <h3 class="experience__title">FULLSTACK DEVELOPER</h3>
                <span class="experience__company"
                  >Jun 2022 - Mar 2023 | Phu My Hung Development Corporation</span
                >
                <p class="experience__description">
                  Work as fullstack developer to develop mobile app and back office for Livin Phu My
                  Hung app.
                </p>
              </div>
            </div>
            <div class="experience__content">
              <div class="experience__time">
                <span class="experience__rounder"></span>
                <span class="experience__line"></span>
              </div>

              <div class="experience__data bd-grid">
                <h3 class="experience__title">SENIOR MOBILE ENGINEER</h3>
                <span class="experience__company">Nov 2021 - Apr 2022 | Neo Consulting</span>
                <p class="experience__description">
                  Work as Android developer to develop native Android app for a Chinese agency in
                  entertainment industry.
                </p>
              </div>
            </div>
            <div class="experience__content">
              <div class="experience__time">
                <span class="experience__rounder"></span>
                <!-- <span class="experience__line"></span> -->
              </div>

              <div class="experience__data bd-grid">
                <h3 class="experience__title">SENIOR MOBILE ENGINEER</h3>
                <span class="experience__company">Aug 2016 - May 2021 | Concung.com</span>
                <p class="experience__description">
                  Android Mobile development for internal ERP system - Build music app (BedTime app)
                  - Build e-commerce Android app (Concung app) - Build Android internal ERP app -
                  Guide team member to build iOS Native app - Support backend team to build and
                  maintain api - Guarantee the highest quality app used by thousands of users at the
                  same time - Support different version of Android from Android 4.x+ - Deploy NodeJS
                  and Socket IO for social network module
                </p>
              </div>
            </div>
          </div>
        </section>

        <!--========== EDUCATION ==========-->
        <section class="education section" id="education">
          <h2 class="section-title">Education</h2>

          <div class="education__container bd-grid">
            <div class="education__content">
              <div class="education__time">
                <span class="education__rounder"></span>
                <span class="education__line"></span>
              </div>

              <div class="education__data bd-grid">
                <h3 class="education__title">Many courses related to skill developments</h3>
                <span class="education__studies">Udemy</span>
                <span class="education__year">2015 - Present</span>
              </div>
            </div>

            <div class="education__content">
              <div class="education__time">
                <span class="education__rounder"></span>
                <span class="education__line"></span>
              </div>

              <div class="education__data bd-grid">
                <h3 class="education__title">iOS Development</h3>
                <span class="education__studies">IT Center - University of Science</span>
                <span class="education__year">2015</span>
              </div>
            </div>

            <div class="education__content">
              <div class="education__time">
                <span class="education__rounder"></span>
                <span class="education__line"></span>
              </div>

              <div class="education__data bd-grid">
                <h3 class="education__title">CCNA Certificate</h3>
                <span class="education__studies">SaigonCTT</span>
                <span class="education__year">2011 - 2012</span>
              </div>
            </div>

            <div class="education__content">
              <div class="education__time">
                <span class="education__rounder"></span>
                <!-- <span class="education__line"></span> -->
              </div>

              <div class="education__data bd-grid">
                <h3 class="education__title">BACHELOR OF BUSINESS, BUSINESS INFORMATION SYSTEMS</h3>
                <span class="education__studies">RMIT Vietnam University</span>
                <span class="education__year">2008 - 2011</span>
              </div>
            </div>
          </div>
        </section>

        <!--========== CERTIFICATES ==========-->
        <!-- <section class="certificate section" id="certificates"></section> -->

        <!--========== REFERENCES ==========-->
        <!-- <section class="references section" id="references"></section> -->

        <!--========== LANGUAGES ==========-->
        <!-- <section class="languages section"></section> -->

        <!--========== INTERESTS ==========-->
        <!-- <section class="interests section"></section> -->
      </div>
    </div>
  </main>

  <!--========== SCROLL TOP ==========-->
  <a href="#" class="scrolltop" id="scroll-top">
    <i class="bx bx-up-arrow-alt scrolltop__icon"></i>
  </a>
</template>

<style>
@import url('https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css');

/*===== GOOGLE FONTS =====*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

/*===== VARIABLES CSS =====*/
:root {
  --header-height: 3rem;

  /*========== Colors ==========*/
  --title-color: #0b0a0a;
  --text-color: #403a3a;
  --text-color-light: #707070;
  --container-color: #fafafa;
  --container-color-alt: #f0efef;
  --body-color: #fcfcfc;

  /*========== Font and typography ==========*/
  --body-font: 'Poppins', sans-serif;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes ==========*/
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

/*========== BASE ==========*/
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

/*========== Variables Dark theme ==========*/
body.dark-theme {
  --title-color: #f2f2f2;
  --text-color: #bfbfbf;
  --container-color: #212121;
  --container-color-alt: #181616;
  --body-color: #2b2b2b;
}

/*========== Button Dark/Light ==========*/
.change-theme {
  position: absolute;
  right: 0;
  top: 2.2rem;
  display: flex;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
}

.change-theme:hover {
  color: var(--title-color);
}

/*========== Font size variables to scale cv ==========*/
body.scale-cv {
  --h1-font-size: 0.938rem;
  --h2-font-size: 0.938rem;
  --h3-font-size: 0.875rem;
  --normal-font-size: 0.813rem;
  --small-font-size: 0.75rem;
  --smaller-font-size: 0.688rem;
}

/*========== Generate PDF button ==========*/
.generate-pdf {
  display: none;
  position: absolute;
  top: 2.2rem;
  left: 0;
  font-size: 1.2rem;
  color: var(--text-color);
  cursor: pointer;
}

.generate-pdf:hover {
  color: var(--title-color);
}

/*========== Classes modified to reduce size and print on A4 sheet ==========*/
.scale-cv .change-theme,
.scale-cv .generate-pdf {
  display: none;
}

.scale-cv .bd-container {
  max-width: 595px;
}

.scale-cv .section {
  padding: 1.5rem 0 0.8rem;
}

.scale-cv .section-title {
  margin-bottom: 0.75rem;
}

.scale-cv .resume__left,
.scale-cv .resume__right {
  padding: 0 1rem;
}

.scale-cv .home__img {
  width: 90px;
  height: 90px;
}

.scale-cv .home__container {
  gap: 1.5rem;
}

.scale-cv .home__data {
  gap: 0.25rem;
}

.scale-cv .home__address,
.scale-cv .social__container {
  gap: 0.75rem;
}

.scale-cv .home__icon,
.scale-cv .social__icon {
  font-size: 1rem;
}

.scale-cv .education__container,
.scale-cv .experience__container,
.scale-cv .certificate__container {
  gap: 1rem;
}

.scale-cv .education__time,
.scale-cv .experience__time {
  padding-right: 0.5rem;
}

.scale-cv .education__rounder,
.scale-cv .experience__rounder {
  width: 11px;
  height: 11px;
  margin-top: 0.22rem;
}

.scale-cv .education__line,
.scale-cv .experience__line {
  width: 1px;
  height: 110%;
  transform: translateX(5px);
}

.scale-cv .education__data,
.scale-cv .experience__data {
  gap: 0.25rem;
}

.scale-cv .skills__name {
  margin-bottom: var(--mb-1);
}

body {
  margin: 0 0 var(--header-height) 0;
  padding: 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}

h1,
h2,
h3,
ul,
p {
  margin: 0;
}

h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-medium);
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--title-color);
}

img {
  max-width: 100%;
  height: auto;
}

/*========== CLASS CSS ==========*/
.section {
  padding: 1.5rem 0;
}

.section-title {
  font-size: var(--h2-font-size);
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  text-align: center;
  margin-bottom: var(--mb-3);
}

/*========== LAYOUT ==========*/
.bd-container {
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: var(--mb-3);
  margin-right: var(--mb-3);
}

.bd-grid {
  display: grid;
  gap: 1.5rem;
}

.l-header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

/*========== NAV ==========*/
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 968px) {
  .nav__menu {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 2rem 1.5rem;
    background-color: var(--body-color);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 1rem 1 0 0;
    z-index: var(--z-fixed);
    transition: 0.3s;
  }
}

.nav__logo,
.nav__toggle {
  color: var(--title-color);
  font-weight: var(--font-medium);
}

.nav__toggle {
  font-size: 1.2rem;
  cursor: pointer;
}

.nav__item {
  text-align: center;
}

.nav__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.nav__link {
  display: flex;
  flex-direction: column;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  font-weight: var(--font-medium);
}

.nav__link:hover {
  color: var(--title-color);
}

.nav__icon {
  font-size: 1.2rem;
  margin-bottom: var(--mb-1);
}

/* Show menu */
.show-menu {
  bottom: var(--header-height);
}

/* Active menu link */
.active-link {
  color: var(--title-color);
}

/*========== HOME ==========*/
.home {
  position: relative;
}

.home__container {
  gap: 3rem;
}

.home__data {
  gap: 0.5rem;
  text-align: center;
}

.home__img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  justify-self: center;
  margin-bottom: var(--mb-1);
  object-fit: cover;
}

.home__title {
  font-size: var(--h1-font-size);
}

.home__profession {
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-1);
}

.home__address {
  gap: 1rem;
}

.home__information {
  display: flex;
  align-items: center;
  font-size: var(--small-font-size);
}

.home__icon {
  font-size: 1.2rem;
  margin-right: 0.25rem;
}

.home__button-movil {
  display: inline-block;
  border: 2px solid var(--text-color);
  color: var(--title-color);
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  transition: 0.3s;
  font-weight: var(--font-medium);
  margin-top: var(--mb-3);
}

.home__button-movil:hover {
  background-color: var(--text-color);
  color: var(--container-color);
}

/*========== SOCIAL ==========*/
.social__container {
  grid-template-columns: max-content;
  gap: 1rem;
}

.social__link {
  display: inline-flex;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--text-color);
}

.social__link:hover {
  color: var(--title-color);
}

.social__icon {
  font-size: 1.2rem;
  margin-right: 0.25rem;
}

/*========== PROFILE ==========*/
.profile__description {
  text-align: center;
}

/*========== EDUCATION AND EXPERIENCE ==========*/
.education__content,
.experience__content {
  display: flex;
}

.education__time,
.experience__time {
  padding-right: 1rem;
}

.education__rounder,
.experience__rounder {
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  background-color: var(--text-color-light);
  border-radius: 50%;
  margin-top: 0.25rem;
}

.education__line,
.experience__line {
  display: block;
  width: 2px;
  height: 110%;
  background-color: var(--text-color-light);
  transform: translateX(7px);
}

.education__data,
.experience__data {
  gap: 0.5rem;
}

.education__title,
.experience__title {
  font-size: var(--h3-font-size);
}

.education__studies,
.experience__company {
  font-size: var(--small-font-size);
  color: var(--title-color);
}

.education__year {
  font-size: var(--smaller-font-size);
}

/*========== SKILLS AND LANGUAGES ==========*/
.skills__content {
  grid-template-columns: repeat(2, 1fr);
}

.skills__content {
  gap: 0;
}

.skills__name {
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-3);
}

.skills__circle {
  display: block;
  width: 5px;
  height: 5px;
  background-color: var(--text-color);
  border-radius: 50%;
  margin-right: 0.75rem;
}

/*========== CERTIFICATES ==========*/

/*========== REFERENCES ==========*/

/*========== INTERESTS ==========*/

/* Scroll top */
.scrolltop {
  position: fixed;
  right: 1rem;
  bottom: -20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background-color: var(--container-color-alt);
  border-radius: 0.4rem;
  z-index: var(--z-tooltip);
  transition: 0.4s;
  visibility: hidden;
}

.scrolltop__icon {
  font-size: 1.2rem;
  color: var(--text-color);
}

.show-scroll {
  visibility: visible;
  bottom: 5rem;
}

/*========== MEDIA QUERIES ==========*/
/* For small devices, menu two columns */
@media screen and (max-width: 320px) {
  .nav__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 0.5rem;
  }
}

/* Classes modified for large screen size */
@media screen and (min-width: 968px) {
  body {
    margin: 3rem 0;
  }

  .bd-container {
    margin-left: auto;
    margin-right: auto;
  }

  .l-header,
  .scrolltop {
    display: none;
  }

  .resume {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    background-color: var(--container-color);
    box-shadow: 0 0 8px rgba(13, 12, 12, 0.15);
  }

  .resume__left {
    background-color: var(--container-color-alt);
  }

  .resume__left,
  .resume__right {
    padding: 0 1.5rem;
  }

  /*========== Generate PDF button ==========*/
  .generate-pdf {
    display: inline;
  }

  .section-title,
  .profile__description {
    text-align: initial;
  }

  .home__container {
    gap: 1.5rem;
  }

  .home__button-movil {
    display: none;
  }
}
</style>
