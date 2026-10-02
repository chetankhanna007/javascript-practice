let ul = document.querySelector('ul');

let btn = document.querySelector('button');

let inp = document.querySelector('input');

btn.addEventListener('click', function (){
    let li = document.createElement('li');
    li.innerText = inp.value;
    ul.insertAdjacentElement('beforeend', li);

    let btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.classList.add('deleteBtn');
    li.insertAdjacentElement('beforeend', btn);

    inp.value = '';
})


ul.addEventListener('click', function (event) {
    console.dir(event.target);
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})


// ul.addEventListener('mouseenter', function () {
//     console.log('clicked the button');
//     let liElements = document.querySelectorAll('ul li');
//     for(li of liElements){
//         li.childNodes[1].addEventListener('click', function(){
//             this.parentElement.remove();
//         })
//     }
// })






// let deleteBtn = document.querySelectorAll('.deleteBtn');

// for(btn of deleteBtn){
//     btn.addEventListener('click', function () {
//         console.log('clicked');

//         let parent = this.parentElement;

//         parent.remove();
//     })
// }