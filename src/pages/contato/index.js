import React from 'react'

function Contato() {
    return(
      <div>
      <section class="contact">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <div class="card">
                <div class="card-body">
                  <div class="col-lg-12">
                    <div class="head text-center text-white py-3">
                      <h3>Contato</h3>
                    </div>
                  </div>
                </div>
                <form action="#" method="POST">
              <div class="form p-3">
                <div class="form-row my-5">
                  <div class="col-lg-6">
                    <input type="text" class="effect-1" placeholder="Nome" name='nome'>
                    <span class="Focus-border"></span>
                  </div>
                  <div class="col-lg-6">
                    <input type="text" class="effect-1" placeholder="Sobrenome">
                    <span class="Focus-border"></span>
                  </div>
                </div>
                <div class="form-row pt-5">
                  <div class="col-lg-12">
                    <textarea name="msg" cols="50" rows="4" placeholder= "Mensagem"></textarea>
                    <span class="Focus-border"></span>
                  </div>
                </div>
                <div class="form-row pt-4">
                  <div class="col-lg-6">
                    <p><input type="checkbox"> Não sou um robô </p>
                    <p><a href="./index.php"> Voltar para Conscire</a></p>
                  </div>
                  <div class= "offset-2 col-lg-4">
                    <button class="btn1">ENVIAR</button>
                  </div>
              </div>
              </form>
              {/* class="endereco" */}
              </div >
                    <p class="text-center">Entre em contato conosco:<br>
                    Telefone: (11)3656-5562<br>
                    Endereço: Rua Conscire, 569<br>
                    São Paulo - SP </p>
                </div>
            </div>
          </div>
          <div class="container text-center bg-light">
                {/* <?php include_once "coments.php";  ?> */}
          </div>
        </div>
        </div>
      </section>
  </div>
    )
}

export default Contato