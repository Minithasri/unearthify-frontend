/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Sparkles } from "lucide-react";

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    type: "",
    description: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits";
    } else if (!/^[6-9]/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must start with 6-9";
    }

    // Type validation
    if (!formData.type) {
      newErrors.type = "Please select a contribution type";
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    } else if (formData.description.trim().length > 1000) {
      newErrors.description = "Description cannot exceed 1000 characters";
    }

    return newErrors;
  };

  const handleChange = (field, value) => {
    // Allow only numbers for mobile field
    if (field === "mobile") {
      value = value.replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for this field when user starts typing
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
    // Validate single field on blur
    validateField(field);
  };

  const validateField = (field) => {
    const newErrors = { ...errors };

    switch (field) {
      case "name":
        if (!formData.name.trim()) {
          newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
          newErrors.name = "Name can only contain letters and spaces";
        } else {
          delete newErrors.name;
        }
        break;
      case "mobile":
        if (!formData.mobile.trim()) {
          newErrors.mobile = "Mobile number is required";
        } else if (formData.mobile.length !== 10) {
          newErrors.mobile = "Mobile number must be 10 digits";
        } else if (!/^[6-9]/.test(formData.mobile)) {
          newErrors.mobile = "Mobile number must start with 6-9";
        } else {
          delete newErrors.mobile;
        }
        break;
      case "type":
        if (!formData.type) {
          newErrors.type = "Please select a contribution type";
        } else {
          delete newErrors.type;
        }
        break;
      case "description":
        if (!formData.description.trim()) {
          newErrors.description = "Description is required";
        } else if (formData.description.trim().length < 10) {
          newErrors.description = "Description must be at least 10 characters";
        } else if (formData.description.trim().length > 1000) {
          newErrors.description = "Description cannot exceed 1000 characters";
        } else {
          delete newErrors.description;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      // Reset form
      setFormData({ name: "", mobile: "", type: "", description: "" });
      setErrors({});
      setTouched({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-gold/20 to-primary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-[#83261d]" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
              Contribute to Unearthify
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Help us build a comprehensive database of Indian artists, art forms,
            and cultural events. Your contribution matters!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-cultural p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Share Information
              </h2>
              <p className="text-muted-foreground">
                Fill in the details below to contribute information about an
                artist, art form, or cultural event.
              </p>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-foreground font-medium">
                  Your Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={`w-full px-3 py-2 border rounded-md h-11 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${
                    errors.name && touched.name
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-foreground font-medium">
                  Mobile Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  onBlur={() => handleBlur("mobile")}
                  className={`w-full px-3 py-2 border rounded-md h-11 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${
                    errors.mobile && touched.mobile
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                {errors.mobile && touched.mobile && (
                  <p className="text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              {/* Type */}
              <div className="space-y-2">
                <label htmlFor="type" className="text-foreground font-medium">
                  Contribution Type <span className="text-red-600">*</span>
                </label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => handleChange("type", e.target.value)}
                  onBlur={() => handleBlur("type")}
                  className={`w-full px-3 py-2 border rounded-md h-11 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${
                    errors.type && touched.type
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">
                    Select what you're contributing about
                  </option>
                  <option value="artist">Artist Information</option>
                  <option value="artform">Art Form Details</option>
                  <option value="event">Cultural Event</option>
                  <option value="other">Other</option>
                </select>
                {errors.type && touched.type && (
                  <p className="text-sm text-red-600">{errors.type}</p>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="text-foreground font-medium"
                >
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  placeholder="Provide detailed information about the artist, art form, or event..."
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  onBlur={() => handleBlur("description")}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-600 resize-none min-h-[150px] ${
                    errors.description && touched.description
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                <div className="flex justify-between items-end">
                  <p className="text-sm text-gray-600">
                    Please include as much detail as possible - names,
                    locations, dates, specialties, etc.
                  </p>
                  <p className="text-xs text-gray-500">
                    {formData.description.length}/1000
                  </p>
                </div>
                {errors.description && touched.description && (
                  <p className="text-sm text-red-600">{errors.description}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                size="lg"
                className="w-full bg-[#83261d] hover:bg-[#83261d]/90"
              >
                <CheckCircle2 className="mr-2" size={20} />
                Submit Contribution
              </Button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎭</div>
              <h3 className="font-semibold text-foreground mb-1">Artists</h3>
              <p className="text-sm text-muted-foreground">
                Share details about talented artists
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-foreground mb-1">Art Forms</h3>
              <p className="text-sm text-muted-foreground">
                Help document traditional art forms
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">📅</div>
              <h3 className="font-semibold text-foreground mb-1">Events</h3>
              <p className="text-sm text-muted-foreground">
                Inform us about cultural events
              </p>
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
              Your contribution has been received successfully. Our team will
              review the information and add it to our database soon.
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
