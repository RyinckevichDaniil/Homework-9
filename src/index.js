const toDo = {
    notes: [
            {value: "Js", completed: false, id: 1596559757142},
            {value: "World", completed: false, id: 1596559757043},
            {value: "Hello", completed: false, id: 1596559756940},
    ],

    addNote(value) {
        const note = {
            value,
            completed: false,
            id: Date.now(),
        };

        this.notes = [note, ...this.notes];
    },

    removeNote(id, confirm) {
        if (confirm) {
            this.notes = this.notes.filter(note => note.id !== id);
        }
    },

    completeNote(id) {
        this.notes = this.notes.map(note => ({
            ...note,
            completed: note.id === id ? !note.completed : note.completed
        }))
    },

    editNote(id, value, confirm) {
        if (confirm) {
            this.notes = this.notes.map(note => {
                let newNote = note;
                
                if (note.id === id) {
                    newNote = {
                        ...note,
                        value
                    }
                };

                return newNote;
            });
        }
    },

    get statistic() {
        return this.notes.reduce(
            (acc, note) => {
                note.completed && acc.completed++;
                return acc;
            },
            { total: this.notes.length, completed: 0 }
            );
    }
};

Object.freeze(toDo);

/* toDo.addNote('Hello');
setTimeout(() => toDo.addNote('World'), 100);
setTimeout(() => toDo.addNote('Js'), 200); */
toDo.editNote(1596559756940, 'World', confirm('?'));

console.log(toDo);