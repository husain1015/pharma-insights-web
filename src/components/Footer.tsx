import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "NCA Analysis", href: "#services" },
    { name: "Population PK/PD", href: "#services" },
    { name: "MIDD Consulting", href: "#services" },
    { name: "Regulatory Support", href: "#services" }
  ];

  const contact = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "consulting@pharmametricspro.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Boston, MA"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              PharmaMetrics<span className="text-accent">Pro</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Premier pharmacometric consulting for biopharma, delivering world-class 
              NCA, population modeling, and regulatory support from preclinical through NDA.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              {contact.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="text-accent">
                    {item.icon}
                  </div>
                  <span className="text-primary-foreground/80 text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button variant="accent" size="sm">
                Get Consultation
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} PharmaMetricsPro. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300">
              Quality Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;