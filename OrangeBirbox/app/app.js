color = Math.floor(Math.random() * 9)
birb = Math.floor(Math.random() * 9)


// Random orange block
if (color === 0){
    $('.colorBox').css("background-color", "rgb(255,176,86)")
} else if (color === 1){
    $('.colorBox').css("background-color", "rgb(240,151,50)")
} else if (color === 2){
    $('.colorBox').css("background-color", "rgb(146,77,8)")

} else if (color === 3){
    $('.colorBox').css("background-color", "rgb(255,155,56)")

} else if (color === 4){
    $('.colorBox').css("background-color", "rgb(182,141,100)")

} else if (color === 5){
    $('.colorBox').css("background-color", "rgb(147,89,31)")
    
} else if (color === 6){
    $('.colorBox').css("background-color", "rgb(204,128,52)")

} else if (color === 7){
    $('.colorBox').css("background-color", "rgb(182,125,60)")

} else if (color === 8){
    $('.colorBox').css("background-color", "rgb(198,123,36)")

} else if (color === 9){
    $('.colorBox').css("background-color", "rgb(248,185,113)")

}


// Bird meme block
if (birb === 0) {
    $('.birbMeme').append('<img src="media/img001.jpg" alt="your birb good noodle">')
} else if (birb === 1) {
    $('.birbMeme').append('<img src="media/img002.jpg" alt="your birb good noodle">')
} else if (birb === 2) {
    $('.birbMeme').append('<img src="media/img003.jpg" alt="your birb good noodle">')
} else if (birb === 3) {
    $('.birbMeme').append('<img src="media/img004.jpg" alt="your birb good noodle">')
} else if (birb === 4) {
    $('.birbMeme').append('<img src="media/img005.jpg" alt="your birb good noodle">')
} else if (birb === 5) {
    $('.birbMeme').append('<img src="media/img006.jpg" alt="your birb good noodle">')
} else if (birb === 6) {
    $('.birbMeme').append('<img src="media/img007.jpg" alt="your birb good noodle">')
} else if (birb === 7) {
    $('.birbMeme').append('<img src="media/img008.jpg" alt="your birb good noodle">')
} else if (birb === 8) {
    $('.birbMeme').append('<img src="media/img009.jpg" alt="your birb good noodle">')
} else if (birb === 9) {
    $('.birbMeme').append('<img src="media/img010.jpg" alt="your birb good noodle">')

}