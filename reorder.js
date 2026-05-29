const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

function extractSection(name, nextName) {
  const start = html.indexOf('<!-- ' + name + ' -->');
  if (start === -1) return null;
  const end = html.indexOf('<!-- ' + nextName + ' -->');
  if (end === -1) return null;
  return html.slice(start, end);
}

const beforeNav = html.slice(0, html.indexOf('<!-- NAV -->'));
const nav = extractSection('NAV', 'HERO');
const hero = extractSection('HERO', 'ABOUT');
const about = extractSection('ABOUT', 'SKILLS');
const skills = extractSection('SKILLS', 'PROJECTS');
const projects = extractSection('PROJECTS', 'INSIDE MY BRAIN');
const brain = extractSection('INSIDE MY BRAIN', 'EDUCATION');
const education = extractSection('EDUCATION', 'EXPERIENCE');
const experience = extractSection('EXPERIENCE', 'LEADERSHIP');
const leadership = extractSection('LEADERSHIP', 'CONTACT');
const afterLeadership = html.slice(html.indexOf('<!-- CONTACT -->'));

if (!nav || !hero || !about || !skills || !projects || !brain || !education || !experience || !leadership) {
    console.log('Error finding sections');
    process.exit(1);
}

let newHtml = beforeNav + nav + hero + about + education + skills + projects + brain + experience + leadership + afterLeadership;

// Update nav links order
newHtml = newHtml.replace(
    '<li><a href="#skills">Skills</a></li>\r\n    <li><a href="#projects">Projects</a></li>\r\n    <li><a href="#brain">Inside My Brain</a></li>\r\n    <li><a href="#education">Education</a></li>',
    '<li><a href="#education">Education</a></li>\r\n    <li><a href="#skills">Skills</a></li>\r\n    <li><a href="#projects">Projects</a></li>\r\n    <li><a href="#brain">Inside My Brain</a></li>'
);
newHtml = newHtml.replace(
    '<li><a href="#skills">Skills</a></li>\n    <li><a href="#projects">Projects</a></li>\n    <li><a href="#brain">Inside My Brain</a></li>\n    <li><a href="#education">Education</a></li>',
    '<li><a href="#education">Education</a></li>\n    <li><a href="#skills">Skills</a></li>\n    <li><a href="#projects">Projects</a></li>\n    <li><a href="#brain">Inside My Brain</a></li>'
);

// Update js sections array
newHtml = newHtml.replace(
    "const sections = ['hero', 'about', 'skills', 'projects', 'brain', 'education', 'experience', 'leadership', 'contact'];",
    "const sections = ['hero', 'about', 'education', 'skills', 'projects', 'brain', 'experience', 'leadership', 'contact'];"
);

fs.writeFileSync('index.html', newHtml, 'utf8');
console.log('Successfully reordered!');
