/* PARA OS CONTEÚDOS DAS PÁGINAS PRINCIPAIS */

var contEsquerdo = document.getElementsByClassName('lista-gerada')[0];

contEsquerdo.innerHTML = `

    <section>
        <select name="lista" id="lista" size="6" onchange="location.href=this.value">
            <!-- Lista de Conteúdos -->

            <option value="http://127.0.0.1:5500/index.html">####### HOME #######</option>
            <option value="teste.html">Teste1</option>
            <option value="teste2.html">Teste2</option>
            <option value="teste3.html">Teste3</option>

        </select>
    </section>

`;
