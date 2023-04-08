class Journal {
    constructor() {
        this.entries = [];
        this.size = 0;
    }

    add(_entry) {
        this.entries.push(_entry);
        this.entries.push('\n');
        this.size++;
    }
    stringify(){
        this.string=this.entries.toString();
    }
    reset=()=>{
        this.entries=this.entries.slice(0,this.entries.length);
        this.size=0;
   }
   make() {
        this.stringify();
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
            this.make()
            this.display(this.string);
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
