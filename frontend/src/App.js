import { Fragment } from "react";
import { useStateContext } from "./context";


export default function Home() {
  const {connectWallet} = useStateContext()
  return (
   <Fragment>
      <button onClick={()=>connectWallet()}>connect</button>
   </Fragment>
  );
}
