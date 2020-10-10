import {color} from "./color_converter.js";

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
        inputChange: function (event) {
            // Performs some actions after changing the value of any RGB input.
            const colorInputs = document.querySelectorAll('.color-input');
            const rgb = {};
            colorInputs.forEach(colorInput => {
                rgb[colorInput.id] = colorInput.valueAsNumber;
            });

            dom.background.setColor(rgb);
            dom.hex.setValue(color.rgb_to_hex(rgb));
            dom.binary.setValue(event.target.id, rgb);
        }
    },
    background: {
        setColor: function (rgb) {
            // Changes color of the background.
            document.body.style.backgroundColor = `rgb(${rgb['red']}, ${rgb['green']}, ${rgb['blue']})`;
        }
    },
    hex: {
        setValue: function (hex) {
            // Display a HEX color value.
            const hexContainer = document.querySelector('#hex-value');
            hexContainer.innerHTML = hex;
        }
    },
    binary: {
        setValue: function (color_name, rgb) {
            document.querySelector(`#binary-${color_name}-value`).innerHTML = color.convert_decimal(rgb[color_name], 2);
        }
    }
}