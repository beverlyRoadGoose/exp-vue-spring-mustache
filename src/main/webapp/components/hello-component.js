export default {
  name: 'hello-component',
  props: ['name'],

  template: `
    <span>{{this.name}}</span>
  `
}