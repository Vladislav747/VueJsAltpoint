<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="stylus">
html
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;


*,
*::before,
*::after
  box-sizing: border-box;
  margin: 0;

.button
  cursor: pointer;
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  tap-highlight-color: hsla(0,0%,100%,0);
  font-size: 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  -webkit-box-shadow: 0 0 0 0 transparent inset;
  box-shadow: inset 0 0 0 0 transparent;
  -webkit-transition: color .1s ease,border-color .1s ease;
  transition: color .1s ease,border-color .1s ease;
  line-height: 1.2em;
  padding: 0.7rem;

h4
  font-size: 1.5rem;
  margin-bottom: 1em;

h6
  font-size: 1rem;
  margin-bottom: 1em;

.button--green
  border: 1px solid #3b8070;
  color: #3b8070;

.button--green:hover
  color: #fff;
  background-color: #3b8070;


.button--grey
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;


.button--grey:hover
  color: #fff;
  background-color: #35495e;

input.input--form
  cursor: pointer;
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  tap-highlight-color: hsla(0,0%,100%,0);
  font-size: 1em;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  color: rgba(0,0,0,.87);
  border-radius: .28571429rem;
  -webkit-box-shadow: 0 0 0 0 transparent inset;
  box-shadow: inset 0 0 0 0 transparent;
  -webkit-transition: color .1s ease,border-color .1s ease;
  transition: color .1s ease,border-color .1s ease;
  line-height: 1.2em;
  padding: 0.7rem;





</style>
