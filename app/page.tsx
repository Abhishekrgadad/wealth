'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  ChevronDown,
  Youtube,
  Shield,
  TrendingUp,
  Users,
  Calculator,
  BookOpen,
  Target,
  Award,
  ArrowRight,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  CreditCard,
  PieChart,
  Briefcase,
  TrendingDown
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Auto-switch cards in journey section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % journeyCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Mutual Fund Advisory & SIP Planning",
      subtitle: "(Free)",
      icon: TrendingUp,
      description: "Expert guidance on building wealth through systematic investments"
    },
    {
      title: "PMS & AIF Access",
      subtitle: "",
      icon: Target,
      description: "Premium portfolio management services for high-net-worth individuals"
    },
    {
      title: "Insurance Consulting",
      subtitle: "",
      icon: Shield,
      description: "Comprehensive protection planning for you and your family"
    },
    {
      title: "Tax Planning & Rebalancing",
      subtitle: "",
      icon: Calculator,
      description: "Optimize your tax efficiency while maximizing returns"
    },
    {
      title: "Financial Education",
      subtitle: "(YouTube)",
      icon: Youtube,
      description: "Free educational content to improve your financial literacy"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      title: "Founder & Senior Advisor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Priya Sharma",
      title: "Senior Relationship Manager",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Amit Patel",
      title: "Investment Advisor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const testimonials = [
    {
      quote: "No pushy sales. My RM explains like a friend.",
      author: "Ravi K., Chennai",
      rating: 5
    },
    {
      quote: "Now I feel confident with my financial roadmap.",
      author: "Nandita M., Bangalore",
      rating: 5
    },
    {
      quote: "Finally found advisors who actually care about my goals.",
      author: "Arjun T., Mumbai",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "SIP vs FD: Where Should You Park Your ₹10,000?",
      excerpt: "A comprehensive comparison to help you make the right choice",
      readTime: "5 min read"
    },
    {
      title: "Why Most People Buy the Wrong Insurance",
      excerpt: "Common mistakes and how to avoid them",
      readTime: "7 min read"
    },
    {
      title: "How We Select PMS Funds for Clients",
      excerpt: "Our proven methodology for fund selection",
      readTime: "6 min read"
    },
    {
      title: "Demystifying Mutual Fund Jargon",
      excerpt: "Simple explanations for complex terms",
      readTime: "4 min read"
    }
  ];

  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" }
  ];

  const journeyCards = [
    {
      icon: CreditCard,
      title: "Investment Planning",
      description: "Customized portfolio strategies tailored to your risk profile and financial goals.",
      features: ["Risk Assessment", "Goal Setting", "Asset Allocation"]
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Active monitoring and rebalancing to ensure optimal performance and risk management.",
      features: ["Performance Tracking", "Rebalancing", "Tax Optimization"]
    },
    {
      icon: Briefcase,
      title: "Wealth Protection",
      description: "Comprehensive insurance and estate planning to safeguard your family's future.",
      features: ["Life Insurance", "Health Coverage", "Estate Planning"]
    },
    {
      icon: TrendingDown,
      title: "Tax Efficiency",
      description: "Strategic tax planning to minimize liabilities and maximize your wealth accumulation.",
      features: ["Tax Saving Schemes", "ELSS Investments", "Tax Harvesting"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-['Inter'] relative">
      {/* Vertical Flow Line */}
      <div className="fixed left-8 top-0 bottom-0 w-px bg-white/20 z-10 hidden lg:block">
        <div 
          className="w-full bg-white transition-all duration-1000 ease-out"
          style={{
            height: typeof window !== 'undefined' && document.documentElement
              ? `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
              : '0%'
          }}
        >
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"
            style={{
              top: typeof window !== 'undefined' && document.documentElement
                ? `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
                : '0%'
            }}
          ></div>
        </div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-6 text-sm">
            {['home', 'services', 'about', 'team', 'contact', 'blog'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-white ${
                  activeSection === item ? 'text-white' : 'text-white/60'
                }`}
              >
                {item === 'about' ? 'About Us' : item === 'team' ? 'Our Team' : item === 'contact' ? 'Contact Us' : item}
              </button>
            ))}
          </div>
          <Button 
            size="sm"
            className="bg-white text-black hover:bg-white/90 rounded-full px-6 font-medium"
          >
            Schedule a Call
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 lg:pl-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div 
              className="space-y-6"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
                Helping Ambitious{' '}
                <span className="font-normal">Indians</span>{' '}
                <span className="block">Grow Their Wealth,</span>
                <span className="block font-normal">The Right Way.</span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                We are not brokers. We are your long-term financial partners. Backed by real performance, 
                real client success stories, and an honest, no-jargon approach to money.
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-medium rounded-full group"
              >
                Schedule a Free Wealth Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center space-x-3 text-white/50 text-sm">
              <span>Scroll to explore</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Financial Planning"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 lg:pl-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
              We Don't Sell.{' '}
              <span className="block font-normal">We Solve.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Check, title: "Zero Pressure, 100% Clarity" },
              { icon: Users, title: "Real RMs, Not Robots" },
              { icon: Target, title: "360° Wealth View" },
              { icon: Award, title: "Proven Track Record" }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`bg-white/5 border-white/10 hover:border-white/20 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 ${
                  isVisible['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium">
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 lg:pl-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-20">
            Our <span className="font-normal">Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 hover:border-white/20 transition-all duration-500 group cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors shrink-0">
                      <service.icon className="h-8 w-8 text-white animate-pulse group-hover:animate-bounce" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-medium">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                            {service.subtitle}
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-4 sm:px-6 lg:px-8 lg:pl-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8">
            People First.{' '}
            <span className="block font-normal">Performance Follows.</span>
          </h2>
          
          <p className="text-lg text-white/60 mb-20 max-w-3xl italic leading-relaxed">
            "We believe that exceptional financial outcomes come from exceptional relationships. 
            Our team is committed to understanding your unique journey and walking alongside you every step of the way."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 hover:border-white/20 transition-all duration-500 group overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6 mx-auto w-32 h-32 group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white/20 group-hover:border-white/40 transition-colors grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white/60">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey Section */}
      <section id="journey" className="py-32 px-4 sm:px-6 lg:px-8 lg:pl-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light">
              Your <span className="font-normal">Journey</span> with Us
            </h2>
            
            <div className="space-y-8">
              {[
                { step: "1", title: "Book a Call", description: "Schedule your free consultation" },
                { step: "2", title: "We Design a Plan", description: "Customized strategy for your goals" },
                { step: "3", title: "Start Small", description: "Begin with manageable investments" },
                { step: "4", title: "Track & Grow", description: "Monitor progress and optimize" },
                { step: "5", title: "Achieve Dreams", description: "Reach your financial milestones" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6 group relative">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/50 transition-all duration-500">
                      <span className="text-white font-medium">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-white/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Animated Cards */}
          <div className="relative h-96">
            {journeyCards.map((card, index) => (
              <Card
                key={index}
                className={`absolute inset-0 bg-white/5 border-white/10 transition-all duration-700 transform ${
                  index === activeCard 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : index < activeCard 
                      ? 'opacity-0 -translate-x-full scale-95' 
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-white/10 rounded-xl">
                      <card.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium">{card.title}</h3>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <div className="space-y-2">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Card indicators */}
            <div className="absolute bottom-4 left-8 flex space-x-2">
              {journeyCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeCard ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 lg:pl-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-20">
            What Our <span className="font-normal">Clients Say</span>
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 border-white/10 min-w-[400px] flex-shrink-0"
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-white fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-white/60 font-medium">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 lg:pl-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8">
            Let's Start Your{' '}
            <span className="block font-normal">Wealth Journey</span>
          </h2>
          
          <p className="text-lg text-white/60 mb-20 max-w-2xl">
            Ready to take control of your financial future? Get in touch with us today.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-medium mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-white/70">123 Financial District, Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/70">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/70">hello@wealthpartners.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Full Name"
                      className="bg-white/5 border-white/20 focus:border-white/40 focus:ring-white/20 transition-all duration-300"
                    />
                    <Input 
                      placeholder="Phone Number"
                      className="bg-white/5 border-white/20 focus:border-white/40 focus:ring-white/20 transition-all duration-300"
                    />
                  </div>
                  
                  <Input 
                    placeholder="Email Address"
                    type="email"
                    className="bg-white/5 border-white/20 focus:border-white/40 focus:ring-white/20 transition-all duration-300"
                  />
                  
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20 focus:border-white/40 focus:ring-white/20">
                      <SelectValue placeholder="Investment Goal" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="retirement">Retirement Planning</SelectItem>
                      <SelectItem value="wealth">Wealth Creation</SelectItem>
                      <SelectItem value="tax">Tax Saving</SelectItem>
                      <SelectItem value="insurance">Insurance Planning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Textarea 
                    placeholder="Tell us about your financial goals..."
                    className="bg-white/5 border-white/20 focus:border-white/40 focus:ring-white/20 transition-all duration-300"
                    rows={4}
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-white text-black hover:bg-white/90 py-3 font-medium rounded-lg transition-all duration-300"
                  >
                    Schedule My Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 px-4 sm:px-6 lg:px-8 lg:pl-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-20">
            Insights & <span className="font-normal">Education</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 hover:border-white/20 transition-all duration-500 group cursor-pointer hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-3">
                        {post.title}
                      </h3>
                      <p className="text-white/70 mb-4">{post.excerpt}</p>
                      <p className="text-sm text-white/50">{post.readTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 sm:px-6 lg:px-8 lg:pl-20 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-light mb-6">WealthPartners</div>
            <p className="text-white/60 leading-relaxed">
              Your trusted partner in building lasting wealth through honest, transparent financial guidance.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Services', 'About Us', 'Our Team', 'Contact Us', 'Blog'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Follow Us</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center space-x-3 text-white/60 hover:text-white transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © 2025 WealthPartners. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}