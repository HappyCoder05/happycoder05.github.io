(function()	{

		  // Initialize Firebase
		  const config = {
			apiKey: "AIzaSyAiweFCBJSaSWqHgqbtUG5QSu0T8SNBfso",
			authDomain: "takeahike-747f3.firebaseapp.com",
			databaseURL: "https://takeahike-747f3.firebaseio.com",
			projectId: "takeahike-747f3",
			storageBucket: "takeahike-747f3.appspot.com",
			messagingSenderId: "775116694430"
		  };
		  firebase.initializeApp(config);


	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	
	btnLogin.addEventListener('click', e=> {
		
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		
		const promise = auth.signInWithEmailAndPassword(email, pass);
		
		promise.catch(e => console.log(e.message));
		
		
	});
	
	btnSignUp.addEventListener('click', e=> {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		
		promise
			.catch(e=>console.log(e.message));
	});
	
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	
	
	firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser) {
				console.log(firebaseUser);
				document.location.href = 'forums/index.php';
				btnLogout.classList.remove('hide');
			} else {
				console.log("user not logged in");
				btnLogout.classList.add('hide');

			}
		
	});


}());