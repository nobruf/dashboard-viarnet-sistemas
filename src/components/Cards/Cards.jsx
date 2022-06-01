import React from 'react'
import "./Cards.css"


function Cards(instalacoes) {
  return (
    <div className="cards">
    {instalacoes.data.map((row) => (    
      <div className='card-body'>
        <h2 className='card-dados-header'>{row.tecnico}</h2>
        <div>
        <div className='card-dados-label'>
        <small>Cliente:</small> <small>#{row.codigocliente}</small>
        </div>
        <p className='card-dados-nome bold'>{row.nomecliente}</p>
        </div>
        <div>
        <div className='card-dados-label'>
        <small>RG/CPF:</small> <small>{row.rgcpf}</small>
        </div>
        </div>
        <div>
        <div className='card-dados-label'>
        <small>Tecnologia:</small><small>FHTT:</small>
        </div>
        <div className='card-dados-label bold'>
        <small>{row.onu}</small><small>{row.fhtt}</small>
        </div>
        </div>
        <div>
        <div className='card-dados-label'>
        <small>Rede Wifi:</small><small>Senha Wifi:</small>
        </div>
        <div className='card-dados-label bold'>
        <small>{row.wifi}</small><small>{row.senha}</small>
        </div>
        </div>
        <div>
        <div className='card-dados-label'>
        <small>Sinal Cliente:</small><small>Sinal Caixa:</small>
        </div>
        <div className='card-dados-label bold'>
        <small>{row.sinalcliente}</small><small>{row.sinalcaixa}</small>
        </div>
        </div>
        <div>
        <div className='card-dados-label'>
        <small>Caixa:</small><small>Porta:</small>
        </div>
        <div className='card-dados-label bold'>
        <small>{row.caixa}</small><small>{row.porta}</small>
        </div>
        </div>
        <div>
        <div className='card-dados-label'>
        <small>Localização:</small>
        </div>
        <div className='card-dados-label bold'>
        <small>{row.localizacao}</small>
        </div>
        </div>
      </div>
      ))}
      </div>
  )
}

export default Cards