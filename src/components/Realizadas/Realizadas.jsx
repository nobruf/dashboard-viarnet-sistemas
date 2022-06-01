import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Cards from '../Cards/Cards';





const Realizadas = () => {

  const [instalacoes, setInstalacoes] = useState([]);

useEffect(() => {
  setInterval(() => {
      (async()=>{
        await axios.get("http://140.238.186.244:3333/users").then((instalacao)=>{
          let lista=[]
          instalacao.data.forEach(element => {
            for (let index = 0; index < element.Instalacaos.length; index++) {
              const Inst = element.Instalacaos[index];
              lista.push({
                tecnico: element.nome,
                id: Inst.id,
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
                createdAt: Inst.createdAt,
                updatedAt: Inst.updatedAt,
              })
            }
          });
          setInstalacoes(lista); 
        
        })
     
      })();
    }, 2000);
      
  }, []);


  return (
    <>
    <Cards data = {instalacoes}/>
    </>
  )
}

export default Realizadas