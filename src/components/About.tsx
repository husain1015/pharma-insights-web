import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle, Users, Zap } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "15+ Years",
      subtitle: "Industry Experience"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      title: "500+",
      subtitle: "Successful Projects"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "50+",
      subtitle: "Biopharma Partners"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "100%",
      subtitle: "FDA Compliance"
    }
  ];

  const principles = [
    {
      title: "Science-First Approach",
      description: "Every analysis is grounded in rigorous scientific methodology and regulatory best practices."
    },
    {
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, fully invested in your program's success."
    },
    {
      title: "Regulatory Excellence",
      description: "Deep understanding of FDA, EMA, and global regulatory requirements and expectations."
    },
    {
      title: "Innovation & Efficiency",
      description: "Leveraging cutting-edge methodologies and technology to deliver faster, more accurate results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              About Clintel
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by industry leaders for 
              <span className="text-accent"> mission-critical analyses</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Clintel is a premier pharmacometric consulting firm founded by industry veterans 
              who understand the complexities of modern drug development. Our team combines decades of 
              experience in clinical pharmacology, biostatistics, and regulatory affairs.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in translating complex pharmacometric analyses into actionable insights 
              that accelerate decision-making and optimize development strategies. From early-stage 
              biotech to global pharma, we deliver the scientific rigor and regulatory expertise 
              needed for successful drug development.
            </p>

            {/* Core Principles */}
            <div className="space-y-4 mb-8">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{principle.title}</h4>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="scientific" size="lg">
              Learn About Our Team
            </Button>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-8">
            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.subtitle}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certification Banner */}
            <Card className="bg-gradient-primary text-white p-6">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">FDA Project Optimus Ready</h3>
                <p className="text-white/90">
                  Fully compliant with the latest FDA guidance on dose optimization 
                  and model-informed drug development approaches.
                </p>
              </CardContent>
            </Card>

            {/* Quality Commitment */}
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Quality Commitment</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our analyses follow GCP guidelines and are conducted using validated 
                  software and methodologies. All deliverables undergo rigorous QC review.
                </p>
                <div className="flex gap-2 text-xs">
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">ISO 9001</span>
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">21 CFR Part 11</span>
                  <span className="bg-accent/10 text-accent px-2 py-1 rounded">GCP Compliant</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;