function Banner({ titles, text }) {
    return (
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          {titles.map((title, index) => (
            <p className="subtitle" key={index}>
              {title}
            </p>
          ))}
          <p className="text">{text}</p>
        </section>
      </div>
    );
  }
  
  export default Banner;