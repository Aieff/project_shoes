// SlideShow

const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let currentIndex = 0;
let time = 12000; // Tempo padrão para apresentação de slides automática
const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};
defClass(1, 0);
leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});
rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});
const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};
startAutoSlide(); // Inicia o slideshow


// All functions
// Function Register (Utilizada para abrir o modal de registro)

var modal = new bootstrap.Modal(document.getElementById('modalAll'));

function registerUser() {
  
  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Salvar</button>');

  $("#bodyModal").html(
  '<div class="d-grid gap-2">' +
  '<button type="button" class="btn btn-dark" onclick="loginUser()"><i class="ri-user-line"></i> Efetuar Login</button><br><br>' +
  '</div>' +
  '<label for="modalInputNome" class="form-label">Nome</label>' +
  '<div class="input-group mb-3">' +
  '<input type="text" class="form-control" placeholder="Nome" aria-label="modalInputNome" required>' +
  '<span class="input-group-text"></span>' +
  '<input type="text" class="form-control" placeholder="Sobrenome" aria-label="modalInputNome" required>' +
  '</div>' +

  '<div class="mb-3">' +
  '<label for="modalInputEmail" class="form-label">E-mail</label>' +
  '<input type="email" class="form-control" id="modalInputEmail" placeholder="exemple@gmail.com" required>' +
  '</div>' +

  '<div class="mb-3">' +
  '<label for="modalInputPassword" class="form-label">Senha</label>' +
  '<input type="password" class="form-control" id="modalInputPassword" aria-describedby="passwordHelp" required>' +
  '<div id="passwordHelp" class="form-text">A senha deve conter no minimo 8 caracteres</div>' +
  '</div>');

  modal.show();

}

// Function Login (Utilizada para abrir o modal de login)

function loginUser() {
  
  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" onclick="registerUser()">Voltar</button>' +
  '<button type="button" class="btn btn-dark">Acessar</button>');

  $("#bodyModal").html(
  '<img class="logo-modal" src="assets/logo.png" alt="logo">' +
  '<div class="mb-3">' +
  '<label for="modalInputEmail" class="form-label">E-mail</label>' +
  '<input type="email" class="form-control" id="modalInputEmail" placeholder="exemple@gmail.com" required>' +
  '</div>' +

  '<div class="mb-3">' +
  '<label for="modalInputPassword" class="form-label">Senha</label>' +
  '<input type="password" class="form-control" id="modalInputPassword" required>' +
  '</div>' +

  '<a class="request-password" href ="#">Esqueceu sua senha ?</a>'
  )

  modal.show();

}

// Function Buy Itens (Utilizada para enviar os dados do produto selecionado)

