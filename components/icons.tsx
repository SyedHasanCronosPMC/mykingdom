import {
  Facebook,
  Linkedin,
  type Icon as LucideIcon,
} from "lucide-react";
import { GoogleIcon } from "./ui/google-icon";

export const Icons = {
  google: GoogleIcon,
  facebook: Facebook,
  linkedin: Linkedin,
} as const;

export type Icon = typeof LucideIcon; 