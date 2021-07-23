import React from 'react';
import './chat.css';
import Side from './side';
import { TextField,Chip} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import {BiSearch} from 'react-icons/bi'
import {IoMdSwitch} from 'react-icons/io'
function chat() {
    return (
        <>
        <div>
          <p style={{'color' : 'GrayText', 'fontSize':'small','marginLeft':'-1000px', 'marginTop': '-50px', 'textDecoration':'underline'}}>Updates</p>
      </div>
      <div>
        <p style={{'color' : 'GrayText', 'fontSize':'small','marginLeft':'950px', 'marginTop': '-50px'}}>Session Time: 12 mins </p>
      </div><br />
      <div>
          <p style={{'color' : 'GrayText', 'fontSize':'small','marginLeft':'1200px', 'marginTop': '-50px'}}>User: Priya </p>
      </div>
      <br />
        <div className='chat'>
            <b className='Conversations'>Conversations</b> &nbsp;
        <TextField
        className="inputRounded"
        placeholder="Quick Search"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BiSearch />
            </InputAdornment>
          ),
        }}
      /> &nbsp;
      <Chip label="filter"
        size="medium"
        icon={<IoMdSwitch />}

       />
      <Side />
    </div>
    </>
    )
}

export default chat