function buyItemOne() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParOne()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card" id="tennisOne">' +
  '<img class="modal-img-buy" src="assets/musthave-1.png" alt="must have">' +
  '<h4>TÊNIS NIKE REACT INFINITY RUN FLYKNIT 3 MASCULINO</h4>' +
  '<p><del>De: R$ 1.099,90</del><br>Por: R$ 749,90 (32% de desconto)</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParOne() {
  let itemName = "TÊNIS NIKE REACT INFINITY RUN FLYKNIT 3 MASCULINO"
  let itemPrice = 749.90
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectOne()"`
  let funcReturn = `onclick="buyItemOne()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


function buyItemTwo() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParTwo()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-2.png" alt="must have">' +
  '<h4>TÊNIS NIKE ZOOM FLY 4 FEMININO</h4>' +
  '<p><del>De: R$ 1.099,90</del><br>Por: R$ 659,94 (40% de desconto)</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="35">35</option>' +
  '<option value="36">36</option>' +
  '<option value="37">37</option>' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '</select>');

  modal.show();

}

function paymentParTwo() {
  let itemName = "TÊNIS NIKE ZOOM FLY 4 FEMININO"
  let itemPrice = 659.94
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectTwo()"`
  let funcReturn = `onclick="buyItemTwo()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


function buyItemThree() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParThree()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-3.png" alt="must have">' +
  '<h4>TÊNIS NIKE AIR ZOOM PEGASUS FEMININO</h4>' +
  '<p><del>De: R$ 899,90</del><br>Por: R$ 629,90 (30% de desconto)</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="36">36</option>' +
  '<option value="37">37</option>' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '</select>');

  modal.show();

}

function paymentParThree() {
  let itemName = "TÊNIS NIKE AIR ZOOM PEGASUS FEMININO"
  let itemPrice = 629.90
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectThree()"`
  let funcReturn = `onclick="buyItemThree()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


function buyItemFour() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParFour()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-4.png" alt="must have">' +
  '<h4>TÊNIS NIKE AIR ZOOM PEGASUS 39 FLYEASE MASCULINO</h4>' +
  '<p><del>De: R$ 899,90</del><br>Por: R$ 584,93 (35% de desconto)</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParFour() {
  let itemName = "TÊNIS NIKE AIR ZOOM PEGASUS 39 FLYEASE MASCULINO"
  let itemPrice = 584.93
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectFour()"`
  let funcReturn = `onclick="buyItemFour()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


function buyItemFive() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParFive()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-5.png" alt="must have">' +
  '<h4>SAPATO SOCIAL COM ALTURA AIR VINITTI EM COURO PRETO - FORRO DE COURO</h4>' +
  '<p>Por: R$ 319,99</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParFive() {
  let itemName = "SAPATO SOCIAL COM ALTURA AIR VINITTI EM COURO PRETO - FORRO DE COURO"
  let itemPrice = 319.99
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectFive()"`
  let funcReturn = `onclick="buyItemFive()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


function buyItemSix() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParSix()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-6.png" alt="must have">' +
  '<h4>SAPATO FEMININO SALTO MÉDIO MODARE</h4>' +
  '<p>Por: R$ 149,90</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="35">35</option>' +
  '<option value="36">36</option>' +
  '<option value="37">37</option>' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '</select>');

  modal.show();

}

function paymentParSix() {
  let itemName = "SAPATO FEMININO SALTO MÉDIO MODARE"
  let itemPrice = 149.90
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectSix()"`
  let funcReturn = `onclick="buyItemSix()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


function buyItemSeven() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParSeven()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-7.png" alt="must have">' +
  '<h4>SAPATO SOCIAL AIR FILLIPO EM COURO PRETO</h4>' +
  '<p><del>De: R$ 479,99</del><br>Por: R$ 309,99 (20% de desconto)</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParSeven() {
  let itemName = "SAPATO SOCIAL AIR FILLIPO EM COURO PRETO"
  let itemPrice = 309.99
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectSeven()"`
  let funcReturn = `onclick="buyItemSeven()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


function buyItemEight() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParEight()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-8.png" alt="must have">' +
  '<h4>SAPATO SCARPIN VIZZANO RECORTES VAZADO FEMININO</h4>' +
  '<p><del>De: R$ 209,99</del><br>Por: R$ 158,90 (10% de desconto)</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="35">35</option>' +
  '<option value="36">36</option>' +
  '<option value="37">37</option>' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '</select>');

  modal.show();

}

function paymentParEight() {
  let itemName = "SAPATO SCARPIN VIZZANO RECORTES VAZADO FEMININO"
  let itemPrice = 158.90
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectEight()"`
  let funcReturn = `onclick="buyItemEight()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}



function buyItemNine() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParNine()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-9.png" alt="must have">' +
  '<h4>CHINELO NIKE VICTORI SLIDE MASCULINO</h4>' +
  '<p><del>De:R$ 199,99</del><br>Por: R$ 109,99 (8% de desconto)</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParNine() {
  let itemName = "CHINELO NIKE VICTORI SLIDE MASCULINO"
  let itemPrice = 109.99
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectNine()"`
  let funcReturn = `onclick="buyItemNine()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}



function buyItemTen() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParTen()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-10.png" alt="must have">' +
  '<h4>CHINELO ADIDAS ADILETTE LITE FEMININO</h4>' +
  '<p><del>De: R$199,90</del><br>Por: R$ 179,90</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParTen() {
  let itemName = "CHINELO ADIDAS ADILETTE LITE FEMININO"
  let itemPrice = 179.90
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectTen()"`
  let funcReturn = `onclick="buyItemTen()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}



function buyItemEleven() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParEleven()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-11.png" alt="must have">' +
  '<h4>SANDALIA MOLECA RASTEIRA FEMININA CAMURÇA</h4>' +
  '<p><del>De: R$ 59,99</del><br>Por: R$ 49,99</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParEleven() {
  let itemName = "SANDALIA MOLECA RASTEIRA FEMININA CAMURÇA"
  let itemPrice = 49.99
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectEleven()"`
  let funcReturn = `onclick="buyItemEleven()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}



function buyItemTwelve() {

  $("#footerModal").html(
  '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>' +
  '<button type="button" class="btn btn-dark" onclick="paymentParTwelve()">Confirmar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">REALMENTE DESEJA COMPRAR ?</h4>' +
  '<div class="musthave-card">' +
  '<img class="modal-img-buy" src="assets/musthave-12.png" alt="must have">' +
  '<h4>SANDALIA MASCULINA MOD REST II</h4>' +
  '<p><del>De: R$199,90</del><br>Por: R$149,90</p>' +
  '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
  '<option value="38">38</option>' +
  '<option value="39">39</option>' +
  '<option value="40">40</option>' +
  '<option value="41">41</option>' +
  '<option value="42">42</option>' +
  '</select>');

  modal.show();

}

function paymentParTwelve() {
  let itemName = "SANDALIA MASCULINA MOD REST II"
  let itemPrice = 149.90
  shoesLength = $("#shoesLength").val()
  let funcRedirect = `onclick="whatsRedirectTwelve()"`
  let funcReturn = `onclick="buyItemTwelve()"`

  payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn)
}


// Payment function

function payment(itemName, itemPrice, shoesLength, funcRedirect, funcReturn) {

  $("#footerModal").html('<button type="button" class="btn btn-secondary" '+ funcReturn +'>Voltar</button>');

  $("#bodyModal").html(
  '<h4 class="modal-title-confirm">FORMAS DE PAGAMENTO</h4><br>' +
  '<div class="d-grid gap-2">' +
  '<h4 class="text-payment">'+ itemName +'</h4><br><h5><strong>SubTotal:</strong> R$ '+ itemPrice +'</h5><h5><strong>Tamanho: </strong>'+ shoesLength +'</h5><br>' +
  '<button type="button" id="creditCardPayment" class="btn btn-dark"><i class="ri-bank-card-fill"></i> Cartão de credíto</button>' +
  '<button type="button" class="btn btn-dark"><i class="ri-file-list-3-line"></i></i> Boleto</button>' +
  '<button type="button" id="pixPayment" class="btn btn-dark"><i class="ri-pixelfed-line"></i> PIX</button>' +
  '<button type="button" class="btn btn-dark" '+ funcRedirect +'><i class="ri-whatsapp-line"></i> Whatsapp</button>' +
  '</div>'
  );

  modal.show();


  let creditCardPayment = document.querySelector('#creditCardPayment')
  creditCardPayment.addEventListener('click', () => {

    
    $("#footerModal").html('<button type="button" class="btn btn-secondary" '+ funcReturn +'>Voltar</button>');

    $("#bodyModal").html(
    '<div class="mb-3">' +
    '<label for="exampleFormControlInput1" class="form-label">Nome do titular do cartão</label>' +
    '<input type="text" class="form-control" id="exampleFormControlInput1" required>' +
  
    '<label for="exampleFormControlInput1" class="form-label">Número do cartão</label>' +
    '<input type="text" class="form-control" id="exampleFormControlInput1" required> <br>' +
  
  
    '<div class="input-group mb-3">' +
    '<span class="input-group-text">MM/AA</span>' +
    '<input type="text" class="form-control" aria-label="mesAno" required>' +
  
    '<span class="input-group-text">CVC</span>' +
    '<input type="text" class="form-control" aria-label="cvc" required>' +
    '</div>' +
  
    '<label for="exampleFormControlInput1" class="form-label">CPF</label>' +
    '<input type="text" class="form-control" id="exampleFormControlInput1" required>' +
    
    '<label for="exampleFormControlInput1" class="form-label">E-mail</label>' +
    '<input type="email" class="form-control" id="exampleFormControlInput1" required>' +
    '</div>' +
  
    '<label for="exampleFormControlInput1" class="form-label">Parcelas</label>' +
    '<select class="form-select" id="shoesLength" aria-label="Default select example">' +
    '<option value="">1 X R$ '+ (itemPrice).toFixed(2) +'</option>' +
    '<option value="">2 X R$ '+ (itemPrice / 2).toFixed(2) +'</option>' +
    '<option value="">3 X R$ '+ (itemPrice / 3).toFixed(2) +'</option>' +
    '<option value="">4 X R$ '+ (itemPrice / 4).toFixed(2)+'</option>' +
    '<option value="">5 X R$ '+ (itemPrice / 5).toFixed(2) +'</option>' +
    '<option value="">6 X R$ '+ (itemPrice / 6).toFixed(2) +'</option>' +
    '<option value="">7 X R$ '+ (itemPrice / 7).toFixed(2) +'</option>' +
    '<option value="">8 X R$ '+ (itemPrice / 8).toFixed(2) +'</option>' +
    '<option value="">9 X R$ '+ (itemPrice / 9).toFixed(2) +'</option>' +
    '<option value="">10 X R$ '+ (itemPrice / 10).toFixed(2) +'</option>' +
    '<option value="">11 X R$ '+ (itemPrice / 11).toFixed(2) +'</option>' +
    '<option value="">12 X R$ '+ (itemPrice / 12).toFixed(2) +'</option>' +
    '</select><br>' +

    '<div class="d-grid gap-2">' +
    '<button type="button" class="btn btn-dark">Efetuar Pagamento</button><br>' +
    '</div>' 
    );
  
    modal.show();
     
  });


  let pixPayment = document.querySelector('#pixPayment')
  pixPayment.addEventListener('click', () => { 

    $("#footerModal").html('<button type="button" class="btn btn-secondary" '+ funcReturn +'>Voltar</button>');

    $("#bodyModal").html(
    '<img class="codeqr-payment" src="assets/code-qr.jpg" alt="logo">' +
    '<h4 class="text-payment">'+ itemName +'</h4><br>' +
    '<h5><strong>SubTotal:</strong> R$ '+ itemPrice +'</h5>' +
    '<h5><strong>Tamanho: </strong>'+ shoesLength +'</h5><br>'
    );

  });
}



// Como não sei nenhuma forma de passar os valores por variaveis para a URL acabei optando fazer de um em um
// Function redirect Whatsapp Mensage

function whatsRedirectOne() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20Tênis%20nike%20react%20infinity%20run%20flyknit%203%20Por:%20R$%20749,90', '_blank');
}
function whatsRedirectTwo() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20Tênis%20nike%20zoom%20fly%204%20feminino%20Por:%20R$%20659,94', '_blank');
}
function whatsRedirectThree() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20Tênis%20nike%20air%20zoom%20pegasus%20feminino%20Por:%20R$%20629,90', '_blank');
}
function whatsRedirectFour() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20Tênis%20nike%20air%20zoom%20pegasus%2039%20flyease%20Por:%20R$%20584,93', '_blank');
}
function whatsRedirectFive() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20sapato%20social%20com%20altura%20air%20vinitti%20em%20couro%20preto%20Por:%20R$%20319,99', '_blank');
}
function whatsRedirectSix() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20sapato%20feminino%20salto%20médio%20modare%20bege%20Por:%20R$%20149,90', '_blank');
}
function whatsRedirectSeven() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20sapato%20social%20air%20fillipo%20em%20couro%20preto%20Por:%20R$%20309,99', '_blank');
}
function whatsRedirectEight() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20sapato%20scarpin%20vizzano%20recortes%20vazado%20feminino%20Por:%20R$%20158,90', '_blank');
}
function whatsRedirectNine() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20chinelo%20nike%20victori%20slide%20masculino%20Por:%20R$%20109,99', '_blank');
}
function whatsRedirectTen() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20chinelo%20adidas%20adilette%20lite%20feminino%20Por:%20R$%20179,90', '_blank');
}
function whatsRedirectEleven() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20sandalia%20moleca%20rasteira%20feminina%20camurça%20Por:%20R$%2049,99', '_blank');
}
function whatsRedirectTwelve() {
  window.open('https://wa.me/553598645917?text=Oi%20!%20Gostaria%20de%20comprar,%20sandalia%20masculina%20mod%20rest%20II%20Por:%20R$%20149,99', '_blank');
}