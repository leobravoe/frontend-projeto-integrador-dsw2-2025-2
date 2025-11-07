import React from 'react'

const Chamado = ({ chamado }) => {
    return (
        <div className='col-md-6 col-lg-4 p-0'>
            <div className="card mb-2 me-2">
                <div className="card-header">
                    <strong>{chamado.id}</strong>
                </div>
                <div className="card-body">
                    <p>{chamado.texto}</p>
                </div>
                <div class="card-footer text-body-secondary">
                    <button className="btn btn-secondary">Ativo</button>
                    <button className='btn btn-info'>Editar</button>
                    <button className='btn btn-danger'>Excluir</button>
                </div>
            </div>
        </div>
    )
}

export default Chamado