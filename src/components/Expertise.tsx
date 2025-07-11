import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, FileText, Microscope, TrendingUp, Users } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Therapeutic Areas",
      description: "Deep expertise across major therapeutic domains",
      items: [
        "Oncology & Hematology",
        "CNS & Neurology", 
        "Cardiovascular",
        "Immunology & Inflammation",
        "Infectious Diseases",
        "Rare Diseases",
        "Endocrinology",
        "Ophthalmology"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Software & Platforms",
      description: "Mastery of industry-standard and cutting-edge tools",
      items: [
        "NONMEM (v7.5+)",
        "Phoenix WinNonlin",
        "Monolix Suite",
        "R & RStudio",
        "SAS (Clinical)",
        "MATLAB/Simulink",
        "Simcyp PBPK",
        "Berkeley Madonna"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Regulatory Experience",
      description: "Comprehensive regulatory submission support",
      items: [
        "IND Applications",
        "NDA/BLA Filings",
        "Type C/B Meetings",
        "FDA PDUFA Responses",
        "EMA Scientific Advice",
        "Pediatric Study Plans",
        "REMS Support",
        "Labeling Negotiations"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Disease Progression Modeling",
      description: "Advanced disease progression and longitudinal modeling",
      items: [
        "Logistic Regression Models",
        "Time-to-Event Analysis",
        "Mixed Effects Markov Models",
        "Tumor Growth Models",
        "Survival Analysis",
        "Joint Models",
        "Disease Natural History",
        "Biomarker Progression"
      ]
    },
    {
      icon: <Microscope className="w-8 h-8 text-accent" />,
      title: "Study Phases",
      description: "End-to-end development phase expertise",
      items: [
        "Preclinical DMPK",
        "Phase I FIH",
        "Phase I/II Expansion",
        "Phase II Proof-of-Concept",
        "Phase III Pivotal",
        "Pediatric Studies",
        "Post-Marketing",
        "Life Cycle Management"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Special Populations",
      description: "Specialized modeling for diverse patient groups",
      items: [
        "Pediatric Populations",
        "Geriatric Patients",
        "Renal Impairment",
        "Hepatic Impairment",
        "Ethnic Bridging",
        "Pregnancy/Lactation",
        "Critical Care",
        "Organ Transplant"
      ]
    }
  ];

  const methodologies = [
    "Nonlinear Mixed Effects Modeling",
    "Physiologically-Based PK (PBPK)",
    "Quantitative Systems Pharmacology",
    "Exposure-Response Analysis",
    "Disease Progression Modeling",
    "Clinical Trial Simulation",
    "Dose-Finding Optimization",
    "Bioequivalence Analysis"
  ];

  return (
    <section id="expertise" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Microscope className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Deep expertise across the
            <span className="text-accent"> drug development spectrum</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our multidisciplinary team brings together pharmacometricians, biostatisticians, 
            clinical pharmacologists, and regulatory experts with proven track records across 
            therapeutic areas and development phases.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    {area.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {area.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Methodologies */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Core Methodologies & Approaches
          </h3>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg">
            We employ state-of-the-art pharmacometric methodologies to extract maximum 
            value from your data and support evidence-based decision making.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {methodologies.map((methodology, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-sm font-medium text-white">
                  {methodology}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;