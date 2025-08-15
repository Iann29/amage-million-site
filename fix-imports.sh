#!/bin/bash

# about-cta-section.tsx
sed -i "s/import { ArrowRight, Users } from 'lucide-react'/import { ArrowRight } from 'lucide-react'/g" src/components/about-cta-section.tsx

# ebooks-section.tsx  
sed -i "/^import Link from 'next\/link';/d" src/components/ebooks-section.tsx
sed -i "/^import { GetStartedButton }/d" src/components/ebooks-section.tsx
sed -i "s/const router = useRouter();//" src/components/ebooks-section.tsx
sed -i "s/You're now/You\&apos;re now/g" src/components/ebooks-section.tsx

# hero.tsx
sed -i "/^import Link from 'next\/link';/d" src/components/hero.tsx

# instagram-grid.tsx
sed -i "s/import { Instagram, Camera } from 'lucide-react'/import { Instagram } from 'lucide-react'/g" src/components/instagram-grid.tsx

# modern-header.tsx
sed -i "s/import { Menu, X, ArrowRight } from 'lucide-react'/import { Menu, X } from 'lucide-react'/g" src/components/modern-header.tsx

# opportunities-section.tsx
sed -i "s/import { TrendingUp, Shield, BookOpen, Users, BarChart3, Building2, Wallet, ArrowRight }/import { Shield, BookOpen, Users, BarChart3, ArrowRight }/g" src/components/opportunities-section.tsx
sed -i "/^import { BlurredStagger }/d" src/components/opportunities-section.tsx
sed -i "/^import Link from 'next\/link';/d" src/components/opportunities-section.tsx

# portfolio-section.tsx
sed -i "s/import { TrendingUp, Shield, BarChart3, Award } from 'lucide-react'/import { Shield, BarChart3 } from 'lucide-react'/g" src/components/portfolio-section.tsx
sed -i "/^import Image from 'next\/image';/d" src/components/portfolio-section.tsx

# pricing-section.tsx
sed -i "s/import { Check, Star, TrendingUp, Shield, Users, MessageSquare, BarChart3, Zap, Clock, Award, BookOpen, Phone, MessageCircle }/import { Check, Shield, MessageSquare, Clock, MessageCircle }/g" src/components/pricing-section.tsx

# pricing-plans.tsx
sed -i "s/import { Check, Star } from 'lucide-react'/import {} from 'lucide-react'/g" src/components/pricing-plans.tsx

# popular-investments-section.tsx
sed -i 's/"quero o guia"/"quero o guia"/g' src/components/popular-investments-section.tsx
sed -i 's/<any>/<{ allocations: Array<{ asset: string; percentage: number; }> }>/g' src/components/popular-investments-section.tsx

# problems-visual-timeline.tsx
sed -i 's/"Zero"/\&quot;Zero\&quot;/g' src/components/problems-visual-timeline.tsx
sed -i 's/"salário mínimo"/\&quot;salário mínimo\&quot;/g' src/components/problems-visual-timeline.tsx

# quiz-banner.tsx
sed -i "s/import { TrendingUp, Brain, Target, Rocket } from 'lucide-react'/import { TrendingUp } from 'lucide-react'/g" src/components/quiz-banner.tsx

# testimonials.tsx
sed -i 's/"Achei que investir era coisa de rico"/\&quot;Achei que investir era coisa de rico\&quot;/g' src/components/testimonials.tsx

# transition-about-section.tsx
sed -i "/^import Link from 'next\/link';/d" src/components/transition-about-section.tsx

# ui/blurred-stagger-text.tsx
sed -i 's/const isInHighlightWord = /\/\/ const isInHighlightWord = /g' src/components/ui/blurred-stagger-text.tsx

# ui/circular-testimonials.tsx
sed -i 's/const offset = /\/\/ const offset = /g' src/components/ui/circular-testimonials.tsx

# ui/glare-card.tsx
sed -i 's/<any>/<React.CSSProperties>/g' src/components/ui/glare-card.tsx
sed -i 's/const backgroundStyle = /\/\/ const backgroundStyle = /g' src/components/ui/glare-card.tsx

# ui/stacking-card.tsx
sed -i "/^import { ReactLenis }/d" src/components/ui/stacking-card.tsx
sed -i 's/const imageScale = /\/\/ const imageScale = /g' src/components/ui/stacking-card.tsx
sed -i 's/, ref)/)/g' src/components/ui/stacking-card.tsx

# ui/testimonials-columns.tsx
sed -i 's/{ text, image, name, role }/{ text, name }/g' src/components/ui/testimonials-columns.tsx

# why-invest-section.tsx
sed -i "/AnimatedCounter/d" src/components/why-invest-section.tsx

echo "Fixed all imports and lint errors"
