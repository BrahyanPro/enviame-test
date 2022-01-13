<template>
  <main className="Main" title="Home">
    <Cursor />
    <div className="BackLay">
      <h1 aria-hidden="true">Proyectos</h1>
    </div>
    <div className="PageSection">
      <PageWrapper>
        <h1 className="intro__text">Proyectos.</h1>
        <div className="TabItems" label="All">
          <div class="Layout">
            <MansoryItem key="1" index="1" item="400" altura="150" />
          </div>
        </div>
      </PageWrapper>
    </div>
  </main>
</template>

<script>
import MansoryItem from '../common/MansoryItem.vue';
import PageWrapper from '../common/PageWrapper.vue';

export default {
  name: 'Home',
  components: {
    PageWrapper,
    MansoryItem,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');
::selection {
  background: #999;
  color: #fff;
  /* WebKit/Blink Browsers */
}

::-moz-selection {
  background: #999;
  color: #fff;
  /* Gecko Browsers */
}

/*::placeholder { color: #c5c5c5 !important; font-weight: 300 !important }*/

::-webkit-input-placeholder {
  color: #444;
  opacity: 1;
}

:-moz-placeholder {
  color: #444;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #444;
  opacity: 1;
}

/*--------*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(body) {
  font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
    sans-serif;
}

body {
  background: #020a13 !important;
  padding-right: 0px !important;
  font-family: 'Blorado', sans-serif;
  margin: 0;
  width: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

html {
  scroll-behavior: smooth;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

svg {
  fill: #c6c6c6;
}

svg.logo__section path {
  fill: #e1e1e1;
}

a,
h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
input[type='text'],
input[type='date'],
input[type='password'],
input[type='value'],
b,
label,
td,
select,
textarea,
th {
  font-family: 'Blorado', sans-serif;
  text-rendering: geometricPrecision;
  color: #e1e1e1;
}

:focus {
  outline-color: #e1e1e1 !important;
}

a {
  cursor: pointer;
}

mark.mark {
  color: inherit;
  padding: 0;
  background: none;
  background-image: linear-gradient(120deg, #080f18, 0%, #080f18, 100%);
  background-repeat: no-repeat;
  background-size: 0% 0.3em;
  background-position: 0 80%;
  position: relative;
  background-size: 100% 0.3em;
}

.loading-img {
  object-fit: contain !important;
  transform: scale(0.5);
}

.page-transition-enter {
  opacity: 0;
}

.page-transition-enter-active {
  opacity: 1;
  transition: opacity 300ms;
}

.page-transition-exit {
  opacity: 1;
}

.page-transition-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}

/* .scout__bar-wrapper {
    --scout-white: #020a13;
    --scout-theme-black: #e1e1e1;
    --scout-light-grey: #14202b;
    --scout-theme-grey: #9e9e9c;
    --scout-theme-card-hover: #07121dd4;
    --scout-theme-keyboard: 0px 2px 0px 2px #8d8d8d;
    --scout-tutorial-grey: #494949 --scout-box-shadow: 1px 2px 16px 10px rgba(0, 0, 0, 0.05);
} */

/* *Final Global Styles */

.Main {
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    transparent 1px,
    transparent
  );
  background-attachment: fixed;
  background-size: 1px 101px;
  min-height: 100vh;
  margin-left: 300px;
  list-style: 1.5;
}

.PageSection .intro__text {
  font-size: 3.275em;
  font-weight: 900;
  margin: 4rem 0rem 1.5rem;
  position: relative;
}

.PageSection .buttonpro {
  font-size: calc(0.875em + 1.5px);
  background: #3f566e;
  border: none;
  border-radius: 5px;
  padding: 0px 9px;
}

.BackLay {
  margin: 0;
}

.BackLay h1 {
  margin-left: 350px;
  font-family: Abril FatFace;
  font-size: 29.42vmin;
  writing-mode: unset;
  /* unset; */
  letter-spacing: -0.3rem;
  white-space: pre;
  color: #080f18;
  position: fixed;
  left: -4rem;
  transition: all 0.8s ease;
  opacity: 1;
  z-index: -1;
  bottom: 0px;
}

.TabItems {
  display: block;
}

.Wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 43px;
}

