function getQuestions() {
    var questions = [{
            question: 'Вибери, про що розповідається в цій частині твору',
            answers: [{
                id: 1,
                text: 'про ворожнечу й бійки між двома хлопчиками-сусідами'
            }, {
                id: 2,
                text: 'про те, як ворожнеча між однолітками переросла в нахабство одного і боягузтво іншого'
            }, {
                id: 3,
                text: 'про проблеми у стосунках між двома однолітками та способи вирішення їх'
            }],
            answer: {
                id: 2
            }
        }, {
            question: 'Де жили хлопчики?',
            answers: [{
                id: 1,
                text: 'в сусідніх квартирах'
            }, {
                id: 2,
                text: 'в сусідніх будинках'
            }, {
                id: 3,
                text: 'на сусідніх вулицях'
            }],
            answer: {
                id: 1
            }
        }, {
            question: 'Коли зустрілися хлопці?',
            answers: [{
                id: 1,
                text: 'після осінніх канікул'
            }, {
                id: 2,
                text: 'після весняних канікул'
            }, {
                id: 3,
                text: 'після літніх канікул'
            }],
            answer: {
                id: 3
            }
        },
        {
            question: 'Познач, чому Клим після літніх канікул почав панічно боятися Кактуса?',
            answers: [{
                id: 1,
                text: 'Кактус обігнав Клима за зростом і силою'
            }, {
                id: 2,
                text: 'Кактус був страшний і ззовні схожий на орангутанга'
            }, {
                id: 3,
                text: 'Кактус показав свої переваги в силі, тому поводився нахабно'
            }],
            answer: {
                id: 3
            }
        },
        {
            question: 'Хто провалився у прірву?',
            answers: [{
                id: 1,
                text: 'Клим'
            }, {
                id: 2,
                text: 'Сашко'
            }, {
                id: 3,
                text: 'обидва'
            }],
            answer: {
                id: 1
            }
        },
        {
            question: 'Як звали головного героя?',
            answers: [{
                id: 1,
                text: 'Сашко Смик'
            }, {
                id: 2,
                text: 'Клим Джура'
            }, {
                id: 3,
                text: 'Поганський Паганіні'
            }],
            answer: {
                id: 2
            }
        }
    ]
    return questions;
}

function getText() {
    var text = "<h4>ТАЄМНЕ ТОВАРИСТВО БОЯГУЗІВ...</h4>" + " <p> Я обережно визирнув із - за рогу будинку й одразу відсахнувся: біля мого під’ їзду стояв Кактус.На жаль,        з Кактусом, якого насправді звуть Сашко Смик, я знайомий майже від народження.Ми живемо в сусідніх квартирах.Не знаю, із чого почалась наша ворожнеча, але скільки себе пам 'ятаю, кожна наша зустріч закінчувалась якщо не бійкою, то штурханами.</p>" +
        "<p>Ми із Сашком завжди були однакові на зріст, і сили в нас були рівні.Але після літніх канікул я побачив Кактуса й просто остовпів.Розумієте, раніше Сашко був невеличкий і худий, волосся в нього стирчало на всі боки, як колючки в кактуса - через це його так і прозвали: Кактусом.А тепер він став схожий на гібрид жирафа з орангутангом.Тобто виріс одразу на дві голови й накачав м 'язи. І перша ж наша сутечка скінчилася тим, що я зрозумів: ось що відчувають альпіністи, потрапивши під гірську лавину!" +
        "<p>Після цього, коли стикався десь із Сашком, то просто тікав, як звичайний боягуз.Ось і зараз Кактус мене помітив, ошкірився й почав підманювати пальцем.При цьому він ще й приказував:</p>" +
        "<p>-Киць - киць, не бійся, я тебе трохи поб 'ю, по-сусідськи. </p>"+
    "<p>Я відчув, що втягую голову в плечі, як черепаха, і щодуху побіг геть подалі від Сашка і від його нахабного переможного реготу.По ногах мене бив футляр від скрипки: я саме повертався з уроку музики, і це, здається, смішило Сашка найдужче.Адже він дражнив мене Поганським Паганіні.Хоча справжнє моє ім 'я Клим Джура.</p>" +
    "<p>Серце в мене калатало, як скажене, я задихався й відчував, що Кактус ось - ось схопить мене за шкірки й почне лупцювати.Але тут сталося щось дивне й незрозуміле: люк, на який наступив, раптом почав м 'яко вгинатися під моїми ногами.  Я шкереберть полетів у чорну прірву. </p>"
    return text;
}
$(document).ready(function() {
  $('#text').html(getText());
});
