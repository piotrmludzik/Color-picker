# Color picker

## Story

You've recently heard that several web designers complained about how hard
it is to find a proper background color when they design a website.

> "How awesome it would be to have an application where we can try any
> color in a browser..."

> "I hate calculating those weird hashtag numbers web developers
> always ask for..."

You made up your mind to help them and implement a solution.

## What are you going to learn?

You will learn and practice the following topics:

- representing colors in hexadecimal (HEX) and RGB format
- calculating between number systems (e.g. from base 10 to base 16)
- dynamically setting DOM elements' colors with JavaScript
- validating number input fields with built-in html validation
- transparent colors

## Tasks

1. Input fields should have a minimum and maximum validation because the Red, Green and Blue (R-G-B) values are always in range 0-255.
    - Input fields do not allow to set a number below 0 / above 255 with the up/down arrows.
    - When someone types a number below 0 / above 255 manually in an input field, it should get a red border to indicate that the value is invalid.

2. Implement a dynamically changeable background for the page.
    - Input fields have a default value which is the R-G-B value of the page's initial background (`#999999`)
    - When user sets a new value of an input field, background of the page changes according to the new value.

3. Calculate and show the actual color's value in hexadecimal format.
    - There is a javascript function that returns a string for the given R-G-B input in hexadecimal format. (e.g. `#123456`)
    - The algorithm should be written by student, copy a whole solution from Stackoverflow is not allowed in this case - it would be too easy, we suggest to use them only to test your solution.
    - The hexadecimal format of the actual color is written in the prepared area.

4. Calculate and show the actual color's R-G-B values in binary format.
    - There is a javascript function that returns a string for the given R-G-B input in binary format. (e.g. `10001001`)
    - The algorithm should be written by student, copy a whole solution from Stackoverflow is not allowed in this case - it would be too easy, we suggest to use them only to test your solution.
    - The binary format of the actual color's R-G-B values are written in the prepared area.

5. Make a new input field next to the existing three, which can set transparency of the background.
    - There is a new input field and a label named `Transparency` which can contain values in a specified range (e.g. 0-100 / 0-255, 0-1 - it's your choice).
    - The new field's default value is the maximum of the specified range. (It means that the background is not transparent at all by default.)
    - When the new field's value changes, body element's background transparency should change according to the new value. User should change it from full transparent to full visible.

## General requirements

None

## Hints

- If you google for it, you can find many RGB-HEX converter functions created by others, but now the goal is to write an own algorithm.
- You should change the background of the `body` element when user sets a new value. If you do so, you can also test the task `Make transparency settable` by setting e.g. an image as the `background-image` of the `html` element. The image will be "under the colored body" and will be visible when transparency is not set to fully visible
- In browsers' inspectors there is a built-in color picker which is accessible by clicking on the colored square next to a color when editing an element's CSS.
- If you inspect the CSS file in the starter code, you can get some ideas for your other projects as well.
- You can open the `index.html` by starting a small HTTP server
(see the background materials for details)

## Starting your project

To start your project click [this link](https://journey.code.cool/v2/project/solo/blueprint/color-picker/javascript).

## Background materials

- <i class="far fa-exclamation"></i> [Computer number systems](https://www.includehelp.com/computer-number-systems.aspx)
- <i class="far fa-exclamation"></i> [CSS color reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- <i class="far fa-exclamation"></i> [Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- <i class="far fa-exclamation"></i> [How to start a local HTTP server](https://learn.code.cool/full-stack/#/../pages/tools/serve-files)
