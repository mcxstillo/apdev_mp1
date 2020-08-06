/* Form queries to fetch data in the html */
const loginForm = document.getElementById('login-form');

const about = document.getElementById('about_body');
const educ = document.getElementById('educ_body');
const org = document.getElementById('org_main');
const works = document.getElementById('works_main');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm['login-email'].value;
    const password = loginForm['login-pass'].value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(cred =>{
        console.log("User logged in.");

        document.getElementById('login').style.display = "none";
        document.getElementById('sidebar').classList.add('d-lg-flex');
        document.getElementById('homepage').classList.remove('logged-out');
    }).catch(function (err) {
        if (err.code == "auth/wrong-password")
            alert("wrong password");
        else
            alert(err.message);
    })
}) 

// Display about contents
function displayAbout (doc) {

    let about_card = document.createElement('div');
    about_card.setAttribute('style', 'width: 60%px; margin-top: 1.5rem; align-content: space-between;');
    about_card.setAttribute('class', 'card-body');

    about.appendChild(about_card);

    let desc = document.createElement('p');
    desc.setAttribute('id', 'about-desc');
    desc.setAttribute('class', 'p-about');
    desc.textContent = doc.data().desc;

    let email = document.createElement('p');
    email.setAttribute('class', 'p-about');
    email.textContent = doc.data().email;

    about_card.appendChild(desc);
    about_card.appendChild(email); 

    const icons = document.getElementById('soc_icons');

    // Append facebook contact
    let fb = document.createElement('div');
    fb.setAttribute('class', 'col-6 d-inline');
    fb.setAttribute('style', 'border-style: none;border-color: rgba(0,123,255,0);margin-bottom: 10px;height: 0;');

    let fbref = document.createElement('a');
    fbref.setAttribute('href', doc.data().facebook);

    let fbicon = document.createElement('i');
    fbicon.setAttribute('class', 'fab fa-facebook d-inline');
    fbicon.setAttribute('style', 'width: 22px;height: 32px;font-size: 40px;color: rgb(50,54,59);');

    fbref.appendChild(fbicon);
    fb.appendChild(fbref);

    icons.appendChild(fb);

    // Append twitter contact
    let twt = document.createElement('div');
    twt.setAttribute('class', 'col-6 d-inline');
    twt.setAttribute('style', 'border-style: none;border-color: rgba(0,123,255,0);margin-bottom: 10px;height: 0;');

    let twtref = document.createElement('a');
    twtref.setAttribute('href', doc.data().twitter);

    let twticon = document.createElement('i');
    twticon.setAttribute('class', 'fab fa-twitter d-inline');
    twticon.setAttribute('style', 'width: 22px;height: 32px;font-size: 40px;color: rgb(50,54,59);');

    twtref.appendChild(twticon);
    twt.appendChild(twtref);

    icons.appendChild(twt);

    // Append github contact
    let git = document.createElement('div');
    git.setAttribute('class', 'col-6 d-inline');
    git.setAttribute('style', 'border-style: none;border-color: rgba(0,123,255,0);margin-bottom: 10px;height: 0;');

    let gitref = document.createElement('a');
    gitref.setAttribute('href', doc.data().github);

    let giticon = document.createElement('i');
    giticon.setAttribute('class', 'fab fa-github-square d-inline');
    giticon.setAttribute('style', 'width: 22px;height: 32px;font-size: 40px;color: rgb(50,54,59);');

    gitref.appendChild(giticon);
    git.appendChild(gitref);

    icons.appendChild(git);
}

// Display contents of education section
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

    let edu_cross = document.createElement('button');
    edu_cross.textContent = 'delete';
    school_card.appendChild(edu_cross);


    // Delete operations
    edu_cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('school-id');
        db.collection('edu-backgrounds').doc(id).delete();
    })
}

// display contents of org section
function displayOrg (doc) {

    let org_card = document.createElement('div');
    org_card.setAttribute('style', 'background-color: rgba(136,136,136,0.1); border: 0px;');
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

    let org_cross = document.createElement('button');
    org_cross.setAttribute('type', 'submit');
    org_cross.textContent = 'delete';

    org_body.appendChild(org_cross);
    org_card.appendChild(org_body);

    // Delete operations
    // parent Element is where the item was appended to
    org_cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('org-id');
        db.collection('organizations').doc(id).delete();
    })

    
}

