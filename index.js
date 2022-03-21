const html = String.raw


// Instead of using data-dojo-config, we're creating a dojoConfig
// object *before* we load dojo.js; they're functionally identical,
// it's just easier to read this approach with a larger configuration.
//const dojo = require('bower_components/dojo/dojo.js')

//html is using with "lit-html" extension to see literal templates as html

function handlerSend(e) {
    e.preventDefault()
    console.log(e)
}



require([
    'dojo/dom',
    'dojo/dom-construct',
    'templates/buttonsTemp',
    'templates/formTemp',
    'app/myModule'
], function (dom, domConstruct, buttonsIncTemp, formTemp, mymod) {
    var greetingNode = dom.byId('main');
    // console.log(buttonsValue.buttons, "a")
    domConstruct.place(
        buttonsIncTemp.buttons
        , greetingNode);
    domConstruct.place(
        formTemp.formTemp
        , greetingNode);
});
require([
    "dojo/on",
    'dojo/dom',
    "app/increment",
    'dojo/domReady!'
], function (on, dom, increment) {

    var inc = dom.byId('buttonInc');
    var dec = dom.byId('buttonDec');
    var incP = dom.byId('p-inc')

    on(inc, "click", function (evt) {
        evt.preventDefault()
        increment.increment();
        console.log(increment.getValue())
        incP.innerHTML = increment.getValue()
    });
    on(dec, "click", function (evt) {
        evt.preventDefault()
        increment.decrement();
        console.log(increment.getValue())
        incP.innerHTML = increment.getValue()
    });
});

require([
    "dojo/on",
    'dojo/dom',
    'dojo/dom-form',
    'dojo/domReady!'
], function (on, dom, domForm) {

    var form = dom.byId('form');
    var submit = dom.byId('form-send');

    on(submit, "click", function (evt) {
        console.log(description)
        var description = domForm.fieldToObject('form-description');
        var address = domForm.fieldToObject('form-address');
        var phone = domForm.fieldToObject('form-phone');
        var category = domForm.fieldToObject('form-category');
        var coordinates = domForm.fieldToObject('form-coordinates');
        evt.preventDefault()
        let form = {
            description,
            address,
            phone,
            category,
            coordinates
        }
        console.log(form)
    });



});




// require(["dojo/on", "dojo/dom", "dojo/dom-style", "dojo/mouse", "dojo/domReady!"],
//     function (on, dom, domStyle, mouse) {
//         var myButton = dom.byId("submit-send")
//         // myDiv = dom.byId("myDiv");

//         on(myButton, "click", function (evt) {
//             domStyle.set(myButton, "backgroundColor", "black");
//         });
//         on(myButton, mouse.enter, function (evt) {
//             domStyle.set(myButton, "backgroundColor", "red");
//         });
//         on(myButton, mouse.leave, function (evt) {
//             domStyle.set(myButton, "backgroundColor", "");
//         });
//     });
// require([
//     'modules/myModule'
// ], function (myModule) {
//     myModule.setText('main', 'Hello Dojo!');

//     setTimeout(function () {
//         myModule.restoreText('main');
//     }, 3000);
// });