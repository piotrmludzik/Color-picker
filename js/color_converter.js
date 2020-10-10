const hex = {0: '0', 1: '1',  2: '2',  3: '3',  4: '4',  5: '5',  6: '6', 7: '7',  8: '8',  9: '9', 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'}


export let color = {
    rgbToHex: function (rgb) {
        // Converts a RGB color to a HEX color value.
        const hexComponent = {};
        for (const [colorName, colorValue] of Object.entries(rgb)) {
            hexComponent[colorName] = color.convertDecimal(colorValue, 16);
        }

        return hexComponent['red'] + hexComponent['green'] + hexComponent['blue'];
    },
    convertDecimal: function (decimal, divisionBase) {
        /*
            Converts a decimal number to a binary, octal or hexadecimal number.
            Conversion steps:
                1. Divides the number by division base.
                2. Gets the integer quotient for the next iteration.
                3. Gets the remainder for the converted digit.
                4. Repeats the steps until the quotient is equal to 0.
                5. Reverse the obtained numbers so that the last result is the first number.
        */
        const newNumberComponents = [];
        divide(decimal);
        return newNumberComponents.reverse().join('');

        function divide(decimal) {
            const integer = Math.floor(decimal / divisionBase);
            const remainder = decimal % divisionBase;

            newNumberComponents.push(hex[remainder]);
            if (integer > 0) divide(integer);
        }
    }
}