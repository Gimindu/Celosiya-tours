import eventBackground from "@/assets/images/background_img/event-background.avif";
import events from "@/assets/images/events.avif";
import eventsMob from "@/assets/images/Event2.avif";

export default function Events() {
  return (
    <div
      id="Events"
      style={{
        backgroundImage: `url(${eventBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Heading with dynamic spacing */}
      <h1 className="text-4xl md:text-4xl text-white font-bold mb-8 md:mb-12 lg:mb-16 mt-20">
        Events
      </h1>

      {/* Responsive images for mobile and larger screens */}
      <div className="w-full flex justify-center">
        <img
          src={eventsMob}
          alt="Event for Mobile"
          className="block md:hidden w-full h-auto mt-2"
        />
        <img
          src={events}
          alt="Event for Desktop"
          className="hidden md:block w-full md:w-1/2 lg:w-1/2 h-auto mt-2"
        />
      </div>
    </div>
  );
}
