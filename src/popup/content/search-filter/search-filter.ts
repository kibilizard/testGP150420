import * as $ from 'jquery'
import './search-filter.css'
import {createCheckbox} from '../custom-checkbox/custom-checkbox'

//toggle show search-suggestions
$(function(){
    const target = $(".search-filter__suggestions"),
    cls = 'search-filter__suggestions_hidden';

    // show if search filter in focus and stop ascent
    $(".search-filter").on("click", function(evt){
        target.removeClass(cls);
        evt.stopPropagation();
    })

    // hide on missclick
    $('body').on("click",function(){
        target.addClass(cls);
    })
});

$(function(){
    
    const names = [
        "Демченко Евгений Валерьевич",
        "Лукин Иосиф Вадимович",
        "Воронов Константин Оскарович",
        "Шарапов Бенедикт Христофорович",
        "Кулаков Глеб Пантелеймонович",
        "Григорьев Антон Анатольевич",
        "Ковалёв Архип Богуславович",
        "Блинов Исак Аркадьевич",
        "Фокин Людвиг Антонинович",
        "Стрелков Олег Матвеевич",
        "Блинов Модест Валерьевич"
    ];

    const suggestContainer = $(".search-filter__suggestions"),
    notFoundBlock = $(".search-filter__no-results");

    let data = names.map((name, index) => {
        return {
            id: 'sugval'+index,
            text: name
        };
    })

    data.forEach((item)=>{
        let chkBox = createCheckbox(item.text);

        chkBox.addClass("search-filter__suggestion");
        chkBox.attr('id',item.id);
        suggestContainer.append(chkBox);
    });

    const filterInput = $(".search-filter__input");

    filterInput.on("keyup",()=>{
        let val = filterInput.val() as string;
        if (!val || val == "") {
            $(".search-filter__suggestion").show();
            notFoundBlock.hide();
        } else {
            let empty = true;

            data.forEach(
                (item) => {
                    let elem = $('#'+item.id);

                    if (item.text.toLowerCase().indexOf(val.toLowerCase()) < 0) {
                        elem.hide();
                    } else {
                        empty = false;
                        elem.show();
                    }

                }
            )

            empty ? notFoundBlock.show() : notFoundBlock.hide();
        }
    });
});