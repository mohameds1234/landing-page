/* Define Global Variables */

const navigation = document.getElementById("navbar__list");
//const sections = Array.from(document.querySelectorAll("section"));
const sections = document.querySelectorAll("section");

//Build the nav
const navBuilder = () => 
{
  let navUI = "";
  sections.forEach(section =>
    {
      const sectionID = section.id;
      const sectionDataNav = section.dataset.nav;
      navUI += `<li><a class = "menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    navigation.innerHTML = navUI;
};

  
//Add class 'active' to sections

const active = (section) =>
{
  return Math.floor(section.getBoundingClientRect ().top);
};

//make active class on

const activeOn = (conditional,section) =>
{
  if (conditional)
  {
    section.classList.add('your-active-class');
  };
};
 
//make active class off

const activeOff = (section) =>
{
  section.classList.remove('your-active-class');
};


const sectionAc = () =>
{
  sections.forEach (section =>
    {
      const elementOffset = active (section);
      inviewport = () => 
      elementOffset <= 100 & elementOffset >-250;
      activeOff (section);
      activeOn (inviewport(),section);

    });
};





navBuilder();

window.addEventListener ("scroll",sectionAc);




