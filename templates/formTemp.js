
define([
    "dojo/_base/declare",
    "app/form",
    "dojo/on",
    "dojo/dom",
], function (declare, inc, on) {

    const html = String.raw
    // console.log(inc)
    return {
        open: html`
        <button id='open' style='display:none' class='mt-3 bg-warning position-absolute top-10 start-50 translate-middle'>
            open
        </button>
           `,
        formTemp:
            html`
            <form class="w-50 bg-warning bg-opacity-50 position-absolute top-50 start-50 translate-middle" id='form'>
                <button id='form-closer' role="button"
                    class='p-1 bg-secondary text-white position-absolute translate-middle'>X</button>
                <div class="px-3 mb-3">
                    <label for="form-description" class="form-label">nombre</label>
                    <input type="text" name='form-description' class="form-control" id="form-description" value=''
                        placeholder="Ej. CONSTRUCTORA S.A">
                </div>
                <div class="px-3 mb-3">
                    <label for="form-address" class="form-label">dirección</label>
                    <input type="text" name='form-address' class="form-control" id="form-address" value=''
                        placeholder="Ej. Alberdi 464">
                </div>
                <div class="px-3 mb-3">
                    <label for="form-phone" class="form-label">Teléfono</label>
                    <input type="text" name='form-phone' class="form-control" id="form-phone" value=''
                        placeholder="Ej. +54 9 11 2594-4873">
                </div>
                <div class="px-3 mb-3">
                    <label for="form-category" class="form-label">Disabled select menu</label>
                    <select id="form-category" name='form-category' class="form-select">
                        <option>comercial</option>
                        <option>residencial</option>
                        <option>mixta</option>
                    </select>
                </div>
                <div class="p-3 mb-3">
                    <label for="form-coordinates" class="form-label">Coordenadas</label>
                    <input type="text" name='form-coordinates' class="form-control" id="form-coordinates" value=''
                        placeholder="Ej. Alberdi 464">
                </div>
                <input class="btn btn-primary" id="form-send" type="submit" value="Submit">
            </form>

                `

    };

});



