import logo from './logo.svg';
import './App.css';
import { useState,useContext } from 'react';
// import sun from './Asset/sun.svg'
// import moon from './Asset/moon.svg'
import sun from './Asset/sun_toggle.png'
import moon from './Asset/moon_toggle.png'
import {DivyaContext, ThemeContext} from './context'

function App() {
  const[darkMode,setDarkMode]=useState(DivyaContext)

  //Count is 9 and no winner, then match is DRAW
  const[count,setCount]=useState(1)
  // to display winner checkWinner()
  const[winner,setWinner]=useState('')
  // symbol between 2 players
  const[sym,setSym]=useState('x')
  //tic tac toe board
  const[matrix,setMatrix]=useState([['','',''],['','',''],['','','']])

  const backGroundColor = (i)=>{
    if(i === 'x') return 'green';
    if(i === 'o') return 'blue';
    return '';
  }

  const checkWinner=()=>{
    //all rows same
    if (matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2]){
      setWinner(matrix[0][0]+' is the winner!')
    } 
    if (matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2]){
      setWinner(matrix[1][0]+' is the winner!')
    }
    if (matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2]){
      setWinner(matrix[2][0]+' is the winner!')
    }

    //all COLUMNS same
    if (matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]){
      setWinner(matrix[0][0]+' is the winner!')
    } 
    if (matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1]){
      setWinner(matrix[0][1]+' is the winner!')
    }
    if (matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2]){
      setWinner(matrix[0][2]+' is the winner!')
    }

    //all DIAGONALS same
    if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]){
      setWinner(matrix[1][1]+' is the winner!')
    } 
    if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]){
      setWinner(matrix[1][1]+' is the winner!')
    }

    //no winner
    if(count===9){
      setCount('The match is DRAW!!!')
    }
  }

  const handleClick=(r,c)=>{
    //if there is a value already , 2nd click will not change in same box
    if (matrix[r][c]) return;

    // create a duplicate
    const tmpMatrix=[...matrix]
     tmpMatrix[r][c]=sym 
     setMatrix(tmpMatrix)

     setSym(sym === 'x' ? 'o' : 'x')
     setCount(count+1)
     checkWinner()
  }

  return (
    // <DivyaContext>
    <div className="App" style={{backgroundColor:darkMode ? "white" : "black"
    ,color:darkMode ? "black" : "white"
    ,border:darkMode ? "black" : "white"}}>

      <div className='header center'>
        <h1>TIC TAC TOE</h1>
        <span className='darktoggle' onClick={()=>setDarkMode(!darkMode)}>
          {darkMode ? <img src={moon} atl="sunny"></img> : <img src={sun} atl="sunny"></img> }
        </span>
      </div>

      <hr></hr>

      <div className="body center" >
        {!winner && <p>{sym} turn now</p>}
        <div className='gameboard'>
            {winner || matrix.map((r,ri)=>
              <div className="row">
                  {r.map((c,ci)=>
                    <div onClick={()=>handleClick(ri,ci)}
                    className={`col center ${backGroundColor(matrix[ri][ci])}`}
                    style={{borderColor:darkMode ? "black" : "white"}}>
                    {matrix[ri][ci]}</div>)}
                </div>)}
          </div>
          <button onClick={()=>{setWinner('')
          setMatrix([['','',''],['','',''],['','','']])}}
          className='btn'>Reset Game</button>
      </div>
    </div>
    
  );
}

export default App;
