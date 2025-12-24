// export default ArtForms;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtFormCard from "@/components/ArtFormCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Breadcrumbs from "@/components/Breadcrumbs";

import dance from "../assets/form/dance.jpg";
import drama from "../assets/form/Drama.jpg";
import painting from "../assets/form/Painting.jpg";
import martial from "../assets/form/martial.jpg";
import sculpture from "../assets/form/Sculpture.jpg";
import music from "../assets/form/Music.jpg";
import { useNavigate } from "react-router-dom";

const ArtFormModel = ({ title }: any) => {
  const [selectedArtForm, setSelectedArtForm] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    age: "",
    location: "",
    gender: "",
    address: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (formData.number.length !== 10) {
      newErrors.number = "Phone number must be exactly 10 digits";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 150) {
      newErrors.age = "Age must be between 1 and 150";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "number") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        number: "",
        age: "",
        location: "",
        gender: "",
        address: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
      <Dialog>
        <DialogTrigger>
          <button
                className="px-6 py-3 bg-[#83261d] text-white rounded-lg hover:opacity-95"
              >
                Register
              </button>
        </DialogTrigger>
        <DialogContent className="max-w-xl rounded-2xl shadow-2xl p-8 border border-[#E8C5A6]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-[#6F1D1B]">
              {title}
            </DialogTitle>
          </DialogHeader>

          {/* FORM */}
          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition ${
                    errors.name
                      ? "border-red-500 focus:ring-red-300"
                      : "border-[#D9A282] focus:ring-[#D9A282]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition ${
                    errors.number
                      ? "border-red-500 focus:ring-red-300"
                      : "border-[#D9A282] focus:ring-[#D9A282]"
                  }`}
                />
                {errors.number && (
                  <p className="text-red-500 text-sm mt-1">{errors.number}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition ${
                    errors.age
                      ? "border-red-500 focus:ring-red-300"
                      : "border-[#D9A282] focus:ring-[#D9A282]"
                  }`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition ${
                    errors.location
                      ? "border-red-500 focus:ring-red-300"
                      : "border-[#D9A282] focus:ring-[#D9A282]"
                  }`}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>
              <div className="col-span-2">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition ${
                    errors.gender
                      ? "border-red-500 focus:ring-red-300"
                      : "border-[#D9A282] focus:ring-[#D9A282]"
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                name="address"
                rows={3}
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 transition ${
                  errors.address
                    ? "border-red-500 focus:ring-red-300"
                    : "border-[#D9A282] focus:ring-[#D9A282]"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            <button  onClick={handleSubmit} className="w-full bg-[#6F1D1B] hover:bg-[#5A1716] text-white py-2 rounded-lg font-semibold transition">
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default ArtFormModel;
