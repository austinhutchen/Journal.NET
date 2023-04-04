class Journal {
    constructor() {
        this.entries = [];
        this.size = 0;
    }

    add(_entry) {
        this.entries.push(_entry);
        this.size++;
    }

    display() {

        let string = "";
        for (let i = 0; i < this.size; i++) {
            string += "ENTRY " + (i + 1).toString() +  " :  " + this.entries[i] + "\n";
        }
        alert(string);
    }

    enterJournal = (ev) => {
        // use state here to save journal entry , maybe into
        // a txt file for now locally
        ev.preventDefault();
        const text = document.getElementById("entry");
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
        if (this.Name) {
            return this.Name;
        } else {
            return '0';
        }
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
