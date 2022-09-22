import React from 'react'

const Footer = () => {
    const credits = {
        year: new Date().getFullYear(),
        author: 'Keny Isaac Lovera'
      };

    const {year,author} = credits;
    
  return (
    <footer className="mt-auto bg-gradient-to-b from-gray-800 to-black shadow shadow-zinc-500/50 ">
      <nav className="py-6">
        <div className="flex flex-col gap-4 container mx-auto px-8 md:px-4">
          <ul className="flex justify-center gap-4 md:gap-6">
            <li className="flex">
              <a href="https://www.linkedin.com/in/keny-isaac-lovera/" target="_blank" rel="noreferrer" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" className="w-full" />
              </a>
            </li>

            <li className="flex">
              <a href="https://github.com/kenyisaac" target="_blank" rel="noreferrer" className="flex w-6 transition-all hover:scale-125 hover:brightness-150 md:w-8">
                <img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" className="w-full" />
              </a>
            </li>
          </ul>
          <h2 className="relative text-center text-sm before:absolute before:-top-2 before:left-0 before:w-full before:h-0.5 before:bg-zinc-500/50 text-white">
            Copyright &copy; {year} <a href="https://www.linkedin.com/in/keny-isaac-lovera/" className="text-cyan-300" target="_blank" rel="noopener noreferrer">{author}.</a>
          </h2>
        </div>
      </nav>
    </footer>
  )
}

export default Footer