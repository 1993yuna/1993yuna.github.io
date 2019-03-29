$(document).ready(function() {
	$('textarea').before('<span href="#" copy></span><span msg-copy></span>');
	$('[copy]').click(function(event){
		readAndCopy($(this));
	});
	$('textarea').click(function(event){
		readAndCopy($(this));
	});
	function readAndCopy(_this) {
		copyToClipboard(_this.parent().find('textarea'));
		var msg_obj = _this.parent().find('[msg-copy]');
		msg_obj.text(' Was Copied');
		setTimeout(function(){msg_obj.empty();}, 1000);
	}
	function copyToClipboard(element) {
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val($(element).text()).select();
	  document.execCommand("copy");
	  $temp.remove();
	}
});