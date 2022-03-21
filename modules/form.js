
define([
    "dojo/_base/declare",
    "app/increment",
    "dojo/on",
    "dojo/dom",
], function (declare, inc, on) {
    var form = {}
    function inc() { }


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
        getForm: function(){
            return form
        }

    };

});

