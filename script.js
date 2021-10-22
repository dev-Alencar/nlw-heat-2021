const linksSocialMedia = { 
 instagram: 'jakeliny.gracielly',
 linkedin: "jakelinygracielly",
 github: "jakeliny"

}

function changeSocialMediaLinks() {
    
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

        // if(linksSocialMedia[social] = linkedin) {
        //     const social = li.getAttribute('class')
        //     li.children[0].href = `https://${social}.com/in/${linksSocialMedia[social]}`
        // }

        // alert(li.children[0].href)
    } 
    
}
changeSocialMediaLinks() 