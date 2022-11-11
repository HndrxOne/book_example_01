import './App.css';

const rootEl =
  document.getElementById('root')


let states = {}

function _getM2(initialValue, key) {
  if (states[key] === undefined) {
    states[key] = initialValue
  }
  
  return states[key]
}

function _setM2(v, key) {
  states[key] = v
  ReactDOM.render(<Title />, rootEl)
}

let prev

function _onM(callback, value) {
  if (value === prev) return 
  callback()
  prev = value
}

function Changed({ count }) {
  let flag = 'N'
  _onM(() => { flag = 'Y' }, count)

  return <span>{flag}</span>
}

const Title = () => {
  let countH = _getM2(0, 'H')
  let countW = _getM2(0, 'W')

  const onClickH = () => {
    console.log('clickedH', countH)     
    countH = countH + 1
    _setM2(countH, 'H')
  }

  const onClickW = () => {
    console.log('clickedW', countW)     
    countW = countW + 1
    _setM2(countW, 'W')
  }

  console.log('updatedH', countH)	      
  console.log('updatedW', countW)	  
  return (
    <>
      <button onClick={onClickH}>+</button>
      <h1>Hello+{countH}</h1>
      <Changed count={countH} />
      <button onClick={onClickW}>+</button>
      <h1>World+{countW}</h1>
    </>
  )
}
  
function App() {
  return <Title /> 
}

ReactDOM.render(<App />, rootEl)