const main_e = document.getElementById('main');


function home() {
    const a = document.getElementById('nav-home');
    document.getElementsByClassName('active')[0].classList.remove('active');
    a.classList.add('active');

    main_e.innerHTML = `
        <div class="main-content">
            <h1>Learn from the best</h1>
            <p>Join the best online learning platform and get the best learning experience</p>
            <button class="btn">Get Started</button>
        </div>
    `;
}
function about() {
    const a = document.getElementById('nav-about');
    document.getElementsByClassName('active')[0].classList.remove('active');
    a.classList.add('active');

    main_e.innerHTML = ``;
}
function contact() {
    const a = document.getElementById('nav-contact');
    document.getElementsByClassName('active')[0].classList.remove('active');
    a.classList.add('active');

    main_e.innerHTML = ``;
}
function courses() {
    const a = document.getElementById('nav-course');
    document.getElementsByClassName('active')[0].classList.remove('active');
    a.classList.add('active');

    main_e.innerHTML = "";
    fetch('./courses.json').then(
        response => response.json()
    ).then(
        data => {
            var e=`<div class="courses">`;
            // console.log(data.courses);
            Array.from(data.courses).forEach(
                course => {
                    var course_e = `
                        <div class="course">
                            <img src="../images/${course.name}.jpg" alt="${course.name}">
                            <div class="text"><h2>${course.name}</h2></div>
                        </div>`;
                    e += course_e;
                }
            );
            // console.log(e);
            main_e.innerHTML = `${e}</div>`;
        }
    ).catch(
        error => console.log(error)
    );

}

window.addEventListener('load', function () {
    home();
    const wi = window.location.hash.split('#')[1];
    if (!wi || wi.toLowerCase() === '') {
        home();
    } else if (wi.toLowerCase() === 'about') {
        about();
    } else if (wi.toLowerCase() === 'contact') {
        contact();
    } else if (wi.toLowerCase() === 'home') {
        home();
    } else if (wi.toLowerCase() === 'course') {
        courses();
    }
});
window.addEventListener('hashchange', function () {
    const wi = window.location.hash.split('#')[1];
    if (!wi || wi.toLowerCase() === '') {
        home();
    } else if (wi.toLowerCase() === 'about') {
        about();
    } else if (wi.toLowerCase() === 'contact') {
        contact();
    } else if (wi.toLowerCase() === 'home') {
        home();
    } else if (wi.toLowerCase() === 'course') {
        courses();
    }
});
