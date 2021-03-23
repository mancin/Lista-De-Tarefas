const inputTarefa = document.querySelector('.input-tarefas');
const botaoTarefas = document.querySelector('.add-tarefas');
const tarefas = document.querySelector('.tarefas');


inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        criaTarefa(inputTarefa.value);        
    }
})

function criaBotaoDel(li){
    li.innerText += ' ';
    const del = document.createElement('button');
    del.innerHTML = "Apagar";
    del.classList = 'apagar'
    li.appendChild(del);
}

//Apagar da lista
document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
    }
})

function criaTarefa(textoInput){
    const li = document.createElement('li');
    li.innerText = textoInput;
    tarefas.appendChild(li)
    inputTarefa.value = '';
    criaBotaoDel(li);
    //salvarTarefas();
}

botaoTarefas.addEventListener('click', function(){
    if(!inputTarefa.value) alert("Campo Vazio");
    else criaTarefa(inputTarefa.value);
})


/*function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim;
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}*/