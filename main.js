class list {

    constructor() {

        this.data = [];
    }

    add(data) {

        this.data.push(data);

        console.log(this);
    }
}
class TodoList extends list{

    constructor() {

        super();

        this.usuario = 'Thayller';

    }

    mostraUsuario() { console.log(this.usuario);}
}

class Todo {

    constructor() {
        
        this.todos = []
    }
}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() { minhaLista.add('novo todo');}