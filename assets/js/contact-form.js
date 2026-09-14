(function() {
	var form = document.getElementById('contact-form');
	var status = document.getElementById('contact-form-status');
	if (!form) return;

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		status.style.color = '';
		status.textContent = 'Sending...';

		fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: { 'Accept': 'application/json' },
			body: new FormData(form)
		})
			.then(function(res) { return res.json(); })
			.then(function(data) {
				if (data.success) {
					status.style.color = '#4caf50';
					status.textContent = 'Message sent, thanks!';
					form.reset();
				} else {
					status.style.color = '#e05555';
					status.textContent = 'Something went wrong. Please try again.';
				}
			})
			.catch(function() {
				status.style.color = '#e05555';
				status.textContent = 'Something went wrong. Please try again.';
			});
	});
})();
