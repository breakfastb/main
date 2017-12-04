var slots = [
    {
    'name':'lucas zion',
    'type':'chibi'
},{
    'name':'mattricole',
    'type':'fullcolor'
},{
    'name':'baskervillealicia',
    'type':'splash color'
}
];

var queue = [{
   'name':'amy',
   'type':'chibi'
}];

$(document).ready(function() {
    $('#slotTemplate').hide();
})

$.each(slots,function(k,v) {
    var slot = $('#slotTemplate').clone().removeAttr('id');
    slot.find('.name').text(v.name);
    slot.find('.special').text(v.type);
    slot.appendTo($('#slotList'));
    console.log(v.type);
});

$.each(queue,function(k,v) {
    var slot = $('#queueTemplate').clone().removeAttr('id');
    slot.find('.name').text(v.name);
    slot.find('.special').text(v.type);
    slot.appendTo($('#queueList'));
    console.log(v.type);
});