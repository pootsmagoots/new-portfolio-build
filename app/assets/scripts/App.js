
// var $ = require('jquery');
// window.jQuery = $;
// window.$ = $;
import MobileMenu from './modules/mobile-menu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
// var Person = require('./modules/Person'); /*Requires the object that is in the Person.js file */
// import Person from './modules/Person';
//
//
// class Adult extends Person {
//   payTaxes() {
//     console.log(this.name + " now owes a lot in taxes. ");
//   }
// }
//
//
// var travis = new Person('Travis Batts', "blue");
// travis.greet();
//
// var nicole = new Adult(' Nicole Batts', "orange");
// nicole.greet();
// nicole.payTaxes();

// end of ES6 examples

var mobileMenu = new MobileMenu()
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".projects"), "55%");
