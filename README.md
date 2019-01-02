![Hoverable.JS](/hoverable.js-small.png?raw=true "Title")

A lightweight Javascript library providing easy to use hover functionalities for text and other elements.

## Add Hoverable To Your Project

Either download hoverable.js, add it to your project file structure and link to it with a script tag...  

Or use the cdn hosted version of the library by adding the following script tag to the bottom of your html body(before your main script): <script src="https://cdn.jsdelivr.net/gh/Austin-Hoyle/hoverable.js@v.90/hoverable.js"></script>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo


## Deployment

Add additional notes about how to deploy this on a live system


## Authors

* **Austin Hoyle** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

