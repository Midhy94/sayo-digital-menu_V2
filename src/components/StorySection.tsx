export const StorySection: React.FC = () => {
  return (
    <section style={{ paddingBottom: "2.25rem" }}>
      <div className="container">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            className="heading-lg"
            style={{
              margin: "0 0 1rem",
              fontSize: "2rem",
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              margin: "0 0 0.9rem",
              color: "var(--color-text-secondary)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            SAYO is a name inspired by the initials of its visionary founders, and in
            Japanese, it beautifully means &quot;Born at Night.&quot; Just as the night
            gives birth to new possibilities, SAYO represents a bold, fresh beginning in
            the culinary landscape of Jubail, KSA.
          </p>
          <p
            style={{
              margin: 0,
              color: "var(--color-text-secondary)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            The founders set out with a clear ambition: to introduce a dining experience
            unlike anything the newly developed Al Fanater district has experienced. Their
            passion led them to bring forward the vibrant, diverse, and ever‑evolving
            world of Pan Asian cuisine — spanning India, China, Thailand, Japan, Korea,
            Malaysia, Singapore, and more.
          </p>
          <a
            href="https://www.sayosaudi.com/story.html"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1.1rem",
              color: "var(--color-accent-secondary)",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Read Our Full Story →
          </a>
        </div>
      </div>
    </section>
  );
};

