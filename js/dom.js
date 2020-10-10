export let dom = {
    colorInputs: {
        init: function () {
            // Inits default value and new attributes for the color input fields.
            document.body.style.backgroundColor = 'rgb(153, 153, 153)';

            const colorInputs = document.querySelectorAll('.color-input');
            colorInputs.forEach(colorInput => {
                colorInput.min = '0';
                colorInput.max = '255';
                colorInput.valueAsNumber = 0;  // TODO: setup default backgrond color from css!
            });
            this.initEventListners();
        },
        initEventListners: function () {
            // Inits event listeners for the color input fields.
            const colorInputs = document.querySelectorAll('.color-input');
            colorInputs.forEach(colorInput => colorInput.addEventListener('input', this.inputChange));
        },
        inputChange: function () {
            // Changes color of the background.
            const colorInputs = document.querySelectorAll('.color-input');
            const rgb = [], red = 0, green = 1, blue = 2;
            colorInputs.forEach(colorInput => {
                rgb.push(colorInput.valueAsNumber);
            });
            document.body.style.backgroundColor = `rgb(${rgb[red]}, ${rgb[green]}, ${rgb[blue]})`;
        }
    }
}