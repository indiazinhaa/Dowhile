const linksSocialMedia = {
  github: "indiazinhaa",
  facebook: "yasmin.candeodecarvalho",
  instagram: "yasminn_slk",
  linkedin: "in/yamin-candeo-de-carvalho-69aa71256"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
      
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
    
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url) 
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      UserImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()