class Journal {
    constructor() {
        this.entry = '';
    }

    add(_entry) {
        this.entry = this.entry + " " + _entry;
    }

    display() {
        alert(this.entry);
        console.log(this.entry);
    }

    enterJournal() {// use state here to save journal entry , maybe into a txt file for now locally
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
        this.Name = this.Name + name;
    }

    display() {
        alert(this.Name);
        console.log(this.Name);
    }

    getData() {
        const text = document.getElementById("name");
        if (text) {
            this.setName(text.value);
            this.display();
            // use state to update variables in the actual document without appending
        }
    }
}



