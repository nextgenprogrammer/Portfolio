function DisplayItem(item) {
    var about_me = document.getElementById('about-me');
    var Skills= document.getElementById('Skills');
    var Projects = document.getElementById('Projects');
    var Resume = document.getElementById('Resume');
    var Quote = document.getElementById('quote');

    about_me.style.display = 'none';
    Skills.style.display = 'none';
    Projects.style.display = 'none';
    Resume.style.display = 'none';
    Quote.style.display = 'none';

    switch(item)
    {
        case 'about-me':
            about_me.style.display = 'block';
            break;

        case 'Skills':
            Skills.style.display = 'block';
            break;

        case 'Projects':
            Projects.style.display = 'block';
            break;

        case 'Resume':
            Resume.style.display = 'block';
            break;
    }
}