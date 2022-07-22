import './style.css';
import 'bootstrap/js/src/collapse.js';

function Teste() {


    const btnMenu = document.getElementById('btnTeste');

    const caixaTeste = document.getElementById('navbarToggleExternalContent');
    console.log(caixaTeste);
    

    btnMenu?.addEventListener('click', (event) => {
        caixaTeste?.classList.add('collapse');
    });


  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id='btnTeste'
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>


      <div className='caixa collapse' id='navbarToggleExternalContent'>
        <h1>Teste</h1>
      </div>


    </>
  );
}

export default Teste;
