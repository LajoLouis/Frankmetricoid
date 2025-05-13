import { Link } from "react-router-dom"

function Home() {
  return (
    <div className='text-center p-6  bg-zinc-600 min-h-[100lvh] text-white space-y-4'>
        <h1 className='text-5xl text-white font-bold font-mono'>Welcome to my portfolio</h1>
        <p>My name is Franklin and I am a web developer</p>

        <div className="bg-[#ffffff] lg:w-[50%] mx-auto text-zinc-700 shadow-md rounded-2xl">
            <h1 className="text-orange-900 text-[30px]  ">Skills</h1>
            <p className='bg-zinc-800 text-orange-800 p-[10px] rounded-[10px] w-[80%] mx-auto'>I use these in the development of my projects</p>
            <ul className='bg-zinc-800 text-orange-300 p-[10px] rounded-[10px] m-[20px]'>
                <li>HTML</li>
                <li>CSS</li>
                <li>TailwindCss</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>TypeScript</li>
                <li>MongoDB</li>
            </ul>
            <p className="text-3xl">I am also an artist</p>
        </div>

        <Link to={`/about`} className="bg-yellow-950 text-white text-left p-[10px] rounded-[10px] hover:bg-amber-500 hover:text-black"> See more about me</Link>
    </div>
  )
}

export default Home