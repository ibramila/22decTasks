import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './App.css'

function App() {
  // const inputRef = useRef(null);
  // console.log(inputRef)
  // console.log(getCurrentDate())
  // function changeFunc() {
  //   inputRef.current.style.backgroundColor = "yellow";
  //   inputRef.current.style.border = "1px solid black";
  // }

  const [num, setNum] = React.useState(0);
  const [pause1, setPause1] = React.useState(false);
  const [pause2, setPause2] = React.useState(false);
  const [pause3, setPause3] = React.useState(false);

  let intervalRef = React.useRef();

  const increaseNum = () => setNum((prev) => prev + 1);

  React.useEffect(() => {

    intervalRef.current = setInterval(increaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // const handleClick = () => {
  //   if (!pause1) {
  //     clearInterval(intervalRef.current);
  //   } else {
  //     intervalRef.current = setInterval(increaseNum, 1000);
  //   }
  //   setPause1((prev) => !prev);

  // };


  function startFunc() {
    // if (intervalRef.current) { return; }
    intervalRef.current = setInterval(increaseNum, 1000);
    setPause1(true)
    setPause2(false);
    setPause3(false);
  }

  function stopFunc() {
    // intervalRef.current = 0;
    clearInterval(intervalRef.current);
    setPause2(true)
    setPause1(false);
    setPause3(false);
  }

  function resetFunc() {
    setNum(0);
    clearInterval(intervalRef.current)
    setPause1(false)
    setPause2(false);
    setPause3(true);
  }
  return (
    <>
      {/* <div ref={inputRef} style={{ width: 200, height: 200, backgroundColor: "red", border: "none" }}> </div> */}
      {/* <button onClick={changeFunc}>Change</button> */}
      {/* <div>{num}</div> */}
      <span style={{ fontWeight: 900 }}>Timer: {num}s </span>
      <Box sx={{ '& button': { m: 3 } }} style={{ display: 'flex', justifyContent: "center" }}>

        <Button onClick={startFunc} color="success" variant={pause1 ? "outlined" : "contained"} size="medium" style={{}}>
          Start
        </Button>
        <Button onClick={stopFunc} color="error" variant={pause2 ? "outlined" : "contained"} size="medium">
          Stop
        </Button>
        <Button onClick={resetFunc} color="warning" variant={pause3 ? "outlined" : "contained"} size="medium">
          Reset
        </Button>
      </Box>
    </>
  )
}

export default App
