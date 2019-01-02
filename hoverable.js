// HOVERABLE //
//Author: Austin Hoyle


function hover_advanced(hover_settings_list){

    Array.prototype.forEach.call(hover_settings_list, function(hover_settings, index, arr) {
        Array.prototype.forEach.call(hover_settings.classes, function(hover_class, index, arr) {

            elements = document.getElementsByClassName(hover_class);
            Array.prototype.forEach.call(elements, function(element, index, arr) {
                content = element.innerHTML;
                new_content = parse({parse_mode: hover_settings.parse_settings.parse_mode, html: content}, hover_class);
                element.innerHTML = new_content;
                if(hover_settings.parse_settings.parse_mode){
                    element.classList.remove(hover_class);
                }
            });

            apply_effects(hover_settings.hover_effects, hover_class);

        });
    });

    add_style('.hover_span{display: inline-block; white-space: pre;}');
}

function hover(){
    parse_settings = {
        parse_mode: null,
        html: null,
    }

    elements = document.getElementsByClassName("hover-phrase");
    Array.prototype.forEach.call(elements, function(element, index, arr) {
        content = element.innerHTML;
        parse_settings.parse_mode = "phrase";
        parse_settings.html = content;
        new_content = parse(parse_settings, null);
        element.innerHTML = new_content;
    });

    elements = document.getElementsByClassName("hover-words");
    Array.prototype.forEach.call(elements, function(element, index, arr) {
        content = element.innerHTML;
        parse_settings.parse_mode = "words";
        parse_settings.html = content;
        new_content = parse(parse_settings, null);
        element.innerHTML = new_content;
    });

    elements = document.getElementsByClassName("hover-chars");
    Array.prototype.forEach.call(elements, function(element, index, arr) {
        content = element.innerHTML;
        parse_settings.parse_mode = "letters";
        parse_settings.html = content;
        new_content = parse(parse_settings, null);
        element.innerHTML = new_content;
    });

    add_style('.hover_span{display: inline-block; white-space: pre;}')
}



function apply_effects(effects, hover_class){
    transition_string = "."+hover_class+"{transition: ";
    hover_string = "."+hover_class+":hover{";
    transform_string = "transform: ";
    transform_added = false;

    if(effects.horizontal_shift.active == true){
        if(!transform_added){
            transition_string += "transform " + effects.transform_transition_time + "s ,";
            transform_added = true;
        }
        transform_string += "translateX("+effects.horizontal_shift.value+") ";
    }
    if(effects.vertical_shift.active == true){
        if(!transform_added){
            transition_string += "transform " + effects.transform_transition_time + "s ,";
            transform_added = true;
        }
        transform_string += "translateY("+effects.vertical_shift.value+") ";
    }
    if(effects.rotate.active == true){
        if(!transform_added){
            transition_string += "transform " + effects.transform_transition_time + "s ,";
            transform_added = true;
        }
        transform_string += "rotate("+effects.rotate.degrees+"deg) ";

    }
    if(effects.scale.active == true){
        if(!transform_added){
            transition_string += "transform " + effects.transform_transition_time + "s ,";
            transform_added = true;
        }
        transform_string += "scale("+effects.scale.scale_factor+") ";
    }
    if(effects.opacity.active == true){
        transition_string += "opacity " + effects.opacity.transition_time + "s ,";
        hover_string += "opacity: "+ effects.opacity.value +";";
    }
    if(effects.color.active == true){
        transition_string += "color " + effects.color.transition_time + "s ,";
        hover_string += "color: "+ effects.color.color +";";
    }
    if(effects.text_decoration.active == true){
        transition_string += "text-decoration " + effects.text_decoration.transition_time + "s ,";
        hover_string += "text-decoration: "+effects.text_decoration.value+";";
    }

    transform_string += ";";
    transition_string = transition_string.replace(/(^,)|(,$)/g, "");
    transition_string += ";";

    hover_string += transform_string + "}"

    css_string = hover_string + transition_string;

    add_style(css_string);
}




function parse(input, mode){
    hover_class = "hover_item";
    if(mode){
        hover_class = mode;
    }
    split_content = ""
    switch(input.parse_mode) {
        case "phrase":
            return "<span class="+hover_class+">"+input.html+"</span>";
        case "words":
            split_content = input.html.split(" ");
            break;
        case "letters":
            split_content = input.html.split("");
            break;
        default:
            return input.html;
    }

    var new_content = "";
    var span_open = false;
    Array.prototype.forEach.call(split_content, function(chunk, index, arr) {
        if(!span_open){
            new_content+="<span class='hover_span'>";
            span_open=true;
        }
        if(chunk == " "){
            if(span_open){
                new_content+=" </span><span class='hover_span'>";
            }
            else if (!span_open && arr[index+1] != " ") {
                new_content+=" <span class='hover_span'>";
                span_open = true;
            }
            else{
                new_content+=" </span> ";
            }
        }
        else if(index+1 <= arr.length && input.parse_mode == "words"){
            new_content+="<span class="+hover_class+">"+chunk+"</span>";
            new_content+=" ";
        }
        else{
            new_content+="<span class="+hover_class+">"+chunk+"</span>";
        }
    });
    return new_content;
}


function generate_css(input_json){
    var transition_string = "transition: ";
    var hover_string = "";
    Array.prototype.forEach.call(Object.keys(input_json), function(key, index, arr) {
        if(index+1 < arr.length){
            transition_string += key + " " + parse_settings.transition_time+",";
            hover_string += key + ": " + input_json[key]+";"
        }
        else{
            transition_string += key + " " + parse_settings.transition_time+";";
            hover_string += key + ": " + input_json[key]+";"
        }
    });
    return {css: transition_string, hover_css: hover_string};
}


function add_style(css){
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}
