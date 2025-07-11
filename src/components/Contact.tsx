import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    urgency: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours to discuss your project needs.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      urgency: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      title: "Email",
      detail: "consulting@clintel.com",
      description: "Primary contact for all inquiries"
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9 AM - 6 PM EST"
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      title: "Headquarters",
      detail: "Boston, MA",
      description: "Global reach, local expertise"
    },
    {
      icon: <Calendar className="w-5 h-5 text-accent" />,
      title: "Response Time",
      detail: "&lt; 24 hours",
      description: "Typical initial response time"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Send className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to accelerate your
            <span className="text-accent"> drug development</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how our pharmacometric expertise can optimize your development strategy. 
            From early planning to regulatory submission support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Start Your Project</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tell us about your needs and we'll provide a tailored solution proposal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Dr. John Smith"
                        required
                        className="border-border focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john.smith@company.com"
                        required
                        className="border-border focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium">
                      Company/Organization *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Biotech Inc."
                      required
                      className="border-border focus:border-accent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-foreground font-medium">
                        Project Type
                      </Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                        <SelectTrigger className="border-border focus:border-accent">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nca">Noncompartmental Analysis</SelectItem>
                          <SelectItem value="popPK">Population PK/PD</SelectItem>
                          <SelectItem value="midd">Model-Informed Drug Development</SelectItem>
                          <SelectItem value="regulatory">Regulatory Support</SelectItem>
                          <SelectItem value="preclinical">Preclinical Modeling</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="text-foreground font-medium">
                        Timeline
                      </Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                        <SelectTrigger className="border-border focus:border-accent">
                          <SelectValue placeholder="Project urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (&lt; 2 weeks)</SelectItem>
                          <SelectItem value="urgent">Urgent (2-4 weeks)</SelectItem>
                          <SelectItem value="standard">Standard (1-2 months)</SelectItem>
                          <SelectItem value="planning">Planning Phase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe your project needs, therapeutic area, study phase, and any specific requirements..."
                      rows={5}
                      className="border-border focus:border-accent resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium mb-1">{info.detail}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Consultation */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-3">Free 30-Min Consultation</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Schedule a complimentary consultation to discuss your pharmacometric needs 
                  and explore how we can support your development goals.
                </p>
                <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;