var slots = [{
    'name': 'lucas zion',
    'type': 'chibi'
},
{
    'name': 'open',
    'type': 'open'
},
{
    'name': 'open',
    'type': 'open'
}
];

var queue = [{
    'name': 'none',
    'type': ''
}];

var samples = ['chibi', 'sketch', 'splash', 'full'];

function commcalc() {
    var total;
    var count = $('#count').val();
    var output = $('#output');

    var style = $('#style').val();
    var stylecnt;
    switch (style) {
        case "sketch":
            stylecnt = 0;
            break;
        case "mono":
            stylecnt = 2;
            break;
        case "full":
            stylecnt = 5;
            break;
        default:
            break;
    }

    var type = $('#type').val();
    var typecount;
    switch (type) {
        case "chibi":
            typecount = 5;
            break;
        case "bust":
            typecount = 10;
            break;
        case "waist":
            typecount = 15;
            break;
        case "fb":
            typecount = 20;
            break;
        default:
            break;
    }

    if (count == 1) {
        total = stylecnt + typecount;
    }
    else if (count < 1) {
        alert('You have to enter an amount!');
    }
    else {
        var base = (stylecnt + typecount);
        total = base + ((count - 1) * (base * 0.75));
    }
    output.text(total + "USD");
    var price = $('#price');
}

$(document).ready(function() {
    $('#result').hide();
    $('#top').css('padding-top', $('#header').height());
});

$.each(slots, function(k, v) {
    var slot = $('#slotList .template').clone().removeClass('template');
    slot.find('.name').text(v.name);
    slot.find('.type').text(v.type);
    slot.appendTo($('#slotList'));
});

$.each(queue, function(k, v) {
    var slot = $('#queueList .template').clone().removeClass('template');
    slot.find('.name').text(v.name);
    slot.find('.type').text(v.type);
    slot.appendTo($('#queueList'));
});

$.each(samples, function(k, v) {
    var template = $('#samples').find('.indent').children('.template').clone().removeClass('template');
    template.attr('id', v);
    template.find('h5').text(v);
    template.appendTo($('#samples').find($('.indent')));
    for (var i = 0; i < 3; i++) {
        var img = './img/sample/' + v + '/' + i + '.png';
        var galleryItem = $('#samples').find('#' + v).find('.template').clone().removeClass('template');
        galleryItem.find('a').attr('href', img);
        galleryItem.find('img').attr('src', img);
        galleryItem.appendTo($('#samples').find('#' + v).find('.gallery').find('.grid-inner'));
    }
    $('#samples').find('#' + v).find('.template').remove();
});

$('.gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(window).on('load resize', function() {
    $('#top').css('padding-top', $('#header').height());
});

$(window).on('load', function() {
    setTimeout(function() {
        $('#load').fadeOut(200);
        $('main').fadeIn(200);
    }, 300);
});

var prices = [{
    'style': {
        'Sketch': 0,
        'Wash': 2,
        'Full Color': 5
    },
    'type': {
        'Chibi': 5,
        'Bust': 10,
        'Waist': 15,
        'Fullbody': 20
    }
}];

document.addEventListener("DOMContentLoaded", function(event) {
    const styleSelect = document.querySelector(".js-style-select");
    const typeSelect = document.querySelector(".js-type-select");

    mdc.select.MDCSelect.attachTo(styleSelect);
    mdc.select.MDCSelect.attachTo(typeSelect);

    var choice;
    var stylePart = 0;
    var typePart = 0;
    var total = 0;

    styleSelect.addEventListener("MDCSelect:change", function(event) {
        $('#submit').click()
        if (event.detail.selectedIndex === 0) {
            choice = null;
        }
        else {
            choice = event.detail.selectedOptions[0].textContent;
            //console.log(styleOption);
            var exist = $.inArray(choice, Object.keys(prices[0].style));
            if (exist >= 0) {
                choice = Object.values(prices[0].style);
                stylePart = choice[exist];
                return stylePart;
            }
        }
    });

    typeSelect.addEventListener("MDCSelect:change", function(event) {
        if (event.detail.selectedIndex === 0) {
            choice = null;
        }
        else {
            choice = event.detail.selectedOptions[0].textContent;
            //console.log(typeOption);
            var exist = $.inArray(choice, Object.keys(prices[0].type));
            if (exist >= 0) {
                choice = Object.values(prices[0].type);
                typePart = choice[exist];
                return typePart;
            }
        }
    });

    document.getElementById('calcPrice').addEventListener('submit', function(evt) {
        evt.preventDefault();
    });

    $('#submitBtn').on('click', function() {
        var count = $('#count').val();
        var base = stylePart + typePart;
        if (count > 0 && count <= 3 && stylePart >= 0 && typePart > 0) {
            if (count == 1) {
                total = base;
            }
            else if (count > 1) {
                total = base + ((count - 1) * (base * 0.75));
                total = total.toFixed(2);
            }

            $('#total').text(total);
            $('#result').slideDown();
        }
        else if (count > 3) {
            $('#result').slideUp();
        }
        else if (stylePart < 0) {
            alert('wtf');
        }
    });
});

