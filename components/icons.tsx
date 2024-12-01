"use client"

import { LucideProps } from "lucide-react"
import { 
  Facebook,
  Linkedin,
} from "lucide-react"
import { FcGoogle } from "react-icons/fc" // We'll use react-icons for Google

export type IconKeys = "google" | "facebook" | "linkedin"

export const Icons = {
  google: (props: LucideProps) => (
    <FcGoogle {...props} />
  ),
  facebook: (props: LucideProps) => (
    <Facebook {...props} />
  ),
  linkedin: (props: LucideProps) => (
    <Linkedin {...props} />
  ),
} 