import React from "react";
import logo from "../../assets/img/logo.png";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="voluntariado.html">Voluntariado</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="projetos.html">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contato.html">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Aluno
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Cadastre-se</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label for="inputEmail4" className="form-label">Nome</label>
                                        <input type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">Endereço</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Logradouro, Número, Bairro" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputCity" className="form-label">Cidade</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputState" className="form-label">Estado</label>
                                        <select id="inputState" className="form-select">
                                            <option selected></option>
                                            <option>AC</option>
                                            <option>AL</option>
                                            <option>AP</option>
                                            <option>AM</option>
                                            <option>BA</option>
                                            <option>CE</option>
                                            <option>DF</option>
                                            <option>ES</option>
                                            <option>GO</option>
                                            <option>MA</option>
                                            <option>MT</option>
                                            <option>MS</option>
                                            <option>MG</option>
                                            <option>PA</option>
                                            <option>PB</option>
                                            <option>PR</option>
                                            <option>PE</option>
                                            <option>PI</option>
                                            <option>RJ</option>
                                            <option>RN</option>
                                            <option>RS</option>
                                            <option>RO</option>
                                            <option>RR</option>
                                            <option>SC</option>
                                            <option>SP</option>
                                            <option>SE</option>
                                            <option>TO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label for="inputZip" className="form-label">CEP</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}