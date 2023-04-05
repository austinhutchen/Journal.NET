class Journal {
    constructor() {
        this.entries = [];
        this.size = 0;
    }

    add(_entry) {
        this.entries.push(_entry);
        this.size++;
    }
    reset=()=>{
        this.entries.splice(0,this.entries.length``);
       this.size = 0;
   }
   make() {

        let string = "";
        for (let i = 0; i < this.size; i++) {
            string += "ENTRY " + (i + 1).toString() +  " :  " + this.entries[i] + "\n";
        }
   return string;
    }
display(string){
        alert(string);
}
    enterJournal = (ev,data) => {
        // use state here to save journal entry , maybe into
        // a txt file for now locally
        ev.preventDefault();
        if(data!==undefined){
            for(let i=0;i<data.size;i++) {
                this.add(data.entries[i]);
            }
        }
        const text = document.getElementById("entry");
        if (text!==undefined) {
            this.add(text.value);
            this.display(this.make());
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
    

    getData = (ev) => {
        ev.preventDefault();
        const text = document.getElementById("name");
        document.forms[0].reset();
        this.setName(text.value);
        this.display();
        // use state to update variables in the actual document without appending
    }
}
