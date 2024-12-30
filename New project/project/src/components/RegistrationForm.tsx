import React, { useState } from 'react';
import { Upload, Mail, Lock, User } from 'lucide-react';
import { RGBBorder } from './RGBBorder';
import { FormField } from './FormField';
import { PlatformSelector } from './PlatformSelector';
import { GenreSelector } from './GenreSelector';
import { saveUserData } from '../utils/storage';
import { SuccessView } from './SuccessView';
import { FormData, FormErrors } from '../types/form';

const initialFormData: FormData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  platform: '',
  genres: [],
  profilePicture: null,
  acceptTerms: false
};

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.platform) {
      newErrors.platform = 'Please select a platform';
    }
    if (formData.genres.length === 0) {
      newErrors.genres = 'Please select at least one genre';
    }
    if (!formData.acceptTerms) {
      newErrors.terms = 'Please accept the terms and conditions';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      saveUserData(formData);
      setIsSuccess(true);
    }
    
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return <SuccessView username={formData.username} />;
  }

  return (
    <RGBBorder className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
          Join the Gaming Universe
        </h1>

        <FormField label="Username" error={errors.username}>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
        </FormField>

        <FormField label="Email" error={errors.email}>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </FormField>

        <FormField label="Password" error={errors.password}>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </FormField>

        <FormField label="Confirm Password" error={errors.confirmPassword}>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="password"
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
        </FormField>

        <PlatformSelector
          selectedPlatform={formData.platform}
          onSelect={(platform) => setFormData({ ...formData, platform })}
          error={errors.platform}
        />

        <GenreSelector
          selectedGenres={formData.genres}
          onChange={(genres) => setFormData({ ...formData, genres })}
          error={errors.genres}
        />

        <FormField label="Profile Picture">
          <div className="relative">
            <input
              type="file"
              className="hidden"
              id="profile-picture"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFormData({ ...formData, profilePicture: file });
              }}
            />
            <label
              htmlFor="profile-picture"
              className="flex items-center justify-center w-full p-4 bg-gray-800 rounded-lg border border-gray-700 cursor-pointer hover:border-purple-500 transition-all"
            >
              <Upload className="mr-2" size={20} />
              {formData.profilePicture ? formData.profilePicture.name : 'Choose a file'}
            </label>
          </div>
        </FormField>

        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-700 text-purple-500 focus:ring-purple-500"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
            />
            <span className="text-gray-300">I accept the terms and conditions</span>
          </label>
          {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
        </div>

        <RGBBorder>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              </div>
            ) : (
              'Register'
            )}
          </button>
        </RGBBorder>
      </form>
    </RGBBorder>
  );
};