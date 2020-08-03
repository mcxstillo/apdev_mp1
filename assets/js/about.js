function displayAbout (doc) {

    const main = document.getElementById('about_body');

    let about_card = document.createElement('div');
    about_card.setAttribute('style', 'width: 60%px; margin-top: 1.5rem; align-content: space-between;');
    about_card.setAttribute('class', 'card-body');

    main.appendChild(about_card);

    let desc = document.createElement('p');
    desc.setAttribute('id', 'about-desc');
    desc.textContent = doc.data().desc;

    about_card.appendChild(desc);

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

db.collection('introductions').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        displayAbout(doc);
    })
})