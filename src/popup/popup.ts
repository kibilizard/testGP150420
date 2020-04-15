import * as $ from 'jquery'
import './popup.css'
import './header/header.css'
import './content/content'

// popup on/off
$(function(){
    const overlay = $(".fixed-overlay"),
    inActiveClass ="fixed-overlay_inactive";

    const closePopup = () => overlay.addClass(inActiveClass);

    const openPopup = () => overlay.removeClass(inActiveClass);

    $(".popup__close").on("click", closePopup);
    $(".form__submit").on("click", closePopup);
    $(".activate-button").on("click", openPopup);
})