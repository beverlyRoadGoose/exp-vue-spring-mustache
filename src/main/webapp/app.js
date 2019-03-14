import HelloComponent from './components/hello-component.js';

/*
 * Wrap the vue app initialization in the window onload event
 * because the vue js file is loaded at the beginning of the page
 * and the vue template div isn't rendered by then.
 * @see https://stackoverflow.com/a/29484590/4961714
 */
window.onload = function () {
  new Vue({
    el: '#vue-app',

    components: {
      HelloComponent
    }
  });
}