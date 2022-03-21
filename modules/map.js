define(function () {
    let map,
        view,
        search
   
    return {
        setMap: function (paramMap) {
            map = paramMap
           
          
        },
        setMapView: function (paramView) {
            view = paramView
        },
        setSearch: function (paramSearch) {
            search = paramSearch
        },
        getAll: function () {

            return {
                map,
                view,
                search
            }
        }
    }
});



// require(["esri/config",
//     "esri/Map",
//     "esri/views/MapView",

//     "esri/widgets/Search",
//     "esri/Graphic",
//     "esri/layers/GraphicsLayer",
//     'app/form',
//     'dojo/domReady!'

// ], function (esriConfig, Map, MapView, Search, Graphic, GraphicsLayer,appForm) {
//     console.log(appForm.getForm())
//     esriConfig.apiKey = "AAPK6fc7b30249754c6f86a413a42629b2a2YqrlLnr3RqhhP6es0-A-dsNFoYV4vijPngrJhaJeXAWEmYwQbt4Kme_UbJhqIPnX";

//     const map = new Map({
//         basemap: "arcgis-navigation"
//         // Basemap layer service
//     });

//     const view = new MapView({
//         map: map,
//         center: [-40, 28],
//         zoom: 2,
//         // Zoom level
//         container: "viewDiv" // Div element
//     });

//     const search = new Search({  //Add Search widget
//         view: view
//     });

//     view.ui.add(search, "top-right"); //Add to the map

//     const graphicsLayer = new GraphicsLayer();
//     map.add(graphicsLayer);
//     const point = { //Create a point
//         type: "point",
//         longitude: -34.595986,
//         latitude: -58.3724715
//     };

//     const simpleMarkerSymbol = {
//         type: "simple-marker",
//         color: [226, 119, 40],  // Orange
//         outline: {
//             color: [255, 255, 255], // White
//             width: 1
//         }
//     };
//     let content = `
//     <b>Descripción</b> : eso <br>
//     <b>Dirección</b> : jose juan 2 <br>
//     <b>Coordeanadas</b> : 123 124 <br>
//     `
//     const popupTemplate = {
//         title: "rotisería pingo fresco",
//         content: content
//     }
//     const popupTemplate2 = {
//         title: "juan dartes",
//         content: "<b>a</b>"
//     }
//     const attributes = {
//         Name: "Graphic",
//         Description: "I am a polygon"
//     }

//     const pointGraphic = new Graphic({
//         geometry: point,
//         symbol: simpleMarkerSymbol,
//         attributes: attributes,
//         popupTemplate: popupTemplate
//     });
//     graphicsLayer.add(pointGraphic);

// });