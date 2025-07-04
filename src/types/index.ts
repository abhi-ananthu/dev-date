// Global type definitions
import React from "react";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Common utility types
export type Status = "idle" | "loading" | "success" | "error";

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
