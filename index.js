function tile(url, left, bottom, width, height){
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            newImage(url, left + j*100, bottom + i*100)
        }
    }
}



function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)


    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfsky = window.innerHeight - horizon
let heightOfgrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfsky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfgrass/100)


// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

 newImage('assets/green-character.gif', 100, 100)
 newImage('assets/tree.png', 200, 300)
 newImage('assets/pillar.png', 350, 100)
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)


