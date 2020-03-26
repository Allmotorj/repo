$().ready(() =>{
// when user clicks button 
// get data from input field
// store in variable
// append data to div element
// clear value from input

$('form').on('submit', function(evnt){
    evnt.preventDefault()

    let elm = $('input').val();
    console.log(elm);
    if (elm.length > 0) {
        // const e = `<div id="del" class=sty> ${elm} <button id="delete" onclick="removeDiv()">remove</button></div>`
        const e = $("<div>").text(elm).addClass("sty")
        const $button = $("<button>").text("remove")
        e.append($button)
        $('.list').append(e);
        $('input').val('');
        $button.on('click', function(event){
            console.log(event)
            
            event.target.parentNode.parentNode.removeChild(event.target.parentNode)
           
        });
    }
    
})
});


// $('button').on('click', function() {
//     console.log("it worked")
//     //get the input from the user and store it in a variable
//     let element = $('input').val();
//     //make a div element and add the array content to the div
//     const $div = $('<div>').text(element);
//     //append the div to the div #mySkills
//     $('#mySkills').append($div);
//     //clear the input content
//     $('input').val('');
//     const $button = $('<button>').text("Remove")
//     $div.append($button)
//     $button.on('click', function(event){
//         console.log(event)
//         event.target.parentNode.parentNode.removeChild(event.target.parentNode)
//     })
// })



// onclick="removeDiv()"
function removeDiv(event) {
    console.log(event)
    //  var sDiv = parentElement;
     var iDiv = document.getElementById('del');
     iDiv.parentNode.removeChild(iDiv);
     console.log('clickj')
}

// $("#delete").on('click', 'button', function () {
//     console.log("cliqued")
//     $(this).closest('div').fadeOut(1000, () => {
//       $(this).remove();
    
//     })
// })


// document.getElementById('delete').addEventListener('click', function(){
//     console.log('removecliked');
//  })

    // let parent = $('button').target.parentElement;
    // event.removeChild(parent);


