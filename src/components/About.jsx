import React from 'react'

const About = () => {
  return (
    <div id="sobre mi" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Acerca de mi</p>
            </div>
            <p className='text-xl mt-20'>
              Desarrollador Front-End con énfasis en React.js. Amplio manejo en HTML5, CSS3 y JavaScript Ecmascript 6, además de distintos frameworks que permiten una mejor visualización y estilos de diseño. Implementación de Redux y Axios. Conocimiento técnico de Design Thinking y metodologías ágiles. Manejo competente en diseño y maquetación de proyectos.               
            </p>
            <br />
            <p className='text-xl'>
              Manejo competente de HTML5, CSS3 nativo y frameworks de estilos (Bootstrap, Tailwind, Prime). <br />
              Dominio de lenguaje de programación JavaScript ecmascript 6, orientado en React.js. <br />
              Implementación de servicios en Firebase y base de datos. <br />
              Conocimiento en controladores de versiones como Git y GitHub. <br />
              Conocimiento básico en programas de diseño (Photoshop Canva , Adobe XD e Illustrator). <br />
              Montaje y mantenimiento de redes. <br />
              Nivel de inglés A2.
            </p>
        </div>
    </div>
  );
} 

export default About;