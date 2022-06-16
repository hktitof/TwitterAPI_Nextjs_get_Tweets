import process from "process";


export default function Home() {
  
  return (
    <>
      <div>the key is {process.env.API_KEY}</div>  
    </>
  )
}
