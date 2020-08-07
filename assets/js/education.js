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

const educ = document.getElementById('educ_body');

function displaySchool (doc) {

    let school_card = document.createElement('div');
    school_card.setAttribute('school-id', doc.id);
    school_card.setAttribute('style', 'background-color: rgba(136,136,136,0.1); margin-bottom: 2.5rem;');
    school_card.setAttribute('class', 'card-body');

    educ.appendChild(school_card);

    let deg = document.createElement('h6');
    deg.textContent = doc.data().degree;

    school_card.appendChild(deg);

    let where = document.createElement('span');
    where.textContent = doc.data().school;
    school_card.appendChild(where);

    let br = document.createElement('br');
    school_card.appendChild(br);

    let time = document.createElement('span');
    time.textContent = doc.data().year_start + " - " + doc.data().year_end;
    school_card.appendChild(time);
}

db.collection('edu-backgrounds').orderBy('year_start').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displaySchool(doc);
    })
})
