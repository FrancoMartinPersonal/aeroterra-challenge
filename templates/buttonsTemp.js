
define([
    "dojo/_base/declare",
    "app/increment",
    "dojo/on",
    "dojo/dom",
], function (declare,inc,on) {
  
     function inc (){}
     
     
    const html = String.raw
   // console.log(inc)
    return {
        buttons: 
             html`
            <div id='div-button'>
                <button id='buttonInc'> aumentar</button>
                <p id='p-inc' ></p>
                <button id='buttonDec'> decrementar</button>
            </div>
                `
        
    };

});

