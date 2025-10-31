import React from 'react'
import Navbar from "../../components/Navbar"
import Chamado from '../../components/Chamado';
import { Link } from 'react-router-dom';

const ChamadosIndex = () => {
  const [chamados, setChamados] = React.useState([]);

  // Crio o useEffect (serve para fazer consultas em APIS)  
  // Ele não roda de imediato, so roda depois da primeira pintura.
  React.useEffect(() => {
    // Dentro do useEffect crio a função abaixo e declaro ela como async
    // declaramos ela como async pois iremos utilizar await dentro dela
    const fetchChamados = async () => {
      const response = await fetch("http://localhost:3000/api/chamados");
      // console.log(response);
      const data = await response.json(); // Converto os dados dentro de response para JSON
      console.log(data);
      setChamados(data);
    }
    fetchChamados(); // chamando a função que foi declarada acima
  }, []);
  // [] significa que o useEffect vai rodar apenas 1 vez 
  // depois do primeiro render

  return (
    <div>
      <Navbar />
      <h3>ChamadosIndex</h3>
      <Link to="/chamados/create" className='btn btn-primary'>Criar Chamado</Link>
      <div className='row m-2'>
        {chamados.map(chamado => <Chamado key={chamado.id} chamado={chamado} />)}
      </div>
    </div>
  )
}

export default ChamadosIndex