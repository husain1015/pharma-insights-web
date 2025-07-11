import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BarChart3, Brain, Database, LineChart, Microscope, Target, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Noncompartmental Analysis (NCA)",
      description: "Comprehensive pharmacokinetic parameter estimation using industry-standard NCA methods. From bioequivalence studies to FIH dose escalation support.",
      features: [
        "Phoenix WinNonlin & R-based analysis",
        "Bioequivalence statistical analysis",
        "PK parameter reporting & interpretation",
        "Regulatory submission support"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Population PK/PD Modeling",
      description: "Advanced population modeling to characterize drug disposition and response variability across diverse patient populations and clinical scenarios.",
      features: [
        "PopPK/PD model development",
        "Covariate analysis & identification",
        "NONMEM, Monolix, and nlmixr expertise",
        "Model qualification & validation"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-accent" />,
      title: "Model-Informed Drug Development",
      description: "Leverage quantitative models to optimize clinical trial design, support regulatory submissions, and accelerate drug development timelines.",
      features: [
        "Clinical trial simulation",
        "Dose optimization strategies",
        "Regulatory filing support",
        "Project Optimus compliance"
      ]
    },
    {
      icon: <Microscope className="w-8 h-8 text-accent" />,
      title: "Preclinical Support",
      description: "Bridge preclinical findings to clinical development with sophisticated allometric scaling and PBPK modeling approaches.",
      features: [
        "Allometric scaling",
        "PBPK modeling",
        "First-in-human dose prediction",
        "IND-enabling studies"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Regulatory Strategy",
      description: "Navigate complex regulatory pathways with expert guidance on pharmacometric deliverables and agency interactions.",
      features: [
        "FDA/EMA submission preparation",
        "Regulatory meeting support",
        "Clinical pharmacology plans",
        "Labeling optimization"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Data Science & Analytics",
      description: "Advanced analytics and machine learning applications for drug development, from data integration to predictive modeling.",
      features: [
        "Real-world evidence analysis",
        "Machine learning applications",
        "Data visualization & reporting",
        "Custom software development"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Accelerating drug development with 
            <span className="text-accent"> cutting-edge science</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From preclinical modeling to regulatory submission, we deliver comprehensive 
            pharmacometric solutions that drive informed decision-making throughout your drug development journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent/20 hover:border-l-accent">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to accelerate your development program?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
              Let's discuss how our pharmacometric expertise can optimize your drug development strategy 
              and regulatory pathway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Download Capabilities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;