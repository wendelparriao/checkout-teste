/* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */
$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="name-card"], input[name=""]'
    }
});

function validateStep(step) {
	var isValid = true;
	if (step == undefined) {
		// NOTE: porquê o formulário já inicia na etapa 2 ???
		step = 2;
	}

	var fields = $('form .step-'+step+' [required]');

	fields.each(function(key, f) {
		var field = $(f);
		if (field.val().length == 0 || (this.validity && !this.validity.valid)) {
			isValid = false;
			field.addClass('input-validate-error');
		}else{
			field.addClass('input-validate-true');
		}
	})

	return isValid;
}

$('form').on('focusout keyup', 'input.input-validate-error', function() {
	if ($(this).val().length > 0 && this.validity && this.validity.valid) {
		$(this).removeClass('input-validate-error');
	}
});