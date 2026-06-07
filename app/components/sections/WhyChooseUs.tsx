export default function WhyChooseUs() {
  const items = [
    "Practical ICT Experience",
    "Responsive Technical Support",
    "Professional Project Management",
    "Strong Botswana Market Knowledge",
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Why Choose UTM Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="border rounded-lg p-6"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}