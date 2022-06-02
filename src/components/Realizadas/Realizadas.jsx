
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Tabela from '../Table/Table';

function dataConverter(data){
  let data1 = data.split("T")[0]
  let data2 = data1.split('-')
  let data3 = `${data2[2]}/${data2[1]}/${data2[0]}`
  return data3
}



const Realizadas = () => {

  const [instalacoes, setInstalacoes] = useState([]);

  useEffect(() => {
    (async()=>{
      await axios.get("http://140.238.186.244:3333/users").then((instalacao)=>{
        let lista=[]
        instalacao.data.forEach(element => {
          for (let index = 0; index < element.Instalacaos.length; index++) {
            const Inst = element.Instalacaos[index];
            lista.push({
              tecnico: element.nome,
              key: Inst.id,
              codigocliente: Inst.codigocliente,
              nomecliente: Inst.nomecliente,
              rgcpf: Inst.rgcpf,
              onu: Inst.onu,
              fhtt: Inst.fhtt,
              wifi: Inst.wifi,
              senha: Inst.senha,
              sinalcliente: Inst.sinalcliente,
              sinalcaixa: Inst.sinalcaixa,
              caixa: Inst.caixa,
              porta: Inst.porta,
              localizacao: Inst.localizacao,
              data: dataConverter(Inst.createdAt),
              updatedAt: Inst.updatedAt,
            })
          }
        });
        setInstalacoes(lista); 
        console.log(instalacoes)
      })
   
    })();
    
}, []);


  return (
    <div className="table-body">
   {/*  <Cards data = {instalacoes}/> */}
   <Tabela data = {instalacoes}/>
    </div>
  )
}

export default Realizadas