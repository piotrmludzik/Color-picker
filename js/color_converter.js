const board = {
    hex: {0: '0', 1: '1',  2: '2',  3: '3',  4: '4',  5: '5',  6: '6', 7: '7',  8: '8',  9: '9', 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'}
};

export let color = {
    rgb_to_hex: function (rgb) {
        /*
            Converts a RGB color to a HEX color value.
            Example:
                rgb(220, 20, 60)
                    1 step (first number):
                        220 module 16 = 13 -> 13 dec = D hex
                        220 floor division 16 = 12 -> 12 dec = C hex
                        result: 220 dex = DC hex
                    2 step (second number):
                        ...
                        result: 20 dec = 14 hex
                    3 steep (third number):
                        ...
                        result: 60 dec = 3C hex
                result: hex #DC143C (DC + 14 + 3C)
        */
        const hex_component = {};
        for (const [color_name, color_value] of Object.entries(rgb)) {
            const first_operation = Math.floor(color_value / 16);
            const second_operation = color_value % 16;

            const first_hex = board.hex[first_operation];
            const second_hex = board.hex[second_operation];

            hex_component[color_name] = first_hex + second_hex;
        }

        return hex_component['red'] + hex_component['green'] + hex_component['blue'];
    },
    convert_decimal: function (decimal, division_base) {
        /*
            Converts a decimal number to a binary, octal or hexadecimal number.
            Conversion steps:
                1. Divides the number by division base.
                2. Gets the integer quotient for the next iteration.
                3. Gets the remainder for the converted digit.
                4. Repeats the steps until the quotient is equal to 0.
                5. Reverse the obtained numbers so that the last result is the first number.
        */
        const new_number_components = [];
        divide(decimal);
        return new_number_components.reverse().join('');

        function divide(decimal) {
            const integer = Math.floor(decimal / division_base);
            const remainder = decimal % division_base;

            new_number_components.push(remainder);
            if (integer > 0) divide(integer);
        }
    }
}