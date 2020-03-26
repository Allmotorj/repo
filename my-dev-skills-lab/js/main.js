console.log($)

// Create an array of skills to store test data
const testData = ['arrow', 'functions', 'class', 'constrrs'];

// document.querySelector('button').addEventListener('click'())
$('form').on('submit', function(evt) {
    // console.log('it worked');
    evt.preventDefault()

    //When the user clicks on the button add skill
    //pop off the last array element store in array

let element = $('input').val();

    // let element = testData.pop();
    // console.log(element);

    // make div element
    const $div = $('<div>').text(element); 
    // append div to #myskills
    $('.list').append($div)

    // clear the input content
    $('input').val('');

})





// $().ready(() =>{

//     $('#add').click(() =>{
//         let newItem = $('#inp').val();
//             console.log("u clicked");
//         if (newItem.length > 0){
//             $('#item1').append('<div>' + newItem + '</div>');
//             $('#inp').val('');

        
//         }   
        
//     });
// })


// // these are broken
// $('inp').keyup(function(event){
//     if (event.keyCode === 13) {
//         $('#add').click(() =>{
//         console.log("u entered");
//         });
//     };
// });


//     $('#add').click(() =>{
//         if ($('inp').keyup(function(event){
//             if (event.keyCode === 13) {
//                 $('#add').click(() =>{
//                 console.log("u entered");
//                 )}
            
        
    

//     $('#add').click(function() {
//         if ($('inp').keyCode(function(event) {
//             if (event.keyCode === 13) {
//                 $('#add').click(() {
//                     console.log('u entered');
//                 })
//             })