export default function Projects() {
    const projects = [
      { title: "Project 1", image: "/images/proj1.jpg" },
      { title: "Project 2", image: "/images/proj2.jpg" },
    ];
    return (
      <section id="projects" className="py-20 text-center">
        <h2 className="text-3xl font-semibold">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-white p-4 rounded shadow">
              <img src={proj.image} alt={proj.title} className="rounded-lg" />
              <h3 className="mt-2 font-bold">{proj.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  