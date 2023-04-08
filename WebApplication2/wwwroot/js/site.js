class Journal {
    constructor() {
        this.entries = [];
    }

    add(_entry) {
        this.entries.push(_entry);
    }
    stringify(){
        this.string=this.entries.toString();
        this.string=this.string.replaceAll(',','\n');
    }
    reset=()=>{
        let size =this.entries.length;
        for(let i=0;i<size;i++){
            this.entries.pop();
        }
        localStorage.removeItem("Journal");
   }
 display=()=>{
        if(this.string!==undefined){
            alert(this.string);
        }
        else{
            alert('no input given');
        }
      
 }
    enterJournal = (data,ev) => {
        ev.preventDefault();
        // use state here to save journal entry , maybe into
        // a txt file for now locally
        if(data!==undefined){
            for(let i=0;i<data.size;i++) {
                // push into local object/cache storage
                this.add(data.entries[i]);
            }
        }
        const text = document.getElementById("entry");
        if (text!==undefined) {
            this.add(text.value);
            // turn into string for easy reset
            this.stringify();
        }
    }

}

class User {
    constructor() {
        this.Name = '';
    }

    setName(name) {
        this.Name = this.Name + " " + name;
    }

    display() {
        alert(this.Name);
        console.log(this.Name);
    }
    

    getData = () => {
        const text = document.getElementById("name");
        document.forms[0].reset();
        this.setName(text.value);
        this.display();
        // use state to update variables in the actual document without appending
    }
}
