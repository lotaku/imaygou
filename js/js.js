$(document).ready(function() {
	$('input[name=barcodenum]').hide(); 
	var bcnum = $('input[name=barcodenum]').val();
	var intcheck = /^\d+$/;
	if ( (intcheck.test(bcnum)) && (bcnum.length == 11) ) {
		var bc0 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc1 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc2 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc3 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc4 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc5 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc6 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc7 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc8 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		var bc9 = "<div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m o\"><\/div><div \
					 class=\"m e\"><\/div><div \
					 class=\"m e\">\
					 <\/div>";

		$('#l-digits').text(bcnum.slice(1,6));
		$('#r-digits').text(bcnum.slice(6,11));
		$('#first-digit').text(bcnum.slice(0,1));

		var elements = ['l1','l2','l3','l4','l5','l6','r1','r2','r3','r4','r5'];
		jQuery.each(elements, function(i, val) {
			var code_update = bcnum.substring(i,i+1);
			var bcx = eval("bc".concat(code_update));
			$("#" + this).html(bcx);
		});
		var bcdigits = bcnum.split('');
		var checksum_s1 = 0; 
		var checksum_s2 = 0; 
		jQuery.each(bcdigits, function(i,val){
			if(i%2 == 0) {
				checksum_s1 += parseInt(val);
			} else {
				checksum_s2 += parseInt(val);
			}
		});
		var checksum_s3 = checksum_s1*3 + checksum_s2;
		var s3_string = checksum_s3.toString();
		var s3_last = s3_string.substring(s3_string.length - 1);
		$('#last-digit').text(s3_last);
		if (s3_last == "0") {
			$("#r6").html(bc0);
			var diff = 0;
		} else {
			var diff = 10 - parseInt(s3_last);
			var diff_bc = eval("bc".concat(diff));
			$("#r6").html(diff_bc);
		};
	};
	
});