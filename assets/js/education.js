const schools = document.querySelector('#school');

function displaySchool (doc) {
    let p = document.createElement('p');
    var br1 = document.createElement('br');
    var br2 = document.createElement('br');
    var br3 = document.createElement('br');
    var br4 = document.createElement('br');
    let degree = document.createElement('span');
    let school = document.createElement('span');
    let year_start = document.createElement('span');
    let year_end = document.createElement('span');

    p.setAttribute('school-info', doc.id);
    degree.textContent = "Degree: " + doc.data().degree;
    school.textContent = "School: " + doc.data().school;
    year_start.textContent = "Year start: " + doc.data().year_start;
    year_end.textContent = "Year end: " + doc.data().year_end

    p.appendChild(degree);
    p.appendChild(br1);
    p.appendChild(school);
    p.appendChild(br2);
    p.appendChild(year_start);
    p.appendChild(br3);
    p.appendChild(year_end);

    schools.appendChild(p);
}

db.collection('edu-backgrounds').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displaySchool(doc);
    })
})
