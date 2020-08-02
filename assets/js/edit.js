// global variables for crud operations

// display contents of education section
function displaySchool (doc,i) {

    const main = document.getElementById('educ_body');

    let school_card = document.createElement('div');
    school_card.setAttribute('school-id', doc.id);
    school_card.setAttribute('style', 'background-color: rgba(136,136,136,0.1); margin-top: 3.5rem;');
    school_card.setAttribute('class', 'card-body');

    main.appendChild(school_card);

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

    edu_cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('school-id');
        console.log(id);
        db.collection('edu-backgrounds').doc(id).delete();
    })
}

// display contents of org section
function displayOrg (doc,i) {

    const main = document.getElementById('org_main');

    let org_card = document.createElement('div');
    org_card.setAttribute('style', 'background-color: rgba(136,136,136,0.1); margin-top: 3.5rem; border: 0px;');
    org_card.setAttribute('class', 'card');

    main.appendChild(org_card);

    let org_body = document.createElement('div');
    org_body.setAttribute('org-id', doc.id);
    org_body.setAttribute('class', 'card_body');

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

    org_cross.textContent = 'delete';
    org_body.appendChild(org_cross);
    
    org_card.appendChild(org_body);

    org_cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('org-id');
        db.collection('organizations').doc(id).delete();
    })

}

// display contents of portfolio 
function displayWorks (doc,i) {

    const main = document.getElementById('works');

    let column = document.createElement('div');
    column.setAttribute('id', 'works' + i);
    column.setAttribute('class', 'col-md-6 d-xl-flex');
    column.setAttribute('style', '"width: 50%;margin: 0px;"');

    let work = document.createElement('div');
    work.setAttribute('class', 'card');
    work.setAttribute('style', ' border: 0px; background-color: rgba(136,136,136,0.1);');

    column.appendChild(work);

    let content = document.createElement('div');
    content.setAttribute('work-id', doc.id);
    content.setAttribute('class', 'card-body');

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

    work_cross.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('work-id');
        console.log(id);
        db.collection('works').doc(id).delete();
    })

    main.appendChild(column);

}

let i=0;

db.collection('edu-backgrounds').orderBy('year_start').get().then((snapshot) => {

    snapshot.docs.forEach(doc => {
        i++;
        displaySchool(doc,i);
    })
})

i=0;

db.collection('organizations').orderBy('year').get().then((snapshot) => {

snapshot.docs.forEach(doc => {
    i++;
    displayOrg(doc,i);
})
})

i=0;

db.collection('works').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        i++;
        displayWorks(doc,i);
    })
})

/* CRUD operations */

// Adding new values
var coll = document.getElementsByClassName("collapsible");
i=0;
            
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
