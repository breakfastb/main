$(window).on('load', function() {
    setTimeout(function() {
        $('#load').fadeOut(100);
        $('main').fadeIn(100);
    }, 100);

    if (slots[2].name.length > 1) {
        $('#status').text('full');
    }

    else {
        $('#status').text('open');
    }
});

var slots = [{
        'name':'wakai',
        'type':'bust fullcolor',
        'status':5
    },{
        'name':'mika',
        'type':'fb full color',
        'status':2
    },{
        'name':'valkyrie@tumblr',
        'type':'chibi sketch couple',
        'status':0
    }
];

var queue = [
    {
        'name':'@hifumi_g',
        'type':'fb full color'
    },{
        'name':'@rikki g',
        'type':'fb sketch color'
    },{
        'name':'@xiakha',
        'type':'couple art'
    },{
        'name':'SiG',
        'type':'couple art'
    },{
        'name':'@notthatapple',
        'type':'?'
    },{
        'name':'SerF(e)',
        'type':'full color couple'
    },{
        'name':'Mike Quijano',
        'type':'full color fb'
    },{
        'name':'@Nia_pyon',
        'type':'full color fb'
    },{
        'name':'@BiggusDickus420',
        'type':'unknown'
    },{
        'name':'NSFWtongue',
        'type':'unknown'
    },{
        'name':'Nui the Super Lesbian',
        'type':'bust wash'
    }
];

var samples = ['chibi', 'sketch', 'splash', 'full'];

$.each(slots,function(k,v) {
    var slot = $('#slots .template').clone().removeClass('template');
    slot.find('h5.mb-1').text(v.name);
    slot.find('p.mb-1').text(v.type);
    slot.find('.progress-bar').css('width',v.status*25+'%');
    slot.appendTo($('#slots'));
});

$.each(queue,function(k,v) {
    var slot = $('#queue .template').clone().removeClass('template');
    slot.find('h5.mb-1').text(v.name);
    slot.find('p.mb-1').text(v.type);
    slot.appendTo($('#queue'));
});

$.each(samples, function(k, v) {
    for (var i = 0; i < 3; i++) {
        var link = $('#'+v).find('.gallery').find('.template').clone().removeClass('template');
        var img = './img/sample/' + v + '/' + i + '.png';
        link.find('a').attr('href',img);
        link.find('img').attr('src',img);
        link.appendTo($('#'+v).find('.gallery'));
    }
    $('#' + v).find('.template').remove();
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

$('#priceCalc').submit(function(e) {
    e.preventDefault();
    var no = $('#charNo').val();
    var typeP = parseInt($('#type_s').val());
    var styleP = parseInt($('#style_s').val());
    var base = typeP + styleP;

    if(no > 1) {
        var base = typeP + styleP;
        var total = base + ((no-1) * (base*0.75));
    }
    
    else {
        total = base;
    }

   $('.result').find('span').text(total+'$');
   if(no>=1) {
       $('.result').slideDown();
   }
   else {
       $('.result').slideUp();
   }
});

var works = [{
    'title': 'IDLC B-side',
    'info': {
        'img': 'idlcbside.jpg',
        'date': 'February 2017',
        'link': {
            'digital': 'https://gum.co/AuGO',
            'print': 'http://breakfastb.storenvy.com/products/21348635-i-dont-like-coffee-b-side'
        },
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
            'digital': 'https://gumroad.com/l/ppyVX'
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
        'desc': "A bi-weekly webcomic about Saki, a college grad who's useless, and Ume, a college student who's capable."
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
},{
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
            'read@tapas': 'https://tapas.io/episode/429047',
            'print': 'http://www.lulu.com/shop/lilies-anthology/lilies-vol-1-water-lily/paperback/product-23033256.html'
        },
        'desc': "My submission to <a href='http://liliesanthology.tumblr.com/'>Lilies Anthology</a> vol.1! The theme was water. The story follows Ran, an intrepid lifeguard, and Meri, a shy college student."
    }
}];

$.each(works,function(k, v) {
    var card = $('#works').find('.card-deck').children('.template').clone().removeClass('template');
    card.find('.card-title').text(v.title);
    card.find('.card-subtitle').text(v.info.date);
    card.find('.card-text').html(v.info.desc);
    card.find('.card-img-top').attr('src','img/works/'+v.info.img);
    $.each(v.info.link,function(l,m) {
        var badge = card.find('.card-footer').find('.template').clone().removeClass('template');
        badge.find('a').attr('href',m);
        badge.find('a').text(l);
        badge.appendTo(card.find('.card-footer'));
    });
    card.appendTo($('#works .card-deck'));
})