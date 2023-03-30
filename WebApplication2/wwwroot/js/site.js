// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
getData = ( person ) => {
    const text=document.getElementById("name");
    if (text){
        person.Name=text.value;
        alert("Hello, "+person.Name)
   // use state to update variables in the actual document without appending
    }

}

enterJournal = (journal) => {// use state here to save journal entry , maybe into a txt file for now locally
    const text=document.getElementById("entry");
    if (text){
        journal.entry=text.value;
       alert(journal.entry)
    }
}
