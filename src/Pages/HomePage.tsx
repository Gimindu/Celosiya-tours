import bottomImage from '../assets/images/serv.png';


export default function HomePage() {
  return (
    <>
      <div id="home" className="bg-[url('./assets/images/sg.png')] bg-cover  h-screen flex items-center justify-center">
        <p className=" text-white text-left lg:ms-96 font-bold 
          text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          "No matter where <br />you want to go, we will <br />take you there"
        </p>
         {/* Image at the bottom center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <img src={bottomImage} alt="Bottom Center" className="w-132 lg:w-148" />
        </div>
      </div>
    </>
  );
}
