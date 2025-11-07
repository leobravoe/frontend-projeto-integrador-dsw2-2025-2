import { useState } from "react"
import Navbar from "../../components/Navbar"
import { Link } from 'react-router-dom'

const ChamadosCreate = () => {
    const [Usuarios_id, setUsuariosId] = useState(1);
    const [texto, setTexto] = useState("");
    const [estado, setEstado] = useState("a");
    const [imagem, setImagem] = useState("");

    const enviaFormulario = async (e) => {
        e.preventDefault();
        const dadosEnviados = JSON.stringify({
            Usuarios_id,
            texto,
            estado,
            "url_imagem": imagem
        });
        const response = await fetch("http://localhost:3000/api/chamados", {
            method: "POST",
            body: dadosEnviados,
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response);
    }

    return (
        <div>
            <Navbar />
            <div className='m-2'>
                <h3 className='my-2'>ChamadosCreate.jsx</h3>
                <Link to="/chamados" className='btn btn-primary'>Voltar</Link>
                <form onSubmit={enviaFormulario}>
                    <div className="my-2">
                        <label htmlFor="" className="form-label">Usuarios_id</label>
                        <input
                            type="number"
                            className="form-control"
                            value={Usuarios_id}
                            onChange={(e) => setUsuariosId(Number(e.target.value))}
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="" className="form-label">Texto</label>
                        <input
                            type="text"
                            className="form-control"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="" className="form-label">Estado</label>
                        <select
                            className="form-select"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        >
                            <option value="a">Aberto</option>
                            <option value="f">Fechado</option>
                        </select>
                    </div>
                    <div className="my-2">
                        <label htmlFor="" className="form-label">Imagem</label>
                        <input
                            type="file"
                            className="form-control"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </div>
                    <div className="my-2">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChamadosCreate