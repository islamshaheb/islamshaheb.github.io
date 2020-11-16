	function myFunction() {
			window.alert("Yours message is send");
			var frmvalidator = new Validator(“contactform”); 
			frmvalidator.addValidation(“name”,”req”,”Please provide your name”); 
			frmvalidator.addValidation(“subject”,”req”,”Please provide your Subject”); 
			frmvalidator addValidation(“email”,”req”,”Please provide your email”);
			frmvalidator.addValidation(“email”,”email”, “Please enter a valid email address”);
		}


	document.getElementById("demo").innerHTML = "My First JavaScript";	