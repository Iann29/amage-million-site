#!/bin/bash

# Fix about-cta-section.tsx
sed -i "s/import { ArrowRight } from 'lucide-react'/import {} from 'lucide-react'/g" src/components/about-cta-section.tsx

# Fix ebooks-section.tsx
sed -i "/import { useRouter } from 'next\/navigation';/d" src/components/ebooks-section.tsx
sed -i "s/You&apos;re/You\&apos;re/g" src/components/ebooks-section.tsx

# Fix instagram-grid.tsx
sed -i "s/import { Instagram } from 'lucide-react'/import {} from 'lucide-react'/g" src/components/instagram-grid.tsx

# Fix modern-header.tsx
sed -i "s/import { Menu, X } from 'lucide-react'/import { Menu } from 'lucide-react'/g" src/components/modern-header.tsx

# Fix popular-investments-section.tsx
sed -i 's/"quero o guia"/\&quot;quero o guia\&quot;/g' src/components/popular-investments-section.tsx

# Fix portfolio-section.tsx
sed -i "s/import { TrendingUp, Calendar, Shield, Award, ChartBar, Target } from 'lucide-react'/import { Calendar, ChartBar, Target } from 'lucide-react'/g" src/components/portfolio-section.tsx

# Fix pricing-section.tsx
sed -i "s/import { Check, Shield, MessageSquare, Clock, MessageCircle } from 'lucide-react'/import { Check, Shield, MessageSquare, Clock } from 'lucide-react'/g" src/components/pricing-section.tsx
sed -i "/import { GetStartedButton } from '@\/components\/ui\/get-started-button';/d" src/components/pricing-section.tsx
sed -i "s/const \[isHovered, setIsHovered\] = useState(false);/const \[, setIsHovered\] = useState(false);/g" src/components/pricing-section.tsx

# Fix problems-timeline-new.tsx
sed -i "s/import { useState, useEffect } from 'react'/import { useState } from 'react'/g" src/components/problems-timeline-new.tsx
sed -i "s/{problem.features.map((feature, index) => (/{problem.features.map((feature) => (/g" src/components/problems-timeline-new.tsx

# Fix problems-visual-timeline.tsx
sed -i 's/"Zero"/\&quot;Zero\&quot;/g' src/components/problems-visual-timeline.tsx
sed -i 's/"salário mínimo"/\&quot;salário mínimo\&quot;/g' src/components/problems-visual-timeline.tsx

# Fix problems-list.tsx
sed -i "s/import { TrendingDown, Users, AlertCircle, Coins, Building2 } from 'lucide-react'/import { Coins, Building2 } from 'lucide-react'/g" src/components/problems-list.tsx
sed -i "s/import { Brain, Target, Rocket } from 'lucide-react'/import {} from 'lucide-react'/g" src/components/quiz-banner.tsx
sed -i "s/const Icon = item.icon;//g" src/components/problems-list.tsx

# Fix testimonials.tsx
sed -i 's/"Achei que investir era coisa de rico"/\&quot;Achei que investir era coisa de rico\&quot;/g' src/components/testimonials.tsx

# Fix ui/circular-testimonials.tsx
sed -i "s/const offset = calculateOffset(index, mappedItems.length);/\/\/ const offset = calculateOffset(index, mappedItems.length);/g" src/components/ui/circular-testimonials.tsx

# Fix ui/glare-card.tsx
sed -i "s/} as any;/} as React.CSSProperties;/g" src/components/ui/glare-card.tsx

# Fix ui/stacking-card.tsx
sed -i "s/const imageScale = motionValue.get();/\/\/ const imageScale = motionValue.get();/g" src/components/ui/stacking-card.tsx
sed -i "s/export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => {/export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }) => {/g" src/components/ui/stacking-card.tsx

# Fix use-modal-scroll.ts
sed -i "s/return () => lenis?.destroy();/const currentLenis = lenisRef.current; return () => currentLenis?.destroy();/g" src/hooks/use-modal-scroll.ts

echo "Fixed all lint errors"
