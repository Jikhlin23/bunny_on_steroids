import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  MapPin,
  ExternalLink,
  Instagram,
  Linkedin,
  Youtube,
  Music,
  Phone,
  FileMusicIcon,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Form Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:jikhlin23@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    // Show sending state briefly for UI feedback
    setIsSubmitting(true);
    
    // Brief timeout to show the sending state
    setTimeout(() => {
      // Open email client with the mailto link
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      
      // Show toast notification
      toast({
        title: "Email Client Opened",
        description: "Your default email application has been opened with your message.",
      });
      
      // Optional: Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in">
              Have a question, project idea, or just want to connect? Reach out
              to me!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-800">
                Contact Information
              </h2>
              <p className="text-lg text-navy-600 mb-8">
                Feel free to reach out to me through the contact form or
                directly via email or social media. I'm always open to
                discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>

              <div className="space-y-6">
                <Card className="hover:shadow-md transition-all border-l-4 border-l-navy-700 hover:scale-105 hover:border-3">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800">
                        Email
                      </h3>
                      <a
                        href="mailto:nikhilj22@iitk.ac.in"
                        className="text-navy-600 hover:text-navy-800 transition-colors"
                      >
                        nikhilj22@iitk.ac.in
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all border-l-4 border-l-teal-700 hover:scale-105 hover:border-3">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800">
                        Location
                      </h3>
                      <p className="text-navy-600">
                        IIT Kanpur, Electrical Engineering Department
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all border-l-4 border-l-amber-600 hover:scale-105 hover:border-3">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800">
                        Phone
                      </h3>
                      <a
                        href="tel:+918619744807"
                        className="text-navy-600 hover:text-navy-800 transition-colors"
                      >
                        +91 8619744807
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-all border-l-4 border-l-purple-600 hover:scale-105 hover:border-3">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                      <ExternalLink className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800">
                        Social Media
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <a
                          href="https://www.linkedin.com/in/nikhil-jain-907100253/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy-700 hover:text-navy-900 flex items-center"
                        >
                          <Linkedin className="h-5 w-5 mr-1" />
                        </a>
                        <a
                          href="https://www.instagram.com/nikhils23j/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy-700 hover:text-navy-900 flex items-center"
                        >
                          <Instagram className="h-5 w-5 mr-1" />
                        </a>
                        <a
                          href="https://www.youtube.com/@nikhiljain307"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy-700 hover:text-navy-900 flex items-center"
                        >
                          <Youtube className="h-5 w-5 mr-1" />
                        </a>
                        <a
                          href="https://x.com/i/flow/login?redirect_after_login=%2FNikhils23j"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy-700 hover:text-navy-900 flex items-center"
                        >
                          <svg
                            className="h-5 w-5 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-all border-l-4 border-l-amber-600 hover:scale-105 hover:border-3">
                  <CardContent className="p-6 flex items-start">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <FileMusicIcon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-800">
                        Music
                      </h3>
                      <div>
                        <a
                          href="https://open.spotify.com/user/noqynat9gydgisn6afsv4ka0r?si=X129PI2RSWuukYCVN-iAMw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy-700 hover:text-navy-900 flex items-center"
                        >
                          <span>(Spotify)</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-md hover:shadow-lg transition-all hover:scale-105 hover:border-3">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-navy-800">
                    Send Me a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can I help you?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-navy-700 hover:bg-navy-800 text-white py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
