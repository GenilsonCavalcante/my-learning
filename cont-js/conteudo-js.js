/* PARA OS CONTEÚDOS DAS PÁGINAS PRINCIPAIS */

var contEsquerdo = document.getElementsByClassName('lista-gerada')[0];

contEsquerdo.innerHTML = `

    <section>
        <select name="lista" id="lista" size="6" onchange="location.href=this.value">
            <!-- Lista de Conteúdos -->

            <option value="https://genilsoncavalcante.github.io/my-learning/index.html">####### HOME #######</option>
            <option value="functions.html">Functions</option>
            <option value="objects.html">Objects</option>
            <option value="events.html">Events</option>
            <option value="arrays.html">Arrays</option>
            <option value="methods-arrays.html">Methods-Arrays</option>
            <option value="classificacao-arrays.html">Classificação de Arrays</option>

        </select>
    </section>

`;
