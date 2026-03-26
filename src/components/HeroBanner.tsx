const HERO_VIDEO_URL = "https://www.pexels.com/download/video/8901980/";

export const HeroBanner: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__media">
        <video
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.65))",
          }}
        />
      </div>
    </section>
  );
};