var personal = [{
    'title': 'IDLC B-side',
    'info': {
        'img': 'idlcbside.jpg',
        'date': 'February 2017',
        'link': {},
        'desc': 'A sequel to my first doujin (IDLC). An assortment of comics/doodles. 16p'
    }
}, {
    'title': "I Don't Like Coffee",
    'info': {
        'img': 'idlc.png',
        'date': 'February 2017',
        'link': {
            'digital': 'https://gum.co/URiik'
        },
        'desc': 'My first doujin. This was of Mystic Messenger, feat. Jaehee Kang and MC. 20p'
    }
}, {
    'title': 'Summer Days',
    'info': {
        'img': 'sd.png',
        'date': 'June 2017',
        'link': {
            'digital': 'https://gumroad.com/l/ppyVX',
            'print': {
                'status': 'in stock',
                'href': 'http://breakfastb.storenvy.com/products/21348551-summer-days'
            }
        },
        'desc': 'My first printed original comic. Focuses on Ayu, a mergirl, and Mia, a catgirl, who have been childhood friends.'
    }
}, {
    'title': 'Helpless Oneechan',
    'info': {
        'img': 'oneechan.png',
        'date': 'March 2017 to present',
        'link': {
            'read@tapas': 'https://tapas.io/series/helplessoneechan',
            'read@webtoon': 'http://www.webtoons.com/en/challenge/helpless-oneechan-next-door/list?title_no=111955'
        },
        'desc': "Submission to Lilies Anthology vol2 that didn't make it. A story about Mira, a fallen star, and Sophie, the girl who falls in love with her."
    }
}, {
    'title': 'Shining Star',
    'info': {
        'img': 'ss.png',
        'date': 'November 2016',
        'link': {
            'read online': 'https://tapas.io/series/shining-star-'
        },
        'desc': "Submission to Lilies Anthology vol2 that didn't make it. A story about Mira, a fallen star, and Sophie, the girl who falls in love with her"
    }
}];

var assorted = [{
    'title': 'getaway',
    'info': {
        'img': 'getaway.png',
        'date': 'February 2017',
        'link': {
            'digital': 'https://gum.co/HnOJg'
        },
        'desc': "An original comic focusing on body positivity done for <a href='https://chubby-anthology.tumblr.com/'>Chubby Anthologies</a> vol2. Features Jo and May, a couple going on a romantic getaway."
    }
}, {
    'title': "lifeguard",
    'info': {
        'img': 'lifeguard.jpg',
        'date': 'August 2016',
        'link': {
            'read@tapas': '#https://tapas.io/episode/429047',
            'print': {
                'status': 'in stock',
                'href': 'http://www.lulu.com/shop/http://www.lulu.com/shop/lilies-anthology/lilies-vol-1-water-lily/paperback/product-23033256.html'
            }
        },
        'desc': "My submission to <a href='http://liliesanthology.tumblr.com/'>Lilies Anthology</a> vol.1! The theme was water. The story follows Ran, an intrepid lifeguard, and Meri, a shy college student."
    }
}];

$.each(personal, function(k, v) {
    var card = $('#personalList').find('.template').clone().removeClass('template');
    card.find('.mdc-card__title').text(v.title);
    card.find('.mdc-card__media').css('background-image', 'url(img/works/' + v.info.img + ')');
    card.find('.mdc-card__subtitle').text(v.info.date);
    card.find('.mdc-card__supporting-text').html(v.info.desc);
    $.each(v.info.link, function(l, m) {
        var btn = card.find('.work-link').clone().removeClass('hidden');
        btn.find('.mdc-button').find('.text').text(l);
        btn.attr('href', m);
        btn.appendTo(card.find('.buttons'));

        if (m.status != null) {
            var badge = btn.find('.badge').clone().removeClass('hidden');
            badge.text(m.status);
            badge.appendTo(btn.find('.mdc-button'));
        }

        card.find('.work-link.hidden').remove();
    });
    card.appendTo($('#personalList').find('.works-list'));
    $('.work-list').find('.template').remove();
});

$.each(assorted, function(k, v) {
    var card = $('#miscList').find('.template').clone().removeClass('template');
    card.find('.mdc-card__title').text(v.title);
    card.find('.mdc-card__media').css('background-image', 'url(img/works/' + v.info.img + ')');
    card.find('.mdc-card__subtitle').text(v.info.date);
    card.find('.mdc-card__supporting-text').html(v.info.desc);
    $.each(v.info.link, function(l, m) {
        var btn = card.find('.work-link').clone().removeClass('hidden');
        btn.find('.mdc-button').find('.text').text(l);
        btn.attr('href', m);
        btn.appendTo(card.find('.buttons'));

        if (m.status != null) {
            var badge = btn.find('.badge').clone().removeClass('hidden');
            badge.text(m.status);
            badge.appendTo(btn.find('.mdc-button'));
        }

        card.find('.work-link.hidden').remove();
    });
    card.appendTo($('#miscList').find('.works-list'));
    $('.work-list').find('.template').remove();
});

$('#header a').on('click', function(event) {
    var headerHeight = $('#header').height();
    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - headerHeight;
    
    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(target){
        window.location.hash = target;
    });
    
    e.preventDefault();
});
//$('#header').css('margin-top', $('#navtop').height());
