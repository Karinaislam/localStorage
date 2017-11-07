function loadData(){
	var email = localStorage.getItem('email');
	var userName = localStorage.getItem('name');

	document.getElementById('providedName').innerText = userName;
	document.getElementById('providedEmail').innerText = email;
	
}

loadData();

function saveUser(){
	var userName =document.getElementById("name").value
	var emailId =document.getElementById("email").value
	
	localStorage.setItem('name', userName);	
	localStorage.setItem('email', emailId);
	
	document.getElementById('providedName').innerText = userName;
	document.getElementById('providedEmail').innerText = emailId;
}



