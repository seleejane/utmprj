import { services } from "@/data/services";
import { Link } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-muted/40"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
    
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="p-8 rounded-xl border bg-card"
              >
                <Icon
                  size={42}
                  className="text-blue-600 mb-4"
                />

                <h3 className="font-bold text-xl mb-2">
                  {service.title}
                </h3>

                <p>
                  Professional enterprise-grade ICT support
                  and implementation services.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}