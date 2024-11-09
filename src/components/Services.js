import Title from "./Title";
import { services } from "../data";

export default function Services() {
  return (
    <>
      <section className="section services" id="services">
        <Title title="Our" subtitle="Services" />
        <div className="section-center services-center">

            {/* we are rendering the services dynamically using an array of data*/}
          {services.map((service) => {
            return (
              <article className="service">
                <span className="service-icon">
                  <i className={service.serviceIcon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.serviceTitle}</h4>
                  <p className="service-text">
                    {service.serviceText}
                  </p>
                </div>
              </article>
            );
          })}

        </div>
      </section>
    </>
  );
}
