import process from "process";


export default function Home() {
  
  return (
    <>
      <div className="text-black">your secret key is : {process.env.API_KEY}</div>  
    </>
  )
}
