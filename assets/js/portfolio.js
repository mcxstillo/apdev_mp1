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
    content.setAttribute('class', 'card-body');
    content.setAttribute('style', 'height: 160px;');

    work.appendChild(content);

    let link = document.createElement('a');
    link.setAttribute('href', doc.data().link);
    link.setAttribute('class', 'card-title title');
    
    link.textContent = doc.data().title;
    
    content.appendChild(link);

    let subj = document.createElement('div');
    subj.setAttribute('class', 'subtitle');
    subj.textContent = doc.data().subject;

    content.appendChild(subj);

    let desc = document.createElement('span');
    desc.setAttribute('class', 'card-text subtitle');
    desc.setAttribute('style', 'font-size: 0.90rem; margin-top: 20px');
    desc.textContent = doc.data().desc;

    content.appendChild(desc);

    main.appendChild(column);

}

let i=0;

db.collection('works').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        i++;
        displayWorks(doc,i);
    })
})