// display contents of portfolio 
function displayWorks (doc, i) {

    let column = document.createElement('div');
    column.setAttribute('class', 'col-md-6 d-xl-flex');
    
    if (i % 2) {
        column.setAttribute('style', 'width: 50%;margin: 0px;float: left;');
    } else {
        column.setAttribute('style', 'width: 50%;margin: 0px;float: right;');
    }

    let work = document.createElement('div');
    work.setAttribute('class', 'card');
    work.setAttribute('style', ' border: 0px; background-color: rgba(136,136,136,0.1);');

    column.appendChild(work);

    let content = document.createElement('div');
    content.setAttribute('work-id', doc.id);
    content.setAttribute('class', 'card-body');
    content.setAttribute('style', 'float:right;');

    work.appendChild(content);

    let work_cross = document.createElement('button');
    work_cross.setAttribute('style', 'width: 30px; height: 30px;');
    work_cross.textContent = 'x';
    
    content.appendChild(work_cross);

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

    // Delete operations
    // parent Element is where the item was appended to
    work_cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('work-id');
        db.collection('works').doc(id).delete();
    })
}

db.collection('introductions').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    console.log(changes);

    if(changes.type == 'modified'){
        displayAbout(changes.doc);
    } else if (changes.type == 'added') {
        displayAbout(changes.doc);
    }
}) 

db.collection('edu-backgrounds').orderBy('year_end').onSnapshot(snapshot=>{
    let changes= snapshot.docChanges();
    changes.forEach(change =>{
        if(change.type == 'added'){
            displaySchool(change.doc);
        } else if (change.type == 'removed'){
            let li= educ.querySelector("[school-id='"+change.doc.id+"']");
            educ.removeChild(li);
        };
    });
});

db.collection('organizations').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    
    changes.forEach(change => {
        if(change.type == 'added'){
            displayOrg(change.doc);
        } else if(change.type == 'removed') {
            let li = org.querySelector("[org-id='" + change.doc.id + "']");
            li.parentElement.removeChild(li);
        }
    })
})

db.collection('works').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    let i = 0;
    changes.forEach(change => {
        if(change.type == 'added'){
            i++;
            displayWorks(change.doc, i);
        } else if(change.type == 'removed') {
            let li = works.querySelector("[work-id='" + change.doc.id + "']");
            li.parentElement.removeChild(li);
        }
    })
})

// Code for collapsible
var coll = document.getElementsByClassName("collapsible");
            
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
       } 
     });
}


/* CRUD operations */
const aboutform = document.getElementById('aboutform');
const eduform = document.getElementById('edu-form');
const orgform = document.getElementById('org-form');
const workform = document.getElementById('work-form');

// Update for About section
aboutform.addEventListener('submit', (e) => {
    e.preventDefault();

    let formdetails = {
        desc: aboutform.desc.value,
        email: aboutform.about_email.value,
        facebook: aboutform.fb.value,
        twitter: aboutform.twt.value,
        github: aboutform.git.value
    }

    let formkeys = Object.keys(formdetails);
    let formvalues = Object.values(formdetails);

    for(let i=0; i<formkeys.length;i++) {
        if (!!formvalues[i]) {
            db.collection('introductions').doc('WeVC8I5mTKtcfdlbgHaU').update({
                [formkeys[i]]:formvalues[i]
        })}
    }

    aboutform.reset();
})

// Adding new values
eduform.addEventListener('submit', (e) => {
    db.collection('edu-backgrounds').add({
        degree: eduform.degree.value,
        school: eduform.school.value,
        year_end: eduform.end.value,
        year_start: eduform.start.value
    })

    eduform.reset();
})

orgform.addEventListener('submit', (e) => {
    db.collection('organizations').add({
        name: orgform.name.value,
        position: orgform.position.value,
        year: orgform.year.value
    })

    orgform.reset();
})

workform.addEventListener('submit', (e) => {
    db.collection('works').add({
        title: workform.title.value,
        subject: workform.subject.value,
        desc: workform.desc.value,
        link: workform.link.value
    })

    workform.reset();
})