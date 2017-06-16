function commcalc() {
	var total;
	var count = $('#count').val();
		/*if (count > 5) {
			$('#output').text(count);
		}*/
	var output = $('#output');

	var style = $('#style').val();				
	var stylecnt;
	switch(style) {
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
	switch(type) {
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
		base = (stylecnt + typecount)
		total = base + ((count-1) * (base*0.75))
	}
	output.text(total + "USD");
}

$('.input').keypress(function (e) {
	if (e.which == 13) {
	$('form#calc').submit();
		return false;
	}
});		