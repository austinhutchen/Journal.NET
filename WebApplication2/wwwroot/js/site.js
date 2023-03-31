class Journal {
    constructor() {
        this.entries = [];
        this.entry = '';
        this.size=0;
    }

    add(_entry) {
        this.entries.push(_entry);
        this.size++;
    }

    display() {
        for(let i=0;i<this.size;i++){
            alert(this.entries[i]);
            console.log(this.entries[i]);
        }
       
    }

    enterJournal = (ev) => {// use state here to save journal entry , maybe into a txt file for now locally
        ev.preventDefault();
        const text = document.getElementById("entry");
        document.forms[0].reset();
        if (text) {
            this.add(text.value);
            this.display();
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

    getName() {
        if(this.Name){
            return this.Name;
        }
        else{
            return '0';
        }
    }

    getData = (ev) => {
        ev.preventDefault();
        const text = document.getElementById("name");
        document.forms[0].reset();
        if (text) {
            this.setName(text.value);
            this.display();
            // use state to update variables in the actual document without appending
        }
    }
}



