
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
            if (description.length < 1) {
                return 'not enough information of description'
            } else if (address.length < 1) {
                return 'not enough information of address'
            } else if (phone.length < 1) {
                return 'not enough information of phone'
            }else if (category.length < 1) {
                return 'not enough information of category'
            }else if (coordinates.length < 1) {
                return 'not enough information of coordinates'
            }
        }

    };

});

