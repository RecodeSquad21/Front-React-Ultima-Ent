import React from "react";
import "./style.css";

export default function Voluntariado() {
    return (
        <div>
            <main className="container">
                <header id="titleVoluntariado">
                    <h1><strong>Deseja ser voluntário?</strong></h1>
                    <h3>Cadastre-se e venha fazer parte de quem ajuda.</h3>
                </header>
                <form className="row g-3 needs-validation" id="formVoluntariado" novalidate>
                    <div className="col-md-6">
                        <label for="validationCustom01" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="validationCustom01" required />
                            <div className="valid-feedback">
                            </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationCustom02" className="form-label">Sobrenome</label>
                        <input type="text" className="form-control" id="validationCustom02" required />
                            <div className="valid-feedback">
                            </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationCustom03" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                            <div className="invalid-feedback">
                            </div>
                    </div>
                    <div className="col-md-3">
                        <label for="validationCustom03" className="form-label">Estado</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                            <div className="invalid-feedback">
                            </div>
                    </div>
                    <div className="col-md-3">
                        <label for="validationCustom05" className="form-label">Cep</label>
                        <input type="text" className="form-control" id="validationCustom05" required />
                            <div className="invalid-feedback">
                                Por favor, insira o CEP
                            </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Faça uma breve apresentação</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected disabled>Qual área do voluntariado deseja se candidatar</option>
                        <option value="1">Professor</option>
                        <option value="2">Psicólogo</option>
                        <option value="3">Apoio educativo</option>
                    </select>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Aceito os termos e condições do voluntariado
                                </label>
                                <div className="invalid-feedback">
                                    Aceite os termos antes de enviar o formulário.
                                </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Enviar informações</button>
                    </div>
                </form>
            </main>
            <hr size="2"></hr>
        </div>
    )
}
