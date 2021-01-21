const projectContainer = document.querySelector('.project-container');
const projectGhost = document.querySelector('.project-ghost-container');
const nextBtn = document.querySelector('#next');
const lastBtn = document.querySelector('#last');
let animation 
let inactiveAnimation 

const project = [
    {
        name: 'BIS',
        text: "I was hired by BIS a Hamilton based insurance company to redesign there website. Built using the Wordpress CMS, PHP, CSS and jQuery. I talked with the client regularly on the design and made sure that it had all the functionality they where looking for.",
        avatar: './images/bis_logo.png',
        github: '',
        live: 'https://bisinc.ca/',
    },
    {
        name: 'Buddflix',
        text: 'BuddFlix is a cannabis based movie recommendation site. It was built by a team of 4. I worked on the front end which is built in React and uses 2 APIs to get the result.',
        avatar: './images/logo.png',
        github: 'https://github.com/BenLardie/buddflix-react',
        live: 'http://www.buddflix.com',
    },
    {
        name: 'Favourite Episode',
        text: 'Favourite Episode is a site built in React using Typescript and the Context API for create a redux without having to add a dependency. Scroll through every episode of The Office and select your favourite episodes.',
        avatar: 'https://res.cloudinary.com/teepublic/image/private/s--Ojs65aHy--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1507837182/production/designs/1967148_1.jpg',
        github: 'https://github.com/BenLardie/Favourite-Episode',
        live: 'https://favourite-episodes.herokuapp.com/',
    },
    {
        name: 'Redeye',
        text: 'Red Eye Espresso is a local coffee shop. Working with a UX Designer who gave me a design brief I brought the site to life with HTML and CSS along with some Python/Django. I made the menu into a database because it is always changing. With Django those changes will automatically be displayed.',
        avatar: './images/redeye.png',
        github: 'https://github.com/BenLardie/coffee_shop_project',
        live: '',
    },
];

let counter = 0;

const handleFirstproject = () => {
   
    // Author avatar selection
    projectContainer.children[1].children[0].src = project[0].avatar;
    // project Author selection
    projectContainer.children[1].children[1].innerHTML = project[0].name;
    // project text selection
    projectContainer.children[1].children[2].innerHTML = project[0].text;
    if (project[0].github === '') {
        projectContainer.children[2].children[0].children[0].className = 'nolink'
    }
    if (project[0].live === '') {
        projectContainer.children[2].children[0].children[1].className = 'nolink'
    }
  projectContainer.children[2].children[0].children[0].href = project[0].github;
  projectContainer.children[2].children[0].children[1].href = project[0].live;
};

const activeproject = () => {
  projectContainer.classList.add(animation);
  projectContainer.children[2].children[0].children[0].classList.remove('nolink')
  projectContainer.children[2].children[0].children[1].classList.remove('nolink')
    // Project Picture
  projectContainer.children[1].children[0].src = project[counter].avatar;
    // project Title selection
  projectContainer.children[1].children[1].innerHTML = project[counter].name;
    // project text selection
    projectContainer.children[1].children[2].innerHTML = project[counter].text;
    if (project[counter].github === '') {
        projectContainer.children[2].children[0].children[0].className = 'nolink'
    }
    if (project[counter].live === '') {
        projectContainer.children[2].children[0].children[1].className = 'nolink'
    }
  projectContainer.children[2].children[0].children[0].href = project[counter].github;
  projectContainer.children[2].children[0].children[1].href = project[counter].live;
    setTimeout(() => {
        // Remove the active animated class
    projectContainer.classList.remove(animation);
    }, 1400);
};

const inactiveproject = () => {
    projectGhost.classList.add(inactiveAnimation);
    let newCounter = counter;
    if (newCounter === 0) {
      newCounter = project.length;
    }
    // image selection
  projectGhost.children[1].children[0].src = project[newCounter - 1].avatar;
    // title selection
  projectGhost.children[1].children[1].innerHTML = project[newCounter - 1].name;
    // text selection
    projectGhost.children[1].children[2].innerHTML = project[newCounter - 1].text;
    setTimeout(() => {
      // Remove the active animated class
    projectGhost.classList.remove(inactiveAnimation);
    }, 1400);
  };

  nextBtn.addEventListener("click", () => {
    animation = 'project-active-animated-next'
    inactiveAnimation = 'project-inactive-animated-next'
    if (counter === project.length - 1) {
      counter = 0;
      inactiveproject();
      activeproject();
    } else {
      counter++;
      inactiveproject();
      activeproject();
    }
  });

  lastBtn.addEventListener("click", () => {
  animation = 'project-active-animated-previous';
  inactiveAnimation = 'project-inactive-animated-previous';
  if (counter === 0) {
    counter = project.length - 1;
    inactiveproject();
    activeproject();
  } else {
    counter--;
    inactiveproject();
    activeproject();
  }
});


  window.addEventListener('load', function () {
    handleFirstproject();
  })
  