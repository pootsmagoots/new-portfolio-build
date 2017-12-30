
// var $ = require('jquery');
// window.jQuery = $;
// window.$ = $;

import MobileMenu from './modules/Mobile-menu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/Stickyheader';
import Modal from './modules/Modal';
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

// var message = alert("Please note that this site is not currently completed. The Contact Me module and the projects section is still under development");
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".projects"), "55%");
new RevealOnScroll($(".mountain-lake"), "65%");
new RevealOnScroll($(".resume-section"), "65%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
