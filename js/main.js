var modal = new bootstrap.Modal(document.getElementById('modalAll'));

function registerUser() {

  $("#titleModal").html("Cadastrar Usuário");
  
  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Salvar</button>');

  $("#bodyModal").html(
  '<div class="mb-3">' +
  '<label for="modalInputName" class="form-label">Nome</label>' +
  '<input type="email" class="form-control" id="modalInputName">' +
  '</div>' +

  '<div class="mb-3">' +
  '<label for="modalInputLastName" class="form-label">Sobrenome</label>' +
  '<input type="email" class="form-control" id="modalInputLastName">' +
  '</div>' +

  '<div class="mb-3">' +
  '<label for="modalInputEmail" class="form-label">E-mail</label>' +
  '<input type="email" class="form-control" id="modalInputEmail" placeholder="exemple@gmail.com">' +
  '</div>' +

  '<div class="mb-3">' +
  '<label for="modalInputPassword" class="form-label">Senha</label>' +
  '<input type="password" class="form-control" id="modalInputPassword" aria-describedby="passwordHelp">' +
  '<div id="passwordHelp" class="form-text">A senha deve conter no minimo 8 caracteres</div>' +
  '</div>');

  modal.show();

}

// Function Buy Itens

function buyItemOne() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card" id="tennisOne">' +
  '<img class="modal-img-buy" src="assets/musthave-1.png" alt="must have">' +
  '<h4>TÊNIS NIKE REACT INFINITY RUN FLYKNIT 3 MASCULINO</h4>' +
  '<p><del>De: R$ 1.099,90</del><br>R$ 749,90 (32% de desconto)</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">38</option>' +
  '<option value="2">39</option>' +
  '<option value="3">40</option>' +
  '<option value="3">41</option>' +
  '<option value="3">42</option>' +
  '</select>');

  modal.show();
}

function buyItemTwo() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-2.png" alt="must have">' +
  '<h4>TÊNIS NIKE ZOOM FLY 4 FEMININO</h4>' +
  '<p><del>De: R$ 1.099,90</del><br>R$ 659,94 (40% de desconto)</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">35</option>' +
  '<option value="2">36</option>' +
  '<option value="3">37</option>' +
  '<option value="3">38</option>' +
  '<option value="3">39</option>' +
  '</select>');

  modal.show();
}

function buyItemThree() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-3.png" alt="must have">' +
  '<h4>TÊNIS NIKE AIR ZOOM PEGASUS FEMININO</h4>' +
  '<p><del>De: R$ 899,90</del><br>Por: R$ 629,90 (30% de desconto)</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">36</option>' +
  '<option value="2">37</option>' +
  '<option value="3">38</option>' +
  '<option value="3">39</option>' +
  '<option value="3">40</option>' +
  '</select>');

  modal.show();
}

function buyItemFour() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-4.png" alt="must have">' +
  '<h4>TÊNIS NIKE AIR ZOOM PEGASUS 39 FLYEASE MASCULINO</h4>' +
  '<p><del>De: R$ 899,90</del><br>Por: R$ 584,93 (35% de desconto)</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">38</option>' +
  '<option value="2">39</option>' +
  '<option value="3">40</option>' +
  '<option value="3">41</option>' +
  '<option value="3">42</option>' +
  '</select>');

  modal.show();
}

function buyItemFive() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-5.png" alt="must have">' +
  '<h4>SAPATO SOCIAL COM ALTURA AIR VINITTI EM COURO PRETO - FORRO DE COURO</h4>' +
  '<p>Por: R$ 319,99</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">38</option>' +
  '<option value="2">39</option>' +
  '<option value="3">40</option>' +
  '<option value="3">41</option>' +
  '<option value="3">42</option>' +
  '</select>');

  modal.show();
}

function buyItemSix() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-6.png" alt="must have">' +
  '<h4>SAPATO FEMININO SALTO MÉDIO MODARE</h4>' +
  '<p>Por: R$ 149,90</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">35</option>' +
  '<option value="2">36</option>' +
  '<option value="3">37</option>' +
  '<option value="3">38</option>' +
  '<option value="3">39</option>' +
  '</select>');

  modal.show();
}

function buyItemSeven() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-7.png" alt="must have">' +
  '<h4>SAPATO SOCIAL AIR FILLIPO EM COURO PRETO</h4>' +
  '<p><del>De: R$ 479,99</del><br>Por: R$ 309,99 (20% de desconto)</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">38</option>' +
  '<option value="2">39</option>' +
  '<option value="3">40</option>' +
  '<option value="3">41</option>' +
  '<option value="3">42</option>' +
  '</select>');

  modal.show();
}

function buyItemEight() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-8.png" alt="must have">' +
  '<h4>SAPATO SCARPIN VIZZANO RECORTES VAZADO FEMININO</h4>' +
  '<p><del>De: R$ 209,99</del><br>Por: R$ 158,90 (10% de desconto)</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">35</option>' +
  '<option value="2">36</option>' +
  '<option value="3">37</option>' +
  '<option value="3">38</option>' +
  '<option value="3">39</option>' +
  '</select>');

  modal.show();
}

function buyItemNine() {

  $("#titleModal").html("PAGAMENTO");

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-9.png" alt="must have">' +
  '<h4>CHINELO NIKE VICTORI SLIDE MASCULINO</h4>' +
  '<p><del>De:R$ 199,99</del><br>Por: R$ 109,99 (8% de desconto)</p>' +
  '<select class="form-select" aria-label="Default select example">' +
  '<option value="1">38</option>' +
  '<option value="2">39</option>' +
  '<option value="3">40</option>' +
  '<option value="3">41</option>' +
  '<option value="3">42</option>' +
  '</select>');

  modal.show();
}