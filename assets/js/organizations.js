function displayOrg (doc,i) {

    const main = document.getElementById('org_main');

    let org_card = document.createElement('div');
    org_card.setAttribute('style', 'background-color: rgba(136,136,136,0.1); margin-top: 3.5rem; border: 0px;');
    org_card.setAttribute('class', 'card');

    main.appendChild(org_card);

    let org_body = document.createElement('div');
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
    
    org_card.appendChild(org_body);
}

let i=0;

db.collection('organizations').orderBy('year').get().then((snapshot) => {

snapshot.docs.forEach(doc => {
    i++;
    displayOrg(doc,i);
})
})
