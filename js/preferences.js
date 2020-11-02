const sectionExp = document.querySelector('#experiences');
const sectionAca = document.querySelector('#academic');
const buttonExp = document.querySelector('#add-exp');
const buttonAca = document.querySelector('#add-course');

function adicionarExp() {
  sectionExp.innerHTML += `
  <div>
      <div class="py-5 w-100 row mx-0">
        <div class="col-12 col-md-6 px-0 pr-md-3">
          <label for="empresa1" class="text">Empresa</label>
          <input id="empresa1" type="text" class="profile-edit" placeholder="ex. Carrefour">
        </div>
        <div class="col-12 col-md-6 px-0 pl-md-3">
          <label for="cargo1" class="text">Cargo</label>
          <input id="cargo1" type="text" class="profile-edit" placeholder="ex. Vendedor de loja">
        </div>
      </div>

      <div class="pb-5 w-100">
        <label for="description1" class="text">Descrição</label>
        <textarea id="description1" class="profile-edit" name="cultura" id="cultura" maxlength="250"
          placeholder="Máximo de 250 characteres" rows="6"></textarea>
      </div>

      <div class="pb-4 w-100 row mx-0">
        <div class="col-12 col-md-6 px-0 pr-md-3">
          <label for="data-inicio1" class="text">Data de início</label>
          <input id="data-inicio1" type="date" class="profile-edit">
        </div>
        <div class="col-12 col-md-6 px-0 pl-md-3">
          <label for="data-saida1" class="text">Data de saída</label>
          <input id="data-saida1" type="date" class="profile-edit">
        </div>
        <div class="pt-4 w-100 d-flex align-items-center">
          <input type="checkbox" class="d-inline" name="emprego-atual" id="emprego-atual">
          <label for="emprego-atual" class="text ml-2 mb-0" style="font-size: 12px;"> É o meu emprego
            atual</label>
        </div>
      </div>
  </div>`
}

function adicionarInt() {
  sectionAca.innerHTML += `
  <div>
    <div class="py-5 w-100">
      <label for="institute1" class="text">Instituição</label>
      <input id="institute1" type="text" class="profile-edit">
    </div>
    <div class="pb-5 w-100">
      <label for="course1" class="text">Curso</label>
      <input id="course1" type="text" class="profile-edit">
    </div>
    <div class="pb-4 w-100">
      <label for="finish1" class="text">Data de Conclusão</label>
      <input id="finish1" type="date" class="profile-edit">
    </div>
  </div>
  `
}

buttonAca.addEventListener('click', (e) => {
  e.preventDefault();

  adicionarInt();
})

buttonExp.addEventListener('click', (e) => {
  e.preventDefault();

  adicionarExp();
})