@media (max-width: 585px) {
  .Wrapper {
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
  }
}

@media only screen and (max-width: 768px) {
  .Main {
    margin-left: 0px;
    padding: 15px;
  }
  .Wrapper {
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
  }
}

@media (max-width: 989px) {
  body {
    display: block;
  }
}

@media (max-width: 220px) {
  .Wrapper {
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
  }
}

.Wrapper .tab-list-item {
  margin: 0 1rem 0 0;
  font-size: calc(0.875em + 0.9px);
  transition: all 0.3s ease;
  background: transparent;
  color: #c6c6c6;
}

.Wrapper .tab-list-item.tab-list-active {
  font-weight: 900 !important;
  color: #e8e8e8;
  background: #343a40;
  padding: 5px 22px;
}

div.Layout {
  margin: 1.5em 0;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  -webkit-animation-fill-mode: both;
  max-width: auto;
  column-gap: 1.5em;
}

@media only screen and (min-width: 1024px) {
  div.Layout {
    column-count: 2;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  div.Layout {
    column-count: 1;
    column-gap: 1rem;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  div.Layout {
    column-count: 1;
  }
}

@keyframes fadeInUp {
  from {
    margin-top: 4rem;
    opacity: 0;
  }
  to {
    margin-top: 1.5em;
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  from {
    margin-top: 4rem;
    opacity: 0;
  }
  to {
    margin-top: 1.5em;
    opacity: 1;
  }
}

@media (max-width: 585px) {
  div.Layout {
    opacity: 1 !important;
  }
}

@media (max-width: 989px) {
  div.Layout {
    opacity: 1 !important;
  }
}

@media (max-width: 220px) {
  div.Layout {
    opacity: 1 !important;
  }
}

div.MansoryItemStyle {
  margin: 0 0 1.5em;
  position: relative;
  cursor: pointer;
  border-radius: 9px;
  object-fit: cover;
  background-color: #091521;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: flex-end;
  border-radius: 9px;
  break-inside: avoid;
}

div.MansoryItemStyle img {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  left: 0 !important;
  top: 0 !important;
  object-fit: cover;
}

div.MansoryItemStyle::before {
  content: '';
  pointer-events: none;
  display: block;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: -1;
  background: radial-gradient(
    circle at center center,
    white 10%,
    whitesmoke 11%,
    whitesmoke 100%
  );
}

div.MansoryItemStyle::after {
  content: '';
  pointer-events: none;
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.3;
  /* background: linear-gradient(
      191deg,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.76) 100%
    ); */
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 10%,
    rgb(0 0 0 / 78%) 80%
  );
}

div.MansoryItemStyle:hover,
div.MansoryItemStyle:focus {
  cursor: none;
}

div.MansoryItemStyle:focus::after,
div.MansoryItemStyle:hover::after {
  opacity: 1;
}

div.MansoryItemStyle:hover div.content__slate,
.MansoryItemStyle:focus div.content__slate {
  z-index: 999;
  transform: none;
  opacity: 1;
}

div.MansoryItemStyle h3 {
  color: #fff;
  font-size: 1.667em;
  font-weight: 800;
}

div.MansoryItemStyle p {
  color: #d5d5d5 !important;
  font-size: calc(0.875em + 0.9px);
}

div.MansoryItemStyle p span {
  background: #696869;
  padding: 4px 10px;
  border-radius: 50px;
  text-transform: capitalize;
  font-size: 11px;
  margin-right: 6px;
  color: #fff;
  font-weight: 500;
}

div.MansoryItemStyle div.content__slate {
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
  /* &:hover {
            transform: none;
            opacity: 1;
        } */
}

@media (max-width: 585px) {
  div.MansoryItemStyle::after {
    opacity: 1 !important;
  }
  div.MansoryItemStyle div.content__slate {
    z-index: 999 !important;
    transform: none !important;
    opacity: 1 !important;
  }
}

@media (max-width: 989px) {
  div.MansoryItemStyle::after {
    opacity: 1 !important;
  }
  div.MansoryItemStyle div.content__slate {
    z-index: 999 !important;
    transform: none !important;
    opacity: 1 !important;
  }
}

@media (max-width: 220px) {
  div.MansoryItemStyle::after {
    opacity: 1 !important;
  }
  div.MansoryItemStyle div.content__slate {
    z-index: 999 !important;
    transform: none !important;
    opacity: 1 !important;
  }
}

/*! Aquiiiiiiiiiiiiiiiiiii */

div.bodyA {
  overflow: hidden;
}

.wrapper .none-button {
  border: none;
  background: transparent;
  padding-left: 0;
}

.wrapper .none-button svg {
  fill: none !important;
}

@keyframes fadeLeft {
  from {
    opacity: 0.8;
    transform: translateX(80%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

.wrapper aside {
  background: #020a13;
  width: 34em;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999999;
  transition: all 0.3s linear;
  will-change: opacity, transform;
}

@media (max-width: 768px) {
  .wrapper aside {
    width: 100% !important;
  }
}

.wrapper aside.fadeInLeft {
  animation-name: fadeLeft;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.wrapper aside .header {
  margin-bottom: 2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #14202b;
}

.wrapper aside .header svg path {
  stroke: #c6c6c6;
}

.wrapper aside .header svg:last-child {
  fill: #c6c6c6;
}

.wrapper aside .header a {
  font-size: 0.875em;
  font-weight: 900;
  color: #3f566e;
}

.wrapper aside .pos__relative {
  position: relative;
  padding: 2rem 2rem 4rem;
  overflow-x: overlay;
  max-height: 100%;
}

.wrapper aside .open__project {
  background: #3f566e;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 17px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  font-size: 0.875em;
}

.wrapper aside .open__projec svg {
  width: 16px;
  vertical-align: bottom;
  margin-left: 6px;
  fill: #fff;
}

.wrapper .main__post h3 {
  font-size: calc(1.667em - 6px);
  /* margin-bottom: 1.3rem; */
  color: #e1e1e1;
  font-weight: 800;
}

.wrapper .main__post h4 {
  font-size: 1.124em;
  color: #e1e1e1;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
}

.wrapper .main__post h4 svg {
  vertical-align: bottom;
  width: 15px;
  margin-right: 3px;
}

.wrapper .main__post p {
  color: #c6c6c6;
  font-size: 0.875em;
}

.wrapper .main__post p span {
  background: #13283e;
  padding: 6px 13px;
  border-radius: 4px;
  text-transform: capitalize;
  font-size: 11px;
  margin-right: 6px;
  color: #e1e1e1;
  font-weight: 700;
}

.wrapper .main__post p a {
  font-weight: 600;
  color: #3f566e;
}

.wrapper .main__post p a svg {
  fill: #e1e1e1;
}

.wrapper .main__post img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 11px;
}

.Overlay {
  z-index: 99999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: 'rgba(0, 0, 0, 0.8)';
}

/*- Cursor */

.CursorThumb .cursor {
  width: 65px;
  height: 65px;
  visibility: hidden;
  border: 1px solid #9e9e9c;
  border-radius: 50%;
  position: absolute;
  z-index: 99999999999;
  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-animation: cursorAnim 0.5s infinite alternate;
  animation: cursorAnim 0.5s infinite alternate;
  pointer-events: none;
}

.cursor::after {
  content: '';
  width: 10px;
  height: 10px;
  position: absolute;
  background: #9e9e9c;
  border-radius: 1px;
  opacity: 0.5;
  top: 18px;
  left: 18px;
  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-animation: rotateAnim 2s infinite alternate;
  animation: rotateAnim 2s infinite alternate;
}

.cursor::before {
  content: unset !important;
}

@keyframes rotateAnim {
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes cursorAnim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.7);
  }
}

@keyframes cursorAnim2 {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.4);
  }
}

@keyframes cursorAnim3 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.expand {
  animation: cursorAnim3 0.5s forwards;
  border: 1px solid #9e9e9c;
}

.hovered {
  border: none;
  width: 110px;
  background: #e1e1e1;
  height: 110px;
}

.hovered::after {
  content: unset;
}

.hovered::before {
  content: 'Open' !important;
  position: absolute;
  top: 50%;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  left: 50%;
  color: #020a13 !important;
  transform: translate(-50%, -50%);
}
</style>
