var boxes =1;
var creater = {
	create: function(){
		if (boxes<10){
		var newbox = $("<div></div>");
		newbox.addClass("col-md-offset-1 col-md-10 center-block box")
		$('.middle').append(newbox);
		boxes++;}
	}
};

$(document).ready(function(){
	$('.but').on('click','.creater',creater.create)
});