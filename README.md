![Hoverable.JS](/hoverable.js-small.png?raw=true "Title")

A lightweight Javascript library providing easy to use hover functionalities for text and other elements.

## Add Hoverable To Your Project

Either download hoverable.js, add it to your project file structure and link to it with a script tag...  

Or use the cdn hosted version of the library by adding the following script tag to the bottom of your html body(before your main script): <script src="https://cdn.jsdelivr.net/gh/Austin-Hoyle/hoverable.js@v0.90/hoverable.js"></script>




## How To Use

Hoverable gives you access to two main functions,  hover() and hover_advanced(hover_settings_list).

### hover()
    The hover function takes no arguments, simply call it at the beginning of of your main script.  If you use jquery call it at the beginning of your $(document).ready(function(){}); clause.


```javascript
{
    classes: ["hover_class_1"], //string list of classes you want to apply these effects to
    parse_settings: {
        parse_mode: null, //parse_mode options ["letters", "words", "phrase"] leave null for no text parsing(images/divs etc.)
    },
    hover_effects: {
        transform_transition_time: 1, //this controls vertical_shift, horizontal_shift, rotate and scale (all transform properties)
        vertical_shift: {
            active: false,
            value: "30px", //example formats["10px", "10%", "10vh"]
        },
        horizontal_shift: {
            active: false,
            value: "30px", //example formats["10px", "10%", "10vw"]
        },
        rotate: {
            active: true,
            degrees: 5,
        },
        scale: {
            active: true,
            scale_factor: 1.2,
        },
        opacity: {
            active: true,
            transition_time: .3,
            value: .4, //0 to 1
        },
        color: {
            active: true,
            transition_time: .3,
            color: "red", //example formats["red", "rgba(255,0,0,1)"]
        },
        text_decoration: {
            active: true,
            transition_time: .3,
            value: "underline",
        },
    }
}
```





## Authors

* **Austin Hoyle** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

