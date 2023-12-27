//signup
const signupform = document.querySelector('signup-form');

signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Formular abgesendet!');

    //get user info
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;
    const profilename = signupform['signup-profilename'].value;
    const jahrgang = signupform['signup-jahrgang'].value;

    console.log(email, password, profilename, jahrgang);
});


