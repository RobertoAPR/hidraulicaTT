import hidraulicaMan from "../assets/hidraulicaMan.mp4";
import hidraulicaMan1 from "../assets/hidraulicaMan1.mp4";

const PPrincipal = () => {
  
      return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                24/7 Solutions 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}LLC</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates facilis placeat, deserunt maiores 
                quia obcaecati dolore vel consequatur ea repellat magni nemo possimus? A veritatis saepe quod exercitationem quidem!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                Store
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                    Boton 2
                </a>
            </div>
                <div className="flex mt-10 justify-center">
                    <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                        <source src={hidraulicaMan} type="video/mp4"/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </video>
                    <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                        <source src={hidraulicaMan1} type="video/mp4"/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </video>
                </div>
        </div>
      );
};

export default PPrincipal
