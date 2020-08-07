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

const works = document.getElementById('works_main');

function displayWorks (doc, i) {

    let column = document.createElement('div');
    column.setAttribute('class', 'col-md-6 d-xl-flex');
    
    if (i % 2) {
        column.setAttribute('style', 'float: left;');
    } else {
        column.setAttribute('style', 'float: right;');
    }

    let work = document.createElement('div');
    work.setAttribute('class', 'card');

    column.appendChild(work);

    let content = document.createElement('div');
    content.setAttribute('work-id', doc.id);
    content.setAttribute('class', 'card-body');

    work.appendChild(content);

    let link = document.createElement('a');
    link.setAttribute('href', doc.data().link);
    link.setAttribute('class', 'card-title title');
    
    link.textContent = doc.data().title;
    
    content.appendChild(link);

    let desc = document.createElement('span');
    desc.setAttribute('class', 'subtitle');
    desc.setAttribute('style', 'font-size: 0.90rem;');
    desc.textContent = doc.data().desc;

    content.appendChild(desc);

    let subj = document.createElement('span');
    subj.setAttribute('class', 'subtitle');
    subj.textContent = doc.data().subject;

    content.appendChild(subj);

    works.appendChild(column);
}

let i=0;

db.collection('works').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        i++;
        displayWorks(doc,i);
    })
})
