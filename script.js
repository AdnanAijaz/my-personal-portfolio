const data=[
    {
        projectName:"Netflix clone",
        projectImage:"./images/Screenshot 2024-01-10 215914.png",
        projectLinkGithub:"https://github.com/AdnanAijaz/Netflix-Clone.git",
        projectLinkLiveSite:"https://adnanaijaz.github.io/Netflix-Clone/"
    },{
        projectName:"world capital quiz",
        projectImage:"./images/Screenshot 2024-06-04 230846.png",
        projectLinkGithub:"https://github.com/AdnanAijaz/world-capital-quiz.git",
        projectLinkLiveSite:"https://adnanaijaz.github.io/world-capital-quiz/"
    },{
        projectName:"Simon game",
        projectImage:"./images/simongame.png",
        projectLinkGithub:"https://github.com/AdnanAijaz/Simon-game.git",
        projectLinkLiveSite:"https://adnanaijaz.github.io/Simon-game/"
    }
]

const date=new Date();

const copyright=document.querySelector(".copyright");
copyright.innerHTML=`&copy; Adnan ${date.getFullYear()}`;

const project=document.querySelector(".project");

for (let i = 0; i < data.length; i++) {
    const ImageOfProject=document.createElement("img")
    const projectName=document.createElement("h3")
    const projectLinkGithub=document.createElement("a")
    const projectLinkLiveSite=document.createElement("a")
    const linksdiv=document.createElement("div")
    linksdiv.classList.add("links")
    projectName.innerHTML=data[i].projectName
    ImageOfProject.src=data[i].projectImage
    project.appendChild(ImageOfProject)
    project.appendChild(projectName)
    projectLinkGithub.href=data[i].projectLinkGithub
    projectLinkGithub.innerHTML="Github"
    linksdiv.appendChild(projectLinkGithub)
    project.append(linksdiv);
    projectLinkLiveSite.href=data[i].projectLinkLiveSite
    projectLinkLiveSite.innerHTML="Live Site"
    linksdiv.appendChild(projectLinkLiveSite)
}
