import eventBackground from '@/assets/images/event-background.png';
import event from '@/assets/images/events.png';

export default function Events() {
  return (
    <div
      id="Events"
      style={{
        backgroundImage: `url(${eventBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="relative h-screen flex flex-col items-center"
    >
      {/* Responsive margin-top for heading */}
      <h1 className="text-3xl md:text-4xl text-white font-bold absolute top-5 mt-24 md:mt-32 lg:mt-40">
        Events
      </h1>
      {/* Responsive image size and margin-top */}
      <img
        src={event}
        alt="Event"
        className="w-3/4 md:w-1/2 mt-28 md:mt-32 lg:mt-40"
      />
    </div>
  );
}
