// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
getData = ( person ) => {
    const text=document.getElementById("name");
    if (text){
        person.Name=text.value;
        alert( ("Hello, ")+person.Name);

    }
    else{ alert("FAIL");
    }
}
    
