import React, { useState } from "react";


function Formulario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [profissao, setProfissao] = useState('');
    const [aceitaTermos, setAceitaTermos] = useState(false);
    const handleCadastroFormulario = (event) => {
        event.preventDefault();
        console.log('enviou', {nome: nome, email: email, senha: senha, profissao: profissao, aceitaTermos: aceitaTermos})
    }


  return (
    <div style={{textAlign: 'center', maxWidth: '600px'}} >
      <form onSubmit={handleCadastroFormulario}>
        <div >
        <h1>Formulario de Cadastro</h1>
        <div>
        <h4>Nome</h4>
        <input  type='text'   
                placeholder='Nome Completo'  
                required
                value={nome}
                onChange={ (e) => setNome(e.target.value)}/>
        <h4>Email</h4>
        <input  type='email' 
                placeholder='Insira seu email'  
                required
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
        <h4>Senha</h4>
        <input  
            type='password' 
            placeholder='Senha'  
            required 
            value={senha}
            onChange={ (e) => setSenha(e.target.value)}/>
        </div>
        <div style={{margin: '20px', padding: '10px'}}>
        <label htmlFor="profissao">Profissão:</label>
          <select
            id="profissao"
            name="profissao"
            value={profissao}
            onChange={(e) => setProfissao(e.target.value)}
            required
          >
            <option value="">Selecione a profissão</option>
            <option value="estudante">Estudante</option>
            <option value="engenheiro">Engenheiro</option>
            <option value="professor">Professor</option>
            <option value="outro">Outro</option>
          </select>
          </div>
          <div>
          </div>
          <div style={{margin: '15px'}}>
          <input
              type="checkbox"
              id="aceitaTermos"
              checked={aceitaTermos}
              onChange={() => setAceitaTermos(!aceitaTermos)}
              required
            />
            <label htmlFor="aceitaTermos">Eu aceito os termos e condições</label>
            </div>
        </div>
        <button submit='handleCadastroFormulario'>Enviar Formulario</button>
      </form>
    </div>  
);
}

export default Formulario;
