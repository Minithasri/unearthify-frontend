import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2, Sparkles } from "lucide-react";

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    type: "",
    description: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Reset form
    setFormData({
      name: "",
      mobile: "",
      type: "",
      description: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-gold/20 to-primary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-primary" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
              Contribute to Unearthify
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Help us build a comprehensive database of Indian artists, art forms, and cultural events. Your contribution
            matters!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-cultural p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Share Information</h2>
              <p className="text-muted-foreground">
                Fill in the details below to contribute information about an artist, art form, or cultural event.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-foreground font-medium">
                  Mobile Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              {/* Type */}
              <div className="space-y-2">
                <Label htmlFor="type" className="text-foreground font-medium">
                  Contribution Type <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.type} onValueChange={(value) => handleChange("type", value)} required>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select what you're contributing about" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="artist">Artist Information</SelectItem>
                    <SelectItem value="artform">Art Form Details</SelectItem>
                    <SelectItem value="event">Cultural Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground font-medium">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about the artist, art form, or event..."
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  required
                  className="min-h-[150px] resize-none"
                />
                <p className="text-sm text-muted-foreground">
                  Please include as much detail as possible - names, locations, dates, specialties, etc.
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" variant="hero">
                <CheckCircle2 className="mr-2" size={20} />
                Submit Contribution
              </Button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎭</div>
              <h3 className="font-semibold text-foreground mb-1">Artists</h3>
              <p className="text-sm text-muted-foreground">Share details about talented artists</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-foreground mb-1">Art Forms</h3>
              <p className="text-sm text-muted-foreground">Help document traditional art forms</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-semibold text-foreground mb-1">Events</h3>
              <p className="text-sm text-muted-foreground">Inform us about cultural events</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <span className="text-2xl">Thank You!</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <p className="text-muted-foreground">
              Your contribution has been received successfully. Our team will review the information and add it to our
              database soon.
            </p>
            <Button onClick={() => setShowSuccess(false)} className="w-full">
              Continue Exploring
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contribute;
