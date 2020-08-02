function displaySchool (doc,i) {

    const main = document.getElementById('educ_body');

    let school_card = document.createElement('div');
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
}

let i=0;

db.collection('edu-backgrounds').orderBy('year_start').get().then((snapshot) => {

    snapshot.docs.forEach(doc => {
        i++;
        displaySchool(doc,i);
    })
})
