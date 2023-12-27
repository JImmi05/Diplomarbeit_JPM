// Beispiel: Speichern eines Benutzers in Firebase
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  try {
    // Erstelle einen Benutzer in Firebase Auth
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

    // Zugriff auf Benutzerdaten
    const user = userCredential.user;

    // Optional: Speichern von zusätzlichen Benutzerinformationen in Firestore
    await db.collection('users').doc(user.uid).set({
      email: user.email,
      jahrgang: document.getElementById('signup-jahrgang').value,
      profilename: document.getElementById('signup-profilename').value,
      // Weitere benutzerdefinierte Felder hier hinzufügen...
    });

    console.log('Benutzer erfolgreich erstellt und gespeichert:', user);
  } catch (error) {
    console.error('Fehler bei der Benutzererstellung:', error.message);
  }
});
