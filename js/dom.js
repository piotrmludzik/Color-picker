import {color} from "./color_converter.js";


export let dom = {
    colorInputs: {
        init: function () {
            // Inits default value and new attributes for the color input fields.
            const colorInputs = document.querySelectorAll('.color-input');
            colorInputs.forEach(colorInput => {
                colorInput.min = '0';
                colorInput.max = '255';
                colorInput.valueAsNumber = 0;  // TODO: setup default backgrond color from css!
            });

            dom.background.setColor();
            this.initEventListners();
        },
        initEventListners: function () {
            // Inits event listeners for the color input fields.
            const colorInputs = document.querySelectorAll('.color-input');
            colorInputs.forEach(colorInput => colorInput.addEventListener('input', this.inputChange));
        },
        inputChange: function (event) {
            // Performs some actions after changing the value of any RGB input.
            const rgb = dom.colorInputs.getRgbColor();

            dom.background.setColor(rgb);
            dom.hex.setValue(rgb);
            dom.binary.setValue(event.target.id, rgb);
        },
        getRgbColor: function () {
            // Returns an array of RGB color -> [red, green, blue].
            const colorInputs = document.querySelectorAll('.color-input');
            const rgb = {};
            colorInputs.forEach(colorInput => {
                rgb[colorInput.id] = colorInput.valueAsNumber;
            });
            return rgb;
        }
    },
    transparencySlider: {
        init: function () {
            // Inits default value and new attributes for the transparency slider.
            const slider = document.querySelector('#transparency-slider');
            slider.min = '0';
            slider.max = '100';
            slider.value = '100';

            dom.transparencySlider.displayValue();
            this.initEventListners();
        },
        initEventListners: function () {
            // Inits event listeners for the transparency slider.
            const slider = document.querySelector('#transparency-slider');
            slider.addEventListener('input', this.inputChange);
        },
        inputChange: function () {
            // Performs some actions after changing the value of the transparency slider.
            dom.background.setColor();
        },
        displayValue: function () {
            // Displays the value of the transparency slider.
            document.querySelector('#transparency-output').innerHTML = document.querySelector('#transparency-slider').value;
        }
    },
    background: {
        setColor: function (rgb=null) {
            // Changes color of the background.
            if (rgb === null) rgb = dom.colorInputs.getRgbColor();

            const sliderValue = document.querySelector('#transparency-slider').value;
            document.querySelector('#main-container').style.background = `rgba(${rgb['red']}, ${rgb['green']}, ${rgb['blue']}, ${sliderValue / 100})`;
            dom.transparencySlider.displayValue();
        }
    },
    hex: {
        setValue: function (rgb) {
            // Display a HEX color value.
            const hexContainer = document.querySelector('#hex-value');
            hexContainer.innerHTML = color.rgbToHex(rgb);
        }
    },
    binary: {
        setValue: function (color_name, rgb) {
            // Display a binary color value.
            document.querySelector(`#binary-${color_name}-value`).innerHTML = color.convertDecimal(rgb[color_name], 2);
        }
    }
}