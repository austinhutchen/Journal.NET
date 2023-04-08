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
            this.stringify()
            alert(this.string);
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
