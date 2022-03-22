

const html = String.raw



//html is using with "lit-html" extension to see literal templates as html

function handlerSend(e) {
    e.preventDefault()
    console.log(e)
}

// TEMPLATES

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
        formTemp.formTemp, greetingNode)
    domConstruct.place(
        formTemp.open, greetingNode)
    // domConstruct.place(
    //     formTemp.formTemp
    //     , greetingNode);
});

//CLOSER CONTROLLER

require([
    "dojo/on",
    'dojo/dom',
    'dojo/dom-construct',
    'templates/formTemp',
    "dojo/dom-style",
    'dojo/domReady!'
], function (on, dom, domConstruct, formTemp, domStyle) {
    var close = dom.byId('form-closer')
    var greetingNode = dom.byId('main');
    var form = dom.byId('form')
    var open = dom.byId('open')

    on(close, "click", function (evt) {
        evt.preventDefault()
        console.log('hola')
        domStyle.set(form, 'display', 'none')
        domStyle.set(open, 'display', 'inline')
    });
    on(open, "click", function (evt) {
        evt.preventDefault()
        domStyle.set(open, 'display', 'none')
        domStyle.set(form, 'display', 'inline')
    });
})

//FORM DATA SAVER

require([
    "dojo/on",
    'dojo/dom',
    'dojo/dom-form',
    'app/form',
    'dojo/domReady!'
], function (on, dom, domForm, FormModule) {

    //var form = dom.byId('form');
    var submit = dom.byId('form-send');

    on(submit, "click", function (evt) {

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

        FormModule.setForm(form)



    });



});

//MAP 

require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "app/map"

], function (esriConfig, Map, MapView, Search, appMap) {

    esriConfig.apiKey = "AAPK6fc7b30249754c6f86a413a42629b2a2YqrlLnr3RqhhP6es0-A-dsNFoYV4vijPngrJhaJeXAWEmYwQbt4Kme_UbJhqIPnX";

    const map = new Map({
        basemap: "arcgis-navigation"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-65.3321, -30.6062],
        zoom: 4
    });

    const search = new Search({  //Add Search widget
        view: view
    });

    view.ui.add(search, "top-right"); //Add to the map

    appMap.setMap(map)
    appMap.setMapView(view)

});

//MAP POINTS ADDER

require(["esri/config",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    'app/form',
    'app/map',

    "dojo/on",
    'dojo/dom',
    'dojo/dom-form',
    'app/form',
    "dojo/dom-style",
    'dojo/domReady!',
], function (esriConfig, Graphic, GraphicsLayer, appForm, appMap,
    on,
    dom,
    domForm,
    appForm,
    domStyle) {

    var submit = dom.byId('form-send');
    var form = dom.byId('form')
    var open = dom.byId('open')
    var close = dom.byId('form-closer')

    on(submit, "click", function (evt) {
  

        var description = domForm.fieldToObject('form-description');
        var address = domForm.fieldToObject('form-address');
        var phone = domForm.fieldToObject('form-phone');
        var category = domForm.fieldToObject('form-category');
        var coordinates = domForm.fieldToObject('form-coordinates');
        evt.preventDefault()



        let map = appMap.getAll().map
        console.log(appMap.getAll())
        console.log(form, 'form')
        esriConfig.apiKey = "AAPK6fc7b30249754c6f86a413a42629b2a2YqrlLnr3RqhhP6es0-A-dsNFoYV4vijPngrJhaJeXAWEmYwQbt4Kme_UbJhqIPnX";

        coordinates = coordinates.split(' ')

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        const point = { //Create a point
            type: "point",
            longitude: coordinates[0],
            latitude: coordinates[1]
        };

        const simpleMarkerSymbol = {
            type: "simple-marker",
            color: [226, 119, 40],  // Orange
            outline: {
                color: [255, 255, 255], // White
                width: 1
            }
        };
        let content = `
    <b>Descripción</b> : ${description} <br> 
    <b>Dirección</b> : ${address} <br> 
    <b>Coordeanadas</b> : ${coordinates} <br> 
    <b>teléfono</b> : ${phone} <br> 
    <b>category</b> : ${category} <br> 
    `
        const popupTemplate = {
            title: description,
            content: content
        }

        const attributes = {
            Name: "Graphic",
            Description: "I am a polygon"
        }

        const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
            attributes: attributes,
            popupTemplate: popupTemplate
        });
        graphicsLayer.add(pointGraphic);

     
           
           //close window
            domStyle.set(form, 'display', 'none')
            domStyle.set(open, 'display', 'inline')
       
    })
});