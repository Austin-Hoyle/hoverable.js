![Hoverable.JS](/hoverable.js-small.png?raw=true "Title")

A lightweight Javascript library providing easy to use hover functionalities for text and other elements.

Text functionalities include hover funcitons per letter, per word and per entire phrase.

&emsp;

## Add Hoverable To Your Project

Either download hoverable.js, add it to your project file structure and link to it with a script tag...  

Or use the cdn hosted version of the library by adding the following script tag to the bottom of your html body(before your main script): <script src="https://cdn.jsdelivr.net/gh/Austin-Hoyle/hoverable.js@v0.90/hoverable.js"></script>


&emsp;

## How To Use

&nbsp;
Hoverable gives you access to two main functions,  hover() and hover_advanced(hover_settings_list).
&emsp;

### hover()

1. Call hover at the beginning of your own script(only needs to be called once).
2. Apply recognized hoverable class to an element based on your text parsing needs (one class per element).
3. In your css apply styles to one of the four approved classes or the universal .hover_item class.

That's it!!

The hover function takes no arguments, simply call it at the beginning of of your main script.  If you use jquery call it at the beginning of your $(document).ready clause.

When called the hover function searches for four classes. (.hover, .hover-chars, .hover-words, .hover-phrase).  Apply a class to an element based on how you would like to parse the text.

| Notable Classes| Effect        |Use In..|
| ------------- | ------------- |-----|
| .hover        | No text parsing. Apply effects to entire element. |HTML|
| .hover-chars  | Apply effects to every letter in text.  |HMTL|
| .hover-words  | Apply effects to each word in text.  |HTML|
| .hover-phrase | Apply effects to entire phrase.  |HTML|
| .hover_item | Edit css of all hoverable classes.  |CSS only|

You can choose to style your elements using their classes from the above table, or you can style all hoverable elements at once using the universal .hover_item class.

### Example:

### javascript (step 1):
```javascript
    hover();
```

### html (step 2):
```html
    <h3 class="hover-chars">My Name is Austin Hoyle..</h3>
```

### css (step 3):
```css
    .hover_item{
        transition: transform .2s, color .4s;
        display: inline-block;
    }
    .hover_item:hover{
        transform: scale(1.3);
        color: rgba(77, 184, 255, 1);
    }
```

&emsp;
### hover_advanced(hover_settings_list)

hover_advanced(hover_settings_list) allows you to use any number of custom classes, and also allows you to easily configure your hover effects using json, avoiding css completely if you wish.

1. Call hover_advanced(hover_settings_list) at the beginning of your own script(only needs to be called once).
2. Apply your custom classes to desired html elements.

### Hover_Settings template
!Important: This is the required format for the input json.  Do not add or remove nodes, simply edit the available settings as you see fit. You will pass a list of one or more of these objects to hover_advanced.

```javascript
    {
        classes: ["hover_class_1"], //string list of classes you want to apply these effects to
        parse_settings: {
            parse_mode: null,  //parse_mode options ["letters", "words", "phrase"] leave null for no text parsing(images/divs etc.)
        },
        hover_effects: {
            transform_transition_time: 1,  //this controls vertical_shift, horizontal_shift, rotate and scale (all transform properties)
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


### Example:

### javascript (step 1):

```javascript
hover_advanced([{
        classes: ["hover_class_1"], //string list of classes you want to apply these effects to
        parse_settings: {
            parse_mode: null,  //parse_mode options ["letters", "words", "phrase"] leave null for no text parsing(images/divs etc.)
        },
        hover_effects: {
            transform_transition_time: 1,  //this controls vertical_shift, horizontal_shift, rotate and scale (all transform properties)
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
    }]);
```
### html (step 2):
```html
    <h3 class="hover_class_1">Let's Work Together</h3>
```

&emsp;


## Authors

* **Austin Hoyle**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

