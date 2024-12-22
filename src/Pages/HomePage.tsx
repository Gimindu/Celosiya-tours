import backgroundimg from './assets/images/backgroundimg.png';

export default function HomePage() {
  return (
    <>
      <div className="bg-[url('./assets/images/backgroundimg.png')] bg-cover bg-center h-screen flex items-center justify-center">
        <p className="text-6xl text-white text-left ms-96 font-bold 
          sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          "No matter where <br />you’re going to, we’ll <br />take you there"
        </p>
      </div>
    </>
  );
}
