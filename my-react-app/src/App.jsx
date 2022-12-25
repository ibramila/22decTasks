import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const intervalRef = React.useRef(0);

  const [num, setNum] = React.useState(0);

  const [start, setStart] = React.useState(false);
  const [stop, setStop] = React.useState(false);
  const [restart, setRestart] = React.useState(false);

  const increaseNum = () => setNum((count) => count + 1);



  function startFunc() {
    if (intervalRef.current) { return; }
    intervalRef.current = setInterval(increaseNum, 1000);
    setStart(true)
    setStop(false);
    setRestart(false);
  }

  function stopFunc() {
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
    setStop(true)
    setStart(false);
    setRestart(false);
  }

  function resetFunc() {
    clearInterval(intervalRef.current);
    setNum(0);
    setStart(false)
    setStop(false);
    setRestart(true);
  }

  React.useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <span style={{ fontWeight: 900 }}>Timer: {num}s </span>
      <Box sx={{ '& button': { m: 3 } }} style={{ display: 'flex', justifyContent: "center" }}>

        <Button onClick={startFunc} color="success" variant={start ? "outlined" : "contained"} size="medium" style={{}}>
          Start
        </Button>
        <Button onClick={stopFunc} color="error" variant={stop ? "outlined" : "contained"} size="medium">
          Stop
        </Button>
        <Button onClick={resetFunc} color="warning" variant={restart ? "outlined" : "contained"} size="medium">
          Reset
        </Button>
      </Box>
    </>
  )
}

export default App
