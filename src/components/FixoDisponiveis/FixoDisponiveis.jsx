import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from "axios"
import React from 'react'
import NumberCard from '../NumberCard/NumberCard'
import "./FixoDisponiveis.css"


function FixoDisponiveis() {

   const [cidade, setCidade] = React.useState('Escolha uma Cidade!');
   const [atual_cidade, setAtualCidade] = React.useState([]);
   const [loading , setLoading] = React.useState(false)
   async function getCidade(cidade){
    if(cidade != "Escolha uma Cidade!"){
    setLoading(true)
    await axios.get(`http://localhost:3333/fixo-disponiveis/${cidade}`).then((city)=>{
        setAtualCidade(city.data.numeros_disponiveis)
        setLoading(false)
    });
  }       
    
    }
    

    const handleChange = (event) => {
        getCidade(event.target.value)
        setCidade(event.target.value);
    };

 
  return (
      <div className='disponiveis-body'>
        <div>Fixo Disponiveis</div>
        <FormControl sx={{ m: 2, minWidth: 500 }}>
        <InputLabel id="cidade-label">Cidade</InputLabel>
        <Select
          labelId="cidade-label"
          id="cidade-select"
          value={cidade}
          label="Cidade"
          onChange={handleChange}
        >
          <MenuItem value={"Escolha uma Cidade!"}>Escolha uma Cidade!</MenuItem>
          <MenuItem value={"MEDIANEIRA"}>MEDIANEIRA</MenuItem>
          <MenuItem value={"MATELANDIA"}>MATELANDIA</MenuItem>
          <MenuItem value={"CEU AZUL"}>CEU AZUL</MenuItem>
        </Select>
      </FormControl>
        {loading && <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
        {!loading && <NumberCard data={atual_cidade} />}
      </div>
  )
}

export default FixoDisponiveis