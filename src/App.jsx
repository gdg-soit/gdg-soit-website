import { useEffect, useState } from "react"
import Loader from "./components/Loader"
import Init from "./init";


function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div className="inter-4">
      {loader ? <Loader /> : <Init />}
    </div>
  )
}

export default App
