import React from "react";
import { services } from "@/data/services";
import { Badge } from  "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function Services() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-900/50 to-transparent">
      <h1 className="text-4xl font-bold text-center pt-24 text-white">
        Our Services
      </h1>

      <p className="text-lg text-center mt-4 text-gray-300 max-w-2xl mx-auto">
        We offer a wide range of ICT solutions, infrastructure services,
        and technical support to help organizations operate efficiently,
        securely, and competitively.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 max-w-7xl mx-auto bg-gradient-to-b from-white/10 to-transparent rounded-lg py-12">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.id} className="bg-black/20 backdrop-blur-sm border border-gray-600 rounded-lg shadow-lg">
              <CardHeader>
                <Badge className="w-fit mb-3">
                  Service
                </Badge>

                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {service.title}
                </CardTitle>
                <Image
                  src={service.imgsrc}
                  alt={service.title}
                  width={400}
                  height={240}
                  className="w-full h-[240px] object-fit rounded-md mt-4"
                />

                <CardDescription>
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Button className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Services;