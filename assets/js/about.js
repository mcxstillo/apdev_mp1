var firebaseConfig = {
    apiKey: "AIzaSyBwYFv5i-7bxKwD587UZHy9kOx6RBVDBTs",
    authDomain: "apdev-resume.firebaseapp.com",
    databaseURL: "https://apdev-resume.firebaseio.com",
    projectId: "apdev-resume",
    storageBucket: "apdev-resume.appspot.com",
    messagingSenderId: "719658931741",
    appId: "1:719658931741:web:94eb0502f48ae8a823d8f4",
    measurementId: "G-18CEGZNK5S"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const about = document.getElementById('about_body');

// Display about contents
function displayAbout (doc) {

    let about_card = document.createElement('div');
    about_card.setAttribute('id', 'WeVC8I5mTKtcfdlbgHaU');
    about_card.setAttribute('class', 'card-body');

    about.appendChild(about_card);

    let desc = document.createElement('p');
    desc.setAttribute('id', 'about-desc');
    desc.textContent = doc.data().desc;

    let email = document.createElement('div');
    email.setAttribute('class', 'email');

    let outro = document.createElement('p');
    outro.textContent =  "Contact me in my email or any of the links below!"

    let add = document.createElement('p');
    add.textContent = "Email:  " + doc.data().email;

    email.appendChild(outro);
    email.appendChild(add);

    about_card.appendChild(desc);
    about_card.appendChild(email);

    let socicons = document.createElement('div');
    socicons.setAttribute('id', 'soc_icons');

    about.appendChild(socicons);

    // Append facebook contact
    let fb = document.createElement('div');
    fb.setAttribute('class', 'col-6 d-inline');
    fb.setAttribute('style', 'border-style: none;border-color: rgba(0,123,255,0);margin-bottom: 10px;height: 0;');

    let fbref = document.createElement('a');
    fbref.setAttribute('href', doc.data().facebook);

    let fbicon = document.createElement('i');
    fbicon.setAttribute('class', 'fab fa-facebook d-inline icons');

    fbref.appendChild(fbicon);
    fb.appendChild(fbref);

    socicons.appendChild(fb);

    // Append twitter contact
    let twt = document.createElement('div');
    twt.setAttribute('class', 'col-6 d-inline');
    twt.setAttribute('style', 'border-style: none;border-color: rgba(0,123,255,0);margin-bottom: 10px;height: 0;');

    let twtref = document.createElement('a');
    twtref.setAttribute('href', doc.data().twitter);

    let twticon = document.createElement('i');
    twticon.setAttribute('class', 'fab fa-twitter d-inline icons');

    twtref.appendChild(twticon);
    twt.appendChild(twtref);

    socicons.appendChild(twt);

    // Append github contact
    let git = document.createElement('div');
    git.setAttribute('class', 'col-6 d-inline');
    git.setAttribute('style', 'border-style: none;border-color: rgba(0,123,255,0);margin-bottom: 10px;height: 0;');

    let gitref = document.createElement('a');
    gitref.setAttribute('href', doc.data().github);

    let giticon = document.createElement('i');
    giticon.setAttribute('class', 'fab fa-github-square d-inline icons');

    gitref.appendChild(giticon);
    git.appendChild(gitref);

    socicons.appendChild(git);
}

db.collection('introductions').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displayAbout(doc);
    })
})