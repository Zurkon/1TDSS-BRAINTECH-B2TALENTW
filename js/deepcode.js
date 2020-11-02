const codeCard = document.querySelector('#code');
const codeURL = document.querySelector('#codeURL');
const codeButton = document.querySelector('#submitCode');
const baseApiURL = 'https://secret-journey-04151.herokuapp.com/analyze?q=';

async function getCodeString(gitRepoUrl, file) {
  let suffix = gitRepoUrl.split('github.com/').pop();
  let repo = suffix.split('.git').shift();
  // console.log(repo);

  try {
    const response = await fetch(`https://raw.githubusercontent.com/${repo}/master${file}`);
    const codeContent = await response.text();
    return codeContent;
  } catch (error) {
    console.log(error);
  }
}

async function getAnalysis() {
  try {
    const response = await fetch(baseApiURL + codeURL.value);
    const code = await response.json();

    const codeFiles = code.results.files;
    const codeMessages = code.results.suggestions;

    // Iteragir com cada arquivo que ele encontrou erro
    for (let key in codeFiles) {
      // tags do Prism.js
      let codeTag = document.createElement('code');
      let preTag = document.createElement('pre');

      // tag que guarda as mensagens de erro
      let messageList = document.querySelector('#code div');

      // Cria o attributo para adicionar marcações no código
      let dataline = document.createAttribute('data-line');
      // Guarda as linhas com erro em uma lista
      let lineList = [];

      // Adicionar as classes CSS
      preTag.classList.add('line-numbers');
      codeTag.classList.add('language-');
      // pegar o corpo textual do arquivo
      let gitArquivo = await getCodeString(codeURL.value, key);
      let nameArquivo = key;

      // Colocar o corpo textual na tag <code>
      codeTag.textContent = gitArquivo;

      let files = codeFiles[key];
      for (let err in files) {
        // console.log(`Tipo de Erro: ${err}`);
        // let mensagem = codeMessages[err].message;
        // console.log(`Messagem do Erro: ${mensagem}`);

        files[err].forEach(pos => {
          // Cria tag para colocar mensagem de erro
          let mensagem = document.createElement('h4');
          mensagem.classList.add('title-secondary', 'mb-2');

          mensagem.textContent = `${nameArquivo}: linha ${pos.rows[0]}: ${codeMessages[err].message}`;
          messageList.appendChild(mensagem);
          // console.log(`Linhas: ${i}`);
          lineList.push(pos.rows[0]);
        })
      }
      // justa todos os itens em uma string e coloca no atributo 'data-line'
      dataline.value = lineList.join();
      // Adiciona o atributo a tag <pre>
      preTag.setAttributeNode(dataline);

      // adiciona a tag <code> dentro de <pre>
      preTag.appendChild(codeTag);

      // Por fim, adiciona a tag <pre> a tag com #code
      codeCard.appendChild(preTag);

      Prism.highlightAll();
    }

  } catch (error) {
    console.log(error);
  }
}

codeButton.addEventListener('click', (e) => {
  e.preventDefault();

  getAnalysis();

})