var campoFiltro = document.querySelector(".inpt-busca");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var site = document.querySelectorAll("");

    if(this.value.length > 0){
        for(var i=0; i < site.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i")
            console.log(paciente);

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

})