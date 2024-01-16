import { icons } from 'lucide-react';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
}

export default function Icon({ name, color, size }: IconProps) {
  const IconComponent = icons[name as keyof typeof icons];

  return (
    <IconComponent
      className={`h-${size} w-${size} text-${color}`}
      size={size}
      color={color}
    />
  );
}