function init() {
	if ( location.href.split('?')[1] == "thankyou" ) {
		$('body').prepend('<div id="thankyou"> <span><a>&#8730;</a> Thank you for registering!<br><a>&#8594;</a> Click anywhere to continue.</span> </div>');
		$('#thankyou').click( function () { $(this).hide(); } );
	}
}

window.onload = init;

function check_partner_form() {

	var mandatory = 0;
	var nameFilter = /^[a-zA-Z\xc0-\xff\-\.\']{2,}|[a-zA-Z\xc0-\xff\-\.\']{2,}[\s][a-zA-Z\xc0-\xff\-\.\']{2,}$/;
	var emailFilter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var urlFilter = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
	var phoneFilter = /^\+?[\d\s]+\(?[\d\s]{10,}$/;
	
	if (!(document.getElementById('URL').value) || !(urlFilter.test(document.getElementById('URL').value))) { 
		mandatory = 1;
		$('#URL').focus().prev().find('.tip').show();
	} else {
		$('#URL').prev().find('.tip').hide();
	}

	if (!(document.getElementById('email').value) || !(emailFilter.test(document.getElementById('email').value))) { 
		mandatory = 1;
		$('#email').focus().prev().find('.tip').show();
	} else {
		$('#email').prev().find('.tip').hide();
	}

	if (!(document.getElementById('last_name').value) || !(nameFilter.test(document.getElementById('last_name').value))) { 
		mandatory = 1;
		$('#last_name').focus().prev().find('.tip').show();
		
	} else {
		$('#last_name').prev().find('.tip').hide();
	}

	if (!mandatory) { // good to submit
		// prepare retURL - the url which salesforce opens after processing the submit - with user data
	    document.getElementById('retURL').value = location.href + "?thankyou";
	    return true;
	}

    return false; // abort submit
}
