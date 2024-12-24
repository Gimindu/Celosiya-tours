import backgroundimg from './assets/images/backgroundimg.png';

export default function HomePage() {
  return (
    <>
      <div id="home" className="bg-[url('./assets/images/backgroundimg.png')] bg-cover bg-center h-screen flex items-center justify-center">
        <p className=" text-white text-left lg:ms-96 font-bold 
          text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          "No matter where <br />you want to go, we will <br />take you there"
        </p>
      </div>
    </>
  );
}
