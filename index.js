$(".dm-dropdown").click(function () {
	$(this).attr("tabindex", 1).focus();
	$(this).toggleClass("active");
	$(this).find(".dm-dropdown-menu").slideToggle(300);
});
$(".dm-dropdown").focusout(function () {
	$(this).removeClass("active");
	$(this).find(".dm-dropdown-menu").slideUp(300);
});
$(".dm-dropdown .dm-dropdown-menu li").click(function () {
	$(this).parents(".dm-dropdown").find("span").text($(this).text());
	$(this)
		.parents(".dm-dropdown")
		.find("input")
		.attr("value", $(this).attr("id"));
});
/*End Dropdown Menu*/

$(".dm-dropdown-menu li").click(function () {
	var input =
			"<strong>" +
			$(this).parents(".dm-dropdown").find("input").val() +
			"</strong>",
		msg = '<span class="msg">Hidden input value: ';
	$(".msg").html(msg + input + "</span>");
	console.log("a");
});
