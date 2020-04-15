import './custom-checkbox.css'
import * as $ from 'jquery'

// custom checkbox element

const checkboxHandler = function() {
    // get child input and give correct class
    const activeClass = "custom-checkbox-label_checked";

    let checked = $(this).find('input.checkbox__input').is(':checked');
    checked ? $(this).addClass(activeClass) : $(this).removeClass(activeClass);
};

// custom-checkbox alive
$(function(){$(".custom-checkbox-label").on('click',checkboxHandler);});

export const createCheckbox = (title:string):JQuery<HTMLElement> =>{ 
    let label = $(
        '<label class="custom-checkbox-label">'+
        '<input type="checkbox" class="checkbox__input">'+ 
        title +
        '</label>'
        );

    label.on('click',checkboxHandler);
    
    return $('<div class="checkbox__label"></div>').append(label);
};
