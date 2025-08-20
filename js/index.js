
const navs = document.querySelector('.nav-tab-bar').querySelectorAll('li');
const sections = document.querySelectorAll('section');
const contents = [
    ['skills-or-core-competencies', 'skills'],
    ['technical-skills', 'tech-skills'],
    ['educational-background', 'educ'],
    ['work-history', 'work-history'],
    ['certifications', 'certifications']
];
let currentActive = 'skills';

console.log('Working...');

navs.forEach((li) => {
    const contentDiv = li.querySelector('div');

    contentDiv.addEventListener('click', (e) => {
        const cont = contentDiv.textContent.toLowerCase().replaceAll(' ', '-');
        const sect = document.querySelector('.' + getClass(cont));

        removeSelected();
        removeSection(currentActive);

        currentActive = sect.classList[0];

        contentDiv.classList.add('selected');
        sect.classList.add('active');

    });

});

function removeSelected() {
    navs.forEach((e) => {
        const contentDiv = e.querySelector('div');
        contentDiv.classList.remove('selected');
    });
}

function getClass(content) {
    return contents.filter(c => c[0] === content)[0][1];
}

function removeSection(section) {
    sections.forEach(sect => {
        const divSel = sect.querySelector('.' + section);

        divSel.classList.remove('active');
    });
}

