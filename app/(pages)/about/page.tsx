"use client";

import {
  Award,
  Briefcase,
  Building2,
  TrendingUp,
  Users,
  CheckCircle2,
  ShieldCheck,
  Lightbulb,
  Handshake,
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      title: "Happy Customers",
      value: "100+",
      icon: Users,
    },
    {
      title: "Projects Completed",
      value: "250+",
      icon: CheckCircle2,
    },
    {
      title: "Revenue Growth",
      value: "35%",
      icon: TrendingUp,
    },
    {
      title: "Years Combined Experience",
      value: "20+",
      icon: Award,
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We conduct business honestly, ethically and transparently.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation",
      description:
        "We continuously embrace new technologies and smarter solutions.",
      icon: Lightbulb,
    },
    {
      title: "Customer Focus",
      description:
        "Our clients remain at the center of every decision we make.",
      icon: Users,
    },
    {
      title: "Partnership",
      description:
        "We build long-term relationships based on trust and results.",
      icon: Handshake,
    },
  ];

  return (
    <section className="bg-blue-900/30 py-20">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-blue-100/30 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            About UTM Projects
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Delivering Reliable ICT Solutions for Modern Organizations
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            UTM Projects (Pty) Ltd is a Botswana-based Information and
            Communications Technology company focused on delivering
            dependable technology solutions, infrastructure services,
            telecommunications support, networking services, software
            solutions and managed ICT support to organizations across
            both the public and private sectors.
          </p>
        </div>

        {/* Company History */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <div>
            <h2 className="mb-6 text-3xl font-bold">
              Our Story
            </h2>

            <p className="mb-5 text-muted-foreground leading-8">
              UTM Projects was established with a vision of helping
              organizations leverage technology to improve efficiency,
              security and service delivery. Recognizing the growing
              demand for reliable ICT infrastructure and professional
              support services, the company was founded to provide
              practical, cost-effective and scalable technology
              solutions.
            </p>

            <p className="mb-5 text-muted-foreground leading-8">
              Since its inception, UTM Projects has successfully
              supported organizations with network deployments,
              telecommunications infrastructure, server management,
              software implementation, connectivity solutions and
              ongoing ICT support services.
            </p>

            <p className="text-muted-foreground leading-8">
              Today, the company continues to expand its capabilities
              while maintaining its commitment to quality service,
              technical excellence and customer satisfaction.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8 bg-white/5 backdrop-blur-sm">
            <h2 className="mb-6 text-3xl font-bold">
              Success Stories
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Building2 className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">
                    Infrastructure Modernization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Successfully upgraded networking and
                    infrastructure environments for enterprise
                    clients resulting in improved reliability
                    and performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">
                    ICT Support Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Delivered responsive managed ICT support
                    services helping clients reduce downtime
                    and improve operational efficiency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">
                    Business Growth Through Technology
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enabled clients to adopt modern
                    technologies and scalable infrastructure
                    that support long-term business growth.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Vision and Mission */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border bg-card p-8 bg-white/5 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Our Vision
            </h2>

            <p className="leading-8 text-muted-foreground">
              To become Botswana's most trusted ICT solutions
              partner by delivering innovative, reliable and
              sustainable technology services that empower
              organizations to achieve their strategic goals.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8 bg-white/5 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Our Mission
            </h2>

            <p className="leading-8 text-muted-foreground">
              To provide high-quality ICT infrastructure,
              networking, telecommunications, software and
              support services through professional expertise,
              responsive customer service and effective project
              delivery.
            </p>
          </div>

        </div>

        {/* Statistics */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Our Impact
            </h2>

            <p className="mt-4 text-muted-foreground">
              Measured by the success of our clients and the
              value we continue to deliver.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border bg-white/5 backdrop-blur-sm p-8 text-center"
                >
                  <Icon className="mx-auto mb-4 h-10 w-10 text-blue-600" />

                  <h3 className="text-4xl font-bold">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    {stat.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Our Core Values
            </h2>

            <p className="mt-4 text-muted-foreground">
              The principles that guide every engagement,
              project and customer relationship.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border bg-card p-8 bg-white/5 backdrop-blur-sm"
                >
                  <Icon className="mb-4 h-10 w-10 text-blue-600" />

                  <h3 className="mb-3 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

