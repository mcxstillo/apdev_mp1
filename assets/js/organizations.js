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

const org = document.getElementById('org_main');

function displayOrg (doc) {

    let org_card = document.createElement('div');
    org_card.setAttribute('class', 'card');

    org.appendChild(org_card);

    let org_body = document.createElement('div');
    org_body.setAttribute('org-id', doc.id);
    org_body.setAttribute('class', 'card-body');

    let name = document.createElement('h6');
    name.textContent = doc.data().name;

    org_body.appendChild(name);

    let position = document.createElement('span');
    position.textContent = doc.data().position;
    org_body.appendChild(position);

    let year = document.createElement('span');
    year.textContent = doc.data().year;
    org_body.appendChild(year);

    org_card.appendChild(org_body);
}

db.collection('organizations').orderBy('year').get().then((snapshot) => {

snapshot.docs.forEach(doc => {
    displayOrg(doc);
})
})
