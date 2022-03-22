
define([
    "dojo/_base/declare",
    "app/increment",
    "dojo/on",
    "dojo/dom",
], function (declare, inc, on) {
    var form = {}



    const html = String.raw
    // console.log(inc)
    return {
        setForm: function (formParam) {

            form.description = formParam.description
            form.address = formParam.address
            form.phone = formParam.phone
            form.category = formParam.category
            form.coordinates = formParam.coordinates
        },
        getForm: function () {
            return form
        },
        controlForm: function () {
            let { description,
                address,
                phone,
                category,
                coordinates } = form
                let arrayCoor = coordinates.split(' ')
            if (description.length < 1) {
                return 'no hay información suficiente de descripción'
            } else if (address.length < 1) {
                return 'no hay información suficiente de dirección'
            } else if (phone.length < 1) {
                return 'no hay información suficiente de teléfono'
            }else if (category.length < 1) {
                return 'no hay información suficiente de categoria'
            }else if (coordinates.length < 1) {
                return 'no hay información suficiente de coordenadas'
            }else if(arrayCoor[0]< -180 || arrayCoor[0]> 180 || arrayCoor[1]< -90 || arrayCoor[1]> 90){
                console.log(arrayCoor[0], arrayCoor[1])
                return`valores posibles Longitud -180 < x < 180 ; Latitud -90 < y < 90`
            }
        }

    };

});

