/* PARA OS CONTEÚDOS DAS PÁGINAS PRINCIPAIS */

var contEsquerdo = document.getElementsByClassName('lista-gerada')[0];

contEsquerdo.innerHTML = `

    <section>
        <select name="lista" id="lista" size="6" onchange="location.href=this.value">
            <!-- Lista de Conteúdos -->

            <option value="https://genilsoncavalcante.github.io/my-learning/index.html">####### HOME #######</option>
            <option value="functions.html">Functions</option>
            <option value="teste2.html">Teste2</option>
            <option value="teste3.html">Teste3</option>

        </select>
    </section>

`;
