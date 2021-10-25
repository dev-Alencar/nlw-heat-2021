const linksSocialMedia = { 
 instagram: 'jakeliny.gracielly',
 linkedin: "jakelinygracielly",
 github: "jakeliny"

}

function changeSocialMediaLinks() {
    
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    } 
}

changeSocialMediaLinks() 

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(r => r.json())
    .then(data => { 
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href= data.html_url
     })
}

getGitHubProfileInfos()