let buttonAdd = document.getElementById('btn-add');
let firstPage = document.getElementById('main-page');
let secondPage = document.getElementById('second-page');
let ul = document.getElementById('front-page');



buttonAdd.addEventListener("click", onSubmit);


var myArr = []
var myObj = {}
var count = 0

function onSubmit(e) {
    e.preventDefault()
    var Input1 = document.getElementById("Input1").value;
    var Input2 = document.getElementById("Input2").value;
    var Input3 = document.getElementById("list").value;

    var button = document.createElement('BUTTON');
    button.setAttribute('class', 'btn-delete');
    button.innerText = 'Delete Expense';


    var button2 = document.createElement('BUTTON');
    button2.setAttribute('id', 'btn-edit');
    button2.innerText = 'Edit Expense';

    button.addEventListener('click', removeItem)
    // button2.addEventListener('click', edit)  

    button2.addEventListener("click", function (event) {
        var myL = document.getElementById(event.srcElement.id);
        myL.contentEditable = true;
        myL.style.backgroundColor = "#dddbdb";

        var button3 = document.createElement('BUTTON');
        button3.setAttribute('id', 'btn-done');
        button3.innerText = 'Done';
        myL.appendChild(button3);
        button3.addEventListener("click", function() {
            myL.contentEditable = false;
            myL.style.backgroundColor = "white";

            button3.remove()
          } )  
    });


    myObj = {
        name: Input1,
        description: Input2,
        option: Input3
    }
    myArr.push(myObj);

    for (var i = count; i < myArr.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('id', i)
        li.appendChild(document.createTextNode(`${myArr[i].name} - ${myArr[i].description} - ${myArr[i].option} `));

        if (myArr[i].name == '' && myArr[i].description == '' && myArr[i].option == '') {

            button.remove()
        }
        else if (myArr[i].name !== '' && myArr[i].description !== '' && myArr[i].option !== '') {
            button.setAttribute('id', i);
            button2.setAttribute('id', i);
            li.appendChild(button);
            li.appendChild(button2);
            ul.appendChild(li);
        }
        document.getElementById("Input1").value = "";
        document.getElementById("Input2").value = "";
        document.getElementById("list").value = "!--Select option--!";
    }
    
    count += 1
}





function removeItem(event) {

    var myLi = document.getElementById(event.srcElement.id);
    var key = document.getElementById('Input1');
    window.localStorage.removeItem(key)
    console.log("remove items");
    myLi.remove()
}