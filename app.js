    function buscar() {
        let section = document.getElementById("resultados-pesquisa");
        let campoPesquisa = document.getElementById("campo-pesquisa").value

        //se campoPesquisa for uma string sem nada
        if(!campoPesquisa) {
            section.innerHTML = "Nenhum resultado foi encontrado. <br> Você precisa digitar o modelo ou a marca de um carro."
            return
        }
        
        campoPesquisa = campoPesquisa.toLowerCase();
        // Inicializa uma string vazia para armazenar o HTML dos resultados
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";
      
        // para cada dado dentro da lista de dados
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            tags = dado.tags.toLowerCase()

            //se titulo includes campoPesquisa
            if (
             titulo.includes(campoPesquisa) ||
             descricao.includes(campoPesquisa) || 
             tags.includes(campoPesquisa)) {
                //cria um novo elemento
                resultados += `
                <div class="item-resultado">
                    <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                            <a href="${dado.link}" target="_blank"> Mais informações</a>
                </div>
            `};
        };
        if (!resultados) {
            resultados = "Nenhum resultado foi encontrado."
        }
        // Atualiza o conteúdo da seção com os resultados construídos
        section.innerHTML = resultados
        
    }

    