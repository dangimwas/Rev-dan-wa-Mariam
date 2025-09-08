import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const experiences = [
    {
      year: "2020 - Present",
      title: "Senior Pastor",
      organization: "Bethsaida Victory & Hope Church",
      description: "Leading congregational worship, delivering sermons, and providing spiritual guidance to our growing community of faith."
    },
    {
      year: "2018 - 2020",
      title: "Associate Pastor",
      organization: "Community Faith Center",
      description: "Assisted in pastoral duties, youth ministry, and community outreach programs while developing leadership skills."
    },
    {
      year: "2015 - 2018",
      title: "Youth Minister",
      organization: "Grace Baptist Church",
      description: "Mentored young people in their faith journey, organized youth events, and facilitated Bible study groups."
    },
    {
      year: "2012 - 2015",
      title: "Seminary Graduate",
      organization: "Theological Seminary Institute",
      description: "Completed Master of Divinity with focus on pastoral care, biblical studies, and Christian theology."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in ministry and spiritual leadership, serving God's people 
            and building communities of faith through various roles and responsibilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-12 transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 bg-card rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
                <div className="md:w-1/4">
                  <span className="text-primary font-bold text-lg">{exp.year}</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-primary mb-3">{exp.organization}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-card)] max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Continuing Education</h3>
            <p className="text-muted-foreground mb-4">
              I remain committed to ongoing spiritual and educational growth through:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Regular theological conferences and workshops</li>
              <li>• Advanced biblical studies and research</li>
              <li>• Community leadership development programs</li>
              <li>• Interfaith dialogue and collaboration initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;