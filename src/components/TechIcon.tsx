import type { StackItem } from '@/lib/data';

interface TechIconProps {
  item: StackItem;
  size?: number;
}

export default function TechIcon({ item, size = 48 }: TechIconProps) {
  const src =
    item.src ??
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}.svg`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={item.name}
      width={size}
      height={size}
      loading="lazy"
      style={{ width: size, height: size }}
    />
  );
}