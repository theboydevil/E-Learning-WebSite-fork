const element= document.querySelector('section');
// console.log(element);

async function get_page(page) {
    const response = await fetch(`${page}.html`);
    const data = await response.text();
    var e = new DOMParser().parseFromString(data, 'text/html').cloneNode(true).head.children[0].innerHTML;
    // console.log(e);
    return e;
}

async function home(){
    element.innerHTML = await get_page('home');
    link = document.querySelector('#tabscss').href = './home.css';
    document.querySelector('.active').classList.remove('active');
    document.querySelector('a[href="./"]').classList.add('active');
}

async function about(){
    element.innerHTML = await get_page('about');
    link = document.querySelector('#tabscss').href = './about.css';
    document.querySelector('.active').classList.remove('active');
    document.querySelector('a[href="#/about"]').classList.add('active');
}

async function contact(){
    element.innerHTML = await get_page('contact');
    link = document.querySelector('#tabscss').href = './contact.css';
    document.querySelector('.active').classList.remove('active');
    document.querySelector('a[href="#/contact"]').classList.add('active');
}

async function courses(){
    element.innerHTML = await get_page('courses');
    link = document.querySelector('#tabscss').href = './courses.css';
    document.querySelector('.active').classList.remove('active');
    document.querySelector('a[href="#/courses"]').classList.add('active');
}

async function profile(){
    element.innerHTML = await get_page('profile');
    link = document.querySelector('#tabscss').href = './profile.css';
    document.querySelector('.active').classList.remove('active');
    document.querySelector('a[href="#/profile"]').classList.add('active');
}

async function login(){
    element.innerHTML = await get_page('login');
    link = document.querySelector('#tabscss').href = './login.css';
}

async function register(){
    element.innerHTML = await get_page('register');
    link = document.querySelector('#tabscss').href = './register.css';
}

function notFound(){
    alert('404! Page not found');
    location.hash = '';
}

window.addEventListener('hashchange', function(){
    const tab = location.hash.split('#/')[1] || '';
    // console.log(tab);
    switch(tab){
        case '':
            home();
            break;
        case 'about':
            about();
            break;
        case 'contact':
            contact();
            break;
        case 'courses':
            courses();
            break;
        // case 'profile':
        //     profile();
        //     break;
        case 'login':
            login();
            break;
        case 'register':
            register();
            break;
        default:
            notFound();
            break;
    }
});

window.addEventListener('load', function(){
    const tab = location.hash.split('#/')[1] || '';
    // console.log(tab);
    switch(tab){
        case '':
            home();
            break;
        case 'about':
            about();
            break;
        case 'contact':
            contact();
            break;
        case 'courses':
            courses();
            break;
        case 'profile':
            profile();
            break;
        case 'login':
            login();
            break;
        case 'register':
            register();
            break;
        default:
            notFound();
            break;
    }
});